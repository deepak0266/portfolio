import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { profile } from '../data/resume'

const LINKS = ['about', 'experience', 'projects', 'skills', 'achievements', 'education', 'contact']

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 sm:px-10 py-10">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="font-display font-semibold">
            deepak<span className="text-[var(--color-cyan)]">.</span>baghel
          </p>
          <p className="text-xs text-[var(--color-dim)] font-mono mt-1">{profile.location}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wide text-[var(--color-muted)]">
            {LINKS.map((id) => (
              <li key={id}>
                <button
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--color-cyan)] transition-colors"
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md border border-[var(--color-border)] hover:border-[var(--color-cyan)] transition-colors">
            <FiGithub size={15} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md border border-[var(--color-border)] hover:border-[var(--color-cyan)] transition-colors">
            <FiLinkedin size={15} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 rounded-md border border-[var(--color-border)] hover:border-[var(--color-cyan)] transition-colors">
            <FiMail size={15} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="p-2 rounded-md border border-[var(--color-border)] hover:border-[var(--color-cyan)] transition-colors"
          >
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>

      <p className="mx-auto max-w-6xl mt-8 pt-6 border-t border-[var(--color-border)] text-xs text-[var(--color-dim)] font-mono">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  )
}
