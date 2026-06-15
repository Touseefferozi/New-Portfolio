"use client";

import Image from "next/image";
import { useState } from "react";

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageClassName?: string;
};

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Web Design",
    description: "I design clear, modern website layouts focused on usability and visual clarity.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80",
    imageClassName: "object-center",
  },
  {
    number: "02",
    title: "Front-End Development",
    description: "I build responsive, high-performance interfaces using modern web technologies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=80",
    imageClassName: "object-center",
  },
  {
    number: "03",
    title: "Back-End Development",
    description: "I create secure and scalable server-side systems to power robust applications.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80",
    imageClassName: "object-cover",
  },
  {
    number: "04",
    title: "Full-Stack Development",
    description: "I deliver end-to-end web solutions from architecture to deployment.",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1800&q=80",
    imageClassName: "object-top",
  },
  {
    number: "05",
    title: "Optimization & Maintenance",
    description: "I improve speed, reliability, and long-term stability for existing projects.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80",
    imageClassName: "object-center",
  },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" data-scroll-section className="site-container section-space">
      <div data-scroll /* data-scroll-speed="0.4" */ className="rounded-3xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur sm:rounded-4xl sm:p-8 lg:p-9">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] lg:gap-10">
          <div data-scroll /* data-scroll-speed="0.7" */>
            <h2 className="section-heading font-black text-white">What I Do</h2>
            <p className="mt-6 max-w-sm text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
              I design and develop complete web solutions using modern technologies.
            </p>

            <div className="services-preview mt-8 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/70 sm:mt-10">
              <div className="relative aspect-4/3 w-full">
                <Image
                  key={activeService.title}
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className={`transition duration-300 ${activeService.imageClassName ?? "object-cover"}`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/55 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full border border-cyan-300/40 bg-slate-900/65 px-3 py-1 text-xs tracking-[0.16em] text-cyan-100">
                  {activeService.number}
                </div>
              </div>
            </div>
          </div>

          <div className="services-list border-y border-white/8" data-scroll /* data-scroll-speed="1" */>
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`grid w-full grid-cols-[3.2rem_minmax(0,1fr)] gap-4 border-b border-white/8 px-2 py-5 text-left transition sm:grid-cols-[4.4rem_minmax(0,1fr)_minmax(0,1fr)] sm:gap-6 sm:px-3 lg:px-4 ${
                    isActive ? "bg-white/3" : "hover:bg-white/2"
                  }`}
                >
                  <span className={`mt-1 text-sm tracking-[0.2em] ${isActive ? "text-cyan-200" : "text-slate-500"}`}>
                    {service.number}
                  </span>
                  <h3 className={`text-2xl font-bold leading-tight ${isActive ? "text-white" : "text-slate-300"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-base leading-7 ${isActive ? "text-slate-200" : "text-slate-400"}`}>
                    {service.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
