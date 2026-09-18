"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projectImages } from "@/components/projectImages";
import RouteTransitionLink from "@/components/RouteTransitionLink";

const capabilities = [
  {
    title: "AI Chatbots",
    description:
      "Custom conversational assistants for websites and products — lead capture, FAQs, booking flows, and 24/7 customer support.",
    points: ["Lead qualification", "Multi-language replies", "WhatsApp & web embed"],
  },
  {
    title: "AI Automation",
    description:
      "Workflow engines that turn inquiries into actions — auto replies, CRM updates, enrollment pipelines, and smart follow-ups.",
    points: ["Enrollment flows", "Lead routing", "Analytics dashboards"],
  },
  {
    title: "AI Product Experiences",
    description:
      "Intelligent product features like tutors, assistants, and recommendation layers built into modern web platforms.",
    points: ["AI tutors", "Smart search", "Personalized UX"],
  },
];

const aiProjects = [
  {
    title: "The DevSpark",
    label: "AI Enrollment Automation",
    description: "AI chat + workflows that convert student inquiries into enrollments.",
    href: "/portfolio/the-devspark",
    image: projectImages.theDevspark,
  },
  {
    title: "LearnAI",
    label: "AI Learning Platform",
    description: "Personalized tutoring, quizzes, and progress tracking powered by AI.",
    href: "/portfolio/learn-ai",
    image: projectImages.learnAi,
  },
];

export default function AiCapabilities() {
  return (
    <section id="ai" aria-labelledby="ai-heading" className="site-container section-space reveal-section">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm sm:tracking-[0.3em]">
          AI Solutions
        </p>
        <h2
          id="ai-heading"
          className="mt-3 text-[1.75rem] font-black leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          AI chatbots & intelligent systems that grow your business
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-4 sm:text-lg sm:leading-9">
          I design and ship production-ready AI experiences — from website chatbots to full automation
          platforms — with clean UI, reliable logic, and measurable results.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3 sm:mt-12 sm:gap-6">
        {capabilities.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="border-t border-emerald-300/25 pt-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">0{index + 1}</p>
            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              {item.description}
            </p>
            <ul className="mt-5 space-y-2">
              {item.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="mt-14 sm:mt-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Featured AI Projects</h3>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Real platforms built around chat, automation, and intelligent UX.
            </p>
          </div>
          <RouteTransitionLink
            href="/portfolio"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300 transition hover:text-white"
          >
            All case studies →
          </RouteTransitionLink>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <RouteTransitionLink
                href={project.href}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition hover:border-emerald-300/35"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.label}`}
                    fill
                    quality={70}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-emerald-300/30 bg-slate-950/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-emerald-100">
                    {project.label}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">{project.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                    View case study
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </RouteTransitionLink>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/4 px-6 py-8 sm:mt-14 sm:flex-row sm:items-center sm:px-8">
        <div className="max-w-xl">
          <p className="text-lg font-semibold text-white sm:text-xl">
            Need an AI chatbot or automation for your business?
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">
            From portfolio assistants to enrollment bots — I build AI features that feel polished and convert.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <RouteTransitionLink
            href="/contact"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Build My AI Bot
          </RouteTransitionLink>
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("open-chat-widget"));
            }}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Try Live Chat
          </button>
        </div>
      </div>
    </section>
  );
}
