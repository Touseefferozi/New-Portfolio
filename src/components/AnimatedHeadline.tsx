"use client";

import { motion } from "framer-motion";

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

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function AnimatedHeadline({
  words,
  className,
  wordClassName,
  stagger = 0.08,
  delay = 0.05,
}: AnimatedHeadlineProps) {
  return (
    <motion.span
      className={className}
      aria-label={words.map((word) => word.text).join(" ")}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word.text}-${index}`}
          className={cx("inline-block", wordClassName, word.className)}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </motion.span>
  );
}
