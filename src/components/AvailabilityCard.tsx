"use client";

import RouteTransitionLink from "@/components/RouteTransitionLink";

export default function AvailabilityCard() {
  return (
    <section className="site-container section-space">
      <div className="rounded-4xl border border-white/10 bg-[#0f1114] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-16 lg:px-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2f3a28] bg-[#1d251c] px-4 py-2 text-sm text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <span className="relative flex h-3.5 w-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime-300/30 animate-ping" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(190,255,90,0.9)] animate-pulse" />
            </span>
            <span>Available for work</span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-[4.2rem]">
            Let&apos;s create your
            <br />
            next big idea.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I design and build sleek websites, product landing pages, and portfolio experiences that feel premium, fast, and conversion-focused.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <RouteTransitionLink
              href="/contact"
              className="rounded-full border border-white/80 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              Contact Me
            </RouteTransitionLink>
            <RouteTransitionLink
              href="/portfolio"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10"
            >
              View Work
            </RouteTransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
