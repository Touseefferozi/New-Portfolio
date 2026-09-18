"use client";

type StartupLoaderProps = {
  children: React.ReactNode;
};

/** Pass-through — kept for compatibility without blocking first paint. */
export default function StartupLoader({ children }: StartupLoaderProps) {
  return <>{children}</>;
}
