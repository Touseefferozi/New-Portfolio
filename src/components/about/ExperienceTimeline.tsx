"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "The DevSpark",
    role: "Founder & Lead Engineer",
    duration: "2024 — Present",
    badge: "DS",
    badgeClass: "from-emerald-400 to-cyan-400 text-slate-950",
    focus: "AI Products · SaaS · Automation",
    highlights: [
      "Leading AI chatbot and enrollment automation platforms end-to-end",
      "Architecting scalable Next.js products for education and business growth",
      "Owning product strategy, UI systems, and delivery quality",
    ],
  },
  {
    company: "SkysoftTech",
    role: "Senior Full-Stack Lead",
    duration: "2022 — 2024",
    badge: "ST",
    badgeClass: "from-sky-400 to-blue-500 text-slate-950",
    focus: "Web Platforms · Product Engineering",
    highlights: [
      "Led top-level delivery of production web apps and client platforms",
      "Mentored developers and improved release quality across projects",
      "Built high-performance interfaces with modern React / Node stacks",
    ],
  },
  {
    company: "U&H Pvt Ltd",
    role: "Head of Web Development",
    duration: "2020 — 2022",
    badge: "UH",
    badgeClass: "from-amber-300 to-orange-400 text-slate-950",
    focus: "Business Websites · Digital Systems",
    highlights: [
      "Directed website and digital product delivery for business clients",
      "Owned architecture decisions, timelines, and stakeholder communication",
      "Shipped conversion-focused experiences with clean, maintainable code",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section aria-labelledby="experience-heading">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm">Career</p>
        <h3 id="experience-heading" className="mt-3 text-2xl font-black text-white sm:text-4xl lg:text-5xl">
          Work Experience
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-4 sm:text-lg sm:leading-9">
          Top-level roles across product, engineering, and AI-driven digital platforms — shipping
          systems used by real businesses and growing teams.
        </p>
      </div>

      <div className="relative mt-10 space-y-6 sm:mt-12">
        <div
          className="absolute bottom-4 left-[1.65rem] top-4 hidden w-px bg-linear-to-b from-emerald-400/50 via-white/15 to-transparent sm:block"
          aria-hidden
        />

        {experiences.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative grid gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-emerald-300/30 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-6 sm:rounded-3xl sm:p-6 lg:p-7"
          >
            <div className="flex items-start gap-4 sm:block">
              <div
                className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br text-sm font-black tracking-wide shadow-[0_10px_30px_rgba(16,185,129,0.12)] sm:h-16 sm:w-16 sm:text-base ${item.badgeClass}`}
              >
                {item.badge}
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-300/90">{item.focus}</p>
                  <h4 className="mt-2 text-lg font-bold text-white sm:text-2xl">{item.role}</h4>
                  <p className="mt-1 text-sm font-medium text-slate-300 sm:text-base">{item.company}</p>
                </div>
                <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-300 sm:text-xs">
                  {item.duration}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {item.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-slate-400 sm:text-base">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
