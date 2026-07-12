import { motion } from 'framer-motion'
import Section from '../components/Section'

const VALUES = [
  {
    label: 'Correctness over speed',
    detail: 'Fraud-resistant systems need to be right before they are fast — geofencing and TOTP checks run before anything else does.',
  },
  {
    label: 'Own the whole path',
    detail: 'From REST API design to PM2 deployment on Linux, I stay involved from schema to production.',
  },
  {
    label: 'Automate the repeatable',
    detail: 'Manual workflows — content publishing, job applications — are candidates for automation, not routine.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="I engineer the infrastructure recruiters don't see on a demo call."
    >
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-[var(--color-muted)] leading-relaxed"
        >
          <p>
            I'm a System Engineer at OYO in Gurugram, working across React.js, Node.js, and MongoDB to
            ship internal production modules used by teams across the business. My work sits at the
            intersection of backend architecture and the operational systems that depend on it being
            correct — RBAC, deployment pipelines, and API contracts that other teams build on top of.
          </p>
          <p>
            Outside of my day-to-day role, I build systems that solve a real constraint I've run into
            myself: an offline-first attendance platform that stops proxy punch-ins with geofencing and
            time-boxed QR codes, and a browser-driven agent that applies to jobs across ATS platforms
            autonomously using an LLM.
          </p>
          <p>
            I hold a B.Tech in Computer Science from Dronacharya Group of Institutions, and I'm a
            published IEEE Xplore researcher (ICSCAI 2024) on blockchain and AI-powered frameworks for
            secure service workflows.
          </p>
        </motion.div>

        <div className="space-y-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="section-card p-5"
            >
              <p className="font-mono text-xs text-[var(--color-cyan)] mb-2">
                0{i + 1}
              </p>
              <h3 className="font-display font-semibold mb-1.5">{v.label}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{v.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
