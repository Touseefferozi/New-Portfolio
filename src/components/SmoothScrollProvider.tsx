"use client";

import { createContext, useCallback, useContext, useMemo, useRef } from "react";

type ScrollTarget = string | HTMLElement;

type SmoothScrollContextValue = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (target: ScrollTarget, options?: Record<string, unknown>) => void;
  update: () => void;
  isReady: boolean;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext);

  if (!context) {
    throw new Error("useSmoothScroll must be used within SmoothScrollProvider");
  }

  return context;
}

function resolveElement(target: ScrollTarget): HTMLElement | null {
  if (typeof target !== "string") return target;
  const id = target.startsWith("#") ? target.slice(1) : target;
  return document.getElementById(id);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = useCallback((target: ScrollTarget) => {
    const el = resolveElement(target);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const update = useCallback(() => {}, []);

  const contextValue = useMemo(
    () => ({
      containerRef,
      contentRef,
      scrollToSection,
      update,
      isReady: true,
    }),
    [scrollToSection, update],
  );

  return <SmoothScrollContext.Provider value={contextValue}>{children}</SmoothScrollContext.Provider>;
}

export function SmoothScrollViewport({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
