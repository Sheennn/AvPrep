import { useEffect } from 'react';
import { useTestStore } from '@/stores/testStore';

export const useKeyboard = () => {
  const {
    currentTest,
    currentQuestionIndex,
    nextQuestion,
    previousQuestion,
    answerQuestion
  } = useTestStore();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!currentTest) return;

      const currentQuestion = currentTest.questions[currentQuestionIndex];
      if (!currentQuestion) return;

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          nextQuestion();
          break;
        
        case 'ArrowLeft':
          event.preventDefault();
          previousQuestion();
          break;
        
        case '1':
        case 'a':
        case 'A':
          event.preventDefault();
          answerQuestion(currentQuestion.id, 0);
          break;
        
        case '2':
        case 'b':
        case 'B':
          event.preventDefault();
          answerQuestion(currentQuestion.id, 1);
          break;
        
        case '3':
        case 'c':
        case 'C':
          event.preventDefault();
          answerQuestion(currentQuestion.id, 2);
          break;
        
        case '4':
        case 'd':
        case 'D':
          event.preventDefault();
          answerQuestion(currentQuestion.id, 3);
          break;
        
        case 'p':
        case 'P':
          event.preventDefault();
          // Toggle pause/resume
          break;
        
        case 'Escape':
          event.preventDefault();
          // Exit fullscreen or close modal
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentTest, currentQuestionIndex, nextQuestion, previousQuestion, answerQuestion]);
}; 