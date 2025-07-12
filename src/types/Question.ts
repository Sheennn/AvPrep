export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags?: string[];
  imageUrl?: string;
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