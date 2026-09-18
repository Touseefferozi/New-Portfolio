"use client";

import { motion } from "framer-motion";

type AnimatedSectionHeadingProps = {
  label: string;
  title: string;
  description: string;
  className?: string;
};

export default function AnimatedSectionHeading({
  label,
  title,
  description,
  className,
}: AnimatedSectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <p className="mb-3 text-xs uppercase tracking-[0.26em] text-cyan-300 sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
        {label}
      </p>
      <h2 className="max-w-5xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
        {description}
      </p>
    </motion.header>
  );
}
