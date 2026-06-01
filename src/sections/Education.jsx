import Reveal from '../components/Reveal.jsx'
import { education } from '../data/portfolio.js'

export default function Education() {
  return (
    <section id="education" className="section-pad relative overflow-hidden bg-[#061126] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.13),transparent_28%),radial-gradient(circle_at_82%_70%,rgba(14,165,233,0.12),transparent_28%)]" />
      <div className="star-field absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-black tracking-normal text-transparent bg-[linear-gradient(110deg,#f8fafc,#7dd3fc,#38bdf8,#818cf8)] bg-clip-text sm:text-4xl">
              Education
            </h2>
            <p className="mt-4 text-sm font-normal uppercase tracking-[0.28em] text-blue-300">Academic Journey</p>
            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-400 shadow-[0_0_28px_rgba(37,99,235,0.35)]" />
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_26px_80px_rgba(0,0,0,0.26)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-blue-300/35 hover:shadow-[0_30px_90px_rgba(37,99,235,0.16)]">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
                <span className="mb-7 grid h-14 w-14 place-items-center rounded-2xl border border-blue-300/25 bg-blue-300/10 text-blue-200 shadow-[0_0_32px_rgba(37,99,235,0.18)] transition group-hover:scale-105">
                  <item.icon size={24} />
                </span>
                {index === 0 && (
                  <p className="mb-3 text-sm font-normal text-blue-300">{item.title}</p>
                )}
                <h3 className="font-display text-base font-black tracking-normal text-white">{item.institute}</h3>
                <div className="mt-4 min-h-16 space-y-2 text-xs leading-6 text-slate-200">
                  {item.meta.split('|').map((line) => (
                    <p key={line.trim()}>{line.trim()}</p>
                  ))}
                </div>
                <p className="mt-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-normal text-cyan-200">
                  {item.result}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
