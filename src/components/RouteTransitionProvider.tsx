"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import loaderImage from "@/Images/Gemini_Generated_Image_o7is35o7is35o7is.png";

type RouteTransitionContextValue = {
  startTransition: (href: string) => void;
  isTransitioning: boolean;
};

const RouteTransitionContext = createContext<RouteTransitionContextValue | null>(null);
const TRANSITION_DELAY_MS = 250;
const TRANSITION_MAX_WAIT_MS = 2400;

export function RouteTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingTimeoutRef = useRef<number | null>(null);
  const maxWaitTimeoutRef = useRef<number | null>(null);
  const targetHrefRef = useRef<string | null>(null);
  const previousPathnameRef = useRef(pathname);

  const clearTimers = useCallback(() => {
    if (pendingTimeoutRef.current !== null) {
      window.clearTimeout(pendingTimeoutRef.current);
      pendingTimeoutRef.current = null;
    }

    if (maxWaitTimeoutRef.current !== null) {
      window.clearTimeout(maxWaitTimeoutRef.current);
      maxWaitTimeoutRef.current = null;
    }
  }, []);

  const finishTransition = useCallback(() => {
    clearTimers();
    targetHrefRef.current = null;
    setIsTransitioning(false);
  }, [clearTimers]);

  const startTransition = useCallback(
    (href: string) => {
      if (!href || href === pathname || targetHrefRef.current === href) {
        return;
      }

      clearTimers();
      targetHrefRef.current = href;
      setIsTransitioning(true);

      pendingTimeoutRef.current = window.setTimeout(() => {
        router.push(href);
      }, TRANSITION_DELAY_MS);

      maxWaitTimeoutRef.current = window.setTimeout(() => {
        finishTransition();
      }, TRANSITION_MAX_WAIT_MS);
    },
    [clearTimers, finishTransition, pathname, router]
  );

  useEffect(() => {
    const previousPathname = previousPathnameRef.current;
    previousPathnameRef.current = pathname;

    if (!isTransitioning || previousPathname === pathname) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      finishTransition();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [finishTransition, isTransitioning, pathname]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const value = useMemo(
    () => ({ startTransition, isTransitioning }),
    [isTransitioning, startTransition]
  );

  return (
    <RouteTransitionContext.Provider value={value}>
      {children}
      {isTransitioning ? (
        <div className="startup-loader" aria-label="Loading page" aria-live="polite" aria-busy="true">
          <div className="startup-loader-core">
            <div className="startup-loader-ring startup-loader-ring--one" />
            <div className="startup-loader-ring startup-loader-ring--two" />
            <div className="startup-loader-ring startup-loader-ring--three" />
            <div className="startup-loader-orbit startup-loader-orbit--one" />
            <div className="startup-loader-orbit startup-loader-orbit--two" />
            <div className="startup-loader-avatar-wrapper">
              <Image
                src={loaderImage}
                alt="Loading"
                priority
                className="startup-loader-avatar"
              />
            </div>
          </div>
        </div>
      ) : null}
    </RouteTransitionContext.Provider>
  );
}

export function useRouteTransition() {
  const context = useContext(RouteTransitionContext);

  if (!context) {
    throw new Error("useRouteTransition must be used within a RouteTransitionProvider");
  }

  return context;
}
