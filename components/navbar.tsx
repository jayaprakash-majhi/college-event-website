"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* <Sparkles className="h-6 w-6 text-primary" /> */}
          <span className="text-xl font-bold font-serif tracking-tight text-foreground">
            <div style={{ width: "70px", height: "70px", backgroundImage: "url('data:image/png;base64,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')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "9px" }}></div>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">

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


          <Link
            href="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact Us
          </Link>
          <Link
            href="/webTeam"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            webTeam
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Register Now
          </Link>


        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              Home
            </Link>
            <Link
              href="/events"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              Events
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              Contact Us
            </Link>
            <Link
              href="/webTeam"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              webTeam
            </Link>

            <Link
              href="/events"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
