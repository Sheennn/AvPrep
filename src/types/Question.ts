export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags?: string[];
  // Optional code from the source dataset (e.g., AT00001)
  code?: string;
  // One or more images shown with the question prompt
  imageUrls?: string[];
  // One or more images shown within the explanation tab
  explanationImageUrls?: string[];
  // Raw comments text aggregated for display in the comments tab
  commentsText?: string;
  source?: string;
}

export interface QuestionAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
  timestamp: Date;
}

export type FlagType = 'mark' | 'review' | 'hide' | 'green' | 'yellow' | 'red' | null;

export interface QuestionFlag {
  questionId: number;
  flagType: FlagType;
  timestamp: Date;
} 