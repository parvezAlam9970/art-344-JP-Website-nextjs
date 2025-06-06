import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { PolicyHighlights } from "@/components/policy-highlights"
import { MediaSection } from "@/components/media-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <PolicyHighlights />
      <MediaSection />
      <Footer />
    </div>
  )
}
