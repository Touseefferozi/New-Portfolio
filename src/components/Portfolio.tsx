"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioProjects } from "./portfolioData";
import AnimatedSectionHeading from "@/components/AnimatedSectionHeading";

const categories = Array.from(new Set(portfolioProjects.map((project) => project.category)));

function ProjectCard({ project }: { project: (typeof portfolioProjects)[number] }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      data-scroll
      // data-scroll-speed={cardParallaxSpeed}
      className="group block rounded-3xl transition duration-300 ease-out hover:-translate-y-1"
    >
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="group relative overflow-hidden rounded-3xl border border-white/12 bg-linear-to-b from-slate-900/85 to-slate-950/90 shadow-[0_20px_48px_rgba(2,6,23,0.58)] transition duration-300 ease-out hover:-translate-y-1 hover:border-emerald-300/35 hover:shadow-[0_28px_60px_rgba(16,185,129,0.16)]"
      >
        <div className="relative aspect-16/10 overflow-hidden rounded-[inherit]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="rounded-[inherit] object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-emerald-300/30 bg-slate-950/55 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-emerald-100 backdrop-blur-sm">
            {project.category}
          </div>
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/45 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.15em] text-slate-300 backdrop-blur-sm">
            {project.website}
          </div>
        </div>

        <div className="relative z-10 px-4 pb-5 pt-4 text-left sm:px-5 sm:pb-6">
          <h3 className="text-lg font-bold text-white sm:text-xl">{project.title}</h3>
          <p className="mt-2 truncate text-sm text-slate-300">{project.description}</p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
              {project.stack} • {project.year}
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:border-emerald-300/45 hover:bg-emerald-300/10">
              View Project
              <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" data-scroll-section className="site-container section-space">
      <AnimatedSectionHeading
        label="Portfolio"
        title="Featured Portfolio Projects – High-Quality Web Design & Development Case Studies"
        description="Explore real-world projects across web apps, business websites, and creative platforms."
        className="mb-8 rounded-4xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur sm:mb-10 sm:p-7 lg:p-8"
      />

      <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] text-emerald-100"
            >
              {category}
            </span>
          ))}
      </div>

      <div className="grid gap-5 sm:gap-6 lg:gap-7 md:grid-cols-2">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
