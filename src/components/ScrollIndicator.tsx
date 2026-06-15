"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(scrollTimeout);

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 10) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY - 10) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      // Hide indicator after 2 seconds of no scrolling
      scrollTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && scrollDirection && (
        <motion.div
          className="fixed right-8 bottom-8 z-50 flex flex-col items-center gap-3 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {scrollDirection === "down" && (
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="rounded-full border border-cyan-400/60 bg-cyan-500/10 p-3 backdrop-blur-sm">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Scrolling Down</span>
            </motion.div>
          )}

          {scrollDirection === "up" && (
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Scrolling Up</span>
              <div className="rounded-full border border-emerald-400/60 bg-emerald-500/10 p-3 backdrop-blur-sm">
                <svg
                  className="w-6 h-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
