import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EventsGrid } from "@/components/events-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Events | SRIJANA",
  description:
    "Explore all 14 exciting events at SRIJANA. From Battle of Bands to Stand-Up Comedy Night, find your event and register now!",
}

export default function EventsPage() {
  return (
    <main>
      <Navbar />
      <section className="pb-20 pt-28 md:pb-32 md:pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Choose your arena
            </p>
            <h1 className="mb-4 text-4xl font-bold text-foreground font-serif md:text-6xl text-balance">
              All Events
            </h1>
            <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
              14 events across three categories. Pick your favorites, form your
              team, and register to compete.
            </p>
          </div>
          <EventsGrid />
        </div>
      </section>
      <Footer />
    </main>
  )
}
