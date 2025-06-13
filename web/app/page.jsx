import { Hero } from "@/components/home/hero-new"
import HomeCard  from "@/components/home/home-card"
import Container from "@/components/ui/container" 
import About from "@/components/home/about"
import YourMLASection from "@/components/home/your-mla-section"
import PerformanceTracker from "@/components/home/mp-performance-tracker"
import SocialFeed from "@/components/home/social-feed"
import Gallery from "@/components/home/gallery"
import MediaTabs from "@/components/home/social-media-tabs"
import MediaFeed from "@/components/home/media-and-feed"
import Testimonial from "@/components/home/testimonial"


export default function HomePage() {
  return (
    <div className="">
      
      
      <Hero/>
      <Container>
      <About/>
      <HomeCard/>
      <YourMLASection/>
      <PerformanceTracker/>
      <SocialFeed/>
      <Gallery/>
      <MediaFeed/>
      {/* <MediaTabs/> */}
      
      
      </Container>
      <Testimonial/>
      {/* <Hero />
      <AboutSection />
      <PolicyHighlights />
      <MediaSection />
      <Footer /> */}
    </div>
  )
}
