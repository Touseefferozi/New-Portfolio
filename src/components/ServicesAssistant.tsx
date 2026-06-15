"use client"
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  open: boolean
  onClose: () => void
}

const services = [
  { title: 'MVP — SaaS', desc: 'Fast prototype to validate product-market fit.' },
  { title: 'Full‑stack Web App', desc: 'React + Next.js apps with serverless APIs.' },
  { title: 'Mobile App', desc: 'Cross-platform apps with React Native or Flutter.' },
  { title: 'Design System', desc: 'Reusable components, tokens and docs.' },
  { title: 'UX & Product Design', desc: 'User research, wireframes and high‑fi UI.' },
]

export default function ServicesAssistant({ open, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative z-10 w-full max-w-2xl rounded-2xl border border-neutral-800 bg-[#071014] p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">AI Services Assistant</h3>
                <p className="mt-1 text-sm text-slate-300">Select a service to see a quick plan or message the assistant.</p>
              </div>
              <button
                aria-label="Close services"
                onClick={onClose}
                className="ml-4 rounded-full bg-transparent p-2 text-slate-300 hover:bg-white/3"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <motion.button
                  key={s.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => {
                    // For now this simply shows a canned message — can be wired to real assistant
                    alert(`${s.title}\n\n${s.desc}\n\nExample deliverables:\n- Proposal & scope\n- Timeline (4–12 weeks)\n- Estimate & milestones`)
                  }}
                  className="text-left rounded-lg border border-neutral-800 bg-[#081217] p-4 text-sm shadow-sm hover:shadow-[0_10px_30px_rgba(0,255,122,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white">{s.title}</div>
                      <div className="mt-1 text-xs text-slate-400">{s.desc}</div>
                    </div>
                    <div className="ml-4 text-sm font-semibold text-[#7CFFB2]">Ask</div>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => alert('Starting a live chat with the AI assistant...')}
                className="rounded-full bg-gradient-to-r from-[#00ff7a]/20 to-[#00ff7a]/10 px-4 py-2 text-sm font-semibold text-[#7CFFB2] border border-[#083826]"
              >
                Message Assistant
              </button>
              <button onClick={onClose} className="rounded-full px-4 py-2 text-sm text-slate-300 bg-transparent border border-neutral-800">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
