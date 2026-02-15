"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { TransparentLogo } from "@/components/transparent-logo"

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Vision", href: "#vision" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-glass-border/50 bg-background/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center overflow-visible">
          <TransparentLogo
            src="/images/cogniflow-logo-new.png?v=2"
            alt="Cogniflow Logo"
            className="h-20 w-auto object-contain md:h-28"
            enhanced
            variant="nav"
          />
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            data-tally-open="Gxd8De"
            data-tally-layout="modal"
            data-tally-width="600"
            data-tally-overlay="1"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-base font-bold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_-4px_hsl(142_76%_56%/0.4)] hover:scale-[1.02] sm:inline-flex"
          >
            Book a Demo
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
