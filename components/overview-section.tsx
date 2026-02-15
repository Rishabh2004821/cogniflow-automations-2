"use client"

import { SectionHeading } from "./section-heading"
import { GlassCard } from "./glass-card"
import { Radio, Building2 } from "lucide-react"

const capabilities = [
  {
    icon: Radio,
    title: "AI Calling Agents",
    description:
      "Intelligent agents that handle communication at scale, managing thousands of simultaneous conversations with natural, contextual responses.",
  },
  {
    icon: Building2,
    title: "Enterprise Scale",
    description:
      "Architected for organizations with high interaction volumes, delivering reliable performance when it matters most.",
  },
]

export function OverviewSection() {
  return (
    <section id="overview" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="What We Build"
          title="Intelligent Infrastructure for Communication"
          description="Cogniflow develops AI-driven systems that transform how organizations communicate and operate. Our technology is designed to handle the complexity of real-world business interactions."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {capabilities.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
