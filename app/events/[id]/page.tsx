import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Users } from "lucide-react"
import { events, getEventById } from "@/lib/events"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export function generateStaticParams() {
    return events.map((event) => ({ id: event.id }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const { id } = await params
    const event = getEventById(id)
    if (!event) return { title: "Event Not Found | SRIJANA" }
    return {
        title: `${event.name} | SRIJANA`,
        description: event.fullDescription,
    }
}

export default async function EventDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const event = getEventById(id)

    if (!event) {
        notFound()
    }

    const Icon = event.icon

    return (
        <main>
            <Navbar />

            <section className="pb-20 pt-28 md:pb-32 md:pt-36">
                <div className="mx-auto max-w-4xl px-4 md:px-6">
                    {/* Back link */}
                    <Link
                        href="/events"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to All Events
                    </Link>

                    {/* Header */}
                    <div className="mb-10 md:mb-14">
                        <div className="mb-6 flex items-start gap-4 md:gap-6">
                            <div
                                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl md:h-20 md:w-20"
                                style={{ backgroundColor: `${event.color}15` }}
                            >
                                <Icon
                                    className="h-8 w-8 md:h-10 md:w-10"
                                    style={{ color: event.color }}
                                />
                            </div>
                            <div>
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                    <span
                                        className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                                        style={{
                                            backgroundColor: `${event.color}15`,
                                            color: event.color,
                                        }}
                                    >
                                        {event.category}
                                    </span>
                                </div>
                                <h1 className="text-3xl font-bold text-foreground font-serif md:text-5xl text-balance">
                                    {event.name}
                                </h1>
                                <p
                                    className="mt-2 text-lg font-medium md:text-xl"
                                    style={{ color: event.color }}
                                >
                                    {event.tagline}
                                </p>
                            </div>
                        </div>

                        {/* Quick info pills */}
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                {event.teamSize}
                            </div>
                        </div>
                    </div>

                    {/* Full Description */}
                    <div className="mb-10 md:mb-14">
                        <h2 className="mb-4 text-xl font-bold text-foreground font-serif md:text-2xl">
                            About the Event
                        </h2>
                        <p className="text-muted-foreground leading-relaxed md:text-lg">
                            {event.fullDescription}
                        </p>
                    </div>

                    {/* Rules & Regulations */}
                    <div className="mb-10 rounded-2xl border border-border bg-card p-6 md:mb-14 md:p-8">
                        <h2 className="mb-5 text-xl font-bold text-foreground font-serif md:text-2xl">
                            Rules & Regulations
                        </h2>
                        <ol className="flex flex-col gap-3">
                            {event.rules.map((rule, i) => (
                                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed md:text-base">
                                    <span
                                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                                        style={{
                                            backgroundColor: `${event.color}15`,
                                            color: event.color,
                                        }}
                                    >
                                        {i + 1}
                                    </span>
                                    {rule}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Evaluation Process */}
                    <div className="mb-10 rounded-2xl border border-border bg-card p-6 md:mb-14 md:p-8">
                        <h2 className="mb-5 text-xl font-bold text-foreground font-serif md:text-2xl">
                            Evaluation Process
                        </h2>
                        <div className="flex flex-col gap-4">
                            {event.evaluation.map((criteria, i) => {
                                const parts = criteria.split(" - ")
                                const label = parts[0]
                                const desc = parts[1] || ""
                                const percentMatch = label.match(/\((\d+)%\)/)
                                const percent = percentMatch ? parseInt(percentMatch[1]) : 0

                                return (
                                    <div key={i}>
                                        <div className="mb-1.5 flex items-center justify-between">
                                            <span className="text-sm font-semibold text-foreground md:text-base">
                                                {label}
                                            </span>
                                        </div>
                                        {desc && (
                                            <p className="mb-2 text-xs text-muted-foreground md:text-sm">
                                                {desc}
                                            </p>
                                        )}
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                                            <div
                                                className="h-full rounded-full transition-all"
                                                style={{
                                                    width: `${percent}%`,
                                                    backgroundColor: event.color,
                                                }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Register CTA */}
                    <div
                        className="rounded-2xl p-6 text-center md:p-10"
                        style={{ backgroundColor: `${event.color}10` }}
                    >
                        <h2 className="mb-2 text-2xl font-bold font-serif md:text-3xl text-balance" style={{ color: event.color }}>
                            Ready to Compete?
                        </h2>
                        <p className="mx-auto mb-6 max-w-md text-muted-foreground leading-relaxed">
                            Register now for {event.name} and be part of the most exciting college event.
                            {"Don't"} miss out!
                        </p>
                        <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-background transition-all hover:brightness-110"
                            style={{ backgroundColor: event.color }}
                        >
                            Register Now
                            <ArrowUpRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
