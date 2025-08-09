import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Test, TestSession } from '@/types/Test';
import { QuestionFlag, FlagType } from '@/types/Question';

interface TestState {
  // Current test session
  currentTest: Test | null;
  currentSession: TestSession | null;
  
  // Test progress
  currentQuestionIndex: number;
  answers: Record<number, number>;
  flags: Record<number, QuestionFlag>;
  
  // Test settings
  timeRemaining: number;
  isPaused: boolean;
  isCompleted: boolean;
  
  // Actions
  startTest: (test: Test) => void;
  endTest: () => void;
  saveTest: () => void;
  calculateScore: () => { correct: number; total: number; percent: number } | null;
  pauseTest: () => void;
  resumeTest: () => void;
  
  // Navigation
  goToQuestion: (index: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  
  // Answers and flags
  answerQuestion: (questionId: number, answerIndex: number) => void;
  flagQuestion: (questionId: number, flagType: FlagType) => void;
  clearFlag: (questionId: number) => void;
  
  // Timer
  updateTimer: (timeRemaining: number) => void;
  
  // Reset
  resetTest: () => void;
}

export const useTestStore = create<TestState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentTest: null,
      currentSession: null,
      currentQuestionIndex: 0,
      answers: {},
      flags: {},
      timeRemaining: 0,
      isPaused: false,
      isCompleted: false,
      
      // Actions
      startTest: (test: Test) => {
        const session: TestSession = {
          testId: test.id,
          userId: 'current-user', // TODO: Get from auth
          startTime: new Date(),
          answers: [],
          flags: [],
          currentQuestion: 0,
          isPaused: false,
          timeRemaining: test.timeLimit ? test.timeLimit * 60 : 0,
        };
        
        set({
          currentTest: test,
          currentSession: session,
          currentQuestionIndex: 0,
          answers: {},
          flags: {},
          timeRemaining: session.timeRemaining,
          isPaused: false,
          isCompleted: false,
        });
      },
      
      endTest: () => {
        const { currentTest } = get();
        if (!currentTest) return;
        
        set({
          isCompleted: true,
          currentSession: {
            ...get().currentSession!,
            endTime: new Date(),
          },
        });
      },

      saveTest: () => {
        // Persist current state via zustand persist (already active)
        // This method exists to be called from UI and is a no-op because persist plugin auto-saves.
        const state = get();
        // Touch to ensure storage writes happen
        set({ currentSession: { ...state.currentSession! } });
      },

      calculateScore: () => {
        const { currentTest, answers } = get();
        if (!currentTest) return null;
        let correct = 0;
        for (const q of currentTest.questions) {
          const a = answers[q.id];
          if (a !== undefined && a === q.correctAnswer) correct += 1;
        }
        const total = currentTest.questions.length;
        const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
        return { correct, total, percent };
      },
      
      pauseTest: () => set({ isPaused: true }),
      resumeTest: () => set({ isPaused: false }),
      
      goToQuestion: (index: number) => {
        const { currentTest } = get();
        if (!currentTest || index < 0 || index >= currentTest.questions.length) return;
        set({ currentQuestionIndex: index });
      },
      
      nextQuestion: () => {
        const { currentTest, currentQuestionIndex } = get();
        if (!currentTest || currentQuestionIndex >= currentTest.questions.length - 1) return;
        set({ currentQuestionIndex: currentQuestionIndex + 1 });
      },
      
      previousQuestion: () => {
        const { currentQuestionIndex } = get();
        if (currentQuestionIndex <= 0) return;
        set({ currentQuestionIndex: currentQuestionIndex - 1 });
      },
      
      answerQuestion: (questionId: number, answerIndex: number) => {
        const { answers } = get();
        set({
          answers: {
            ...answers,
            [questionId]: answerIndex,
          },
        });
      },
      
      flagQuestion: (questionId: number, flagType: FlagType) => {
        const { flags } = get();
        const newFlag: QuestionFlag = {
          questionId,
          flagType,
          timestamp: new Date(),
        };
        
        set({
          flags: {
            ...flags,
            [questionId]: newFlag,
          },
        });
      },
      
      clearFlag: (questionId: number) => {
        const { flags } = get();
        const newFlags = { ...flags };
        delete newFlags[questionId];
        set({ flags: newFlags });
      },
      
      updateTimer: (timeRemaining: number) => {
        set({ timeRemaining });
        if (timeRemaining <= 0) {
          get().endTest();
        }
      },
      
      resetTest: () => {
        set({
          currentTest: null,
          currentSession: null,
          currentQuestionIndex: 0,
          answers: {},
          flags: {},
          timeRemaining: 0,
          isPaused: false,
          isCompleted: false,
        });
      },
    }),
    {
      name: 'test-storage',
      partialize: (state) => ({
        currentTest: state.currentTest,
        currentSession: state.currentSession,
        currentQuestionIndex: state.currentQuestionIndex,
        answers: state.answers,
        flags: state.flags,
        timeRemaining: state.timeRemaining,
        isPaused: state.isPaused,
        isCompleted: state.isCompleted,
      }),
    }
  )
); 