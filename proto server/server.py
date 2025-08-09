import os
import re
from pathlib import Path
from typing import List, Dict, Any
from flask import Flask, jsonify, send_from_directory, request, abort

BASE_DIR = Path(__file__).resolve().parent
FRONTEND_DIR = BASE_DIR / "frontend"

app = Flask(__name__, static_folder=str(FRONTEND_DIR), static_url_path="/static")

# ---------- Helpers ----------

def find_subjects() -> List[str]:
    subjects = []
    for path in BASE_DIR.iterdir():
        if not path.is_dir():
            continue
        # Subject folders contain one or more run folders ending with _questions
        has_run = any((path / p.name).is_dir() and p.name.endswith("_questions") for p in path.iterdir() if p.is_dir())
        if has_run:
            subjects.append(path.name)
    return sorted(subjects)


def find_runs(subject: str) -> List[str]:
    subject_path = BASE_DIR / subject
    if not subject_path.exists() or not subject_path.is_dir():
        return []
    runs = [p.name for p in subject_path.iterdir() if p.is_dir() and p.name.endswith("_questions")]
    return sorted(runs)


def locate_questions_file(run_path: Path) -> Path | None:
    candidates = list(run_path.glob("*_scraped_questions.txt"))
    if not candidates:
        candidates = list(run_path.glob("*_scrapedquestions.txt"))
    if not candidates:
        return None
    return max(candidates, key=lambda p: p.stat().st_size)


def parse_questions(run_path: Path) -> List[Dict[str, Any]]:
    questions_file = locate_questions_file(run_path)
    if not questions_file or not questions_file.exists():
        return []

    with questions_file.open("r", encoding="utf-8") as f:
        content = f.read()

    parts = re.split(r"\n-+\n\n|\n-+\n", content)
    questions: List[Dict[str, Any]] = []

    def clean(text: str) -> str:
        return text.replace("\r", "").strip()

    def header(line: str, name: str) -> bool:
        return re.match(rf"^\s*{re.escape(name)}\s*:?.*$", line, re.IGNORECASE) is not None

    for part in parts:
        block = clean(part)
        if not block:
            continue
        lines = block.splitlines()
        q: Dict[str, Any] = {
            "id": None,
            "subject": None,
            "text": "",
            "images": [],
            "explanationText": "",
            "explanationImages": [],
            "options": [],
            "correctIndex": None,
        }
        i = 0
        while i < len(lines):
            line = lines[i]
            if header(line, "Question Number"):
                q["id"] = clean(line.split(":", 1)[1]) if ":" in line else clean(line)
            elif header(line, "Subject"):
                q["subject"] = clean(line.split(":", 1)[1]) if ":" in line else clean(line)
            else:
                break
            i += 1
        question_text_lines = []
        while i < len(lines) and lines[i].strip() and not (header(lines[i], "Images") or header(lines[i], "Options") or header(lines[i], "Explanation") or header(lines[i], "Explanation Images")):
            question_text_lines.append(lines[i])
            i += 1
        q["text"] = clean("\n".join(question_text_lines))
        if i < len(lines) and not lines[i].strip():
            i += 1
        while i < len(lines):
            line = lines[i]
            if header(line, "Images"):
                i += 1
                while i < len(lines) and lines[i].lstrip().startswith("-"):
                    rel = lines[i].lstrip("- ").strip()
                    q["images"].append(rel)
                    i += 1
                continue
            if header(line, "Explanation"):
                i += 1
                expl_lines = []
                while i < len(lines) and not (header(lines[i], "Explanation Images") or header(lines[i], "Options") or header(lines[i], "Images")):
                    expl_lines.append(lines[i])
                    i += 1
                q["explanationText"] = clean("\n".join(expl_lines))
                continue
            if header(line, "Explanation Images"):
                i += 1
                while i < len(lines) and lines[i].lstrip().startswith("-"):
                    rel = lines[i].lstrip("- ").strip()
                    q["explanationImages"].append(rel)
                    i += 1
                continue
            if header(line, "Options"):
                i += 1
                opts = []
                while i < len(lines) and lines[i].strip() and not header(lines[i], "Correct Answer"):
                    text = lines[i].strip()
                    opts.append(text)
                    i += 1
                q["options"] = opts[:4]
                if i < len(lines) and header(lines[i], "Correct Answer"):
                    ca = lines[i].split(":", 1)[1].strip() if ":" in lines[i] else ""
                    label_map = {"A": 0, "B": 1, "C": 2, "D": 3}
                    m_lab = re.search(r"([A-D])", ca, re.IGNORECASE)
                    q["correctIndex"] = label_map.get(m_lab.group(1).upper()) if m_lab else None
                    i += 1
                continue
            i += 1
        if q["id"]:
            questions.append(q)
    return questions


def parse_comments(run_path: Path) -> Dict[str, List[Dict[str, str]]]:
    comments_file = run_path / "comments.txt"
    by_q: Dict[str, List[Dict[str, str]]] = {}
    if not comments_file.exists():
        return by_q
    cur_q = None
    with comments_file.open("r", encoding="utf-8") as f:
        for raw in f:
            line = raw.rstrip("\n")
            if line.startswith("Question Number:"):
                cur_q = line.split(":", 1)[1].strip()
                by_q.setdefault(cur_q, [])
            elif line.lstrip().startswith("- Name:") and cur_q:
                name = line.split(":", 1)[1].strip()
                # Next line should be comment
                comment_line = f.readline()
                if comment_line and "Comment:" in comment_line:
                    text = comment_line.split(":", 1)[1].strip()
                else:
                    text = ""
                by_q[cur_q].append({"name": name, "text": text})
    return by_q


# ---------- Routes ----------

@app.route("/")
def index():
    index_path = FRONTEND_DIR / "index.html"
    if not index_path.exists():
        return "Frontend not built.", 500
    return app.send_static_file("index.html")


@app.route("/api/subjects")
def api_subjects():
    return jsonify(find_subjects())


@app.route("/api/runs")
def api_runs():
    subject = request.args.get("subject", "")
    return jsonify(find_runs(subject))


@app.route("/api/questions")
def api_questions():
    subject = request.args.get("subject", "")
    run = request.args.get("run", "")
    run_path = BASE_DIR / subject / run
    if not run_path.exists():
        abort(404)
    questions = parse_questions(run_path)
    # Rewrite image paths to API URL
    for q in questions:
        q["images"] = [f"/images/{subject}/{run}/{Path(p).name}" for p in q.get("images", [])]
        q["explanationImages"] = [f"/images/{subject}/{run}/{Path(p).name}" for p in q.get("explanationImages", [])]
    return jsonify(questions)


@app.route("/api/comments")
def api_comments():
    subject = request.args.get("subject", "")
    run = request.args.get("run", "")
    run_path = BASE_DIR / subject / run
    if not run_path.exists():
        abort(404)
    return jsonify(parse_comments(run_path))


@app.route("/images/<path:subject>/<path:run>/<path:filename>")
def serve_image(subject: str, run: str, filename: str):
    img_dir = BASE_DIR / subject / run / "images"
    if not img_dir.exists():
        abort(404)
    return send_from_directory(img_dir, filename)


@app.route("/static/<path:filename>")
def serve_static(filename: str):
    return send_from_directory(FRONTEND_DIR, filename)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)