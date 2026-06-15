import Image from "next/image";
import companyImage from "@/Images/tHE dEVSPARK.png";

const COMPANY_WEBSITE_URL = "https://thedevspark.com";

export default function CompanyShowcase() {
  return (
    <section className="site-container relative w-full pb-10 pt-4 sm:pb-12" aria-label="Company showcase">
      <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-300/20 bg-slate-900/45 p-4 backdrop-blur-xl sm:rounded-4xl sm:p-7">
        <p className="mb-4 text-center text-xs uppercase tracking-[0.22em] text-emerald-200/80 sm:mb-5 sm:text-sm sm:tracking-[0.26em]">
          My Company
        </p>

        <a
          href={COMPANY_WEBSITE_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="group block overflow-hidden rounded-3xl border border-white/15 bg-slate-950/70 transition hover:border-emerald-300/55"
          aria-label="Open The Devspark website"
        >
          <div className="relative aspect-video w-full bg-slate-950">
            <Image
              src={companyImage}
              alt="The Devspark"
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5 sm:flex-row sm:items-end sm:gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">The Devspark</h3>
                <p className="mt-1 text-xs text-slate-200/85 sm:text-base">
                  Click to visit company website
                </p>
              </div>
              <span className="rounded-full border border-emerald-300/45 bg-emerald-400/18 px-3 py-1.5 text-xs font-medium text-emerald-100 sm:px-4 sm:py-2 sm:text-sm">
                Visit Site ↗
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}