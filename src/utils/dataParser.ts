import { Question } from '@/types/Question';

export const parseQuestionsFromText = (text: string): Question[] => {
  const questions: Question[] = [];
  const questionBlocks = text.split('Question ').filter(block => block.trim());
  
  questionBlocks.forEach((block) => {
    const lines = block.split('\n').filter(line => line.trim());
    if (lines.length < 3) return;
    
    // Extract question number and text
    const firstLine = lines[0];
    const questionNumber = parseInt(firstLine.split(':')[0]);
    const questionText = firstLine.split(':')[1]?.trim() || '';
    
    // Extract options
    const options: string[] = [];
    let correctAnswer = -1;
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('Options:')) continue;
      if (line.startsWith('Correct Answer:')) break;
      if (line.startsWith('---')) break;
      
      if (line.match(/^\d+\./)) {
        const optionText = line.replace(/^\d+\.\s*/, '').trim();
        if (optionText) {
          options.push(optionText);
          
          // Check if this is the correct answer
          if (line.includes('✓ (CORRECT)')) {
            correctAnswer = options.length - 1;
          }
        }
      }
    }
    
    if (questionText && options.length > 0 && correctAnswer >= 0) {
      questions.push({
        id: questionNumber,
        text: questionText,
        options,
        correctAnswer,
        category: 'ATPL(A) Air Law',
        difficulty: 'medium',
        explanation: '',
        tags: ['ATPL', 'Air Law', 'EASA'],
        source: 'ATPL Questions Database'
      });
    }
  });
  
  return questions;
};

export const getSampleQuestions = (): Question[] => {
  // Sample questions for testing
  return [
    {
      id: 1,
      text: "What is the correct definition of 'PCN'?",
      options: [
        "It is a letter expressing the bearing strength of a pavement for restricted operations.",
        "It is a number expressing the bearing strength of a pavement for unrestricted operations.",
        "It is a number expressing the relative effect of an aircraft on a pavement for a specified standard subgrade category.",
        "It is used to assess pavement condition."
      ],
      correctAnswer: 2,
      category: "ATPL(A) Air Law",
      difficulty: "medium",
      explanation: "PCN (Pavement Classification Number) is a number expressing the relative effect of an aircraft on a pavement for a specified standard subgrade category.",
      tags: ["ATPL", "Air Law", "EASA"],
      source: "ATPL Questions Database"
    },
    {
      id: 2,
      text: "Approach Procedures – Missed Approach – A complete missed approach procedure consists of the following phases:",
      options: [
        "arrival, intermediate, final.",
        "initial, acceleration, final.",
        "initial, intermediate, final.",
        "climb, intermediate, final."
      ],
      correctAnswer: 2,
      category: "ATPL(A) Air Law",
      difficulty: "medium",
      explanation: "A complete missed approach procedure consists of initial, intermediate, and final phases.",
      tags: ["ATPL", "Air Law", "EASA"],
      source: "ATPL Questions Database"
    },
    {
      id: 3,
      text: "An AIRAC is a…",
      options: [
        "Document intended as a notice to airmen.",
        "Document that is released at certain notification intervals.",
        "Document detailing airport services.",
        "Document detailing information not adequate for a NOTAM."
      ],
      correctAnswer: 1,
      category: "ATPL(A) Air Law",
      difficulty: "medium",
      explanation: "AIRAC (Aeronautical Information Regulation And Control) is a document that is released at certain notification intervals.",
      tags: ["ATPL", "Air Law", "EASA"],
      source: "ATPL Questions Database"
    }
  ];
}; 