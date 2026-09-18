export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute left-[-20%] top-[10%] h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute right-[-16%] top-[22%] h-52 w-52 rounded-full bg-cyan-400/8 blur-3xl sm:h-64 sm:w-64" />
    </div>
  );
}
