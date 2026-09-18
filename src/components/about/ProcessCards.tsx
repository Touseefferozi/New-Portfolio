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
      <h3 className="text-2xl font-bold sm:text-3xl">Design Process</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        A dependable, repeatable process for building product-quality interfaces.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-2xl border border-neutral-800 bg-[#071014] p-5 shadow-sm hover:shadow-[0_12px_40px_rgba(0,255,122,0.06)] sm:p-6"
          >
            <div className="text-sm font-semibold text-[#7CFFB2]">0{i + 1}</div>
            <h4 className="mt-3 text-lg font-bold">{s.title}</h4>
            <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
