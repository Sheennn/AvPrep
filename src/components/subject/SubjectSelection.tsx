import { useSubjectStore } from '@/stores/subjectStore';
import { useNavigate } from 'react-router-dom';

const SubjectSelection = () => {
  const { subjects, setSelectedSubject } = useSubjectStore();
  const navigate = useNavigate();

  const handleSubjectSelect = (subject: any) => {
    setSelectedSubject(subject);
    navigate('/mode-selection');
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-500 hover:bg-blue-600 border-blue-500',
      green: 'bg-green-500 hover:bg-green-600 border-green-500',
      purple: 'bg-purple-500 hover:bg-purple-600 border-purple-500',
      orange: 'bg-orange-500 hover:bg-orange-600 border-orange-500',
      cyan: 'bg-cyan-500 hover:bg-cyan-600 border-cyan-500',
      indigo: 'bg-indigo-500 hover:bg-indigo-600 border-indigo-500',
      red: 'bg-red-500 hover:bg-red-600 border-red-500',
      teal: 'bg-teal-500 hover:bg-teal-600 border-teal-500'
    };
    return colorMap[color] || 'bg-gray-500 hover:bg-gray-600 border-gray-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Choose a Subject
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Select a subject to start studying or take an exam
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => handleSubjectSelect(subject)}
            className={`card p-6 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-${subject.color}-500`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{subject.icon}</div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getColorClasses(subject.color)}`}>
                {subject.questionCount} questions
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {subject.name}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {subject.description}
            </p>
            
            <div className="flex flex-wrap gap-1">
              {subject.categories.slice(0, 2).map((category, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                >
                  {category}
                </span>
              ))}
              {subject.categories.length > 2 && (
                <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                  +{subject.categories.length - 2} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelection; 