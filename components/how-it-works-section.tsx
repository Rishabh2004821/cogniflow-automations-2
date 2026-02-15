"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
    Upload,
    PhoneCall,
    MessageSquare,
    UserCheck,
    RefreshCw,
    Trophy,
} from "lucide-react"

const steps = [
    { icon: Upload, title: "Upload Leads", number: "01" },
    { icon: PhoneCall, title: "AI Calls Instantly", number: "02" },
    { icon: MessageSquare, title: "Real Conversations", number: "03" },
    { icon: UserCheck, title: "Lead Qualification", number: "04" },
    { icon: RefreshCw, title: "CRM Sync", number: "05" },
    { icon: Trophy, title: "Close More Deals", number: "06" },
]

export function HowItWorksSection() {
    return (
        <section className="relative px-6 py-32">
            <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    label="Process"
                    title="How Cogniflow Works"
                    description="From lead upload to deal close — six seamless steps powered by AI."
                />

                <div className="mt-16 flex flex-col items-center gap-4 md:flex-row md:gap-0">
                    {steps.map((step, i) => (
                        <div key={step.number} className="flex items-center md:flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="group flex w-full flex-col items-center rounded-2xl border border-glass-border bg-glass/60 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(199_89%_60%/0.15)]"
                            >
                                <span className="mb-2 font-mono text-sm text-primary/40">
                                    {step.number}
                                </span>
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                                    <step.icon className="h-6 w-6" />
                                </div>
                                <span className="text-xl font-bold text-foreground">
                                    {step.title}
                                </span>
                            </motion.div>

                            {/* Arrow connector — hidden on last item and on mobile */}
                            {i < steps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    whileInView={{ opacity: 1, scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                                    className="hidden shrink-0 px-1 text-primary/30 md:block"
                                >
                                    <svg
                                        width="28"
                                        height="12"
                                        viewBox="0 0 28 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 6H26M26 6L21 1M26 6L21 11"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.div>
                            )}

                            {/* Vertical arrow on mobile */}
                            {i < steps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                                    className="block py-1 text-primary/30 md:hidden"
                                >
                                    <svg
                                        width="12"
                                        height="28"
                                        viewBox="0 0 12 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 0V26M6 26L1 21M6 26L11 21"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
