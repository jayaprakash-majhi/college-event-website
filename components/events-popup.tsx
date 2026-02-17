"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { events } from "@/lib/events"

interface EventsPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EventsPopup({ open, onOpenChange }: EventsPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-2xl border-border bg-card p-0 sm:rounded-2xl">
        <DialogHeader className="border-b border-border px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-bold font-serif text-foreground">
            All Events
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Exciting events across Stage, Arena, and Creative categories.
            Click any event to learn more and register.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] px-6 py-4">
          <div className="flex flex-col gap-3 pb-4">
            {events.map((event) => {
              const Icon = event.icon
              return (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  onClick={() => onOpenChange(false)}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-secondary/50 p-4 transition-all hover:border-primary/50 hover:bg-secondary"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${event.color}20` }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: event.color }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">
                        {event.name}
                      </span>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {event.category}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {event.tagline}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              )
            })}
          </div>
        </ScrollArea>
        <div className="border-t border-border p-4">
          <Link
            href="/events"
            onClick={() => onOpenChange(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            View All Events Page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
