import { Question } from '@/types/Question';

// Local dataset loader for questionDATA
export interface LoadedSubjectData {
  subjectId: string;
  subjectName: string;
  questions: Question[];
}

interface ParseContext {
  // Resolve a dataset-relative path like "images/AT00001_img_1.png" to a browser-usable URL
  imageResolver: (relativePath: string) => string | undefined;
}

const normalizeAnswerLetter = (line: string): string => {
  // Input lines look like: "A. A" or "D. B" or similar prefix mapping; we just strip leading letter mapping
  return line.replace(/^([A-D])\.\s*[A-D]\s*/i, '').trim();
};

export const parseSubjectFromText = (raw: string, commentsRaw: string | null, ctx: ParseContext): Question[] => {
  const entries = raw.split(/^-{5,}\s*$/m).map(s => s.trim()).filter(Boolean);
  const questions: Question[] = [];

  // Build a map of code -> comments chunk from comments.txt
  const commentsByCode = new Map<string, string>();
  if (commentsRaw) {
    // Iterate lines to build per-question comments
    const lines = commentsRaw.split(/\r?\n/);
    let currentCode: string | null = null;
    let buffer: string[] = [];
    const flush = () => {
      if (currentCode) {
        commentsByCode.set(currentCode, buffer.join('\n').trim());
      }
      buffer = [];
    };
    for (const line of lines) {
      const codeMatch = line.match(/^Question Number:\s*(AT\d{5})/);
      if (codeMatch) {
        flush();
        currentCode = codeMatch[1];
        continue;
      }
      if (currentCode) buffer.push(line);
    }
    flush();
  }

  for (const block of entries) {
    const lines = block.split(/\r?\n/).map(l => l.trim());
    if (lines.length === 0) continue;

    const codeMatch = block.match(/Question Number:\s*(AT\d{5})/);
    const code = codeMatch ? codeMatch[1] : undefined;

    // Text is the first non-empty run after the Subject line or after "Refer to figure." line
    // We'll scan to find Options: and collect text in between headers
    const optionsStart = lines.findIndex(l => /^Options:/i.test(l));
    if (optionsStart === -1) continue;

    // Extract question prompt area
    const headerEnd = lines.findIndex((l, idx) => idx > 0 && /^Explanation:/i.test(l));
    const promptEndIdx = headerEnd !== -1 ? headerEnd : optionsStart;

    // Gather prompt text (exclude admin lines like Question Number, Subject, Images labels)
    const promptLines: string[] = [];
    const imageUrls: string[] = [];
    const explImageUrls: string[] = [];
    for (let i = 0; i < promptEndIdx; i++) {
      const line = lines[i];
      if (/^Question Number:/i.test(line)) continue;
      if (/^Subject:/i.test(line)) continue;
      if (/^Images:/i.test(line)) {
        // following one or more lines like "- images/AT00001_img_1.png"
        for (let j = i + 1; j < promptEndIdx; j++) {
          const imgLine = lines[j];
          if (!imgLine.startsWith('- ')) break;
          const rel = imgLine.replace(/^-[\s]*/, '');
          const url = ctx.imageResolver(rel) || ctx.imageResolver(rel.replace(/^images\//, 'images/')) || ctx.imageResolver(rel.replace(/^\.\/?/, ''));
          if (url) imageUrls.push(url);
        }
        continue;
      }
      if (line.length) promptLines.push(line);
    }

    // Explanation block
    let explanation = '';
    const explanationStart = lines.findIndex(l => /^Explanation:/i.test(l));
    if (explanationStart !== -1) {
      for (let i = explanationStart + 1; i < lines.length; i++) {
        const line = lines[i];
        if (/^Options:/i.test(line)) break;
        if (/^Explanation Images:/i.test(line)) {
          // Collect explanation images
          for (let j = i + 1; j < lines.length; j++) {
            const imgLine = lines[j];
            if (!imgLine.startsWith('- ')) break;
            const rel = imgLine.replace(/^-[\s]*/, '');
            const url = ctx.imageResolver(rel) || ctx.imageResolver(rel.replace(/^images\//, 'images/')) || ctx.imageResolver(rel.replace(/^\.\/?/, ''));
            if (url) explImageUrls.push(url);
          }
          continue;
        }
        // Stop before the next section
        if (/^Correct Answer:/i.test(line)) break;
        if (/^\-+\s*$/i.test(line)) break;
        explanation += (explanation ? '\n' : '') + line;
      }
    }

    // Options parse
    const options: string[] = [];
    let correctAnswerIndex = -1;
    const optionAreaStart = lines.findIndex(l => /^Options:/i.test(l));
    let i = optionAreaStart + 1;
    for (; i < lines.length; i++) {
      const line = lines[i];
      if (/^Correct Answer:/i.test(line)) break;
      if (!line) continue;
      if (/^[A-D]\.\s*/i.test(line)) {
        const normalized = normalizeAnswerLetter(line);
        // lines can be split across two lines in dataset (letter line followed by text line)
        let text = normalized;
        if (i + 1 < lines.length && !/^[A-D]\.\s*/i.test(lines[i + 1]) && !/^Correct Answer:/i.test(lines[i + 1])) {
          // Next line is continuation
          text = `${text} ${lines[i + 1]}`.trim();
          i += 1;
        }
        options.push(text);
      }
    }
    // Find correct answer
    for (let k = optionAreaStart + 1; k < lines.length; k++) {
      const l = lines[k];
      const m = l.match(/^([A-D])\.[^\n]*\(CORRECT\)/i);
      if (m) {
        const letter = m[1].toUpperCase();
        correctAnswerIndex = 'ABCD'.indexOf(letter);
        break;
      }
    }
    // Fallback: parse "Correct Answer: D." line
    if (correctAnswerIndex === -1) {
      const ca = block.match(/Correct Answer:\s*([A-D])\./i);
      if (ca) correctAnswerIndex = 'ABCD'.indexOf(ca[1].toUpperCase());
    }

    if (options.length === 0 || correctAnswerIndex < 0) continue;

    // Build question object
    const text = promptLines.join('\n').trim();
    const commentsText = code ? commentsByCode.get(code) : undefined;
    const q: Question = {
      id: questions.length + 1,
      code,
      text,
      options,
      correctAnswer: correctAnswerIndex,
      explanation: explanation || undefined,
      category: 'ATPL(A) Flight Planning & Monitoring',
      difficulty: 'medium',
      tags: ['ATPL', 'EASA', '033'],
      imageUrls: imageUrls.length ? imageUrls : undefined,
      explanationImageUrls: explImageUrls.length ? explImageUrls : undefined,
      commentsText,
      source: 'questionDATA',
    };
    questions.push(q);
  }

  return questions;
};

export const parseQuestionsFromText = (text: string): Question[] => {
  const questions: Question[] = [];
  const questionBlocks = text.split('Question ').filter(block => block.trim());
  
  questionBlocks.forEach((block) => {
    const lines = block.split('\n').filter(line => line.trim());
    if (lines.length < 3) return;
    
    // Extract question number and text
    const firstLine = lines[0];
    const questionNumber = parseInt(firstLine.split(':')[0]);
    const questionText = firstLine.split(':')[1]?.trim() || '';
    
    // Extract options
    const options: string[] = [];
    let correctAnswer = -1;
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('Options:')) continue;
      if (line.startsWith('Correct Answer:')) break;
      if (line.startsWith('---')) break;
      
      if (line.match(/^\d+\./)) {
        const optionText = line.replace(/^\d+\.\s*/, '').trim();
        if (optionText) {
          options.push(optionText);
          
          // Check if this is the correct answer
          if (line.includes('✓ (CORRECT)')) {
            correctAnswer = options.length - 1;
          }
        }
      }
    }
    
    if (questionText && options.length > 0 && correctAnswer >= 0) {
      questions.push({
        id: questionNumber,
        text: questionText,
        options,
        correctAnswer,
        category: 'ATPL(A) Air Law',
        difficulty: 'medium',
        explanation: '',
        tags: ['ATPL', 'Air Law', 'EASA'],
        source: 'ATPL Questions Database'
      });
    }
  });
  
  return questions;
};

export const getSampleQuestions = (): Question[] => {
  // Sample questions for testing
  return [
    {
      id: 1,
      text: "What is the correct definition of 'PCN'?",
      options: [
        "It is a letter expressing the bearing strength of a pavement for restricted operations.",
        "It is a number expressing the bearing strength of a pavement for unrestricted operations.",
        "It is a number expressing the relative effect of an aircraft on a pavement for a specified standard subgrade category.",
        "It is used to assess pavement condition."
      ],
      correctAnswer: 2,
      category: "ATPL(A) Air Law",
      difficulty: "medium",
      explanation: "PCN (Pavement Classification Number) is a number expressing the relative effect of an aircraft on a pavement for a specified standard subgrade category.",
      tags: ["ATPL", "Air Law", "EASA"],
      source: "ATPL Questions Database"
    },
    {
      id: 2,
      text: "Approach Procedures – Missed Approach – A complete missed approach procedure consists of the following phases:",
      options: [
        "arrival, intermediate, final.",
        "initial, acceleration, final.",
        "initial, intermediate, final.",
        "climb, intermediate, final."
      ],
      correctAnswer: 2,
      category: "ATPL(A) Air Law",
      difficulty: "medium",
      explanation: "A complete missed approach procedure consists of initial, intermediate, and final phases.",
      tags: ["ATPL", "Air Law", "EASA"],
      source: "ATPL Questions Database"
    },
    {
      id: 3,
      text: "An AIRAC is a…",
      options: [
        "Document intended as a notice to airmen.",
        "Document that is released at certain notification intervals.",
        "Document detailing airport services.",
        "Document detailing information not adequate for a NOTAM."
      ],
      correctAnswer: 1,
      category: "ATPL(A) Air Law",
      difficulty: "medium",
      explanation: "AIRAC (Aeronautical Information Regulation And Control) is a document that is released at certain notification intervals.",
      tags: ["ATPL", "Air Law", "EASA"],
      source: "ATPL Questions Database"
    }
  ];
}; 