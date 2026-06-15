"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function useCount(end: number, duration = 1.2) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf: number
    const start = performance.now()
    const step = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1)
      setValue(Math.round(p * end))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [end, duration])
  return value
}

export default function CommunitySection() {
  const members = useCount(5200)
  const events = useCount(27)
  const years = useCount(5)

  return (
    <div className="rounded-2xl bg-[#071014] border border-neutral-800 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2">
          <h3 className="text-4xl font-bold">Community & Impact</h3>
          <p className="mt-4 text-slate-300 max-w-xl">
            I organise meetups, mentor designers and devs, and run collaborative workshops that
            bridge design and engineering.
          </p>
          <div className="mt-6 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#00ff7a]/10 border border-[#083826] px-5 py-3 rounded-2xl text-[#7CFFB2]"
            >
              Join Community
            </motion.a>
          </div>
        </div>

        <div className="flex items-center justify-around">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#7CFFB2]">{members >= 1000 ? `${Math.floor(members/1000)}k+` : members}</div>
            <div className="text-sm text-slate-400 mt-1">Members</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-[#7CFFB2]">{events}+</div>
            <div className="text-sm text-slate-400 mt-1">Events</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-[#7CFFB2]">{years}y</div>
            <div className="text-sm text-slate-400 mt-1">Running</div>
          </div>
        </div>
      </div>
    </div>
  )
}
