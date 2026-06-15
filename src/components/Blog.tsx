import RouteTransitionLink from "@/components/RouteTransitionLink";

const articles = [
  {
    title: "Building cleaner React interfaces",
    date: "April 2026",
    readTime: "8 min read",
    excerpt: "Simple UI decisions that make components easier to read, scale, and maintain.",
  },
  {
    title: "How I design cinematic portfolio pages",
    date: "April 2026",
    readTime: "6 min read",
    excerpt: "A look at layout rhythm, spacing, and visual polish for premium portfolio experiences.",
  },
  {
    title: "Smooth scrolling and motion that feels premium",
    date: "April 2026",
    readTime: "7 min read",
    excerpt: "Practical motion tips that improve the feel of a site without slowing it down.",
  },
];

export default function Blog() {
  return (
    <section id="blog" data-scroll-section className="site-container section-space">
      <div data-scroll /* data-scroll-speed="0.45" */ className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.26em] text-fuchsia-300 sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
            Blog
          </p>
          <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Short reads, design ideas, and build notes.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
            A small collection of practical insights about modern interfaces, clean development workflows,
            and the details that make a portfolio feel premium.
          </p>
        </div>

        <RouteTransitionLink
          href="/blog"
          className="inline-flex w-fit items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
        >
          View all posts
        </RouteTransitionLink>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.title}
            data-scroll
            // data-scroll-speed="0.85"
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/8 sm:rounded-[1.75rem] sm:p-6"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{article.date}</div>
            <h3 className="mt-3 text-lg font-semibold text-white sm:mt-4 sm:text-xl">
              {article.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{article.excerpt}</p>
            <p className="mt-4 text-sm font-medium text-slate-300">{article.readTime}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
