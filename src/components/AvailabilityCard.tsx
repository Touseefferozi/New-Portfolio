"use client";

import RouteTransitionLink from "@/components/RouteTransitionLink";

export default function AvailabilityCard() {
  return (
    <section id="contact" className="site-container section-space">
      <div className="rounded-3xl border border-white/10 bg-[#0f1114] px-4 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:rounded-4xl sm:px-10 sm:py-16 lg:px-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2f3a28] bg-[#1d251c] px-3.5 py-2 text-xs text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-4 sm:text-sm">
            <span className="relative flex h-3.5 w-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300/30" />
              <span className="relative h-2.5 w-2.5 animate-pulse rounded-full bg-lime-300 shadow-[0_0_10px_rgba(190,255,90,0.9)]" />
            </span>
            <span>Available for work</span>
          </div>

          <h2 className="text-[1.85rem] font-semibold leading-[1.1] text-white sm:text-5xl md:text-[4.2rem]">
            Let&apos;s create your
            <br />
            next big idea.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            I design and build sleek websites, product landing pages, and portfolio experiences that feel premium, fast, and conversion-focused.
          </p>

          <div className="mt-7 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:w-auto sm:flex-row sm:items-center">
            <RouteTransitionLink
              href="/contact"
              className="rounded-full border border-white/80 px-8 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              Contact Me
            </RouteTransitionLink>
            <a
              href="https://www.fiverr.com/touseef_ferozi/do-website-software-development-web-application-backend-front-end-deve"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#1dbf73]/40 bg-[#1dbf73]/15 px-8 py-3.5 text-center text-base font-semibold text-[#1dbf73] transition hover:bg-[#1dbf73]/25"
            >
              Order on Fiverr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
