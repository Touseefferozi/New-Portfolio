import Footer from "@/components/Footer";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getPortfolioProject, portfolioProjects } from "@/components/portfolioData";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 pt-20 sm:pt-24">
      <ProjectCaseStudy project={project} />
      <Footer />
    </main>
  );
}
