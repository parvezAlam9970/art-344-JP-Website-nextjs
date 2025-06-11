import { Header } from "@/components/layout/header"
import { Hero } from "@/components/home/hero-new"
import HomeCard  from "@/components/home/home-card"
import Container from "@/components/ui/container" 
import { AboutSection } from "@/components/about-section"
import { PolicyHighlights } from "@/components/policy-highlights"
import { MediaSection } from "@/components/media-section"
import { Footer } from "@/components/footer"
import About from "@/components/home/about"
import YourMLASection from "@/components/home/your-mla-section"
import Heading from "@/components/reusable/heading"
import PerformanceTracker from "@/components/home/mp-performance-tracker"
import SocialFeed from "@/components/home/social-feed"
import Gallery from "@/components/home/gallery"
import MediaTabs from "@/components/home/social-media-tabs"


export default function HomePage() {
  return (
    <div className="">
      
      
      <Hero/>
      <Container>
      <About/>
      <HomeCard/>
      {/* <YourMLASection/> */}
      <PerformanceTracker/>
      <SocialFeed/>
      <Gallery/>
      {/* <MediaTabs/> */}
      
      </Container>
      {/* <Hero />
      <AboutSection />
      <PolicyHighlights />
      <MediaSection />
      <Footer /> */}
    </div>
  )
}
