import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import Section from '../components/Section'
import { experience } from '../data/resume'

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title="Work history"
      description="Two roles at OYO, tracing from intern to full-time system engineer."
    >
      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--color-border)]" aria-hidden="true" />
        <div className="space-y-4">
          {experience.map((job, i) => {
            const open = openIndex === i
            return (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10"
              >
                <span
                  className={`absolute left-0 top-1.5 w-[31px] h-[31px] rounded-full border-2 flex items-center justify-center ${
                    job.status === 'current'
                      ? 'border-[var(--color-cyan)] bg-[var(--color-bg)]'
                      : 'border-[var(--color-border)] bg-[var(--color-surface)]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      job.status === 'current' ? 'bg-[var(--color-cyan)]' : 'bg-[var(--color-dim)]'
                    }`}
                  />
                </span>

                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="w-full text-left section-card overflow-hidden"
                  aria-expanded={open}
                >
                  <div className="flex items-center justify-between gap-4 p-5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-semibold">{job.role}</h3>
                        {job.status === 'current' && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wide bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] border border-[var(--color-cyan)]/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[var(--color-muted)] mt-1">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs text-[var(--color-dim)] hidden sm:block">
                        {job.period}
                      </span>
                      <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <FiChevronDown className="text-[var(--color-muted)]" />
                      </motion.span>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <ul className="space-y-2.5 mb-4">
                        {job.points.map((point) => (
                          <li key={point} className="flex gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed">
                            <span className="text-[var(--color-cyan)] mt-1.5 shrink-0">▸</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--color-surface-hi)] text-[var(--color-muted)] border border-[var(--color-border)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
