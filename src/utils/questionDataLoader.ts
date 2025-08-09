import { Question } from '@/types/Question';
import { parseSubjectFromText } from '@/utils/dataParser';

// Map subject IDs to dataset folder identifiers inside `questionDATA`
const SUBJECT_DATASET_MAP: Record<string, { folderMatch: string; dbMap?: Record<string, string> } | undefined> = {
  // Flight Planning & Monitoring dataset present in repo
  'flight-planning': {
    folderMatch: 'Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions',
    dbMap: {
      'ireland-530': 'Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions',
    },
  },
};

// Eagerly import datasets with Vite to get URLs and raw contents bundled
// Vite-specific glob imports; the type is provided by vite/client
const TEXT_FILES = import.meta.glob('/questionDATA/**/530_scraped_questions.txt', { eager: true, as: 'raw' }) as Record<string, string>;
const COMMENT_FILES = import.meta.glob('/questionDATA/**/comments.txt', { eager: true, as: 'raw' }) as Record<string, string>;
const IMAGE_FILES = import.meta.glob('/questionDATA/**/images/*', { eager: true, as: 'url' }) as Record<string, string>;

const makeImageResolver = (datasetFolder: string) => (relativePath: string): string | undefined => {
  // relativePath looks like: 'images/AT00001_img_1.png' or '- images/...' already stripped
  const normalized = relativePath.replace(/^\.\/?/, '').replace(/^\//, '');
  // Find an image whose path ends with datasetFolder + '/' + normalized (with images/ prefix inside)
  for (const [path, url] of Object.entries(IMAGE_FILES)) {
    if (path.includes(datasetFolder) && (path.endsWith(normalized) || path.endsWith(normalized.replace(/^images\//, '')))) {
      return url;
    }
  }
  return undefined;
};

function resolveFolder(subjectId: string, subjectName?: string, dbId?: string): string | undefined {
  const mapping = SUBJECT_DATASET_MAP[subjectId];
  if (mapping?.dbMap && dbId && mapping.dbMap[dbId]) return mapping.dbMap[dbId];
  if (mapping?.folderMatch) return mapping.folderMatch;
  // Heuristic fallback
  const needle = (subjectName || subjectId).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const candidate = Object.keys(TEXT_FILES).find((p) => {
    const lp = p.toLowerCase();
    return needle.split(' ').filter(Boolean).every(tok => lp.includes(tok));
  });
  if (candidate) {
    const m = candidate.match(/questiondata\/(.+)\/(?:[^/]+)$/i);
    return m ? m[1] : undefined;
  }
  return undefined;
}

export async function loadSubjectQuestions(subjectId: string, subjectName?: string, dbId?: string): Promise<Question[]> {
  const folder = resolveFolder(subjectId, subjectName, dbId);
  if (!folder) return [];

  const textEntry = Object.entries(TEXT_FILES).find(([p]) => p.includes(folder!));
  if (!textEntry) return [];
  const rawText = textEntry[1];

  const commentEntry = Object.entries(COMMENT_FILES).find(([p]) => p.includes(folder!));
  const rawComments = commentEntry ? commentEntry[1] : null;

  const imageResolver = makeImageResolver(folder!);
  const questions = parseSubjectFromText(rawText, rawComments, { imageResolver });
  return questions;
}

export function getSubjectQuestionCount(subjectId: string, subjectName?: string, dbId?: string): number {
  const folder = resolveFolder(subjectId, subjectName, dbId);
  if (!folder) return 0;
  const textEntry = Object.entries(TEXT_FILES).find(([p]) => p.includes(folder));
  if (!textEntry) return 0;
  const rawText = textEntry[1];
  const count = (rawText.match(/^Question Number:/gm) || []).length;
  return count || 0;
}

