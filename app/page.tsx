import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { FeaturedEvents } from "@/components/featured-events"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <FeaturedEvents />
      <CTASection />
      <Footer />
    </main>
  )
}
