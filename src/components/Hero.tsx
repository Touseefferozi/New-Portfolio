"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import RouteTransitionLink from "@/components/RouteTransitionLink";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import FloatingOrbs from "@/components/FloatingOrbs";
import ChatWidget from "@/components/ChatWidget";

type HeroProjectSlide = {
  title: string;
  category: string;
  website: string;
  image: string;
};

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  const skillTags = [
    "React.js",
    "UI CSS3 / Modern CSS",
    "Front-End Development",
    "HTML5",
    "API Integration",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "TypeScript",
    "Next.js",
    "Framer Motion",
  ];

  const projectSlides: HeroProjectSlide[] = [
    {
      title: "No-code Visual Build",
      category: "Web Platform",
      website: "webflow.com",
      image:
        "https://image.thum.io/get/width/1600/noanimate/https://webflow.com",
    },
    {
      title: "Design System Commerce",
      category: "Product Design",
      website: "stripe.com",
      image:
        "https://image.thum.io/get/width/1600/noanimate/https://stripe.com",
    },
    {
      title: "Team Knowledge Workspace",
      category: "SaaS Product",
      website: "notion.so",
      image:
        "https://image.thum.io/get/width/1600/noanimate/https://www.notion.so",
    },
    {
      title: "Frontend Cloud Experience",
      category: "Developer Platform",
      website: "vercel.com",
      image:
        "https://image.thum.io/get/width/1600/noanimate/https://vercel.com",
    },
    {
      title: "E-commerce Ecosystem",
      category: "Commerce",
      website: "shopify.com",
      image:
        "https://image.thum.io/get/width/1600/noanimate/https://shopify.com",
    },
    {
      title: "Creative Campaign Landing",
      category: "Agency Website",
      website: "adobe.com",
      image:
        "https://image.thum.io/get/width/1600/noanimate/https://www.adobe.com",
    },
  ];

  return (
    <section
      id="home"
      data-scroll-section
      className="site-container relative flex min-h-[88vh] items-center justify-center pb-14 pt-26 sm:pt-28 md:pb-16 md:pt-32"
    >
      <FloatingOrbs />
    
      <div data-scroll /* data-scroll-speed="1" */ className="relative z-10 flex w-full max-w-344 flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-900/70 px-4 py-2 text-xs text-slate-300 shadow-[0_0_20px_rgba(15,23,42,0.65)] backdrop-blur-xl sm:mb-7 sm:gap-3 sm:px-6 sm:py-2 sm:text-sm"
        >
          <span className="tracking-[0.22em] text-amber-300">★★★★★</span>
          <span>
            More than <strong className="font-semibold text-white">10,000+ </strong>
            happy Clients
          </span>
        </motion.div>

        <h1 className="text-3xl font-bold leading-[1.1] text-white sm:text-5xl md:text-[3.45rem] lg:text-[4.6rem]">
          <AnimatedHeadline
            words={[
              { text: "Design." },
              { text: "Code." },
              { text: "Impact.", className: "text-emerald-300" },
            ]}
            className="inline-flex flex-wrap justify-center gap-x-3"
            wordClassName="text-3xl font-bold leading-[1.1] sm:text-5xl md:text-[3.45rem] lg:text-[4.6rem]"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-5 max-w-3xl text-sm leading-7 text-slate-300/95 sm:mt-7 sm:text-base md:text-lg md:leading-8 lg:text-[1.35rem] lg:leading-[1.75]"
        >
          UI-focused design and development crafted to solve real problems
          through clear visuals, fast performance, and results-driven experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <RouteTransitionLink
            href="/portfolio"
            className="w-full rounded-full border border-white/15 bg-slate-900/70 px-7 py-3 text-base font-medium text-white transition hover:border-white/25 hover:bg-slate-800 sm:w-auto sm:px-10 sm:text-lg"
          >
            View Work
          </RouteTransitionLink>
          <a
            href="#contact"
            className="w-full rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 px-7 py-3 text-base font-medium text-white shadow-[0_0_28px_rgba(74,222,128,0.5)] transition hover:scale-[1.02] sm:w-auto sm:px-10 sm:text-lg"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Chat widget (floating) - replaces the previous View Services modal/button */}
        <ChatWidget />

        <div data-scroll /* data-scroll-speed="0.5" */ className="skills-marquee mt-10 w-full sm:mt-14" aria-label="Skills marquee">
          <div className="skills-marquee-track" aria-hidden="false">
            {skillTags.map((item) => (
              <span
                key={`track-a-${item}`}
                  className="shrink-0 whitespace-nowrap rounded-full border border-emerald-300/30 bg-emerald-500/12 px-3.5 py-1.5 text-xs text-emerald-50 sm:px-4 sm:py-2 sm:text-sm"
              >
                ✓ {item}
              </span>
            ))}
          </div>

          <div className="skills-marquee-track" aria-hidden="true">
            {skillTags.map((item) => (
              <span
                key={`track-b-${item}`}
                className="shrink-0 whitespace-nowrap rounded-full border border-emerald-300/30 bg-emerald-500/12 px-3.5 py-1.5 text-xs text-emerald-50 sm:px-4 sm:py-2 sm:text-sm"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <div data-scroll /* data-scroll-speed="0.35" */ className="hero-projects-swiper mt-7 w-full sm:mt-9" aria-label="Portfolio projects slider">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hero-swiper-nav hero-swiper-nav-left"
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={() => swiperRef.current?.slideNext()}
            className="hero-swiper-nav hero-swiper-nav-right"
          >
            <span aria-hidden="true">→</span>
          </button>
            
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            centeredSlides
            loop
            grabCursor
            speed={760}
            slidesPerView="auto"
            spaceBetween={26}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                spaceBetween: 20,
              },
              1024: {
                spaceBetween: 24,
              },
              1400: {
                spaceBetween: 28,
              },
            }}
          >
            {projectSlides.map((project) => (
              <SwiperSlide key={project.title}>
                <article className="hero-project-card group relative overflow-hidden rounded-[1.35rem] border border-white/18 bg-slate-950/85 p-3 sm:p-4 backdrop-blur-xl">
                  <div className="relative box-border flex h-full w-full min-h-105 flex-col overflow-hidden rounded-2xl bg-slate-950/80 p-2.5 sm:p-3">
                    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/85 px-3 py-1.5 backdrop-blur">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-rose-400/90" />
                        <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                        <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                      </div>
                      <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300/90">
                        {project.website}
                      </span>
                    </div>
                    <div className="relative flex min-h-90 flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#050914]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 960px) calc(100vw - 2.2rem - 40px), 860px"
                        className="block h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute left-3 top-3 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-[0.66rem] font-medium tracking-[0.14em] text-emerald-100 sm:text-[0.7rem]">
                      {project.category}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <p className="text-sm font-semibold leading-6 text-white sm:text-base">{project.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-300/90">Live style: {project.website}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
