"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useCount(end: number, duration = 1.2) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      setValue(Math.round(p * end));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return value;
}

export default function CommunitySection() {
  const members = useCount(5200);
  const events = useCount(27);
  const years = useCount(5);

  return (
    <div className="rounded-2xl border border-neutral-800 bg-[#071014] p-5 sm:p-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold sm:text-4xl">Community & Impact</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:mt-4 sm:text-base sm:leading-8">
            I organise meetups, mentor designers and devs, and run collaborative workshops that
            bridge design and engineering.
          </p>
          <div className="mt-5 sm:mt-6">
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[#083826] bg-[#00ff7a]/10 px-5 py-3 text-[#7CFFB2] sm:w-auto"
            >
              Join Community
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:flex sm:items-center sm:justify-around">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#7CFFB2] sm:text-3xl">
              {members >= 1000 ? `${Math.floor(members / 1000)}k+` : members}
            </div>
            <div className="mt-1 text-xs text-slate-400 sm:text-sm">Members</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-[#7CFFB2] sm:text-3xl">{events}+</div>
            <div className="mt-1 text-xs text-slate-400 sm:text-sm">Events</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-[#7CFFB2] sm:text-3xl">{years}y</div>
            <div className="mt-1 text-xs text-slate-400 sm:text-sm">Running</div>
          </div>
        </div>
      </div>
    </div>
  );
}
