import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Journey } from "@/components/journey"
import { Projects } from "@/components/projects"
import { GitHubLink } from "@/components/github-link"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="h-screen overflow-y-scroll scroll-smooth" style={{ scrollSnapType: "y mandatory" }}>
        <Hero />
        <Journey />
        <Projects />
        <GitHubLink />
      </main>
      <ScrollToTop />
    </>
  )
}
