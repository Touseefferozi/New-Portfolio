"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Santosh",
    text: "Exceptional service from start to finish. The work was flawless and delivered right on time. Highly recommended.",
  },
  {
    name: "Aamir",
    text: "Communication was clear and updates were regular. The final website looked premium and performed fast.",
  },
  {
    name: "Sana",
    text: "Very reliable developer. Clean code, modern UI, and smooth delivery with zero hassle.",
  },
  {
    name: "Naveed",
    text: "Understood my business needs quickly and turned them into a polished product. Strongly recommended.",
  },
];

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="testimonial-card flex h-58 w-74 shrink-0 flex-col overflow-hidden rounded-4xl border border-white/10 bg-slate-900/65 p-5 sm:h-65 sm:w-84 sm:p-6">
      <div className="flex gap-1.5 text-lg text-amber-300 sm:text-xl">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <p className="mt-3 text-base leading-7 text-slate-200 sm:mt-4 sm:text-[1.2rem] sm:leading-8">
        “{text}”
      </p>
      <p className="mt-auto text-2xl font-bold text-white sm:text-3xl">{name}</p>
    </article>
  );
}

export default function Testimonials() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const visibleRef = useRef(false);
  const speed = 0.4;

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "100px", threshold: 0.05 },
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
  }, []);

  return (
    <section id="testimonials" className="site-container section-space reveal-section">
      <div className="rounded-3xl border border-white/10 bg-slate-950/55 py-10 sm:rounded-4xl sm:py-12 lg:py-16">
        <div className="px-4 text-center sm:px-8 lg:px-12">
          <h2 className="section-heading font-black text-white">Hear It from My Clients</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
            Who came with ideas. I built the solution.
          </p>
        </div>

        <div
          ref={rootRef}
          className="testimonials-marquee mt-10 sm:mt-12"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <div ref={trackRef} className="testimonials-marquee__inner">
            <div className="testimonials-marquee__group">
              {reviews.map((review) => (
                <ReviewCard key={`a-${review.name}`} name={review.name} text={review.text} />
              ))}
            </div>
            <div className="testimonials-marquee__group" aria-hidden="true">
              {reviews.map((review) => (
                <ReviewCard key={`b-${review.name}`} name={review.name} text={review.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
