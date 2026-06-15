export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="site-container py-6 text-center text-xs text-slate-500 sm:py-8 sm:text-sm">
        © {new Date().getFullYear()} Toseef Ferozi. All rights reserved.
      </div>
    </footer>
  );
}
