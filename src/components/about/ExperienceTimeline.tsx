"use client"
import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Nebula Labs',
    role: 'Senior Frontend Engineer',
    duration: '2022 — Present',
    logo: '/portfolio/logos/nebula.png',
  },
  {
    company: 'Aurora Studio',
    role: 'UI/UX Engineer',
    duration: '2019 — 2022',
    logo: '/portfolio/logos/aurora.png',
  },
  {
    company: 'PixelCraft',
    role: 'Frontend Developer',
    duration: '2017 — 2019',
    logo: '/portfolio/logos/pixelcraft.png',
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-4">
        <h3 className="text-3xl font-bold">Work Experience</h3>
        <p className="mt-4 text-slate-300 max-w-md">
          I’ve worked with startups and product teams to ship polished user experiences and design
          systems used by thousands of customers.
        </p>
      </div>

      <div className="lg:col-span-8">
        <div className="space-y-6">
          {experiences.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-[#071013] border border-neutral-800 flex items-center gap-4 hover:shadow-[0_10px_30px_rgba(0,255,122,0.06)] hover:border-[#06241b]"
            >
              <div className="w-16 h-16 rounded-lg bg-[#061214] flex items-center justify-center border border-neutral-800">
                <img src={e.logo} alt={e.company} className="w-10 h-10 object-contain" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{e.role}</h4>
                  <span className="text-sm text-slate-400">{e.duration}</span>
                </div>
                <div className="text-sm text-slate-300 mt-1">{e.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
