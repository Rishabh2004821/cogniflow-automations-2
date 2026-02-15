"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function FinalCtaSection() {
    return (
        <section className="relative px-6 py-32">
            <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

            {/* Glow aura */}
            <div
                className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[100px]"
                style={{
                    background:
                        "radial-gradient(ellipse, hsl(142 76% 56%) 0%, hsl(142 60% 40%) 40%, transparent 70%)",
                }}
            />

            <div className="mx-auto max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="mb-4 inline-block font-mono text-sm uppercase tracking-[0.2em] text-primary">
                        Get Started
                    </span>
                    <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        Ready to Scale Without Hiring?
                    </h2>
                    <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                        Launch AI-powered calling campaigns in minutes.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button
                            data-tally-open="Gxd8De"
                            data-tally-layout="modal"
                            data-tally-width="600"
                            data-tally-overlay="1"
                            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-bold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_-4px_hsl(142_76%_56%/0.5)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            Book a Demo
                        </button>
                        <Link
                            href="/demo"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-glass-border bg-glass/60 px-10 py-4 text-base font-bold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_24px_-6px_hsl(142_76%_56%/0.2)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
