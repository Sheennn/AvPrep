export interface Subject {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  icon: string;
  color: string;
  categories: string[];
}

export interface StudyMode {
  id: 'study' | 'exam';
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TestSession {
  subjectId: string;
  mode: 'study' | 'exam';
  questions: number[];
  currentQuestionIndex: number;
  answers: Record<number, number>;
  startTime: Date;
  endTime?: Date;
  isCompleted: boolean;
} 