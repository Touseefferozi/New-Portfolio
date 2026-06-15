"use client"
import React from 'react'
import { motion } from 'framer-motion'

const awards = [
  { title: 'Design+Code Award', year: '2024' },
  { title: 'Best Interactive Portfolio', year: '2023' },
  { title: 'Open Source Contributor', year: '2022' },
]

export default function AwardsList() {
  return (
    <div>
      <h3 className="text-3xl font-bold">Awards & Recognition</h3>
      <div className="mt-6 space-y-4">
        {awards.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-4 rounded-xl bg-[#071013] border border-neutral-800 flex items-center justify-between"
          >
            <div>
              <div className="font-semibold">{a.title}</div>
              <div className="text-sm text-slate-400">Recognized for excellence in product design</div>
            </div>
            <div className="text-sm text-slate-300 font-medium">{a.year}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
