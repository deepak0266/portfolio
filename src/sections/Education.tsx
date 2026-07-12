import { motion } from 'framer-motion'
import Section from '../components/Section'
import { education } from '../data/resume'

export default function Education() {
  return (
    <Section id="education" eyebrow="06 · Education" title="Academic background">
      <div className="space-y-4">
        {education.map((e, i) => (
          <motion.div
            key={e.school + e.period}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="section-card flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-5"
          >
            <div>
              <h3 className="font-display font-semibold">{e.degree}</h3>
              <p className="text-sm text-[var(--color-muted)] mt-1">{e.school}</p>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <p className="font-mono text-xs text-[var(--color-cyan)]">{e.period}</p>
              <p className="font-mono text-xs text-[var(--color-dim)] mt-1">{e.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
