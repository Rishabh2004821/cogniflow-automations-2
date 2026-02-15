"use client"

import { CursorGlow } from "@/components/cursor-glow"
import { ParticleField } from "@/components/particle-field"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { AIShiftSection } from "@/components/ai-shift-section"
import { EfficiencySection } from "@/components/efficiency-section"
import { CtaBlock } from "@/components/cta-block"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FutureVisionSection } from "@/components/future-vision-section"
import { WorkflowSection } from "@/components/workflow-section"
import { IndustrySection } from "@/components/industry-section"
import { PriceComparisonSection } from "@/components/price-comparison-section"
import { PositioningSection } from "@/components/positioning-section"
import { ContactSection } from "@/components/contact-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <ParticleField />
      <CursorGlow />
      <Navbar />
      <main>
        {/* 1. Hero with embedded CTA */}
        <HeroSection />

        {/* 2. (Removed Demo Video) */}

        {/* 3. Core sections */}
        <OverviewSection />
        <AIShiftSection />
        <EfficiencySection />

        {/* 4. CTA after "Efficiency at Machine Scale" */}
        <section className="px-6 py-16">
          <CtaBlock />
        </section>

        {/* 5. Animated workflow */}
        <HowItWorksSection />

        {/* 6. Remaining sections */}
        <FutureVisionSection />
        <WorkflowSection />
        <IndustrySection />

        {/* 7. Price comparison */}
        <PriceComparisonSection />

        <PositioningSection />
        <ContactSection />

        {/* 8. Final high-conversion CTA */}
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
