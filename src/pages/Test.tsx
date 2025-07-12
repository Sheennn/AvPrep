import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TestInterface from '@/components/test/TestInterface';
import { useSubjectStore } from '@/stores/subjectStore';

const Test = () => {
  const { selectedSubject, selectedMode } = useSubjectStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedSubject || !selectedMode) {
      navigate('/');
    }
  }, [selectedSubject, selectedMode, navigate]);

  if (!selectedSubject || !selectedMode) {
    return null;
  }

  return <TestInterface />;
};

export default Test; 