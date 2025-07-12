import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  SunIcon, 
  MoonIcon, 
  BellIcon, 
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useUIStore } from '@/stores/uiStore'
import { useSubjectStore } from '@/stores/subjectStore'

const Header = () => {
  const location = useLocation()
  const { theme, setTheme, sidebarOpen, toggleSidebar } = useUIStore()
  const { selectedSubject, selectedMode } = useSubjectStore()
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Test', href: '/test' },
    { name: 'Saved Tests', href: '/save-test' },
    { name: 'Search', href: '/search' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const isInTest = location.pathname === '/test'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ATPL Questions
              </span>
            </Link>
            
            {/* Show current subject and mode when in test */}
            {isInTest && selectedSubject && selectedMode && (
              <div className="ml-6 flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{selectedSubject.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {selectedSubject.name}
                  </span>
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{selectedMode.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {selectedMode.name}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <BellIcon className="h-5 w-5" />
              </button>
              
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                  <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                    No new notifications
                  </div>
                </div>
              )}
            </div>

            {/* User menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <UserCircleIcon className="h-5 w-5" />
                <span className="hidden sm:block text-sm font-medium">User</span>
              </button>
              
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/packages"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    My Packages
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Settings
                  </Link>
                  <hr className="my-2 border-gray-200 dark:border-gray-700" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {sidebarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {sidebarOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => toggleSidebar()}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 