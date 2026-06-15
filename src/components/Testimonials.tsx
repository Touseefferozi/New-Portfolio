const reviews = [
  {
    name: "Santosh",
    text: "Exceptional service from start to finish. The work was flawless and delivered right on time. Highly recommended.",
  },
  {
    name: "Aamir",
    text: "Communication was clear and updates were regular. The final website looked premium and performed fast.",
  },
 
  {
    name: "Sana",
    text: "Very reliable developer. Clean code, modern UI, and smooth delivery with zero hassle.",
  },
  {
    name: "Naveed",
    text: "Understood my business needs quickly and turned them into a polished product. Strongly recommended.",
  },
];

const marqueeReviews = [...reviews, ...reviews];

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="testimonial-card flex h-58 w-74 shrink-0 flex-col overflow-hidden rounded-4xl border border-white/10 bg-slate-900/65 p-5 backdrop-blur sm:h-65 sm:w-84 sm:p-6">
      <div className="flex gap-1.5 text-lg text-amber-300 sm:text-xl">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <p className="mt-3 text-base leading-7 text-slate-200 sm:mt-4 sm:text-[1.2rem] sm:leading-8">“{text}”</p>
      <p className="mt-auto text-2xl font-bold text-white sm:text-3xl">{name}</p>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" data-scroll-section className="site-container section-space">
      <div data-scroll /* data-scroll-speed="0.4" */ className="rounded-3xl border border-white/10 bg-slate-950/55 py-10 backdrop-blur sm:rounded-4xl sm:py-12 lg:py-16">
        <div data-scroll /* data-scroll-speed="0.8" */ className="px-4 text-center sm:px-8 lg:px-12">
          <h2 className="section-heading font-black text-white">Hear It from My Clients</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">Who came with ideas. I built the solution.</p>
        </div>

        <div className="testimonials-marquee mt-10 sm:mt-12" data-scroll /* data-scroll-speed="1.15" */>
          <div
            className="testimonials-marquee__track flex flex-row flex-nowrap items-stretch"
            style={{ gap: "var(--testimonials-gap)" }}
          >
            {marqueeReviews.map((review, index) => (
              <ReviewCard key={`${review.name}-${index}`} name={review.name} text={review.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
