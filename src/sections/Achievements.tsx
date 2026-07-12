import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import Section from '../components/Section'
import { achievements } from '../data/resume'

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="05 · Achievements" title="Recognition & research">
      <div className="grid sm:grid-cols-2 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="section-card flex gap-4 p-5"
          >
            <span className="shrink-0 w-10 h-10 rounded-lg bg-[var(--color-cyan)]/10 border border-[var(--color-cyan)]/30 flex items-center justify-center text-[var(--color-cyan)]">
              <FiAward size={17} />
            </span>
            <div>
              <h3 className="font-display font-semibold mb-1">{a.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{a.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
