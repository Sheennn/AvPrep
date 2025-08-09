import { Question } from '@/types/Question';
import { parseSubjectFromText } from '@/utils/dataParser';

// Map subject IDs to dataset folder identifiers inside `questionDATA`
const SUBJECT_DATASET_MAP: Record<string, { folderMatch: string } | undefined> = {
  // Flight Planning & Monitoring dataset present in repo
  'flight-planning': { folderMatch: 'Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions' },
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

export async function loadSubjectQuestions(subjectId: string): Promise<Question[]> {
  const mapping = SUBJECT_DATASET_MAP[subjectId];
  if (!mapping) {
    // Fallback: no dataset mapped
    return [];
  }

  const folder = mapping.folderMatch;
  const textEntry = Object.entries(TEXT_FILES).find(([p]) => p.includes(folder));
  if (!textEntry) return [];
  const rawText = textEntry[1];

  const commentEntry = Object.entries(COMMENT_FILES).find(([p]) => p.includes(folder));
  const rawComments = commentEntry ? commentEntry[1] : null;

  const imageResolver = makeImageResolver(folder);
  const questions = parseSubjectFromText(rawText, rawComments, { imageResolver });
  return questions;
}

