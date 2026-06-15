"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import profileImage from "@/Images/Gemini_Generated_Image_o7is35o7is35o7is.png";
import { useRouteTransition } from "@/components/RouteTransitionProvider";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

const links = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { scrollToSection } = useSmoothScroll();
  const { startTransition } = useRouteTransition();

  const navigateTo = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        scrollToSection(href);
        return;
      }

      router.push(`/${href}`);
      return;
    }

    startTransition(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/45 backdrop-blur-xl">
      <nav className="site-container flex items-center justify-between py-3.5 sm:py-4">
        <div className="hidden items-center gap-6 text-sm lg:gap-7 lg:text-base md:flex">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => navigateTo(link.href)}
              className="text-slate-400 transition hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => navigateTo("#home")}
          className="group flex items-center gap-2 text-left md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-3"
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-white/20 sm:h-10 sm:w-10">
            <Image
              src={profileImage}
              alt="Usamify"
              fill
              sizes="(max-width: 640px) 36px, 40px"
              className="object-cover"
            />
          </span>
          <span className="text-lg font-semibold leading-none tracking-tight text-white sm:text-2xl md:text-[2rem]">
            Toseef F
          </span>
        </button>

        <button
          onClick={() => navigateTo("/contact")}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-white/25 hover:bg-white/10 sm:px-5 sm:text-sm lg:px-7 lg:py-2.5 lg:text-base"
        >
          Contact
        </button>
      </nav>
      <div className="site-container h-px bg-white/10" />
    </header>
  );
}
