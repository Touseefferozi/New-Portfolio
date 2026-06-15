export default function DesignProcess() {
  const steps = [
    {
      id: 1,
      title: "01. Strategize",
      body:
        "To create something awesome, one must first talk about the details. Planning is essential.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20" stroke="#9AE6B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 8h14" stroke="#9AE6B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "02. Wireframe",
      body:
        "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7h16M4 12h16M4 17h10" stroke="#9AE6B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "03. Design",
      body: "The most fun part of all - adding pizzaz to the wireframes and bring it to life.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" stroke="#9AE6B4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "04. Development",
      body: "The design may be final but it needs to be functional and practical. Development is key.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18l6-6-6-6" stroke="#9AE6B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 6l-6 6 6 6" stroke="#9AE6B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "05. Quality Assurance",
      body: "Website load times, SEO, file optimization, etc., weigh in to the quality of the site.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l4 4-4 4-4-4 4-4zM4 22l8-6 8 6" stroke="#9AE6B4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="site-container section-space">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.26em] text-emerald-300">Steps I Follow</p>
          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">My Design Process</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            I have worked with some of the most innovative industry leaders to help build their top-notch products.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl border border-white/6 bg-slate-950/40 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/50">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="text-sm leading-7 text-slate-300">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
