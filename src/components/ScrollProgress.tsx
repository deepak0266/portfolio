import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScroll'

export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent" aria-hidden="true">
      <motion.div
        className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-cyan)]"
        style={{ scaleX: progress, transformOrigin: '0% 50%' }}
      />
    </div>
  )
}
