import { AnimatePresence, motion } from 'framer-motion'

export default function Toast({ message }: { message: string | null }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200]" aria-live="polite">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="px-4 py-2.5 rounded-lg bg-[var(--color-surface-hi)] border border-[var(--color-border)] text-sm font-mono shadow-xl"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
