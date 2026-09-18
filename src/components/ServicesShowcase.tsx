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
    title: "AI Chatbots",
    description: "I build smart website chatbots that qualify leads, answer FAQs, and support customers 24/7.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=80",
    imageClassName: "object-center",
  },
  {
    number: "02",
    title: "AI Automation",
    description: "I design AI workflows for enrollment, CRM updates, auto-replies, and conversion pipelines.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1800&q=80",
    imageClassName: "object-center",
  },
  {
    number: "03",
    title: "Web Design",
    description: "I design clear, modern website layouts focused on usability and visual clarity.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80",
    imageClassName: "object-center",
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
    title: "SaaS & Product UI",
    description: "I craft AI-ready dashboards and product interfaces with clean, scalable architecture.",
    image: "https://images.unsplash.com/photo-1551281049-b1cff2c5f0f3?auto=format&fit=crop&w=1800&q=80",
    imageClassName: "object-center",
  },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" className="site-container section-space">
      <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 backdrop-blur sm:rounded-3xl sm:p-6 lg:rounded-4xl lg:p-9">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] lg:gap-10">
          <div>
            <h2 className="section-heading font-black text-white">What I Do</h2>
            <p className="mt-4 max-w-sm text-base leading-7 text-slate-400 sm:mt-6 sm:text-xl sm:leading-9">
              From AI chatbots to full-stack products — I build systems that look sharp and convert.
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

          <div className="services-list border-y border-white/8">
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`grid w-full grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 border-b border-white/8 px-1 py-4 text-left transition sm:grid-cols-[4.4rem_minmax(0,1fr)_minmax(0,1fr)] sm:gap-6 sm:px-3 sm:py-5 lg:px-4 ${
                    isActive ? "bg-white/3" : "hover:bg-white/2"
                  }`}
                >
                  <span className={`mt-1 text-sm tracking-[0.2em] ${isActive ? "text-cyan-200" : "text-slate-500"}`}>
                    {service.number}
                  </span>
                  <h3 className={`text-xl font-bold leading-tight sm:text-2xl ${isActive ? "text-white" : "text-slate-300"}`}>
                    {service.title}
                  </h3>
                  <p
                    className={`col-span-2 text-sm leading-7 sm:col-span-1 sm:text-base ${
                      isActive ? "text-slate-200" : "text-slate-400"
                    }`}
                  >
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
