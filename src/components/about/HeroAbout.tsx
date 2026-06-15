"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroAbout() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5">
        <div className="relative w-full max-w-md mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
            <img
              src="/portfolio/profile.jpg"
              alt="Toseef"
              className="w-full h-full object-cover aspect-[4/5] block"
            />
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute -right-6 -bottom-6 bg-[#07140f] text-[#7CFFB2] px-4 py-2 rounded-full shadow-lg border border-[#0f1f18] backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#00ff7a] animate-pulse" />
              <span className="text-sm font-medium">Let’s Talk</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <motion.h1
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl leading-tight font-extrabold text-white"
        >
          A creative developer & digital designer
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          I build immersive digital experiences focused on product usability and delightful
          interactions — combining design systems, animation and thoughtful engineering to ship
          premium web products.
        </motion.p>

        <div className="mt-8 flex items-center gap-6">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00ff7a]/20 to-[#00ff7a]/10 border border-[#083826] px-5 py-3 rounded-2xl text-[#7CFFB2] shadow-[0_10px_30px_rgba(0,255,122,0.08)] hover:shadow-[0_12px_40px_rgba(0,255,122,0.12)]"
            href="/contact"
          >
            <span className="font-semibold">Start a Project</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
              <path d="M5 12h14" stroke="#7CFFB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5l7 7-7 7" stroke="#7CFFB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-full bg-[#0b0d0e] border border-neutral-800 text-sm text-slate-300"
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </section>
  )
}
