import { AnimatePresence, motion } from 'framer-motion'
import { Code2, ExternalLink, X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/70 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl dark:bg-slate-900"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-2xl bg-white/90 text-slate-700 shadow-soft transition hover:text-coral-500 dark:bg-slate-950/80 dark:text-white"
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.color}`}>
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-contain object-center"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,0.38),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
                  <project.icon className="absolute bottom-7 right-8 h-24 w-24 text-white/90" strokeWidth={1.5} />
                </>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-normal uppercase tracking-[0.22em] text-coral-500 dark:text-coral-300">
                Project Details
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.details}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-normal text-slate-700 dark:bg-white/10 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                ) : (
                  <span className="btn-primary pointer-events-none opacity-55">
                    <ExternalLink size={17} />
                    Live Soon
                  </span>
                )}
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                  <Code2 size={17} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
