"use client"
import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function AboutUIEnhancements() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const glowX = useTransform(mouseX, (v) => `${v}px`)
  const glowY = useTransform(mouseY, (v) => `${v}px`)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#002419] via-transparent to-transparent opacity-40" />
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute left-1/2 top-1/3 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#00ff7a] to-[#00b36b] opacity-10 blur-3xl"
        />

        <div className="absolute inset-0 bg-[url('/portfolio/noise.png')] opacity-5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-grid-mask opacity-8" />
      </div>

      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-md bg-black/10 border-b border-neutral-800">
          <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
            <div className="text-white font-semibold">Toseef</div>
            <nav className="space-x-6 text-sm text-slate-300">
              <a href="/" className="hover:text-[#7CFFB2]">Home</a>
              <a href="/about" className="text-[#7CFFB2] font-medium">About</a>
              <a href="/portfolio" className="hover:text-[#7CFFB2]">Work</a>
              <a href="/contact" className="hover:text-[#7CFFB2]">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
