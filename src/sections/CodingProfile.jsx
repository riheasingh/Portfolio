import Reveal from '../components/Reveal.jsx'
import { statsCards } from '../data/portfolio.js'

export default function CodingProfile() {
  return (
    <section id="coding-profile" className="section-pad bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Achievements
            </h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              GitHub Streak & LeetCode Profile
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {statsCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.08}>
              <article className="rounded-2xl border border-slate-200 bg-cream-50 p-4 shadow-soft dark:border-white/10 dark:bg-white/6 sm:p-6">
                <h3 className="mb-5 text-center text-sm font-bold text-slate-950 dark:text-white">{card.label}</h3>
                <div className="grid min-h-48 place-items-center overflow-hidden rounded-2xl bg-slate-950 p-3">
                  <img src={card.src} alt={card.label} className="max-h-full w-full max-w-xl object-contain" loading="lazy" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
