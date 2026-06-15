"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type ScrollTarget = string | HTMLElement;

type SmoothScrollContextValue = {
  containerRef: React.RefObject<HTMLDivElement | null>;
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

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const locomotiveRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  const update = useCallback(() => {
    locomotiveRef.current?.update?.();
  }, []);

  const scrollToSection = useCallback((target: ScrollTarget, options: Record<string, unknown> = {}) => {
    locomotiveRef.current?.scrollTo?.(target, {
      offset: -96,
      // duration: 900,
      // easing: [0.25, 0.0, 0.35, 1.0],
      ...options,
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      containerRef,
      scrollToSection,
      update,
      isReady,
    }),
    [isReady, scrollToSection, update],
  );

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const initialize = async () => {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");

      if (cancelled || !containerRef.current) {
        return;
      }

      const instance = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        // lerp: 0.08,
        // multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      locomotiveRef.current = instance;
      setIsReady(true);
      instance.update();

      const observer = new MutationObserver(() => instance.update());
      observer.observe(containerRef.current, { childList: true, subtree: true, attributes: true });

      const handleResize = () => instance.update();
      window.addEventListener("resize", handleResize);

      let rafId = 0;
      const tick = (time: number) => {
        instance.raf(time);
        rafId = window.requestAnimationFrame(tick);
      };

      rafId = window.requestAnimationFrame(tick);

      cleanup = () => {
        observer.disconnect();
        window.removeEventListener("resize", handleResize);
        window.cancelAnimationFrame(rafId);
        instance.destroy();
        locomotiveRef.current = null;
        setIsReady(false);
      };
    };

    void initialize();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  useEffect(() => {
    if (!isReady || !window.location.hash) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      scrollToSection(window.location.hash);
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, [isReady, pathname, scrollToSection]);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const onHashChange = () => {
      if (window.location.hash) {
        scrollToSection(window.location.hash);
      }
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [isReady, scrollToSection]);

  return <SmoothScrollContext.Provider value={contextValue}>{children}</SmoothScrollContext.Provider>;
}

export function SmoothScrollViewport({ children }: { children: React.ReactNode }) {
  const { containerRef } = useSmoothScroll();

  return (
    <div ref={containerRef} data-scroll-container className="min-h-screen">
      <div data-scroll-section>{children}</div>
    </div>
  );
}