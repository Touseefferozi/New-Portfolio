"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profilePhoto from "@/Images/ChatGPT Image Apr 26, 2026, 09_34_30 PM.png";
import RouteTransitionLink from "@/components/RouteTransitionLink";

export default function HeroAbout() {
  return (
    <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl sm:rounded-3xl">
            <Image
              src={profilePhoto}
              alt="Toseef Ferozi — Full-Stack Developer"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-top"
            />
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute -bottom-4 right-3 rounded-full border border-[#0f1f18] bg-[#07140f] px-3 py-2 text-[#7CFFB2] shadow-lg backdrop-blur-md sm:-bottom-6 sm:-right-4 sm:px-4"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00ff7a] sm:h-3 sm:w-3" />
              <span className="text-xs font-medium sm:text-sm">Let’s Talk</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <motion.h1
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          A creative developer & digital designer
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8"
        >
          I build immersive digital experiences focused on product usability and delightful
          interactions — combining design systems, animation and thoughtful engineering to ship
          premium web products.
        </motion.p>

        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <RouteTransitionLink
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[#083826] bg-linear-to-r from-[#00ff7a]/20 to-[#00ff7a]/10 px-5 py-3.5 text-[#7CFFB2] shadow-[0_10px_30px_rgba(0,255,122,0.08)] transition hover:shadow-[0_12px_40px_rgba(0,255,122,0.12)] sm:w-auto sm:py-3"
            >
              <span className="font-semibold">Start a Project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90" aria-hidden>
                <path d="M5 12h14" stroke="#7CFFB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5l7 7-7 7" stroke="#7CFFB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </RouteTransitionLink>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="w-full rounded-full border border-neutral-800 bg-[#0b0d0e] px-4 py-3 text-sm text-slate-300 sm:w-auto sm:py-2"
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </section>
  );
}
