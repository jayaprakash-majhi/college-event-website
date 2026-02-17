import { events } from "@/lib/events"

export function MarqueeBanner() {
  const items = events.map((e) => e.name)
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-border bg-gradient-to-r from-[#00ffff] to-[#ff7a00] py-4">

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mx-6 text-sm font-bold uppercase tracking-widest text-primary-foreground md:mx-10 md:text-base"
          >
            {name}
            <span className="ml-6 text-primary-foreground/40 md:ml-10">
              {"//"}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
