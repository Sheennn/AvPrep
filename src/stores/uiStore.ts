import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  // Theme
  theme: 'light' | 'dark' | 'auto';
  
  // UI state
  sidebarOpen: boolean;
  fullscreen: boolean;
  showTimer: boolean;
  showProgress: boolean;
  
  // Notifications
  notifications: Notification[];
  
  // Actions
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  toggleSidebar: () => void;
  setFullscreen: (fullscreen: boolean) => void;
  setShowTimer: (show: boolean) => void;
  setShowProgress: (show: boolean) => void;
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  timestamp: Date;
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      // Initial state
      theme: 'light',
      sidebarOpen: false,
      fullscreen: false,
      showTimer: true,
      showProgress: true,
      notifications: [],
      
      // Actions
      setTheme: (theme) => {
        set({ theme });
        // Apply theme to document
        if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
      
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      
      setFullscreen: (fullscreen) => set({ fullscreen }),
      
      setShowTimer: (show) => set({ showTimer: show }),
      
      setShowProgress: (show) => set({ showProgress: show }),
      
      addNotification: (notification) => {
        const { notifications } = get();
        set({ notifications: [...notifications, notification] });
        
        // Auto-remove notification after duration
        if (notification.duration) {
          setTimeout(() => {
            get().removeNotification(notification.id);
          }, notification.duration);
        }
      },
      
      removeNotification: (id) => {
        const { notifications } = get();
        set({ notifications: notifications.filter(n => n.id !== id) });
      },
      
      clearNotifications: () => set({ notifications: [] }),
    }),
    {
      name: 'ui-storage',
      partialize: (state) => ({
        theme: state.theme,
        showTimer: state.showTimer,
        showProgress: state.showProgress,
      }),
    }
  )
); 