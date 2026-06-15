"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import personalPhoto from "@/Images/ChatGPT Image Apr 26, 2026, 09_34_30 PM.png";

const techStack = [
  { name: "React", angle: "-rotate-[52deg]", position: "left-2 top-16 sm:left-10 sm:top-12 lg:left-2 lg:top-12" },
  {
    name: "WordPress",
    angle: "-rotate-[22deg]",
    position: "left-24 top-2 sm:left-28 sm:top-1 lg:left-26 lg:top-0",
  },
  {
    name: "Laravel",
    angle: "-rotate-[24deg]",
    position: "left-36 top-20 sm:left-44 sm:top-16 lg:left-46 lg:top-14",
  },
  { name: "PHP", angle: "rotate-[18deg]", position: "left-20 top-20 sm:left-24 sm:top-20 lg:left-18 lg:top-18" },
  {
    name: "Node JS",
    angle: "-rotate-[30deg]",
    position: "left-38 top-36 sm:left-46 sm:top-32 lg:left-45 lg:top-30",
  },
  { name: "CSS 3", angle: "-rotate-[1deg]", position: "left-4 top-36 sm:left-10 sm:top-34 lg:left-0 lg:top-33" },
  { name: "HTML", angle: "-rotate-[1deg]", position: "left-0 top-52 sm:left-5 sm:top-52 lg:left-0 lg:top-50" },
  {
    name: "Bootstrap",
    angle: "-rotate-[1deg]",
    position: "left-24 top-52 sm:left-28 sm:top-52 lg:left-24 lg:top-50",
  },
  {
    name: "JavaScript",
    angle: "rotate-[12deg]",
    position: "left-52 top-50 sm:left-60 sm:top-50 lg:left-57 lg:top-49",
  },
];

export default function ImageShowcase() {
  return (
    <section id="images" data-scroll-section className="site-container section-space">
      <div className="relative">
        <div className="image-showcase-name image-showcase-name--ambient" aria-hidden="true" data-scroll /* data-scroll-speed="-1.2" */>
          <span className="image-showcase-name__blur">Toseef F</span>
          <span className="image-showcase-name__main">Toseef F</span>
          <span className="image-showcase-name__dots" />
        </div>

        <article className="group relative z-10 mx-auto w-full max-w-6xl overflow-hidden" data-scroll /* data-scroll-speed="0.6" */>
        <div className="relative w-full h-80 overflow-hidden rounded-lg bg-slate-950/70 sm:h-104 lg:h-128">
          <Image
            src={personalPhoto}
            alt="Toseef personal profile"
            fill
            sizes="(max-width: 1024px) 100vw, 1120px"
            className="relative z-10 h-full w-full rounded-lg object-cover transition duration-500 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-950/55 via-transparent to-transparent" />
        </div>
        </article>
      </div>

      <div className="mt-10 sm:mt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:gap-12">
          <div className="relative mx-auto h-80 w-full max-w-88 sm:h-88 sm:max-w-116 lg:mx-0 lg:h-88 lg:max-w-lg" data-scroll /* data-scroll-speed="0.9" */>
            <div className="absolute inset-x-0 bottom-2 h-px bg-linear-to-r from-emerald-300/50 via-cyan-300/60 to-fuchsia-300/45" />

            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`absolute ${tech.position}`}
                initial={{ y: -220, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.08 }}
              >
                <span
                  className={`inline-flex rounded-full border border-white/45 bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(2,6,23,0.7)] sm:px-5 sm:py-2.5 sm:text-xl ${tech.angle}`}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
                
          <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-3xl" data-scroll /* data-scroll-speed="0.45" */>
            <h3 className="text-3xl font-black leading-[1.05] text-white sm:text-4xl lg:text-6xl">My Advantage</h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
              From custom e-commerce stores to business websites, I use modern technologies and reliable web
              solutions to deliver fast, clean, and scalable experiences.
            </p>
          </div>
        </div>

        <div className="advantage-wave mt-10 sm:mt-14" aria-hidden="true">
          <div className="advantage-wave__line advantage-wave__line--one" />
          <div className="advantage-wave__line advantage-wave__line--two" />
          <div className="advantage-wave__line advantage-wave__line--three" />
          <div className="advantage-wave__glow" />
        </div>
      </div>
    </section>
  );
}
