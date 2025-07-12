import { Question, QuestionAnswer, QuestionFlag } from './Question';

export interface Test {
  id: string;
  name: string;
  description?: string;
  category: string;
  questions: Question[];
  currentQuestion: number;
  answers: Record<number, number>;
  flags: Record<number, QuestionFlag>;
  startTime: Date;
  endTime?: Date;
  isCompleted: boolean;
  totalQuestions: number;
  correctAnswers: number;
  timeLimit?: number; // in minutes
  allowReview: boolean;
  shuffleQuestions: boolean;
}

export interface TestSession {
  testId: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  answers: QuestionAnswer[];
  flags: QuestionFlag[];
  currentQuestion: number;
  isPaused: boolean;
  timeRemaining: number;
}

export interface TestResult {
  testId: string;
  userId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  completedAt: Date;
  answers: QuestionAnswer[];
  flags: QuestionFlag[];
} 