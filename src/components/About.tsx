"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const leftReveal = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

const rightReveal = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const statReveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "start 62%"],
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 1],
    ["rgb(203 213 225)", "rgb(226 232 240)", "rgb(248 250 252)", "rgb(255 255 255)"]
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.9, 0.97, 1]);
  const textGlow = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [
      "0 0 0 rgba(16, 185, 129, 0)",
      "0 0 10px rgba(16, 185, 129, 0.12)",
      "0 0 16px rgba(16, 185, 129, 0.18)",
    ]
  );

  const stats = [
    ["4+", "Years of Experience"],
    ["100%", "Happy Clients"],
    ["1,000+", "Projects Completed"],
  ];

  return (
    <section id="about" ref={sectionRef} data-scroll-section className="site-container section-space">
      <motion.div
        data-scroll
        // data-scroll-speed="0.6"
        className="rounded-none border border-white/5 bg-slate-950/60 p-6 sm:p-10 lg:p-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.28 }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-12">
          <motion.div className="pt-1" variants={leftReveal}>
            <p className="text-2xl font-medium text-slate-400 sm:text-3xl lg:text-4xl">(About)</p>
          </motion.div>

          <motion.div variants={rightReveal}>
            <motion.p
              data-scroll
              // data-scroll-speed="0.25"
              className="about-highlight max-w-4xl text-base font-semibold leading-relaxed sm:text-lg md:text-xl lg:text-[1.85rem] lg:leading-normal"
              style={{
                color: textColor,
                opacity: textOpacity,
                textShadow: textGlow,
              }}
            >
              <span data-scroll /* data-scroll-repeat data-scroll-class="is-inview" */ className="about-highlight__line">
                I&apos;m a Full-Stack Web Developer building complete,
              </span>
              <span data-scroll /* data-scroll-repeat data-scroll-class="is-inview" */ className="about-highlight__line">
                production-ready web applications. I work across
              </span>
              <span data-scroll /* data-scroll-repeat data-scroll-class="is-inview" */ className="about-highlight__line">
                front-end and back-end to create fast, scalable, and
              </span>
              <span data-scroll /* data-scroll-repeat data-scroll-class="is-inview" */ className="about-highlight__line">
                reliable solutions. My focus is clean code, solid
              </span>
              <span data-scroll /* data-scroll-repeat data-scroll-class="is-inview" */ className="about-highlight__line">
                performance, and real-world usability.
              </span>
            </motion.p>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-px bg-white/10 md:mt-14 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <motion.div
              key={label}
              className="border border-white/5 bg-slate-900/45 px-6 py-10 text-center sm:px-8 sm:py-14"
              variants={statReveal}
            >
              <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{value}</p>
              <p className="mt-3 text-base text-slate-400 sm:mt-4 sm:text-lg">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
