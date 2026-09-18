"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  getFeaturedCaseStudies,
  getProjectLiveUrl,
  type PortfolioProject,
} from "@/components/portfolioData";
import RouteTransitionLink from "@/components/RouteTransitionLink";

function CaseStudyCard({ project, index }: { project: PortfolioProject; index: number }) {
  const liveUrl = getProjectLiveUrl(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-white/10 py-8 first:border-t-0 first:pt-0 sm:py-10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
        <div className="order-2 lg:order-1">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
            <span className="text-emerald-300/90">{project.category}</span>
            <span aria-hidden="true" className="text-white/20">
              /
            </span>
            <span>{project.year}</span>
            <span aria-hidden="true" className="text-white/20">
              /
            </span>
            <span>{project.stack}</span>
          </div>

          <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            <RouteTransitionLink
              href={`/portfolio/${project.slug}`}
              className="transition hover:text-emerald-200"
            >
              {project.title}
            </RouteTransitionLink>
          </h3>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
            {project.description}
          </p>

          {project.results?.length ? (
            <ul className="mt-5 space-y-2">
              {project.results.slice(0, 2).map((result) => (
                <li key={result} className="flex gap-2 text-sm leading-7 text-slate-300 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <RouteTransitionLink
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Read Case Study
              <span aria-hidden="true">→</span>
            </RouteTransitionLink>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Live Site
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <RouteTransitionLink
          href={`/portfolio/${project.slug}`}
          className="order-1 block overflow-hidden rounded-2xl border border-white/10 bg-slate-950 lg:order-2"
        >
          <div className="relative aspect-16/10 overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} case study preview — ${project.category} website`}
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-top transition duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />
          </div>
        </RouteTransitionLink>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  const caseStudies = getFeaturedCaseStudies(4);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="site-container section-space"
    >
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm sm:tracking-[0.3em]">
          Case Studies
        </p>
        <h2
          id="case-studies-heading"
          className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Selected web design & development case studies
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
          Real client projects with clear challenges, practical solutions, and measurable outcomes —
          built for performance, clarity, and search visibility.
        </p>
      </div>

      <div className="mt-10 border-y border-white/10 sm:mt-14">
        {caseStudies.map((project, index) => (
          <CaseStudyCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="mt-8 flex justify-start sm:mt-10">
        <RouteTransitionLink
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:text-white"
        >
          View all case studies
          <span aria-hidden="true">→</span>
        </RouteTransitionLink>
      </div>
    </section>
  );
}
