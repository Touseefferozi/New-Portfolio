import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const CompanyShowcase = dynamic(() => import("@/components/CompanyShowcase"));
const ImageShowcase = dynamic(() => import("@/components/ImageShowcase"));
const ServicesShowcase = dynamic(() => import("@/components/ServicesShowcase"));
const AiCapabilities = dynamic(() => import("@/components/AiCapabilities"));
const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const WorkExperience = dynamic(() => import("@/components/WorkExperience"));
const DesignProcess = dynamic(() => import("@/components/DesignProcess"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FiverrOrder = dynamic(() => import("@/components/FiverrOrder"));
const AvailabilityCard = dynamic(() => import("@/components/AvailabilityCard"));

export default function Home() {
  return (
    <main className="relative bg-slate-950">
      <Hero />
      <CompanyShowcase />
      <About />
      <ImageShowcase />
      <ServicesShowcase />
      <AiCapabilities />
      <CaseStudies />
      <WorkExperience />
      <DesignProcess />
      <Testimonials />
      <FiverrOrder />
      <AvailabilityCard />
      <Footer />
    </main>
  );
}
