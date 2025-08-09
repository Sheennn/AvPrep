import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Question } from '@/types/Question';


interface QuestionGridProps {
  totalQuestions: number;
  currentQuestion: number;
  answers: Record<number, number>;
  flags: Record<number, any>;
  onQuestionSelect: (questionNumber: number) => void;
  questions: Question[];
  revealCorrect: boolean; // show correct/wrong colors (study mode or after finish)
}

const QuestionGrid = ({
  totalQuestions,
  currentQuestion,
  answers,
  flags,
  onQuestionSelect,
  questions,
  revealCorrect
}: QuestionGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 100;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const getQuestionStatus = (questionNumber: number) => {
    const question = questions[questionNumber - 1];
    const selected = question ? answers[question.id] : undefined;
    const isAnswered = selected !== undefined;
    const isCurrent = questionNumber === currentQuestion;

    // Base class
    let statusClass = 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white';

    if (revealCorrect && question && isAnswered) {
      const isCorrect = selected === question.correctAnswer;
      statusClass = isCorrect
        ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
        : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300';
    } else if (isAnswered) {
      // Answered but not revealing correctness (e.g., exam mode before finish)
      statusClass = 'bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white';
    }

    // Highlight current with a ring overlay
    if (isCurrent) {
      statusClass += ' ring-2 ring-primary-500';
    }

    return statusClass;
  };

  const getFlagIndicator = (questionNumber: number) => {
    const flag = flags[questionNumber];
    if (!flag) return null;

    const flagColors: Record<string, string> = {
      mark: 'text-blue-600',
      review: 'text-yellow-600',
      hide: 'text-gray-600',
      green: 'text-green-600',
      yellow: 'text-yellow-600',
      red: 'text-red-600'
    };

    return (
      <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${flagColors[flag.flagType] || 'text-gray-600'}`} />
    );
  };

  const renderQuestionNumbers = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, totalQuestions);
    const questions = [];

    for (let i = startIndex; i < endIndex; i++) {
      const questionNumber = i + 1;
      questions.push(
        <button
          key={questionNumber}
          onClick={() => onQuestionSelect(questionNumber)}
          className={`relative w-8 h-8 rounded text-xs font-medium transition-colors duration-200 ${getQuestionStatus(questionNumber)}`}
        >
          {questionNumber}
          {getFlagIndicator(questionNumber)}
        </button>
      );
    }

    return questions;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
          Questions
        </h3>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Click on a question number to navigate
        </div>
      </div>

      {/* Question Grid */}
      <div className="grid grid-cols-10 gap-1 mb-4">
        {renderQuestionNumbers()}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          <span className="text-xs text-gray-500 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Correct</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>Wrong</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded"></div>
            <span>Unanswered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionGrid; 