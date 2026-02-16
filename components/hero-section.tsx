"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { EventsPopup } from "@/components/events-popup"

export function HeroSection() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Animated orbs */}
      <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute right-[15%] bottom-[25%] h-48 w-48 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center md:px-6">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
          <Calendar className="h-4 w-4" />
          <span>Coming Soon</span>
          <span className="mx-1 text-primary/40">|</span>
          <MapPin className="h-4 w-4" />
          <span>Your College Campus</span>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter text-foreground font-serif sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="text-balance">SRIJANA 2K26</span>
        </h1>

        <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
          Gandhi Engineering College.
          14 electrifying events. One unforgettable experience.
        </p>

        <p className="mb-10 text-sm uppercase tracking-widest text-primary">
          Create. Compete. Celebrate.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => setPopupOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 animate-pulse-glow"
          >
            Explore Events
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View All Events
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { number: "14", label: "Events" },
            { number: "500+", label: "Participants" },
            { number: "3", label: "Days" },
            { number: "50K+", label: "Prize Pool" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl font-serif">
                {stat.number}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Popup */}
      <EventsPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  )
}
