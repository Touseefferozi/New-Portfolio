import Contact from "@/components/Contact";
import RouteTransitionLink from "@/components/RouteTransitionLink";

const contactChannels = [
  {
    label: "Email",
    value: "contact@thedevspark.com",
    href: "mailto:contact@thedevspark.com",
  },
  {
    label: "Phone",
    value: "+92-3453360450",
    href: "tel:+92-3453360450",
  },
  {
    label: "Location",
    value: "Remote / Global",
    href: "#",
  },
];

const highlights = [
  {
    title: "Fast response",
    description: "Replies within 24 hours for new projects and collaboration requests.",
  },
  {
    title: "Clear process",
    description: "You get scope, updates, and delivery milestones with no confusion.",
  },
  {
    title: "Premium delivery",
    description: "Design-first execution with polished UI and smooth user experience.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 pt-20 sm:pt-24">
      <section className="site-container section-space relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-emerald-300 sm:text-sm">Contact Us</p>
              <h1 className="mt-4 text-[clamp(2.6rem,6vw,5.8rem)] font-black leading-[0.95] text-white">
                Let’s build something people remember.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
                Have an idea for a portfolio, business website, or high-end landing page?
                Share the details and I’ll help turn it into a clean, modern, high-converting experience.
              </p>
            </div>

            <div className="grid gap-4 rounded-4xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:grid-cols-3 lg:grid-cols-1 lg:p-6">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Availability</div>
                <div className="mt-2 text-2xl font-semibold text-white">Open for work</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Turnaround</div>
                <div className="mt-2 text-2xl font-semibold text-white">Fast & clear</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Focus</div>
                <div className="mt-2 text-2xl font-semibold text-white">Design + Code</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/8"
              >
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{channel.label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{channel.value}</p>
              </a>
            ))}
          </div>

          <section className="mt-12 rounded-4xl border border-white/10 bg-linear-to-br from-emerald-300/10 via-white/5 to-cyan-300/10 p-1 shadow-[0_30px_90px_rgba(2,6,23,0.55)]">
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/80 p-4 sm:p-6 lg:p-8">
              <Contact />
            </div>
          </section>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <RouteTransitionLink
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              View portfolio
            </RouteTransitionLink>
            <RouteTransitionLink
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Read blog
            </RouteTransitionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
