import Image from "next/image";

type ShowcaseProject = {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
};

const showcaseProjects: ShowcaseProject[] = [
  {
    title: "Foodly — Restaurant Website",
    subtitle: "Modern food ordering interface",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80",
    badge: "Live Preview",
  },
  {
    title: "Podcast Platform",
    subtitle: "Premium media production homepage",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1800&q=80",
    badge: "Featured",
  },
  {
    title: "Personal Brand Portfolio",
    subtitle: "Minimal clean visual identity",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1800&q=80",
    badge: "Case Study",
  },
  {
    title: "Cinema Review App",
    subtitle: "Dark-themed movie discovery experience",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80",
    badge: "Latest",
  },
];

export default function LatestProjectsShowcase() {
  return (
    <section id="latest-projects" data-scroll-section className="site-container pb-8 sm:pb-12 lg:pb-16">
      <div className="rounded-4xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur sm:p-7 lg:p-8">
        <div data-scroll /* data-scroll-speed="0.45" */ className="mb-6 sm:mb-8">
          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">Latest Projects</h2>
          <p className="mt-3 max-w-xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
            I design and develop complete web solutions using modern technologies.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {showcaseProjects.map((project) => (
            <article
              key={project.title}
              data-scroll
              // data-scroll-speed={dynamicSpeedValue}
              className="group relative overflow-hidden rounded-[1.95rem] border border-emerald-300/16 bg-slate-900/80 p-4 shadow-[0_0_0_1px_rgba(16,185,129,0.09),0_24px_60px_rgba(2,6,23,0.62)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/28"
            >
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/12 bg-[#050a16]">
                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/85 px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-400/90" />
                    <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                  </div>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-emerald-100">
                    {project.badge}
                  </span>
                </div>

                <div className="image-frame aspect-video">
                  <div className="image-frame__stage">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="image-frame__media"
                  />
                  </div>
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/88 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 z-10">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
                  <p className="mt-1 text-sm text-slate-300 sm:text-base">{project.subtitle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}