import { useSubjectStore } from '@/stores/subjectStore';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const ModeSelection = () => {
  const { selectedSubject, studyModes, setSelectedMode } = useSubjectStore();
  const navigate = useNavigate();

  if (!selectedSubject) {
    navigate('/');
    return null;
  }

  const handleModeSelect = (mode: any) => {
    setSelectedMode(mode);
    navigate('/test');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Subjects
        </button>
        
        <div className="flex items-center mb-6">
          <div className="text-2xl mr-4">{selectedSubject.icon}</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {selectedSubject.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {selectedSubject.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {studyModes.map((mode) => (
          <div
            key={mode.id}
            onClick={() => handleModeSelect(mode)}
            className="card p-8 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-blue-500"
          >
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">{mode.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {mode.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {mode.description}
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Features:
              </h3>
              <ul className="space-y-2">
                {mode.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                Start {mode.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModeSelection; 