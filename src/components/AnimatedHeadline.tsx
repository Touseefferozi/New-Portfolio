"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeadlineWord = {
  text: string;
  className?: string;
};

type AnimatedHeadlineProps = {
  words: HeadlineWord[];
  className?: string;
  wordClassName?: string;
  stagger?: number;
  delay?: number;
};

export default function AnimatedHeadline({
  words,
  className,
  wordClassName,
  stagger = 0.08,
  delay = 0.05,
}: AnimatedHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      filter: shouldReduceMotion ? "none" : "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.span
      className={className}
      aria-label={words.map((word) => word.text).join(" ")}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word.text}-${index}`}
          className={`inline-block ${word.className ?? wordClassName ?? ""}`.trim()}
          variants={item}
        >
          {word.text}
          {index < words.length - 1 ? " " : null}
        </motion.span>
      ))}
    </motion.span>
  );
}