import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ResumeModal from './components/ResumeModal.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import CodingProfile from './sections/CodingProfile.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'

function getInitialTheme() {
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme) {
    return storedTheme
  }

  return 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-cream-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} openResume={() => setIsResumeOpen(true)} />
      <main>
        <Home openResume={() => setIsResumeOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CodingProfile />
        <Contact />
      </main>
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  )
}
