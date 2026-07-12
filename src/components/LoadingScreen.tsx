import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--color-bg)]"
        >
          <motion.p
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.8 }}
            className="font-mono text-sm text-[var(--color-cyan)]"
          >
            {'> booting portfolio...'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
