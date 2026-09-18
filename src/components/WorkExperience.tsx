type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  badgeText: string;
  badgeClassName: string;
};

const leftColumn: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Fiverr",
    period: "2020 - Now",
    badgeText: "fi",
    badgeClassName: "bg-emerald-500 text-emerald-50",
  },
  {
    role: "Full Stack Developer",
    company: "Payicon",
    period: "2021 - 2022",
    badgeText: "py",
    badgeClassName: "bg-slate-200 text-slate-900",
  },
];

const rightColumn: ExperienceItem[] = [
  {
    role: "Mern Stack Developer",
    company: "Upwork",
    period: "2020 - Now",
    badgeText: "up",
    badgeClassName: "bg-lime-500 text-lime-50",
  },
  {
    role: "Developer + Project Manager",
    company: "Independent",
    period: "2020 - Now",
    badgeText: "✦",
    badgeClassName: "bg-blue-500 text-blue-50",
  },
];

function ExperienceColumn({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-slate-950/45">
      {items.map((item, index) => (
        <div
          key={`${item.role}-${item.company}`}
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 py-6 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:px-6 lg:px-7 ${
            index !== items.length - 1 ? "border-b border-white/10" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <span
              className={`grid h-11 w-11 place-items-center rounded-full text-sm font-extrabold uppercase tracking-wide ${item.badgeClassName}`}
            >
              {item.badgeText}
            </span>
            <div>
              <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">{item.role}</h3>
              <p className="mt-1 text-base text-slate-400">{item.company}</p>
            </div>
          </div>
          <p className="text-sm font-semibold text-slate-300 sm:text-base">{item.period}</p>
        </div>
      ))}
    </div>
  );
}

export default function WorkExperience() {
  return (
    <section id="experience" className="site-container section-space">
      <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur sm:rounded-4xl sm:p-8 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading font-black text-white">Work Experience</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
            Worked on scalable web solutions from development to deployment.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          <ExperienceColumn items={leftColumn} />
          <ExperienceColumn items={rightColumn} />
        </div>
      </div>
    </section>
  );
}
