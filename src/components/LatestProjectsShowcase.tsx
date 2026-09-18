import Image from "next/image";

type ShowcaseProject = {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
};

const showcaseProjects: ShowcaseProject[] = [
  {
    title: "HNYDC Global",
    subtitle: "Global trade, real estate & investment partnerships",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://hnydc-global.vercel.app/",
    badge: "Latest",
  },
  {
    title: "BW Digit",
    subtitle: "Digital QA/QC tools for heavy industry",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://bwdigit-5klx.vercel.app/",
    badge: "Featured",
  },
  {
    title: "Backpack Wander",
    subtitle: "Industrial engineering & field platforms",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.backpackwander.com",
    badge: "Live Preview",
  },
  {
    title: "Pipeline Quality",
    subtitle: "QA/QC documentation & weld traceability",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.pipelinequality.com",
    badge: "Case Study",
  },
];

export default function LatestProjectsShowcase() {
  return (
    <section id="latest-projects" className="site-container pb-8 sm:pb-12 lg:pb-16">
      <div className="rounded-4xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur sm:p-7 lg:p-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">Latest Projects</h2>
          <p className="mt-3 max-w-xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
            I design and develop complete web solutions using modern technologies.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {showcaseProjects.map((project) => (
            <article
              key={project.title}
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