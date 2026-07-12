import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowDown } from 'react-icons/fi'
import { profile, stats } from '../data/resume'
import RoleTicker from '../components/RoleTicker'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 sm:px-10 pt-24 pb-16 bg-grid overflow-hidden"
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-[1.3fr_1fr] gap-14 items-center relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[var(--color-border)] font-mono text-xs text-[var(--color-muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-cyan)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-cyan)]" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4"
          >
            <RoleTicker />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-[var(--color-muted)] leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium text-sm hover:brightness-110 transition"
            >
              View projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-3 rounded-lg border border-[var(--color-border)] font-medium text-sm hover:border-[var(--color-cyan)] transition"
            >
              Get in touch
            </button>

            <div className="flex items-center gap-1 ml-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition"
              >
                <FiGithub size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition"
              >
                <FiLinkedin size={17} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition"
              >
                <FiMail size={17} />
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center gap-1.5 text-xs text-[var(--color-dim)] font-mono"
          >
            <FiMapPin size={12} /> {profile.location}
          </motion.p>
        </div>

        {/* Signature element: system status panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-sm overflow-hidden"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-hi)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
            <span className="ml-3 font-mono text-xs text-[var(--color-dim)]">system_status.log</span>
          </div>
          <div className="p-5 font-mono text-xs space-y-3">
            <p className="text-[var(--color-dim)]">$ query --engineer deepak.baghel --status</p>
            <div className="grid grid-cols-2 gap-4 py-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <p className="text-[var(--color-dim)] text-[10px] uppercase tracking-wide">{s.label}</p>
                  <p className="text-xl font-display text-[var(--color-cyan)] font-semibold mt-0.5">
                    {s.value}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="pt-3 border-t border-[var(--color-border)] space-y-1.5 text-[var(--color-muted)]">
              <p>
                <span className="text-[#22c55e]">●</span> production_deployment: <span className="text-[var(--color-text)]">stable</span>
              </p>
              <p>
                <span className="text-[#22c55e]">●</span> load_test: <span className="text-[var(--color-text)]">125 concurrent users passed</span>
              </p>
              <p>
                <span className="text-[#22c55e]">●</span> research: <span className="text-[var(--color-text)]">IEEE Xplore, ICSCAI 2024</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to about section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-dim)]"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <FiArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  )
}
