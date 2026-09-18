import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { getProjectImageSrc, portfolioProjects } from "@/components/portfolioData";

export const metadata: Metadata = {
  title: "Case Studies | Web Design & Development Portfolio",
  description:
    "Explore professional web design and development case studies across corporate websites, SaaS products, and digital platforms — including HNYDC Global and BW Digit.",
  keywords: [
    "web design case studies",
    "Next.js portfolio",
    "full stack developer case studies",
    "corporate website design",
    "SaaS product website",
    "Toseef Ferozi",
    "HNYDC Global",
    "BW Digit",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Case Studies | Web Design & Development Portfolio",
    description:
      "Selected case studies covering corporate sites, industrial SaaS, and conversion-focused digital experiences.",
    type: "website",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Design & Development Case Studies",
    description:
      "Portfolio of professional website and product case studies by Toseef Ferozi.",
    hasPart: portfolioProjects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: `/portfolio/${project.slug}`,
      image: getProjectImageSrc(project.image),
    })),
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 pt-20 sm:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <Portfolio />
      <Footer />
    </main>
  );
}
