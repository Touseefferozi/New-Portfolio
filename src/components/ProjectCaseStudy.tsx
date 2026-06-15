"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioProject } from "./portfolioData";
import { portfolioProjects } from "./portfolioData";
import RouteTransitionLink from "@/components/RouteTransitionLink";

type ProjectCaseStudyProps = {
  project: PortfolioProject;
};

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const relatedProjects = portfolioProjects.filter((item) => item.slug !== project.slug).slice(0, 2);

  const info = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
    { label: "Services", value: project.services },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="site-container section-space"
    >
      <div className="mx-auto mb-8 flex max-w-xl justify-center sm:mb-12">
        <RouteTransitionLink
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
        >
          <span aria-hidden="true">←</span>
          Back to Projects
        </RouteTransitionLink>
      </div>

      <section className="rounded-3xl bg-linear-to-b from-[#070d17] via-[#050912] to-[#050812] p-4 shadow-[0_30px_90px_rgba(2,6,23,0.62)] sm:p-6 lg:p-8">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="relative">
          <div className="relative z-10 image-frame aspect-video shadow-[0_24px_65px_rgba(2,6,23,0.72)]">
            <div className="image-frame__stage">
              <Image src={project.image} alt={project.title} fill priority sizes="(max-width: 1024px) 100vw, 1200px" className="image-frame__media" />
            </div>
          </div>
        </motion.div>

        <div className="mt-9 sm:mt-12">
          <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">{project.title}</h1>
        </div>

        <div className="mt-10 grid gap-0 rounded-3xl bg-white/4 sm:grid-cols-2">
          {info.map((item) => (
            <div
              key={item.label}
              className="border-white/12 px-5 py-6 odd:border-r sm:odd:border-r even:sm:border-r-0 nth-[-n+2]:border-b"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              <p className="mt-3 text-base leading-8 text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          <section className="max-w-4xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Project Overview</h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">{project.overview}</p>
          </section>

          <section className="max-w-4xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Problem</h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">{project.problem}</p>
          </section>

          <section className="max-w-4xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Solution</h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">{project.solution}</p>
          </section>
        </div>

        <div className="mt-14 space-y-6">
          {project.gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl bg-[#0b0f19] shadow-[0_24px_60px_rgba(2,6,23,0.58)] ${index > 0 ? "md:-mt-6" : ""}`}
            >
              <div className="image-frame aspect-video">
                <div className="image-frame__stage">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="image-frame__media"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {relatedProjects.map((item) => (
              <Link key={item.slug} href={`/portfolio/${item.slug}`} className="group block">
                <div className="overflow-hidden rounded-3xl bg-[#0b0f19] shadow-[0_20px_50px_rgba(2,6,23,0.5)]">
                  <div className="image-frame aspect-video">
                    <div className="image-frame__stage">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="image-frame__media"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
