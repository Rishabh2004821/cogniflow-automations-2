"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react"

const companySizes = ["1–10", "11–50", "51–200", "201–1000", "1000+"]
const useCases = [
    "Sales Outreach",
    "Lead Qualification",
    "Customer Support",
    "Debt Collection",
    "Surveys",
    "Other",
]

interface FormData {
    fullName: string
    workEmail: string
    phone: string
    companyName: string
    companySize: string
    useCase: string
    message: string
    consent: boolean
}

const initialFormData: FormData = {
    fullName: "",
    workEmail: "",
    phone: "",
    companyName: "",
    companySize: "",
    useCase: "",
    message: "",
    consent: false,
}

export default function DemoPage() {
    const [form, setForm] = useState<FormData>(initialFormData)
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    function validate(): boolean {
        const newErrors: Partial<Record<keyof FormData, string>> = {}
        if (!form.fullName.trim()) newErrors.fullName = "Full name is required"
        if (!form.workEmail.trim()) {
            newErrors.workEmail = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) {
            newErrors.workEmail = "Enter a valid email"
        }
        if (!form.phone.trim()) newErrors.phone = "Phone number is required"
        if (!form.consent) newErrors.consent = "You must agree to be contacted"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!validate()) return

        setLoading(true)

        // ── Placeholder for backend integration ──
        // Replace the timeout below with an actual API call, e.g.:
        // await fetch("/api/demo-request", { method: "POST", body: JSON.stringify(form) })
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setLoading(false)
        setSubmitted(true)
    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
        setForm((prev) => ({ ...prev, consent: e.target.checked }))
        if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }))
    }

    const inputClass =
        "w-full rounded-xl border border-glass-border bg-glass/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-xl transition-colors duration-200 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
    const labelClass = "mb-1.5 block text-sm font-medium text-foreground"
    const errorClass = "mt-1 text-xs text-red-400"

    return (
        <>
            <Navbar />
            <main className="min-h-screen px-6 pb-16 pt-32">
                <div className="mx-auto max-w-2xl">
                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link
                            href="/"
                            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mb-10 text-center"
                    >
                        <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-primary">
                            Get Started
                        </span>
                        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                            Book a Demo
                        </h1>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                            See how Cogniflow can automate your outbound calls and boost conversions.
                        </p>
                    </motion.div>

                    {/* Success state */}
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-10 text-center backdrop-blur-xl"
                        >
                            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                            <h2 className="mt-4 text-xl font-semibold text-foreground">
                                Thank you!
                            </h2>
                            <p className="mt-2 text-muted-foreground">
                                Our team will contact you shortly.
                            </p>
                            <Link
                                href="/"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_-4px_hsl(199_89%_60%/0.4)]"
                            >
                                Back to Home
                            </Link>
                        </motion.div>
                    ) : (
                        /* Form */
                        <motion.form
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.15,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            onSubmit={handleSubmit}
                            className="space-y-6 rounded-2xl border border-glass-border bg-glass/60 p-8 backdrop-blur-xl"
                            noValidate
                        >
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className={labelClass}>
                                    Full Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={inputClass}
                                    required
                                />
                                {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
                            </div>

                            {/* Work Email & Phone */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="workEmail" className={labelClass}>
                                        Work Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="workEmail"
                                        name="workEmail"
                                        value={form.workEmail}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        className={inputClass}
                                        required
                                    />
                                    {errors.workEmail && (
                                        <p className={errorClass}>{errors.workEmail}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="phone" className={labelClass}>
                                        Phone Number <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className={inputClass}
                                        required
                                    />
                                    {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                                </div>
                            </div>

                            {/* Company Name */}
                            <div>
                                <label htmlFor="companyName" className={labelClass}>
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={form.companyName}
                                    onChange={handleChange}
                                    placeholder="Acme Inc."
                                    className={inputClass}
                                />
                            </div>

                            {/* Company Size & Use Case */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="companySize" className={labelClass}>
                                        Company Size
                                    </label>
                                    <select
                                        id="companySize"
                                        name="companySize"
                                        value={form.companySize}
                                        onChange={handleChange}
                                        className={inputClass}
                                    >
                                        <option value="">Select size</option>
                                        {companySizes.map((size) => (
                                            <option key={size} value={size}>
                                                {size}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="useCase" className={labelClass}>
                                        Use Case
                                    </label>
                                    <select
                                        id="useCase"
                                        name="useCase"
                                        value={form.useCase}
                                        onChange={handleChange}
                                        className={inputClass}
                                    >
                                        <option value="">Select use case</option>
                                        {useCases.map((uc) => (
                                            <option key={uc} value={uc}>
                                                {uc}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className={labelClass}>
                                    Message / Requirements
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your needs..."
                                    rows={4}
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            {/* Consent */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    checked={form.consent}
                                    onChange={handleCheckbox}
                                    className="mt-1 h-4 w-4 shrink-0 rounded border-glass-border bg-glass/60 text-primary accent-primary focus:ring-primary/30"
                                />
                                <label htmlFor="consent" className="text-sm text-muted-foreground">
                                    I agree to be contacted regarding this demo{" "}
                                    <span className="text-red-400">*</span>
                                </label>
                            </div>
                            {errors.consent && <p className={errorClass}>{errors.consent}</p>}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_-4px_hsl(199_89%_60%/0.5)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
                            >
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                {loading ? (
                                    <span className="inline-flex items-center gap-2">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Submitting…
                                    </span>
                                ) : (
                                    "Request Demo"
                                )}
                            </button>
                        </motion.form>
                    )}
                </div>
            </main>
            <SiteFooter />
        </>
    )
}
