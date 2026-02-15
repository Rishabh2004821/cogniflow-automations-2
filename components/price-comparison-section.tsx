"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const rows = [

    {
        option: "Global Telecaller",
        cost: "$600 – $1,200",
        calls: "80 – 120",
        availability: "8 hours/day",
        highlight: false,
    },
    {
        option: "AI Calling Agent",
        cost: "$150 – $400",
        calls: "Unlimited",
        availability: "24/7",
        highlight: true,
    },
]

export function PriceComparisonSection() {
    return (
        <section className="relative px-6 py-32">
            <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border/50" />

            <div className="mx-auto max-w-4xl">
                <SectionHeading
                    label="Cost Advantage"
                    title="Human Callers vs AI Calling Agent"
                    description="See how AI dramatically reduces your cost per call while scaling capacity without limits."
                />

                {/* Desktop table */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mt-12 hidden overflow-hidden rounded-2xl border border-glass-border bg-glass/60 backdrop-blur-xl md:block"
                >
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-glass-border">
                                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                    Option
                                </th>
                                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                    Monthly Cost
                                </th>
                                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                    Calls per Day
                                </th>
                                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                    Availability
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr
                                    key={row.option}
                                    className={
                                        row.highlight
                                            ? "border-t border-primary/30 bg-primary/[0.06]"
                                            : "border-t border-glass-border"
                                    }
                                >
                                    <td className="px-6 py-5">
                                        <span
                                            className={`text-base font-bold ${row.highlight ? "text-primary" : "text-foreground"}`}
                                        >
                                            {row.option}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-base text-muted-foreground">
                                        {row.cost}
                                    </td>
                                    <td className="px-6 py-5 text-base text-muted-foreground">
                                        <span className={row.highlight ? "font-semibold text-primary" : ""}>
                                            {row.calls}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-base text-muted-foreground">
                                        <span className={row.highlight ? "font-semibold text-primary" : ""}>
                                            {row.availability}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Mobile cards */}
                <div className="mt-12 space-y-4 md:hidden">
                    {rows.map((row, i) => (
                        <motion.div
                            key={row.option}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className={`rounded-2xl border p-5 backdrop-blur-xl ${row.highlight
                                ? "border-primary/40 bg-primary/[0.06] shadow-[0_0_30px_-10px_hsl(199_89%_60%/0.2)]"
                                : "border-glass-border bg-glass/60"
                                }`}
                        >
                            <h3
                                className={`text-lg font-bold ${row.highlight ? "text-primary" : "text-foreground"}`}
                            >
                                {row.option}
                            </h3>
                            <div className="mt-3 grid grid-cols-3 gap-3">
                                <div>
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                                        Cost
                                    </span>
                                    <p className="mt-0.5 text-sm text-muted-foreground">{row.cost}</p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                                        Calls/Day
                                    </span>
                                    <p
                                        className={`mt-0.5 text-sm ${row.highlight ? "font-semibold text-primary" : "text-muted-foreground"}`}
                                    >
                                        {row.calls}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                                        Availability
                                    </span>
                                    <p
                                        className={`mt-0.5 text-sm ${row.highlight ? "font-semibold text-primary" : "text-muted-foreground"}`}
                                    >
                                        {row.availability}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Savings callout */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 text-center text-xl font-bold text-primary"
                >
                    Save up to 90% on calling costs while scaling instantly.
                </motion.p>
            </div>
        </section>
    )
}
