"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import { events, type EventData } from "@/lib/events"

const categories = [
  { key: "all", label: "All Events" },
  { key: "stage", label: "Stage" },
  { key: "arena", label: "Arena" },
  { key: "creative", label: "Creative" },
] as const

export function EventsGrid() {
  const [filter, setFilter] = useState<string>("all")

  const filtered =
    filter === "all"
      ? events
      : events.filter((e) => e.category === filter)

  return (
    <>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${filter === cat.key
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
          >
            {cat.label}
            {cat.key !== "all" && (
              <span className="ml-1.5 text-xs opacity-70">
                ({events.filter((e) => e.category === cat.key).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  )
}

function EventCard({ event }: { event: EventData }) {
  const Icon = event.icon

  return (
    <Link
      href={`/events/${event.id}`}
      id={event.id}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 scroll-mt-28"
    >
      {/* Glow */}
      <div
        className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-20"
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

        <h3 className="mb-1 text-lg font-bold text-foreground">{event.name}</h3>
        <p className="mb-2 text-sm font-medium text-primary">{event.tagline}</p>
        <p className="mb-5 text-sm text-muted-foreground leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            {event.teamSize}
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all group-hover:brightness-110">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
