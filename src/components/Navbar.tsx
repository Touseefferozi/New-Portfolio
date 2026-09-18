"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import profileImage from "@/Images/Gemini_Generated_Image_o7is35o7is35o7is.png";
import { useRouteTransition } from "@/components/RouteTransitionProvider";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { scrollToSection } = useSmoothScroll();
  const { startTransition } = useRouteTransition();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const navigateTo = (href: string) => {
    setMenuOpen(false);

    if (href === "/") {
      if (pathname === "/") {
        scrollToSection("#home");
        return;
      }
      startTransition("/");
      return;
    }

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <nav className="site-container flex items-center justify-between gap-3 py-3 sm:py-3.5 md:py-4">
        <div className="hidden items-center gap-6 text-sm md:flex lg:gap-7 lg:text-base">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => navigateTo(link.href)}
                className={`transition ${
                  active ? "font-medium text-emerald-300" : "text-slate-400 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => navigateTo("/")}
          className="group flex min-w-0 items-center gap-2 text-left md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-3"
        >
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/20 sm:h-10 sm:w-10">
            <Image
              src={profileImage}
              alt="Toseef Ferozi"
              fill
              sizes="(max-width: 640px) 32px, 40px"
              className="object-cover"
            />
          </span>
          <span className="truncate text-base font-semibold leading-none tracking-tight text-white sm:text-2xl md:text-[2rem]">
            Toseef F
          </span>
        </button>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => navigateTo("/contact")}
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-white/25 hover:bg-white/10 md:inline-flex lg:px-7 lg:py-2.5 lg:text-base"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 block h-0.5 w-full origin-center rounded-full bg-white transition duration-200 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-white transition duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full origin-center rounded-full bg-white transition duration-200 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-slate-950/98 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="site-container flex flex-col gap-1 py-3 pb-4">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => navigateTo(link.href)}
                className={`rounded-xl px-4 py-3 text-left text-base font-medium transition ${
                  active
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => navigateTo("/contact")}
            className="mt-2 rounded-full bg-emerald-500 px-4 py-3 text-center text-base font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
