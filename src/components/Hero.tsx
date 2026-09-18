"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import RouteTransitionLink from "@/components/RouteTransitionLink";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import FloatingOrbs from "@/components/FloatingOrbs";
import SkillsMarquee from "@/components/SkillsMarquee";
import { projectImages } from "@/components/projectImages";

type HeroProjectSlide = {
  title: string;
  category: string;
  website: string;
  image: StaticImageData;
};

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const sliderRegionRef = useRef<HTMLDivElement | null>(null);
  const sliderInView = useInView(sliderRegionRef, { amount: 0.2 });

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;

    if (sliderInView) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  }, [sliderInView]);

  const skillTags = [
    "AI Chatbots",
    "AI Automation",
    "OpenAI / LLMs",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "MongoDB",
    "API Integration",
    "SaaS Products",
  ];

  const projectSlides: HeroProjectSlide[] = [
    {
      title: "The DevSpark",
      category: "AI SaaS Platform",
      website: "thedevspark.com",
      image: projectImages.theDevspark,
    },
    {
      title: "LearnAI",
      category: "AI Learning Platform",
      website: "LearnAI Platform",
      image: projectImages.learnAi,
    },
    {
      title: "HNYDC Global",
      category: "Corporate Website",
      website: "hnydc-global.vercel.app",
      image: projectImages.hnydcGlobal,
    },
    {
      title: "Backpack Wander",
      category: "Industrial Engineering",
      website: "backpackwander.com",
      image: projectImages.backpackWander,
    },
    {
      title: "Rocrita",
      category: "E-commerce",
      website: "Rocrita Beauty",
      image: projectImages.rocrita,
    },
  ];

  return (
    <section
      id="home"
      className="site-container relative flex min-h-[min(88vh,920px)] items-center justify-center pb-10 pt-20 sm:pb-14 sm:pt-28 md:pb-16 md:pt-32"
    >
      <FloatingOrbs />

      <div className="relative z-10 flex w-full max-w-344 flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-4 max-w-[20rem] text-[0.65rem] font-medium uppercase tracking-[0.22em] text-emerald-300/90 sm:mb-7 sm:max-w-none sm:text-xs sm:tracking-[0.28em]"
        >
          Full-Stack Developer · AI Engineer
        </motion.p>

        <h1 className="max-w-5xl px-1 text-[1.65rem] font-bold leading-[1.18] text-white sm:text-4xl md:text-[2.75rem] lg:text-[3.5rem]">
          <AnimatedHeadline
            words={[
              { text: "Technology," },
              { text: "Design," },
              { text: "and" },
              { text: "Strategy" },
              { text: "to" },
              { text: "Build" },
              { text: "Your" },
              { text: "Next" },
              { text: "Digital", className: "text-emerald-300" },
              { text: "Success.", className: "text-emerald-300" },
            ]}
            className="inline-flex flex-wrap justify-center gap-x-1.5 gap-y-1 sm:gap-x-3"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-4 max-w-2xl px-1 text-sm leading-7 text-slate-300/95 sm:mt-7 sm:text-base md:text-lg md:leading-8"
        >
          Clean interfaces and production-ready builds — crafted for clarity,
          speed, and results that feel effortless to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-7 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <RouteTransitionLink
            href="/portfolio"
            className="w-full rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-center text-base font-medium text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto sm:px-10 sm:py-3 sm:text-lg"
          >
            View Work
          </RouteTransitionLink>
          <RouteTransitionLink
            href="/contact"
            className="w-full rounded-full bg-emerald-500 px-7 py-3.5 text-center text-base font-medium text-slate-950 transition hover:bg-emerald-400 sm:w-auto sm:px-10 sm:py-3 sm:text-lg"
          >
            Hire Me
          </RouteTransitionLink>
        </motion.div>

        <SkillsMarquee items={skillTags} className="mt-8 w-full sm:mt-14" />

        <div
          ref={sliderRegionRef}
          className="hero-projects-swiper mt-6 w-full sm:mt-9"
          aria-label="Portfolio projects slider"
        >
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
              if (!sliderInView) {
                swiper.autoplay?.stop();
              }
            }}
            centeredSlides
            loop
            grabCursor
            speed={680}
            slidesPerView="auto"
            spaceBetween={14}
            autoplay={{
              delay: 4500,
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
            {projectSlides.map((project, index) => (
              <SwiperSlide key={project.title}>
                <article className="hero-project-card group relative overflow-hidden rounded-[1.1rem] border border-white/12 bg-slate-950/80 p-2 sm:rounded-[1.35rem] sm:p-4">
                  <div className="relative box-border flex h-full w-full min-h-56 flex-col overflow-hidden rounded-xl bg-slate-950/80 p-2 sm:min-h-105 sm:rounded-2xl sm:p-3">
                    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-2 border-b border-white/10 bg-slate-950/90 px-2.5 py-1.5 sm:px-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-rose-400/90" />
                        <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                        <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                      </div>
                      <span className="max-w-[58%] truncate text-[0.58rem] font-medium uppercase tracking-[0.12em] text-slate-300/90 sm:max-w-none sm:text-[0.62rem] sm:tracking-[0.16em]">
                        {project.website}
                      </span>
                    </div>
                    <div className="relative flex min-h-44 flex-1 items-center justify-center overflow-hidden rounded-lg bg-[#050914] sm:min-h-90 sm:rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                        quality={65}
                        sizes="(max-width: 640px) 92vw, (max-width: 960px) 90vw, 720px"
                        className="block h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute left-2 top-9 rounded-full border border-white/15 bg-black/45 px-2 py-0.5 text-[0.6rem] font-medium tracking-[0.12em] text-slate-100 sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[0.7rem] sm:tracking-[0.14em]">
                      {project.category}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-left sm:bottom-3 sm:left-3 sm:right-3">
                      <p className="text-sm font-semibold leading-6 text-white sm:text-base">{project.title}</p>
                      <p className="mt-0.5 truncate text-[0.65rem] uppercase tracking-[0.12em] text-slate-300/90 sm:mt-1 sm:text-xs sm:tracking-[0.16em]">
                        Live site: {project.website}
                      </p>
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
