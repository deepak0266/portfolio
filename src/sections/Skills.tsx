import { motion } from 'framer-motion'
import Section from '../components/Section'
import { skills } from '../data/resume'

export default function Skills() {
  const categories = Object.entries(skills)

  return (
    <Section
      id="skills"
      eyebrow="04 · Skills"
      title="Technical toolkit"
      description="Grouped by where each tool sits in the stack, not by how well I can talk about it."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(([category, list], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="section-card p-5"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--color-cyan)] mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {list.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1.5 rounded-md text-xs bg-[var(--color-surface-hi)] border border-[var(--color-border)] text-[var(--color-text)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
