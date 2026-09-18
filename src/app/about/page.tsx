import type { Metadata } from "next";
import HeroAbout from "@/components/about/HeroAbout";
import SkillsMarquee from "@/components/about/SkillsMarquee";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import EducationSection from "@/components/about/EducationSection";
import ProcessCards from "@/components/about/ProcessCards";
import AwardsList from "@/components/about/AwardsList";
import CommunitySection from "@/components/about/CommunitySection";
import AboutUIEnhancements from "@/components/about/AboutUIEnhancements";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Toseef Ferozi — full-stack developer and digital designer crafting SEO-friendly websites and product experiences.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050608] pt-20 text-slate-200 sm:pt-24">
      <AboutUIEnhancements />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <HeroAbout />

        <section className="mt-14 sm:mt-20">
          <SkillsMarquee />
        </section>

        <section className="mt-16 sm:mt-24">
          <ExperienceTimeline />
        </section>

        <section className="mt-16 sm:mt-24">
          <EducationSection />
        </section>

        <section className="mt-16 sm:mt-24">
          <ProcessCards />
        </section>

        <section className="mt-16 sm:mt-24">
          <AwardsList />
        </section>

        <section className="mt-16 mb-20 sm:mt-24 sm:mb-32">
          <CommunitySection />
        </section>
      </div>
    </main>
  );
}
