"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

export default function FramerScrollbar() {
  const { scrollYProgress } = useScroll();
  const [trackHeight, setTrackHeight] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(92);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const visibleRatio = pageHeight > 0 ? viewportHeight / pageHeight : 1;
      const nextTrackHeight = Math.max(viewportHeight - 40, 180);
      const dynamicThumb = Math.round(nextTrackHeight * visibleRatio);

      setTrackHeight(nextTrackHeight);
      setThumbHeight(Math.max(68, Math.min(136, dynamicThumb)));
    };

    calculate();
    window.addEventListener("resize", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
    };
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const markActive = () => {
      setIsActive(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsActive(false), 700);
    };

    window.addEventListener("scroll", markActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", markActive);
      clearTimeout(timeoutId);
    };
  }, []);

  const maxThumbTravel = useMemo(() => Math.max(trackHeight - thumbHeight, 0), [trackHeight, thumbHeight]);
  const thumbY = useTransform(scrollYProgress, [0, 1], [0, maxThumbTravel]);
  const smoothThumbY = useSpring(thumbY, { stiffness: 140, damping: 24, mass: 0.18 });

  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);
  const smoothGlowOpacity = useSpring(glowOpacity, { stiffness: 150, damping: 25 });

  useMotionValueEvent(scrollYProgress, "change", () => {
    setIsActive(true);
  });

  if (trackHeight <= 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed right-2 top-5 z-80 hidden md:block" aria-hidden="true">
      <motion.div
        className="relative w-2.5 overflow-hidden rounded-full border border-sky-300/20 bg-[#050a14]/90 p-0.5"
        style={{ height: trackHeight }}
        animate={{ boxShadow: isActive ? "0 0 24px rgba(56,189,248,0.25)" : "0 0 0 rgba(56,189,248,0)" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <div className="absolute inset-0.5 rounded-full bg-linear-to-b from-[#070e1d] via-[#050b18] to-[#070e1d]" />

        <motion.div
          className="absolute left-0.5 w-1 rounded-full bg-linear-to-b from-sky-300 via-sky-400 to-cyan-300"
          style={{
            y: smoothThumbY,
            height: thumbHeight,
            boxShadow: "0 0 12px rgba(56,189,248,0.35), 0 0 28px rgba(125,211,252,0.22)",
          }}
          animate={{ scaleX: isActive ? 1.08 : 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />

        <motion.div
          className="absolute left-px w-1.5 rounded-full bg-sky-200/45 blur-xs"
          style={{ y: smoothThumbY, height: thumbHeight, opacity: smoothGlowOpacity }}
        />
      </motion.div>
    </div>
  );
}
