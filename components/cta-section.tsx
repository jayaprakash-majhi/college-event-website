import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Decorative glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <Sparkles className="mx-auto mb-6 h-10 w-10 text-primary" />
        <h2 className="mb-4 text-3xl font-bold text-foreground font-serif md:text-5xl text-balance">
          Ready to be part of SRIJANA?
        </h2>
        <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
          Pick your events, form your crew, and get ready for the biggest
          college fest of the year. Spots are limited!
        </p>
        <Link
          href="/events"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Browse All Events
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
