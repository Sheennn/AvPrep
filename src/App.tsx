import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Dashboard from './pages/Dashboard'
import Test from './pages/Test'
import SavedTests from './pages/SavedTests'
import Search from './pages/Search'
import Contact from './pages/Contact'
import ModeSelection from './components/subject/ModeSelection'
import { useUIStore } from './stores/uiStore'

function App() {
  const { theme, setTheme } = useUIStore()

  useEffect(() => {
    // Apply theme on mount
    setTheme(theme)
  }, [theme, setTheme])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mode-selection" element={<ModeSelection />} />
          <Route path="/test" element={<Test />} />
          <Route path="/save-test" element={<SavedTests />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 