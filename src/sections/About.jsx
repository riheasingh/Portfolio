import { motion } from 'framer-motion'
import { CalendarDays, GraduationCap, Laptop, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const aboutStats = [
  { label: 'CGPA: 8.73', icon: GraduationCap },
  { label: 'B.Tech CSE', icon: Laptop },
  { label: '2023 - 2027', icon: CalendarDays },
]

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-[#020617] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_26%,rgba(37,99,235,0.13),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(99,102,241,0.13),transparent_30%)]" />
      <div className="star-field absolute inset-0 opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="font-display text-2xl font-black tracking-normal text-transparent bg-[linear-gradient(110deg,#f8fafc,#7dd3fc,#38bdf8,#818cf8)] bg-clip-text sm:text-3xl">
              About Me
            </h2>
            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-400 shadow-[0_0_28px_rgba(37,99,235,0.35)]" />
          </div>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.45fr]">
          <Reveal>
            <motion.div
              className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative h-[78%] w-[78%] overflow-hidden rounded-[1.45rem] bg-slate-900 shadow-[0_0_60px_rgba(37,99,235,0.22)]">
                <img src="/Riya.png" alt="Riya Kumari" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:p-8 lg:p-10">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
              <div className="absolute right-8 top-8 grid h-14 w-14 place-items-center rounded-full border border-blue-300/30 bg-blue-300/10 text-blue-200 shadow-[0_0_34px_rgba(37,99,235,0.22)]">
                <Sparkles size={22} />
              </div>

              <h3 className="font-display text-xl font-black tracking-normal text-blue-300 sm:text-2xl">
                Hi, I am Riya Kumari
              </h3>

              <p className="mt-7 max-w-4xl text-xs font-normal leading-7 text-slate-200 sm:text-sm">
                Computer Science student, a passionate developer with a strong foundation in modern web technologies. I build scalable and user-friendly applications using{' '}
                <span className="text-blue-300">React</span>, <span className="text-cyan-300">Node.js</span>,{' '}
                <span className="text-indigo-300">Express.js</span>, <span className="text-sky-300">MySQL</span>, and modern backend technologies. My passion lies in solving{' '}
                <span className="text-indigo-300">DSA problems</span>, and continuously learning new technologies.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {aboutStats.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/8 px-4 py-2 text-xs font-normal text-blue-200 shadow-[0_0_24px_rgba(37,99,235,0.08)]"
                  >
                    <item.icon size={17} />
                    {item.label}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
