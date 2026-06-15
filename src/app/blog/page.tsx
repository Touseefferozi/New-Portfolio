import Link from "next/link";
import RouteTransitionLink from "@/components/RouteTransitionLink";
import Footer from "@/components/Footer";

const featuredPost = {
  title: "How I build fast, premium portfolio websites that convert",
  excerpt:
    "A practical breakdown of my process for designing polished layouts, keeping performance high, and turning visitors into inquiries.",
  date: "April 2026",
  readTime: "8 min read",
  category: "Featured",
};

const posts = [
  {
    title: "Designing stronger hero sections for modern brands",
    excerpt:
      "Why spacing, typography, and motion matter when you want the first screen to feel expensive and intentional.",
    date: "April 2026",
    readTime: "6 min read",
    category: "Design",
  },
  {
    title: "A clean workflow for React and Next.js projects",
    excerpt:
      "My approach to keeping components reusable, layouts predictable, and development fast as the project grows.",
    date: "March 2026",
    readTime: "7 min read",
    category: "Development",
  },
  {
    title: "How to choose the right animations without overdoing it",
    excerpt:
      "Small motion details can make a site feel premium, but only when they support clarity instead of distracting from it.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Motion",
  },
  {
    title: "Client-ready websites: what I prioritize before launch",
    excerpt:
      "A short checklist covering responsiveness, accessibility, load speed, and the finishing touches that build trust.",
    date: "February 2026",
    readTime: "6 min read",
    category: "Workflow",
  },
];

const tags = ["Next.js", "UI Design", "Performance", "Motion", "Strategy"];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 pt-20 sm:pt-24">
      <section className="site-container section-space relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.32em] text-emerald-300 sm:text-sm">
                Insights
              </p>
              <h1 className="mt-4 text-[clamp(2.5rem,6vw,5.75rem)] font-black leading-[0.96] text-white">
                Professional blog notes on design, code, and growth.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
                Short, practical posts from my workflow — focused on building better interfaces,
                shipping with confidence, and creating websites that feel polished from start to finish.
              </p>
            </div>

            <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:grid-cols-3 lg:w-120 lg:grid-cols-1">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Articles</div>
                <div className="mt-2 text-2xl font-semibold text-white">12+</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Focus</div>
                <div className="mt-2 text-2xl font-semibold text-white">Design + Code</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Updated</div>
                <div className="mt-2 text-2xl font-semibold text-white">Weekly</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <article className="mt-10 overflow-hidden rounded-4xl border border-emerald-300/15 bg-linear-to-br from-emerald-300/10 via-white/5 to-cyan-300/10 p-1 shadow-[0_30px_90px_rgba(2,6,23,0.55)]">
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/80 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-emerald-200">
                  {featuredPost.category}
                </span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
                <div>
                  <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Reading style</p>
                  <p className="mt-3 text-lg leading-8 text-slate-300">
                    Direct, practical, and built for clients or founders who want quality without the fluff.
                  </p>
                  <Link
                    href="#latest-posts"
                    className="mt-5 inline-flex rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    Explore posts
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-fuchsia-300">Latest posts</p>
              <h3 id="latest-posts" className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Fresh notes from the studio.
              </h3>
            </div>
            <RouteTransitionLink href="/portfolio" className="hidden text-sm text-slate-400 transition hover:text-white sm:inline-flex">
              View portfolio
            </RouteTransitionLink>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.28em] text-slate-500">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h4 className="mt-5 text-xl font-semibold leading-tight text-white transition group-hover:text-emerald-200">
                  {post.title}
                </h4>
                <p className="mt-4 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-500">
                  <span>{post.readTime}</span>
                  <span className="text-white/80 transition group-hover:text-white">Read more →</span>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-12 grid gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Stay in touch</p>
              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Want more practical web design and development insights?
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                If you like clean portfolios, modern interfaces, and business-focused web builds, this is where I share the thinking behind them.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Start a project
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Back to home
              </Link>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
