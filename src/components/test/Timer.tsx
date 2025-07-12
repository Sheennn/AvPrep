import { useEffect, useState } from 'react';
import { ClockIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline';


interface TimerProps {
  initialTime: number; // in seconds
  onTimeUp: () => void;
  isPaused?: boolean;
  onPauseToggle?: () => void;
}

const Timer = ({ initialTime, onTimeUp, isPaused = false, onPauseToggle }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: number;

    if (isRunning && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, isPaused, timeRemaining, onTimeUp]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (timeRemaining <= 300) return 'text-red-600'; // 5 minutes
    if (timeRemaining <= 600) return 'text-yellow-600'; // 10 minutes
    return 'text-gray-900 dark:text-white';
  };

  const handlePauseToggle = () => {
    if (onPauseToggle) {
      onPauseToggle();
    } else {
      setIsRunning(!isRunning);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <ClockIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      <span className={`text-sm font-medium ${getTimeColor()}`}>
        {formatTime(timeRemaining)}
      </span>
      {onPauseToggle && (
        <button
          onClick={handlePauseToggle}
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          title={isPaused ? 'Resume' : 'Pause'}
        >
          {isPaused ? (
            <PlayIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          ) : (
            <PauseIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      )}
    </div>
  );
};

export default Timer; 