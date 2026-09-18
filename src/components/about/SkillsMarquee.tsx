"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type TechItem = {
  name: string;
  icon: string;
  invert?: boolean;
};

const tech: TechItem[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    invert: true,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    invert: true,
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
];

export default function SkillsMarquee() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-r from-[#071014] to-transparent py-4 sm:py-6">
      <motion.div
        className="flex items-center gap-4 sm:gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
      >
        {[...tech, ...tech].map(({ name, icon, invert }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-xl border border-neutral-800 bg-[#081312] px-3 py-2 text-xs text-slate-200 shadow-sm sm:gap-3 sm:px-4 sm:text-sm"
          >
            <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-[#0c1a18] sm:h-8 sm:w-8">
              <Image
                src={icon}
                alt=""
                width={18}
                height={18}
                className={`object-contain ${invert ? "brightness-0 invert" : ""}`}
                unoptimized
              />
            </span>
            <span className="whitespace-nowrap font-medium">{name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
