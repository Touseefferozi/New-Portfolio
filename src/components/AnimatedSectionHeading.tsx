"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimatedSectionHeadingProps = {
  label: string;
  title: string;
  description: string;
  className?: string;
};

export default function AnimatedSectionHeading({ label, title, description, className }: AnimatedSectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mb-3 text-xs uppercase tracking-[0.26em] text-cyan-300 sm:mb-4 sm:text-sm sm:tracking-[0.3em]"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="max-w-5xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="mt-4 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9"
      >
        {description}
      </motion.p>
    </motion.header>
  );
}