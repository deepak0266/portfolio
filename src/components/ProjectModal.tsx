import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import type { projects } from '../data/resume'

type Project = (typeof projects)[number]

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl my-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-[var(--color-border)]">
              <div>
                <p className="font-mono text-xs text-[var(--color-cyan)] uppercase tracking-wide mb-2">
                  {project.status}
                </p>
                <h3 id="project-modal-title" className="font-display text-2xl font-semibold">
                  {project.name}
                </h3>
                <p className="text-sm text-[var(--color-muted)] mt-1.5">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 p-2 rounded-md border border-[var(--color-border)] hover:border-[var(--color-cyan)] transition-colors"
              >
                <FiX size={16} />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-[var(--color-border)] p-3">
                    <p className="font-mono text-[9px] uppercase text-[var(--color-dim)] tracking-wide">
                      {m.label}
                    </p>
                    <p className="font-mono text-xs text-[var(--color-cyan)] mt-1">{m.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-display font-semibold text-sm mb-2 text-[var(--color-text)]">Architecture</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{project.architecture}</p>
              </div>

              <div>
                <h4 className="font-display font-semibold text-sm mb-2">Key features</h4>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed">
                      <span className="text-[var(--color-cyan)] mt-1.5 shrink-0">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-display font-semibold text-sm mb-2">Challenge</h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm mb-2">Solution</h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--color-surface-hi)] text-[var(--color-muted)] border border-[var(--color-border)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 p-6 border-t border-[var(--color-border)]">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium hover:brightness-110 transition"
                >
                  <FiExternalLink size={14} /> Live demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm font-medium hover:border-[var(--color-cyan)] transition"
                >
                  <FiGithub size={14} /> Source
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
