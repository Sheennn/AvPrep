import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ClockIcon,
  BookmarkIcon,
  EyeIcon,
  EyeSlashIcon,
  FlagIcon
} from '@heroicons/react/24/outline';

import { FlagType } from '@/types/Question';

interface TestHeaderProps {
  testName: string;
  currentQuestion: number;
  totalQuestions: number;
  questionNumber: string;
  timeRemaining: number;
  onFlagQuestion: (flagType: FlagType) => void;
  onPrevious: () => void;
  onNext: () => void;
}

const TestHeader = ({
  testName,
  currentQuestion,
  totalQuestions,
  questionNumber,
  timeRemaining,
  onFlagQuestion,
  onPrevious,
  onNext
}: TestHeaderProps) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  };

  const flagOptions = [
    { type: 'mark' as FlagType, icon: BookmarkIcon, title: 'Mark Question', color: 'text-blue-600' },
    { type: 'review' as FlagType, icon: EyeIcon, title: 'For Review', color: 'text-yellow-600' },
    { type: 'hide' as FlagType, icon: EyeSlashIcon, title: 'Do not show me', color: 'text-gray-600' },
    { type: 'green' as FlagType, icon: FlagIcon, title: 'Green Flag', color: 'text-green-600' },
    { type: 'yellow' as FlagType, icon: FlagIcon, title: 'Yellow Flag', color: 'text-yellow-600' },
    { type: 'red' as FlagType, icon: FlagIcon, title: 'Red Flag', color: 'text-red-600' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      {/* Test Name */}
      <div className="text-center py-3 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          {testName}
        </h1>
      </div>

      {/* Question Navigation Bar */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Previous Arrow */}
          <button
            onClick={onPrevious}
            disabled={currentQuestion <= 1}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            title="Previous Question"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Question Info */}
          <div className="flex-1 flex items-center justify-center space-x-8">
            {/* Question Counter */}
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {currentQuestion} / {totalQuestions}
            </div>

            {/* Question Flags */}
            <div className="flex items-center space-x-2">
              {flagOptions.map((flag) => {
                const Icon = flag.icon;
                return (
                  <button
                    key={flag.type}
                    onClick={() => onFlagQuestion(flag.type)}
                    className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${flag.color}`}
                    title={flag.title}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>

            {/* Timer */}
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
              <ClockIcon className="h-4 w-4" />
              <span>{formatTime(timeRemaining)}</span>
            </div>

            {/* Question Number */}
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              No: {questionNumber}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={onNext}
            disabled={currentQuestion >= totalQuestions}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            title="Next Question"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestHeader; 