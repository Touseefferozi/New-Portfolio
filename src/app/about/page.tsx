"use client"
import React from 'react'
import HeroAbout from '../../components/about/HeroAbout'
import SkillsMarquee from '../../components/about/SkillsMarquee'
import ExperienceTimeline from '../../components/about/ExperienceTimeline'
import ProcessCards from '../../components/about/ProcessCards'
import AwardsList from '../../components/about/AwardsList'
import CommunitySection from '../../components/about/CommunitySection'
import AboutUIEnhancements from '../../components/about/AboutUIEnhancements'

export const metadata = {
  title: 'About — Toseef',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-slate-200">
      <AboutUIEnhancements />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <HeroAbout />

        <section className="mt-20">
          <SkillsMarquee />
        </section>

        <section className="mt-24">
          <ExperienceTimeline />
        </section>

        <section className="mt-24">
          <ProcessCards />
        </section>

        <section className="mt-24">
          <AwardsList />
        </section>

        <section className="mt-24 mb-32">
          <CommunitySection />
        </section>
      </div>
    </main>
  )
}
