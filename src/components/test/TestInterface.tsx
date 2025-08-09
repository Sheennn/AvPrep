import { useEffect, useState } from 'react';
import { 
  ArrowUpIcon, 
  ArrowDownIcon,
  ComputerDesktopIcon,
  BookmarkIcon,
  CommandLineIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import TestHeader from './TestHeader';
import QuestionView from './QuestionView';
import QuestionGrid from './QuestionGrid';
import Timer from './Timer';
import { useTestStore } from '@/stores/testStore';
import { useSubjectStore } from '@/stores/subjectStore';
import { loadSubjectQuestions } from '@/utils/questionDataLoader';
import { Test } from '@/types/Test';

import { FlagType } from '@/types/Question';
import { useKeyboard } from '@/hooks/useKeyboard';

const TestInterface = () => {
  const {
    currentTest,
    currentQuestionIndex,
    answers,
    flags,
    timeRemaining,
    isPaused,
    startTest,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    answerQuestion,
    flagQuestion,
    pauseTest,
    resumeTest,
    endTest
  } = useTestStore();

  const { selectedMode, selectedSubject } = useSubjectStore();
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  // Enable keyboard shortcuts
  useKeyboard();

  // Initialize test if not already started
  useEffect(() => {
    if (!currentTest && selectedSubject && selectedMode) {
      (async () => {
        const questions = await loadSubjectQuestions(selectedSubject.id);
        const test: Test = {
          id: `${selectedSubject.id}-${selectedMode.id}-${Date.now()}`,
          name: `${selectedSubject.name} — ${selectedMode.name}`,
          category: selectedSubject.name,
          questions,
          currentQuestion: 1,
          answers: {},
          flags: {},
          startTime: new Date(),
          isCompleted: false,
          totalQuestions: questions.length,
          correctAnswers: 0,
          timeLimit: selectedMode.id === 'exam' ? 60 : 0, // No time limit for study mode
          allowReview: true,
          shuffleQuestions: false
        };
        startTest(test);
      })();
    }
  }, [currentTest, startTest, selectedMode, selectedSubject]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (currentTest) {
      const currentQuestion = currentTest.questions[currentQuestionIndex];
      answerQuestion(currentQuestion.id, answerIndex);
      
      // Show immediate feedback in study mode
      if (selectedMode?.id === 'study') {
        const isAnswerCorrect = answerIndex === currentQuestion.correctAnswer;
        setIsCorrect(isAnswerCorrect);
        setFeedbackMessage(isAnswerCorrect ? 'Correct!' : 'Incorrect. Try again.');
        setShowFeedback(true);
        
        // Auto-hide feedback after 3 seconds
        setTimeout(() => {
          setShowFeedback(false);
        }, 3000);
      }
    }
  };

  const handleFlagQuestion = (flagType: FlagType) => {
    if (currentTest) {
      const currentQuestion = currentTest.questions[currentQuestionIndex];
      flagQuestion(currentQuestion.id, flagType);
    }
  };

  const handleQuestionSelect = (questionNumber: number) => {
    goToQuestion(questionNumber - 1);
    setShowFeedback(false); // Hide feedback when changing questions
  };

  const handleTimeUp = () => {
    endTest();
    setShowCorrectAnswers(true);
  };

  const handlePauseToggle = () => {
    if (isPaused) {
      resumeTest();
    } else {
      pauseTest();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (!currentTest) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading test...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = currentTest.questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestion?.id];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Test Header */}
      <TestHeader
        testName={currentTest.name}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={currentTest.questions.length}
        questionNumber={(currentQuestion as any)?.code || currentQuestion?.id.toString() || ''}
        timeRemaining={selectedMode?.id === 'exam' ? timeRemaining : 0}
        onFlagQuestion={handleFlagQuestion}
        onPrevious={previousQuestion}
        onNext={nextQuestion}
      />

      {/* Feedback Banner for Study Mode */}
      {showFeedback && selectedMode?.id === 'study' && (
        <div className={`fixed top-16 left-0 right-0 z-50 p-4 ${
          isCorrect ? 'bg-green-500' : 'bg-red-500'
        } text-white text-center font-medium`}>
          <div className="flex items-center justify-center space-x-2">
            {isCorrect ? (
              <CheckCircleIcon className="h-5 w-5" />
            ) : (
              <XCircleIcon className="h-5 w-5" />
            )}
            <span>{feedbackMessage}</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Content (3/4 columns) */}
          <div className="lg:col-span-3">
            <QuestionView
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={handleAnswerSelect}
              showCorrectAnswer={showCorrectAnswers || (selectedMode?.id === 'study' && selectedAnswer !== undefined)}
            />
          </div>

          {/* Sidebar (1/4 column) */}
          <div className="lg:col-span-1 space-y-4">
            {/* Mode Indicator */}
            <div className="text-center">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                selectedMode?.id === 'study' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}>
                <span className="mr-2">{selectedMode?.icon}</span>
                {selectedMode?.name}
              </div>
            </div>

            {/* Full Screen Button */}
            <div className="text-right">
              <button
                onClick={toggleFullscreen}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <ComputerDesktopIcon className="h-4 w-4" />
                <span>Full Screen Test</span>
              </button>
            </div>

            {/* Save Test Button */}
            <div>
              <button className="w-full btn btn-secondary">
                <BookmarkIcon className="h-4 w-4 mr-2" />
                Save Test
              </button>
            </div>

            {/* Question Grid */}
            <QuestionGrid
              totalQuestions={currentTest.questions.length}
              currentQuestion={currentQuestionIndex + 1}
              answers={answers}
              flags={flags}
              onQuestionSelect={handleQuestionSelect}
            />

            {/* Keyboard Shortcuts Info */}
            <div className="text-center">
              <button className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
                <CommandLineIcon className="h-4 w-4" />
                <span>Use Keyboard Shortcuts</span>
              </button>
            </div>

            {/* Timer (only for exam mode) */}
            {selectedMode?.id === 'exam' && (
              <div className="hidden lg:block">
                <Timer
                  initialTime={timeRemaining}
                  onTimeUp={handleTimeUp}
                  isPaused={isPaused}
                  onPauseToggle={handlePauseToggle}
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden mt-6">
          <div className="flex justify-between items-center">
            <button
              onClick={previousQuestion}
              disabled={currentQuestionIndex <= 0}
              className="btn btn-secondary"
            >
              <ArrowDownIcon className="h-4 w-4 mr-2" />
              Previous
            </button>

            <button
              onClick={nextQuestion}
              disabled={currentQuestionIndex >= currentTest.questions.length - 1}
              className="btn btn-secondary"
            >
              Next
              <ArrowUpIcon className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestInterface; 