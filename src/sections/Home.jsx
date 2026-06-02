import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Mail, Mouse } from 'lucide-react'

const typingWords = ['Computer Science Engineer', 'Full Stack Developer', 'Problem Solver']

function useTypingEffect(words) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const pause = !isDeleting && text === word ? 1200 : 0
    const timeout = setTimeout(
      () => {
        if (!isDeleting && text === word) {
          setIsDeleting(true)
          return
        }

        if (isDeleting && text === '') {
          setIsDeleting(false)
          setWordIndex((index) => (index + 1) % words.length)
          return
        }

        setText((value) => (isDeleting ? word.slice(0, value.length - 1) : word.slice(0, value.length + 1)))
      },
      pause + (isDeleting ? 42 : 76),
    )

    return () => clearTimeout(timeout)
  }, [isDeleting, text, wordIndex, words])

  return text
}

export default function Home({ openResume }) {
  const typedText = useTypingEffect(typingWords)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden rounded-b-[1.6rem] bg-black px-4 pb-12 pt-28 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_16%,rgba(37,99,235,0.22),transparent_25%),radial-gradient(circle_at_74%_82%,rgba(99,102,241,0.17),transparent_28%),radial-gradient(circle_at_58%_52%,rgba(14,165,233,0.13),transparent_22%),linear-gradient(135deg,#020617,#061126_42%,#070b1f)]" />
      <div className="star-field absolute inset-0 -z-10" />
      <div className="absolute left-0 top-0 -z-10 h-72 w-96 rounded-full bg-blue-500/12 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/12 blur-3xl" />

      <motion.div
        className="mx-auto flex w-full max-w-6xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.p
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-300/20 bg-white/5 px-5 py-2 text-xs font-normal uppercase tracking-[0.42em] text-blue-300 shadow-[0_0_44px_rgba(37,99,235,0.14)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_16px_rgba(125,211,252,0.95)]" />
          Code. Create. Solve.
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(56,189,248,0.95)]" />
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(1.85rem,4.8vw,3.6rem)] font-black leading-[0.95] tracking-normal"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.14, ease: 'easeOut' }}
        >
            <span className="neon-name bg-[linear-gradient(110deg,#f8fafc,#7dd3fc,#38bdf8,#818cf8)] bg-clip-text text-transparent">
            Riya Kumari
          </span>
        </motion.h1>

        <motion.p
          className="mt-7 min-h-10 font-display text-[clamp(0.95rem,1.9vw,1.55rem)] font-normal tracking-normal text-blue-300 drop-shadow-[0_0_18px_rgba(37,99,235,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          {typedText}
          <span className="ml-2 inline-block h-6 w-[3px] translate-y-1 animate-pulse rounded-full bg-blue-300 sm:h-8" />
        </motion.p>

        <motion.p
          className="mt-6 max-w-3xl text-xs font-normal leading-6 text-slate-300 sm:text-sm"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
        >
          Developing responsive web applications, efficient backend systems, solving complex DSA problems,
          <br className="hidden sm:block" />
          and crafting modern user experiences.
        </motion.p>

        <motion.div
          className="mt-10 flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32, ease: 'easeOut' }}
        >
          <button type="button" onClick={openResume} className="btn-neon-primary">
            <FileText size={18} />
            Get Resume
          </button>
          <button type="button" onClick={scrollToContact} className="btn-neon-outline">
            <Mail size={18} />
            Contact Me
          </button>
        </motion.div>

      </motion.div>

      <motion.button
        type="button"
        onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-normal uppercase tracking-[0.38em] text-slate-500 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll</span>
        <Mouse size={18} className="text-blue-300" />
      </motion.button>
    </section>
  )
}
