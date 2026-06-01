import { motion } from 'framer-motion'
import { Code2, Database, Layers3, Server, Wrench } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const skillCards = [
  {
    title: 'Languages',
    icon: Code2,
    tone: 'cyan',
    items: ['Java', 'C++', 'JavaScript'],
  },
  {
    title: 'Frontend',
    icon: Layers3,
    tone: 'cyan',
    items: ['React.js', 'HTML5', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: Server,
    tone: 'blue',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth'],
  },
  {
    title: 'Databases',
    icon: Database,
    tone: 'gold',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Core CS',
    icon: Code2,
    tone: 'indigo',
    items: ['DSA', 'DBMS', 'OOPs', 'OS', 'CN'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    tone: 'blue',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
]

const toneClasses = {
  cyan: {
    border: 'border-cyan-300/22 hover:border-cyan-300/45',
    title: 'text-cyan-300 drop-shadow-[0_0_14px_rgba(34,211,238,0.42)]',
    icon: 'text-cyan-200 bg-cyan-300/10 border-cyan-300/25',
  },
  cyan: {
    border: 'border-cyan-300/22 hover:border-cyan-300/45',
    title: 'text-cyan-300 drop-shadow-[0_0_14px_rgba(56,189,248,0.36)]',
    icon: 'text-cyan-200 bg-cyan-300/10 border-cyan-300/25',
  },
  blue: {
    border: 'border-blue-300/22 hover:border-blue-300/45',
    title: 'text-blue-300 drop-shadow-[0_0_14px_rgba(37,99,235,0.38)]',
    icon: 'text-blue-200 bg-blue-300/10 border-blue-300/25',
  },
  gold: {
    border: 'border-sky-300/22 hover:border-sky-300/45',
    title: 'text-sky-300 drop-shadow-[0_0_14px_rgba(250,204,21,0.32)]',
    icon: 'text-sky-200 bg-sky-300/10 border-sky-300/25',
  },
  indigo: {
    border: 'border-indigo-300/22 hover:border-indigo-300/45',
    title: 'text-indigo-300 drop-shadow-[0_0_14px_rgba(129,140,248,0.34)]',
    icon: 'text-indigo-200 bg-indigo-300/10 border-indigo-300/25',
  },
  blue: {
    border: 'border-blue-300/22 hover:border-blue-300/45',
    title: 'text-blue-300 drop-shadow-[0_0_14px_rgba(96,165,250,0.34)]',
    icon: 'text-blue-200 bg-blue-300/10 border-blue-300/25',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden bg-[#020617] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(99,102,241,0.10),transparent_30%)]" />
      <div className="star-field absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="font-display text-2xl font-black tracking-normal text-transparent bg-[linear-gradient(110deg,#f8fafc,#7dd3fc,#38bdf8,#818cf8)] bg-clip-text sm:text-3xl">
              Technical Skills
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-400 shadow-[0_0_28px_rgba(37,99,235,0.35)]" />
            <p className="mt-5 text-xs italic text-slate-400">Technologies I work with</p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillCards.map((skill, index) => {
            const tone = toneClasses[skill.tone]

            return (
              <Reveal key={skill.title} delay={index * 0.06}>
                <motion.article
                  className={`group h-full min-h-64 rounded-[1.45rem] border ${tone.border} bg-white/[0.045] p-7 shadow-[0_26px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2`}
                  whileHover={{ scale: 1.015 }}
                >
                  <div className={`mb-7 grid h-13 w-13 place-items-center rounded-2xl border ${tone.icon}`}>
                    <skill.icon size={24} />
                  </div>
                  <h3 className={`font-display text-xs font-black uppercase tracking-[0.16em] ${tone.title}`}>
                    {skill.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/24 px-4 py-2 text-xs font-normal text-slate-200 shadow-inner shadow-white/5 transition group-hover:border-white/18 group-hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
