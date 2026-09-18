"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const leftReveal = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const rightReveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const statReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function About() {
  const stats = [
    ["4+", "Years of Experience"],
    ["100%", "Happy Clients"],
    ["1,000+", "Projects Completed"],
  ];

  return (
    <section id="about" className="site-container section-space">
      <motion.div
        className="rounded-none border border-white/5 bg-slate-950/60 p-6 sm:p-10 lg:p-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-12">
          <motion.div className="pt-1" variants={leftReveal}>
            <p className="text-2xl font-medium text-slate-400 sm:text-3xl lg:text-4xl">(About)</p>
          </motion.div>

          <motion.div variants={rightReveal}>
            <p className="about-highlight max-w-4xl text-base font-semibold leading-relaxed text-slate-100 sm:text-lg md:text-xl lg:text-[1.85rem] lg:leading-normal">
              <span className="about-highlight__line is-inview">
                I&apos;m a Full-Stack Web Developer building complete,
              </span>
              <span className="about-highlight__line is-inview">
                production-ready web applications. I work across
              </span>
              <span className="about-highlight__line is-inview">
                front-end and back-end to create fast, scalable, and
              </span>
              <span className="about-highlight__line is-inview">
                reliable solutions. My focus is clean code, solid
              </span>
              <span className="about-highlight__line is-inview">
                performance, and real-world usability.
              </span>
            </p>
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
