export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-[#030712] to-slate-950" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -right-20 top-40 h-64 w-64 rounded-full bg-cyan-400/8 blur-3xl" />
    </div>
  );
}
