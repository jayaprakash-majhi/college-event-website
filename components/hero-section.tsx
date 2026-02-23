"use client"

import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { EventsPopup } from "@/components/events-popup"





export default function Countdown() {
  const targetDate = new Date("February 28, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft("Event Started 🎉");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Calendar className="h-4 w-4" />
      <span>{timeLeft}</span>
    </div>
  );
}




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


          <Countdown />
          <span className="mx-1 text-primary/40">|</span>
          <MapPin className="h-4 w-4" />
          <span>GEC , Bhubaneswar</span>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter text-foreground font-serif sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="text-balance" style={{ textShadow: "5px 5px 10px rgba(255, 132, 0, 0.5)" }}>𝙎𝙍𝙄𝙅𝘼𝙉𝘼</span>
        </h1>
        <h2 className="-mt-5 mb-3 text-xl font-bold leading-tight tracking-tighter text-foreground font-serif sm:text-2xl md:text-3xl lg:text-4xl">
          <span
            className="text-balance"
            style={{ textShadow: "5px 5px 10px rgba(255, 132, 0, 0.5)" }}
          >
            𝔸𝕣𝕥 𝔸𝕟𝕕 ℂ𝕦𝕝𝕥𝕦𝕣𝕖 𝔽𝕖𝕤𝕥
          </span>
        </h2>




        <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
          Gandhi Engineering College.
          18 electrifying events. One unforgettable experience.
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
            { number: "18", label: "Events" },
            { number: "1500+", label: "Participants" },
            { number: "2", label: "Days" },
            // { number: "50K+", label: "Prize Pool" },
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
