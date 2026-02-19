"use client"

import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import { events } from "@/lib/events"

const featured = events.slice(0, 6)

export function FeaturedEvents() {
  return (
    <section className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Featured
            </p>
            <h2 className="text-3xl font-bold text-foreground font-serif md:text-5xl">
              Crazy Events
            </h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            See all 14 events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((event) => {
            const Icon = event.icon
            return (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Glow effect */}
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-20"
                  style={{ backgroundColor: event.color }}
                />

                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${event.color}15` }}
                    >
                      <Icon className="h-7 w-7" style={{ color: event.color }} />
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="mb-1 text-lg font-bold text-foreground">
                    {event.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {event.tagline}
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {event.description}
                  </p>

                  {/* First line: Team Size + View Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      <span>{event.teamSize}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      View
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  {/* Second line: Coordinator */}


                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
