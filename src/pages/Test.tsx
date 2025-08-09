import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TestInterface from '@/components/test/TestInterface';
import { useSubjectStore } from '@/stores/subjectStore';
import { useTestStore } from '@/stores/testStore';

const Test = () => {
  const { selectedSubject, selectedMode } = useSubjectStore();
  const navigate = useNavigate();
  const { resetTest } = useTestStore();

  useEffect(() => {
    if (!selectedSubject || !selectedMode) {
      navigate('/');
    }
  }, [selectedSubject, selectedMode, navigate]);

  // Ensure any previous persisted test is cleared when opening a new Test session
  useEffect(() => {
    if (selectedSubject && selectedMode) {
      resetTest();
    }
  }, [selectedSubject, selectedMode, resetTest]);

  if (!selectedSubject || !selectedMode) {
    return null;
  }

  return <TestInterface />;
};

export default Test; 