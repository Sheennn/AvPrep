import { create } from 'zustand';
import { Subject, StudyMode } from '@/types/Subject';

interface SubjectState {
  subjects: Subject[];
  studyModes: StudyMode[];
  selectedSubject: Subject | null;
  selectedMode: StudyMode | null;
  setSelectedSubject: (subject: Subject | null) => void;
  setSelectedMode: (mode: StudyMode | null) => void;
}

export const useSubjectStore = create<SubjectState>((set) => ({
  subjects: [
    {
      id: 'air-law',
      name: 'Air Law',
      description: 'Regulations and legal aspects of aviation',
      questionCount: 150,
      icon: '⚖️',
      color: 'blue',
      categories: ['Regulations', 'Legal', 'International Law']
    },
    {
      id: 'aircraft-general-knowledge',
      name: 'Aircraft General Knowledge',
      description: 'Aircraft systems, structures, and principles',
      questionCount: 200,
      icon: '✈️',
      color: 'green',
      categories: ['Systems', 'Structures', 'Principles']
    },
    {
      id: 'flight-planning',
      name: 'Flight Planning & Monitoring',
      description: 'Route planning, fuel planning, and monitoring',
      questionCount: 180,
      icon: '🗺️',
      color: 'purple',
      categories: ['Planning', 'Navigation', 'Monitoring']
    },
    {
      id: 'human-performance',
      name: 'Human Performance & Limitations',
      description: 'Human factors in aviation',
      questionCount: 120,
      icon: '🧠',
      color: 'orange',
      categories: ['Psychology', 'Physiology', 'Limitations']
    },
    {
      id: 'meteorology',
      name: 'Meteorology',
      description: 'Weather theory and practical applications',
      questionCount: 160,
      icon: '🌤️',
      color: 'cyan',
      categories: ['Weather', 'Atmosphere', 'Forecasting']
    },
    {
      id: 'navigation',
      name: 'Navigation',
      description: 'Navigation principles and techniques',
      questionCount: 140,
      icon: '🧭',
      color: 'indigo',
      categories: ['Navigation', 'Instruments', 'Techniques']
    },
    {
      id: 'operational-procedures',
      name: 'Operational Procedures',
      description: 'Standard operating procedures and safety',
      questionCount: 130,
      icon: '📋',
      color: 'red',
      categories: ['Procedures', 'Safety', 'Operations']
    },
    {
      id: 'principles-of-flight',
      name: 'Principles of Flight',
      description: 'Aerodynamics and flight theory',
      questionCount: 170,
      icon: '🛩️',
      color: 'teal',
      categories: ['Aerodynamics', 'Theory', 'Physics']
    }
  ],
  studyModes: [
    {
      id: 'study',
      name: 'Study Mode',
      description: 'Learn with immediate feedback and explanations',
      icon: '📚',
      features: [
        'Immediate feedback on answers',
        'Detailed explanations',
        'Mark questions for review',
        'Progress tracking',
        'No time pressure'
      ]
    },
    {
      id: 'exam',
      name: 'Exam Mode',
      description: 'Simulate real exam conditions',
      icon: '📝',
      features: [
        'Timed sessions',
        'No immediate feedback',
        'Real exam conditions',
        'Score calculation',
        'Performance analysis'
      ]
    }
  ],
  selectedSubject: null,
  selectedMode: null,
  setSelectedSubject: (subject) => set({ selectedSubject: subject }),
  setSelectedMode: (mode) => set({ selectedMode: mode })
})); 