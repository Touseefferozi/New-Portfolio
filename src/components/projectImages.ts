import type { StaticImageData } from "next/image";

import hnydcGlobal from "@/Project images/optimized/hnydc-global.webp";
import backpackWander from "@/Project images/optimized/backpack-wander.webp";
import rocrita from "@/Project images/optimized/rocrita.webp";
import learnAi from "@/Project images/optimized/learn-ai.webp";
import theDevspark from "@/Project images/optimized/the-devspark.webp";

export const projectImages = {
  hnydcGlobal,
  backpackWander,
  rocrita,
  learnAi,
  theDevspark,
} as const satisfies Record<string, StaticImageData>;
