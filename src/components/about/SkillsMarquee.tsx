"use client"
import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const tech = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Framer Motion',
  'Git',
  'Figma',
  'Node.js',
  'GraphQL',
  'Vercel',
]

export default function SkillsMarquee() {
  const controls = useAnimation()

  return (
    <div className="overflow-hidden py-6 rounded-2xl bg-gradient-to-r from-[#071014] to-transparent border border-neutral-800">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
      >
        {[...tech, ...tech].map((t, i) => (
          <div
            key={t + i}
            className="px-4 py-2 rounded-xl bg-[#081312] border border-neutral-800 text-slate-200 text-sm flex items-center gap-3 shadow-sm"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#002f1a] to-[#003b22] flex items-center justify-center text-sm font-semibold text-[#7CFFB2]">{t[0]}</span>
            <span className="font-medium">{t}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
