import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-6 sm:px-10 scroll-mt-20" aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
            {eyebrow}
          </p>
          <h2 id={`${id}-heading`} className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-[var(--color-muted)] leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
