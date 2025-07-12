# AvPrep - Architecture Analysis & Implementation

## Original Application Analysis

### Technology Stack
- **Framework**: Angular 18.2.13
- **UI Library**: Bootstrap 5.3.6
- **Styling**: Custom CSS with Bootstrap Icons
- **Charts**: ApexCharts
- **Notifications**: AlertifyJS
- **Spinner**: ngx-spinner
- **Pagination**: ngb-pagination

### Core Architecture

#### 1. Navigation Structure
```
app-nav (Header Component)
├── Logo/Brand
├── Main Navigation
│   ├── Dashboard (/)
│   ├── Test (/test)
│   ├── Saved Tests (/save-test)
│   ├── Search (/search)
│   └── Contact Us (/contact)
├── Theme Toggle (Light/Dark)
├── Notifications Dropdown
└── User Profile Dropdown
```

#### 2. Test Interface Components
```
app-study (Main Test Component)
├── Test Header
│   ├── Test Name (ATPL(A) (EASA 2020) | 010 - Air Law)
│   └── Question Navigation Bar
│       ├── Previous/Next Arrows
│       ├── Question Counter (1 / 1749)
│       ├── Question Flags (Mark, Review, Hide, Color flags)
│       ├── Timer
│       └── Question Number
├── Question Content Area
│   ├── app-questionview
│   │   ├── Tab Navigation (Question, Explanation, Note, Exam Question, Comments)
│   │   └── app-question
│   │       ├── Question Text
│   │       └── Multiple Choice Options (A, B, C, D)
└── Sidebar
    ├── Full Screen Button
    ├── Save Test Button
    ├── Question Grid (1-100 with pagination)
    └── Keyboard Shortcuts Info
```

#### 3. State Management Patterns
- **Question State**: Current question, answers, flags, timer
- **Test State**: Test progress, saved answers, navigation
- **UI State**: Theme, notifications, user preferences
- **Navigation State**: Current route, breadcrumbs

#### 4. Styling Architecture
- **Bootstrap 5**: Grid system, components, utilities
- **Custom CSS**: Question styling, flags, animations
- **Responsive Design**: Mobile-first approach
- **Theme System**: Light/Dark mode support

#### 5. Interaction Patterns
- **Keyboard Navigation**: Arrow keys, number keys
- **Mouse Interactions**: Click to answer, flag questions
- **Touch Support**: Mobile-friendly interactions
- **Auto-save**: Progress preservation

## Clone Implementation Plan

### Modern Tech Stack
- **Framework**: React 18 with TypeScript
- **State Management**: Zustand
- **Routing**: React Router v6
- **UI Library**: Tailwind CSS + Headless UI
- **Icons**: Heroicons
- **Charts**: Recharts
- **Notifications**: React Hot Toast
- **Build Tool**: Vite

### Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── Sidebar.tsx
│   ├── test/
│   │   ├── QuestionView.tsx
│   │   ├── Question.tsx
│   │   ├── QuestionGrid.tsx
│   │   └── TestHeader.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Modal.tsx
│       └── Spinner.tsx
├── hooks/
│   ├── useTest.ts
│   ├── useQuestion.ts
│   └── useTimer.ts
├── stores/
│   ├── testStore.ts
│   ├── uiStore.ts
│   └── userStore.ts
├── types/
│   ├── Question.ts
│   ├── Test.ts
│   └── User.ts
├── utils/
│   ├── constants.ts
│   ├── helpers.ts
│   └── keyboard.ts
└── pages/
    ├── Dashboard.tsx
    ├── Test.tsx
    ├── SavedTests.tsx
    └── Search.tsx
```

### Key Features to Implement
1. **Question Navigation**: Previous/Next, grid navigation
2. **Answer Tracking**: Multiple choice with correct answer highlighting
3. **Question Flags**: Mark, review, hide, color coding
4. **Timer**: Countdown timer with pause/resume
5. **Auto-save**: Progress preservation
6. **Responsive Design**: Mobile and desktop layouts
7. **Theme Toggle**: Light/Dark mode
8. **Keyboard Shortcuts**: Enhanced navigation
9. **Question Grid**: Visual progress indicator
10. **Full Screen Mode**: Immersive testing experience

### Data Structure
```typescript
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface Test {
  id: string;
  name: string;
  questions: Question[];
  currentQuestion: number;
  answers: Record<number, number>;
  flags: Record<number, FlagType>;
  startTime: Date;
  endTime?: Date;
}
```

### Implementation Phases
1. **Phase 1**: Core structure and routing
2. **Phase 2**: Question display and navigation
3. **Phase 3**: Answer tracking and state management
4. **Phase 4**: Timer and auto-save functionality
5. **Phase 5**: Advanced features (flags, keyboard shortcuts)
6. **Phase 6**: Polish and optimization

This clone will maintain the core functionality while modernizing the technology stack and improving the user experience. 
