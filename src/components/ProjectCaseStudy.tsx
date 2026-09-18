"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioProject } from "./portfolioData";
import {
  getProjectLiveUrl,
  getProjectSeo,
  portfolioProjects,
} from "./portfolioData";
import RouteTransitionLink from "@/components/RouteTransitionLink";

type ProjectCaseStudyProps = {
  project: PortfolioProject;
};

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const relatedProjects = portfolioProjects.filter((item) => item.slug !== project.slug).slice(0, 2);
  const liveUrl = getProjectLiveUrl(project);
  const seo = getProjectSeo(project);

  const info = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
    { label: "Services", value: project.services },
    { label: "Stack", value: project.stack },
    { label: "Category", value: project.category },
  ];

  return (
    <article className="site-container section-space">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400 sm:mb-10">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <RouteTransitionLink href="/" className="transition hover:text-white">
              Home
            </RouteTransitionLink>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <RouteTransitionLink href="/portfolio" className="transition hover:text-white">
              Case Studies
            </RouteTransitionLink>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-200">{project.title}</li>
        </ol>
      </nav>

      <header className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm">
          {project.category} Case Study · {project.year}
        </p>
        <h1 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
          {seo.description}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Visit Live Website
            <span aria-hidden="true">↗</span>
          </a>
          <RouteTransitionLink
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Start a Similar Project
          </RouteTransitionLink>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 sm:mt-12"
      >
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category} website case study hero screenshot`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover object-top"
          />
        </div>
      </motion.div>

      <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {info.map((item) => (
          <div key={item.label} className="bg-slate-950/90 px-5 py-6 sm:px-6">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</dt>
            <dd className="mt-2 text-base leading-7 text-white">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="space-y-12">
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-2xl font-bold text-white sm:text-3xl">
              Project Overview
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {project.overview}
            </p>
          </section>

          <section aria-labelledby="challenge-heading">
            <h2 id="challenge-heading" className="text-2xl font-bold text-white sm:text-3xl">
              The Challenge
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {project.problem}
            </p>
          </section>

          <section aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="text-2xl font-bold text-white sm:text-3xl">
              The Approach
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {project.solution}
            </p>
          </section>
        </div>

        <aside className="space-y-8 lg:pt-2">
          <section
            aria-labelledby="results-heading"
            className="rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-7"
          >
            <h2 id="results-heading" className="text-xl font-bold text-white sm:text-2xl">
              Key Results
            </h2>
            <ul className="mt-5 space-y-3">
              {(project.results ?? [
                "Clearer product storytelling and stronger visual hierarchy",
                "Responsive experience optimized for desktop and mobile users",
                "Performance-minded front-end structure for faster page loads",
              ]).map((result) => (
                <li key={result} className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="services-heading"
            className="rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-7"
          >
            <h2 id="services-heading" className="text-xl font-bold text-white sm:text-2xl">
              Services Delivered
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{project.services}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-slate-500">
              Technologies: {project.stack}
            </p>
          </section>
        </aside>
      </div>

      <section aria-labelledby="gallery-heading" className="mt-16">
        <h2 id="gallery-heading" className="text-2xl font-bold text-white sm:text-3xl">
          Visual Walkthrough
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-8 text-slate-400">
          Selected screens from the live {project.title} experience.
        </p>
        <div className="mt-8 space-y-6">
          {project.gallery.map((image, index) => (
            <motion.figure
              key={`${image}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950"
            >
              <div className="relative aspect-video">
                <Image
                  src={image}
                  alt={`${project.title} case study screenshot ${index + 1} showing ${project.category.toLowerCase()} interface design`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-top"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="related-heading"
        className="mt-16 border-t border-white/10 pt-12"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="related-heading" className="text-2xl font-bold text-white sm:text-3xl">
            More Case Studies
          </h2>
          <RouteTransitionLink
            href="/portfolio"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400 transition hover:text-white"
          >
            Browse all →
          </RouteTransitionLink>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {relatedProjects.map((item) => (
            <RouteTransitionLink
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition hover:border-emerald-300/30"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} case study`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-300/90">
                  {item.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-400">{item.description}</p>
              </div>
            </RouteTransitionLink>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-white/10 bg-white/4 px-6 py-10 text-center sm:px-10 sm:py-14">
        <h2 className="text-2xl font-bold text-white sm:text-4xl">
          Need a high-performing website like this?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          I design and develop SEO-friendly websites and product experiences with clear structure,
          fast performance, and conversion-focused layouts.
        </p>
        <RouteTransitionLink
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:text-base"
        >
          Discuss Your Project
        </RouteTransitionLink>
      </section>
    </article>
  );
}
