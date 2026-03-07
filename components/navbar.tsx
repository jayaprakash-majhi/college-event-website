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
            <div
              style={{
                width: "190px",
                height: "70px",
                backgroundImage: "url('https://www.gec.edu.in/assets/img/logo/logo5.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "9px"
              }}
            ></div>
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
            href="/announcement"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Announcement
          </Link>
          <Link
            href="/schedule"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Schedule
          </Link>
          <Link
            href="/result"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Result
          </Link>
          <Link
            href="/result2"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Result(Art Gallery)
          </Link>


          <Link
            href="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Reach Us
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
              href="/announcement"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              Announcement
            </Link>
            <Link
              href="/schedule"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              Schedule
            </Link>
            <Link
              href="/result"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              Result
            </Link>
            <Link
              href="/result2"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              Result(Art Gallery)
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              Reach Us
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
