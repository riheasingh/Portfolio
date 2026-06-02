import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '../data/portfolio.js'

export default function Navbar({ theme, setTheme, openResume }) {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/72 shadow-[0_18px_60px_rgba(2,6,23,0.28)] backdrop-blur-2xl transition-colors">
      <nav className="mx-auto flex h-18 max-w-[118rem] items-center justify-between px-4 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-3"
          aria-label="Go to home"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-blue-300/30 bg-blue-400/10 text-xl font-black text-blue-300 shadow-[0_0_28px_rgba(37,99,235,0.35)] transition group-hover:scale-105">
            RK
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-bold leading-4 text-white">Riya Kumari</span>
            <span className="block text-xs text-slate-400">Full Stack Developer | Problem Solver</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={`relative rounded-full px-4 py-2 text-xs font-normal transition ${
                active === link.id
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full border border-white/10 bg-white/10 shadow-soft"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openResume}
            className="hidden min-h-10 items-center gap-2 rounded-full border border-blue-300/70 px-5 py-2 text-xs font-normal text-blue-300 shadow-[0_0_26px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5 hover:bg-blue-300 hover:text-slate-950 lg:inline-flex"
          >
            <FileText size={16} />
            Get Resume
          </button>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/8 text-slate-200 shadow-soft transition hover:-translate-y-0.5 hover:text-coral-300"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/8 text-slate-200 shadow-soft transition xl:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-soft xl:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-normal transition ${
                  active === link.id
                    ? 'bg-coral-500 text-white'
                    : 'text-slate-200 hover:bg-white/8'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
