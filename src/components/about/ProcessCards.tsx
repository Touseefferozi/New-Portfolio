"use client"
import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Strategy', desc: 'Product and business discovery to shape the roadmap.' },
  { title: 'Wireframe', desc: 'Rapid low-fi wireframes for flow validation.' },
  { title: 'Design', desc: 'High-fidelity visual design and component library.' },
  { title: 'Development', desc: 'Robust, accessible, and performant implementation.' },
  { title: 'QA', desc: 'Polish, accessibility checks and performance tuning.' },
]

export default function ProcessCards() {
  return (
    <div>
      <h3 className="text-3xl font-bold">Design Process</h3>
      <p className="mt-3 text-slate-300 max-w-2xl">A dependable, repeatable process for building product-quality interfaces.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="p-6 rounded-2xl bg-[#071014] border border-neutral-800 shadow-sm hover:shadow-[0_12px_40px_rgba(0,255,122,0.06)]"
          >
            <div className="text-[#7CFFB2] font-semibold text-sm">0{i + 1}</div>
            <h4 className="mt-3 font-bold text-lg">{s.title}</h4>
            <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
