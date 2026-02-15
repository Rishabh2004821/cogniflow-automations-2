"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface CtaBlockProps {
    className?: string
}

export function CtaBlock({ className = "" }: CtaBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`flex flex-col items-center justify-center gap-4 sm:flex-row ${className}`}
        >
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
                Start Free Trial
            </Link>
        </motion.div>
    )
}
