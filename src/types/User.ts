export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin';
  preferences: UserPreferences;
  createdAt: Date;
  lastLoginAt: Date;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  fontSize: 'small' | 'medium' | 'large';
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  autoSave: boolean;
  keyboardShortcuts: boolean;
  showTimer: boolean;
  showProgress: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
} 