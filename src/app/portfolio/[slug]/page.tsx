import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import {
  getPortfolioProject,
  getProjectImageSrc,
  getProjectLiveUrl,
  getProjectSeo,
  portfolioProjects,
} from "@/components/portfolioData";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  const seo = getProjectSeo(project);
  const imageSrc = getProjectImageSrc(project.image);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "article",
      url: `/portfolio/${project.slug}`,
      images: [
        {
          url: imageSrc,
          alt: `${project.title} case study preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [imageSrc],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  const seo = getProjectSeo(project);
  const liveUrl = getProjectLiveUrl(project);
  const imageSrc = getProjectImageSrc(project.image);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: seo.title,
    description: seo.description,
    image: imageSrc,
    dateCreated: project.year,
    inLanguage: "en",
    keywords: seo.keywords.join(", "),
    url: `/portfolio/${project.slug}`,
    creator: {
      "@type": "Person",
      name: "Toseef Ferozi",
      jobTitle: "Full-Stack Developer",
    },
    about: project.category,
    genre: project.category,
    workExample: liveUrl,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `/portfolio/${project.slug}`,
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 pt-20 sm:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ProjectCaseStudy project={project} />
      <Footer />
    </main>
  );
}
