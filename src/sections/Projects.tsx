import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import Section from '../components/Section'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/resume'

export default function Projects() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null)

  return (
    <Section
      id="projects"
      eyebrow="03 · Projects"
      title="Selected work"
      description="High-leverage systems built for real outcomes. Tap any card to reveal the idea, the breakthrough, and why it still matters."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.01, rotate: 0.3 }}
            whileTap={{ scale: 0.99 }}
            className="group project-card flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 overflow-hidden"
          >
            <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wide border border-[var(--color-border)] text-[var(--color-muted)] project-card-badge">
                {p.status}
              </span>
              <div className="flex gap-2">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live demo of ${p.name}`}
                    className="text-[var(--color-dim)] hover:text-[var(--color-cyan)] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={16} />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open source for ${p.name}`}
                    className="text-[var(--color-dim)] hover:text-[var(--color-cyan)] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={16} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-display text-lg font-semibold mb-2 relative z-10">{p.name}</h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4 flex-1 relative z-10">{p.tagline}</p>

            <div className="flex flex-wrap gap-2 mb-5 relative z-10">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-md text-[10px] font-mono bg-[var(--color-surface-hi)] text-[var(--color-muted)] border border-[var(--color-border)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="relative z-10 mb-5 text-xs uppercase tracking-[0.3em] text-[var(--color-cyan)] flex items-center gap-3">
              <span className="h-px flex-1 bg-[var(--color-border)]" />
              <span>built for impact</span>
              <span className="h-px flex-1 bg-[var(--color-border)]" />
            </div>

            <button
              onClick={() => setActive(p)}
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)] group-hover:gap-2.5 transition-all relative z-10"
            >
              Reveal the case study <FiArrowUpRight size={14} />
            </button>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  )
}
