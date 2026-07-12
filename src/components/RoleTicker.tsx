import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROLES = [
  'System Engineer @ OYO',
  'Backend & REST API Design',
  'Offline-First Systems',
  'Automation with LLM Agents',
]

export default function RoleTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-7 overflow-hidden font-mono text-sm sm:text-base text-[var(--color-cyan)]">
      <AnimatePresence mode="wait">
        <motion.p
          key={ROLES[index]}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {'> '}
          {ROLES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
