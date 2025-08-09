import { useSubjectStore } from '@/stores/subjectStore';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { getSubjectQuestionCount } from '@/utils/questionDataLoader';

const SubjectSelection = () => {
  const { subjects, setSelectedSubject, setSelectedMode } = useSubjectStore();
  const navigate = useNavigate();
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [selectedDatabase, setSelectedDatabase] = useState<string>('');
  const [selectedRunMode, setSelectedRunMode] = useState<'study' | 'exam'>('study');
  const [questionCount, setQuestionCount] = useState<number>(10);

  const subjectOptions = useMemo(() => [
    { id: 'air-law', name: 'AIR LAW' },
    { id: 'aircraft-general-knowledge', name: 'AIRFRAME/SYSTEMS/POWER PLANT' },
    { id: 'instrumentation', name: 'INSTRUMENTATION' },
    { id: 'mass-and-balance', name: 'MASS AND BALANCE' },
    { id: 'flight-planning', name: 'FLIGHT PLANNING AND MONITORING' },
    { id: 'performance', name: 'PERFORMANCE' },
    { id: 'human-performance', name: 'HUMAN PERFORMANCE' },
    { id: 'meteorology', name: 'METEOROLOGY' },
    { id: 'general-navigation', name: 'GENERAL NAVIGATION' },
    { id: 'radio-navigation', name: 'RADIO NAVIGATION' },
    { id: 'operational-procedures', name: 'OPERATIONAL PROCEDURES' },
    { id: 'principles-of-flight', name: 'PRINCIPLES OF FLIGHT' },
  ], []);

  const maxQuestions = useMemo(() => {
    if (!selectedSubjectId) return 200;
    return getSubjectQuestionCount(
      selectedSubjectId,
      subjectOptions.find(s => s.id === selectedSubjectId)?.name,
      selectedDatabase
    ) || 200;
  }, [selectedSubjectId, selectedDatabase, subjectOptions]);

  const databaseOptions = useMemo(() => {
    // For now only Flight Planning Ireland 530
    if (selectedSubjectId === 'flight-planning') {
      return [
        { id: 'ireland-530', name: 'IRELAND 530 bank' }
      ];
    }
    return [{ id: 'none', name: 'No datasets available yet' }];
  }, [selectedSubjectId]);

  const fixedExamCounts: Record<string, number> = {
    'air-law': 44,
    'aircraft-general-knowledge': 80,
    'instrumentation': 60,
    'mass-and-balance': 25,
    'flight-planning': 42,
    'performance': 45,
    'human-performance': 48,
    'meteorology': 84,
    'general-navigation': 55,
    'radio-navigation': 66,
    'operational-procedures': 42,
    'principles-of-flight': 46,
  };

  const handleStart = () => {
    const subject = subjects.find(s => s.id === selectedSubjectId);
    if (!subject) return;
    setSelectedSubject(subject);
    setSelectedMode({ id: selectedRunMode, name: selectedRunMode === 'study' ? 'Study Mode' : 'Exam Mode', description: '', icon: selectedRunMode === 'study' ? '📚' : '📝', features: [] } as any);
    navigate('/test', { state: { db: selectedDatabase, questionCount: selectedRunMode === 'exam' ? fixedExamCounts[selectedSubjectId] : questionCount } });
  };

  // Keep slider within bounds and default to max when dataset changes in Study mode
  useEffect(() => {
    if (selectedRunMode === 'study') {
      if (questionCount > maxQuestions) {
        setQuestionCount(maxQuestions);
      } else if (!selectedDatabase || !selectedSubjectId) {
        setQuestionCount(10);
      } else if (questionCount < 1 && maxQuestions > 0) {
        setQuestionCount(maxQuestions);
      }
    }
  }, [maxQuestions, selectedRunMode, selectedDatabase, selectedSubjectId]);

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

      <div className="card p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
            <select value={selectedSubjectId} onChange={(e) => setSelectedSubjectId(e.target.value)} className="w-full border rounded-lg p-2 bg-white dark:bg-gray-800">
              <option value="">Select a subject…</option>
              {subjectOptions.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Database</label>
            <select value={selectedDatabase} onChange={(e) => setSelectedDatabase(e.target.value)} className="w-full border rounded-lg p-2 bg-white dark:bg-gray-800" disabled={!selectedSubjectId}>
              <option value="">Select a database…</option>
              {databaseOptions.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className={`px-4 py-2 rounded-lg border ${selectedRunMode === 'study' ? 'bg-blue-500 text-white' : ''}`} onClick={() => setSelectedRunMode('study')}>Study</button>
            <button className={`px-4 py-2 rounded-lg border ${selectedRunMode === 'exam' ? 'bg-blue-500 text-white' : ''}`} onClick={() => setSelectedRunMode('exam')}>Test</button>
          </div>
          <div className="flex-1"></div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Number of questions</label>
            <input type="range" min={1} max={maxQuestions} value={selectedRunMode === 'exam' ? (maxQuestions as any) : Math.min(questionCount, maxQuestions)} onChange={(e) => setQuestionCount(parseInt(e.target.value))} disabled={selectedRunMode === 'exam' || !selectedSubjectId || !selectedDatabase} className="w-full" />
            {selectedRunMode === 'exam' ? (
              <div className="text-xs text-gray-500 mt-1">Fixed: preselected for chosen subject ({fixedExamCounts[selectedSubjectId] || 0})</div>
            ) : (
              <div className="text-xs text-gray-500 mt-1">Selected: {Math.min(questionCount, maxQuestions)} / {maxQuestions}</div>
            )}
          </div>
        </div>

        <div className="text-right">
          <button onClick={handleStart} className="btn btn-primary" disabled={!selectedSubjectId || !selectedDatabase}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection; 