"use client"

import { TransparentLogo } from "@/components/transparent-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-glass-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex items-center">
          <TransparentLogo
            src="/images/cogniflow-logo-new.png"
            alt="Cogniflow Logo"
            className="h-12 w-auto object-contain"
            enhanced
            variant="footer"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span>contact@cogniflowautomations.com</span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span>+91 6366178778, +91 6901634674</span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span>Peenya, Bengaluru</span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <a href="https://cogniflowautomations.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">cogniflowautomations.com</a>
        </div>

        <p className="text-sm text-muted-foreground/60">
          {"© "}
          {new Date().getFullYear()}
          {" Cogniflow. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
