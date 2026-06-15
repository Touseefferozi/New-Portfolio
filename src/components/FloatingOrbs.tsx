"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FloatingOrbs() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-28%] top-[8%] h-72 w-72 rounded-full bg-white/12 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-[-24%] top-[18%] h-72 w-72 rounded-full bg-emerald-500/14 blur-3xl sm:h-96 sm:w-96" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute left-[-28%] top-[8%] h-72 w-72 rounded-full bg-white/15 blur-3xl sm:h-96 sm:w-96"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 16, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute right-[-24%] top-[18%] h-72 w-72 rounded-full bg-emerald-500/14 blur-3xl sm:h-96 sm:w-96"
      />
      <motion.div
        animate={{ opacity: [0.18, 0.35, 0.18], y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute left-[18%] top-[46%] h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl sm:h-56 sm:w-56"
      />
    </div>
  );
}