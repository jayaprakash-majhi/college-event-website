import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold font-serif text-foreground">
              SRIJANA
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Events
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            SRIJANA 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
