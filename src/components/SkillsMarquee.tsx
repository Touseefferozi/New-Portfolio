"use client";

import { useEffect, useRef } from "react";

type SkillsMarqueeProps = {
  items: string[];
  speed?: number;
  className?: string;
};

export default function SkillsMarquee({ items, speed = 0.45, className = "" }: SkillsMarqueeProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const visibleRef = useRef(true);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "80px", threshold: 0.05 },
    );
    observer.observe(root);

    let rafId = 0;
    const tick = () => {
      if (visibleRef.current && !pausedRef.current) {
        const firstGroup = track.firstElementChild as HTMLElement | null;
        const loopWidth = firstGroup?.offsetWidth ?? 0;
        if (loopWidth > 0) {
          offsetRef.current -= speed;
          if (Math.abs(offsetRef.current) >= loopWidth) {
            offsetRef.current += loopWidth;
          }
          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }
      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div
      ref={rootRef}
      className={`skills-marquee ${className}`.trim()}
      aria-label="Skills"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div ref={trackRef} className="skills-marquee-inner">
        <div className="skills-marquee-group">
          {items.map((item) => (
            <span key={`a-${item}`} className="skills-marquee-pill">
              {item}
            </span>
          ))}
        </div>
        <div className="skills-marquee-group" aria-hidden="true">
          {items.map((item) => (
            <span key={`b-${item}`} className="skills-marquee-pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
