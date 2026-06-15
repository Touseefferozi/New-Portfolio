import Hero from "@/components/Hero";
import About from "@/components/About";
import ImageShowcase from "@/components/ImageShowcase";
import ServicesShowcase from "@/components/ServicesShowcase";
import LatestProjectsShowcase from "@/components/LatestProjectsShowcase";
import WorkExperience from "@/components/WorkExperience";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import AvailabilityCard from "@/components/AvailabilityCard";
import DesignProcess from "@/components/DesignProcess";
import Footer from "@/components/Footer";
import StartupLoader from "@/components/StartupLoader";
import CompanyShowcase from "@/components/CompanyShowcase";

export default function Home() {
  return (
    <StartupLoader>
      <main className="relative overflow-x-hidden bg-slate-950">
        <Hero />
        <CompanyShowcase />
        <About />
        <ImageShowcase />
        <ServicesShowcase />
        <LatestProjectsShowcase />
        <WorkExperience />
        <DesignProcess />
        <Testimonials />
        <Blog />
        <AvailabilityCard />
        <Footer />
      </main>
    </StartupLoader>
  );
}
