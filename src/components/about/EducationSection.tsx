"use client";

import { motion } from "framer-motion";

const education = [
  {
    period: "June 2023 — Continue",
    title: "Bachelor in Software Engineering",
    institute: "Virtual University",
    badge: "VU",
    badgeClass: "from-emerald-400 to-cyan-400 text-slate-950",
    focus: "Degree · Software Engineering",
    description:
      "Currently enrolled in the BSCS / Software Engineering program, actively building strong foundations in software development methodologies, modern web technologies, and industry best practices.",
  },
  {
    period: "Sep 2018 — July 2022",
    title: "Bachelor of Science (BSc)",
    institute: "Affiliate College of SU",
    badge: "SU",
    badgeClass: "from-sky-400 to-blue-500 text-slate-950",
    focus: "Degree · Physics & Mathematics",
    description:
      "Completed with Second Division, majoring in Physics and Mathematics. This academic path strengthened analytical thinking and problem-solving skills that I apply in software engineering every day.",
  },
  {
    period: "Diploma",
    title: "Full Stack Web & App Development",
    institute: "Saylani Mass IT Training",
    badge: "SM",
    badgeClass: "from-amber-300 to-orange-400 text-slate-950",
    focus: "Diploma · Full Stack",
    description:
      "Hands-on diploma covering full-stack web and mobile app development — frontend, backend, databases, and real project delivery with modern development workflows.",
  },
  {
    period: "Diploma",
    title: "Artificial Intelligence Diploma",
    institute: "PIAIC",
    badge: "AI",
    badgeClass: "from-violet-400 to-fuchsia-400 text-slate-950",
    focus: "Diploma · Artificial Intelligence",
    description:
      "AI-focused diploma covering intelligent systems, modern AI concepts, and practical application of AI tools for products like chatbots, automation, and smart web experiences.",
  },
];

export default function EducationSection() {
  return (
    <section aria-labelledby="education-heading">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm">Academics</p>
        <h3 id="education-heading" className="mt-3 text-2xl font-black text-white sm:text-4xl lg:text-5xl">
          Education
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-4 sm:text-lg sm:leading-9">
          Academic degrees and professional diplomas that shaped my skills in software, full-stack
          development, and AI.
        </p>
      </div>

      <div className="relative mt-10 space-y-6 sm:mt-12">
        <div
          className="absolute bottom-4 left-[1.65rem] top-4 hidden w-px bg-linear-to-b from-emerald-400/50 via-white/15 to-transparent sm:block"
          aria-hidden
        />

        {education.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.institute}`}
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
                  <h4 className="mt-2 text-lg font-bold text-white sm:text-2xl">{item.title}</h4>
                  <p className="mt-1 text-sm font-medium text-slate-300 sm:text-base">{item.institute}</p>
                </div>
                <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-300 sm:text-xs">
                  {item.period}
                </span>
              </div>

              <p className="mt-5 flex gap-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                <span>{item.description}</span>
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
