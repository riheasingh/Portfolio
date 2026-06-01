import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <p className="mb-3 text-xs font-normal uppercase tracking-[0.28em] text-coral-500 dark:text-coral-300">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      )}
    </motion.div>
  )
}
