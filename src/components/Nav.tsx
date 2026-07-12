import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi'
import { useActiveSection } from '../hooks/useScroll'
import { useTheme } from '../hooks/useTheme'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(LINKS.map((l) => l.id))
  const { theme, toggle } = useTheme()

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6 sm:px-10 h-16 flex items-center justify-between" aria-label="Primary">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display font-semibold text-lg tracking-tight"
          aria-label="Go to top"
        >
          deepak<span className="text-[var(--color-cyan)]">.</span>baghel
        </button>

        <ul className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  active === link.id
                    ? 'text-[var(--color-cyan)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                }`}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-md border border-[var(--color-border)] hover:border-[var(--color-cyan)] transition-colors"
          >
            {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
          <a
            href="/resume-deepak-baghel.pdf"
            download
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-md border border-[var(--color-border)] hover:border-[var(--color-cyan)] font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <FiDownload size={13} /> Resume
          </a>
          <button
            className="md:hidden p-2 rounded-md border border-[var(--color-border)]"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]"
          >
            <ul className="flex flex-col p-4 gap-1 font-mono text-sm uppercase tracking-wider">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-3 py-3 rounded-md ${
                      active === link.id ? 'text-[var(--color-cyan)]' : 'text-[var(--color-muted)]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
