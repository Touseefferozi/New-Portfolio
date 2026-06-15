"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useRouteTransition } from "@/components/RouteTransitionProvider";

type RouteTransitionLinkProps = ComponentProps<typeof Link>;

export default function RouteTransitionLink({ href, onClick, ...props }: RouteTransitionLinkProps) {
  const { startTransition } = useRouteTransition();

  const handleClick: NonNullable<RouteTransitionLinkProps["onClick"]> = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      typeof href !== "string" ||
      !href.startsWith("/") ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    startTransition(href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
