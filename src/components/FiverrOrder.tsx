"use client";

import { motion } from "framer-motion";

const FIVERR_GIG_URL =
  "https://www.fiverr.com/touseef_ferozi/do-website-software-development-web-application-backend-front-end-deve";

const orderOptions = [
  {
    title: "Website Development",
    description: "Business sites, landing pages, and portfolios with clean UI and fast performance.",
  },
  {
    title: "iOS & Mobile Applications",
    description: "Native and cross-platform mobile apps with polished UI, smooth performance, and App Store–ready delivery.",
  },
  {
    title: "AI Chatbots & Automation",
    description: "Smart assistants, lead bots, and AI workflows that convert visitors into clients.",
  },
];

export default function FiverrOrder() {
  return (
    <section id="fiverr" aria-labelledby="fiverr-heading" className="site-container section-space reveal-section">
      <div className="overflow-hidden rounded-3xl border border-[#1dbf73]/25 bg-linear-to-br from-[#0b1f17] via-slate-950 to-slate-950 px-4 py-8 sm:rounded-4xl sm:px-10 sm:py-14 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1dbf73]/35 bg-[#1dbf73]/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#1dbf73] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-[#1dbf73]" aria-hidden />
              Order on Fiverr
            </div>

            <h2
              id="fiverr-heading"
              className="mt-4 text-[1.75rem] font-black leading-tight text-white sm:mt-5 sm:text-4xl lg:text-5xl"
            >
              Hire me on Fiverr for websites, apps & AI builds
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-lg sm:leading-9">
              Prefer ordering through Fiverr? You can place a secure order directly on my gig —
              clear packages, fast delivery, and professional communication.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href={FIVERR_GIG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1dbf73] px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-[#19a463] sm:px-7"
              >
                Order Now on Fiverr
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://www.fiverr.com/touseef_ferozi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-base font-medium text-white transition hover:border-white/30 hover:bg-white/5 sm:px-7"
              >
                View Fiverr Profile
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Seller: <span className="text-slate-300">touseef_ferozi</span>
            </p>
          </div>

          <div className="space-y-4">
            {orderOptions.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/4 p-5 transition hover:border-[#1dbf73]/35"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#1dbf73]/30 bg-[#1dbf73]/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#1dbf73]">
                    Gig
                  </span>
                </div>
              </motion.article>
            ))}

            <a
              href={FIVERR_GIG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-2xl border border-[#1dbf73]/40 bg-[#1dbf73]/12 px-5 py-4 text-sm font-semibold text-[#b7f5d4] transition hover:bg-[#1dbf73]/18"
            >
              <span>Continue to Fiverr checkout</span>
              <span aria-hidden className="text-base">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
