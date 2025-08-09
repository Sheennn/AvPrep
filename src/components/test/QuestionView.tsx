import { useState, useEffect } from 'react';
import { Question } from '@/types/Question';
import { useSubjectStore } from '@/stores/subjectStore';

interface QuestionViewProps {
  question: Question;
  selectedAnswer?: number;
  onAnswerSelect: (answerIndex: number) => void;
  showCorrectAnswer?: boolean;
}

const QuestionView = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showCorrectAnswer = false
}: QuestionViewProps) => {
  const [activeTab, setActiveTab] = useState('question');
  const { selectedMode } = useSubjectStore();

  // Auto-switch to explanation tab in study mode when answer is selected
  useEffect(() => {
    if (selectedMode?.id === 'study' && selectedAnswer !== undefined && question.explanation) {
      setActiveTab('explanation');
    }
  }, [selectedAnswer, selectedMode, question.explanation]);

  const getOptionClass = (index: number) => {
    let baseClass = 'question-option';
    
    if (selectedAnswer === index) {
      baseClass += ' selected';
    }
    
    if (showCorrectAnswer) {
      if (index === question.correctAnswer) {
        baseClass += ' correct';
      } else if (selectedAnswer === index && index !== question.correctAnswer) {
        baseClass += ' incorrect';
      }
    }
    
    return baseClass;
  };

  const tabs = [
    { id: 'question', label: 'Question' },
    { id: 'explanation', label: 'Explanation' },
    { id: 'note', label: 'Note' },
    { id: 'exam', label: 'Exam Question' },
    { id: 'comments', label: 'Comments' }
  ];

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'question' && (
          <div className="space-y-6">
            {/* Question Text */}
            <div className="questionText">
              <p className="text-gray-900 dark:text-white text-base leading-relaxed">
                {question.text}
              </p>
            </div>

            {/* Question Images */}
            {question.imageUrls && question.imageUrls.length > 0 && (
              <div className="space-y-3">
                {question.imageUrls.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Question image ${idx + 1}`}
                    className="max-h-96 rounded border border-gray-200 dark:border-gray-700"
                  />
                ))}
              </div>
            )}

            {/* Question Options */}
            <ul className="space-y-3">
              {question.options.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => onAnswerSelect(index)}
                    className={`w-full text-left ${getOptionClass(index)}`}
                    disabled={showCorrectAnswer}
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl font-light text-gray-400 mt-1">
                        {optionLabels[index]}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
                          {option}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>

            {/* Study Mode Hint */}
            {selectedMode?.id === 'study' && selectedAnswer === undefined && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  💡 <strong>Study Mode:</strong> Select an answer to see immediate feedback and explanation.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'explanation' && (
          <div className="space-y-4">
            <div className="text-gray-600 dark:text-gray-400">
              {question.explanation ? (
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Explanation:</h3>
                  <p className="text-sm leading-relaxed">{question.explanation}</p>
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                  No explanation available for this question.
                </p>
              )}
            </div>
            
            {/* Show correct answer in explanation */}
            {selectedAnswer !== undefined && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Correct Answer:
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>{optionLabels[question.correctAnswer]}</strong>: {question.options[question.correctAnswer]}
                </p>
              </div>
            )}

            {/* Explanation Images */}
            {question.explanationImageUrls && question.explanationImageUrls.length > 0 && (
              <div className="space-y-3">
                {question.explanationImageUrls.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Explanation image ${idx + 1}`}
                    className="max-h-96 rounded border border-gray-200 dark:border-gray-700"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'note' && (
          <div className="text-gray-600 dark:text-gray-400">
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">
              No notes available for this question.
            </p>
          </div>
        )}

        {activeTab === 'exam' && (
          <div className="text-gray-600 dark:text-gray-400">
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">
              This question may appear in official exams.
            </p>
          </div>
        )}

        {activeTab === 'comments' && (
          <div className="text-gray-600 dark:text-gray-400 space-y-3">
            {question.commentsText ? (
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">{question.commentsText}</pre>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                No comments available for this question.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionView; 