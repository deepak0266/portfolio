import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck, FiSend } from 'react-icons/fi'
import Section from '../components/Section'
import Toast from '../components/Toast'
import { profile } from '../data/resume'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setToast('Email copied to clipboard')
      setTimeout(() => setCopied(false), 2000)
      setTimeout(() => setToast(null), 2500)
    } catch {
      setToast('Could not copy — email is ' + profile.email)
      setTimeout(() => setToast(null), 3000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="contact"
      eyebrow="07 · Contact"
      title="Let's talk"
      description="Open to full-stack and backend-focused roles. The fastest way to reach me is email."
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <button
            onClick={copyEmail}
            className="w-full section-card p-5 flex items-center justify-between gap-3 text-left"
          >
            <span className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-[var(--color-cyan)]/10 border border-[var(--color-cyan)]/30 flex items-center justify-center text-[var(--color-cyan)]">
                <FiMail size={17} />
              </span>
              <span>
                <span className="block font-display font-semibold text-sm">Email</span>
                <span className="block text-xs text-[var(--color-muted)] font-mono mt-0.5">
                  {profile.email}
                </span>
              </span>
            </span>
            {copied ? <FiCheck className="text-[var(--color-cyan)]" /> : <FiCopy className="text-[var(--color-dim)]" />}
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="section-card flex items-center gap-3 p-5"
          >
            <span className="w-10 h-10 rounded-lg bg-[var(--color-cyan)]/10 border border-[var(--color-cyan)]/30 flex items-center justify-center text-[var(--color-cyan)]">
              <FiLinkedin size={17} />
            </span>
            <span>
              <span className="block font-display font-semibold text-sm">LinkedIn</span>
              <span className="block text-xs text-[var(--color-muted)] font-mono mt-0.5">
                linkedin.com/in/deepak0266
              </span>
            </span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="section-card flex items-center gap-3 p-5"
          >
            <span className="w-10 h-10 rounded-lg bg-[var(--color-cyan)]/10 border border-[var(--color-cyan)]/30 flex items-center justify-center text-[var(--color-cyan)]">
              <FiGithub size={17} />
            </span>
            <span>
              <span className="block font-display font-semibold text-sm">GitHub</span>
              <span className="block text-xs text-[var(--color-muted)] font-mono mt-0.5">
                github.com/deepak0266
              </span>
            </span>
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-4"
        >
          <p className="text-xs text-[var(--color-dim)] font-mono">
            This form opens your email client with the message pre-filled — this site has no backend.
          </p>
          <div>
            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wide text-[var(--color-muted)] mb-1.5">
              Name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2.5 text-sm outline-none focus:border-[var(--color-cyan)] transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-[var(--color-muted)] mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2.5 text-sm outline-none focus:border-[var(--color-cyan)] transition-colors"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide text-[var(--color-muted)] mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2.5 text-sm outline-none focus:border-[var(--color-cyan)] transition-colors resize-none"
              placeholder="What are you building?"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium hover:brightness-110 transition"
          >
            <FiSend size={14} /> Send message
          </button>
        </motion.form>
      </div>

      <Toast message={toast} />
    </Section>
  )
}
