import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Journeys from "@/components/journeys"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Certifications from "@/components/certifications"
import Qualities from "@/components/qualities"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ElevatorPitchYouTube from "@/components/elevator-pitch-youtube"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Hero />
          <About />
          <ElevatorPitchYouTube />
          <Journeys />
          <Skills />
          <Projects />
          <Testimonials />
          <Certifications />
          <Qualities />
          <BlogPreview />
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
