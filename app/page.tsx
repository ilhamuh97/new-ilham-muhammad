import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { GitHubLink } from "@/components/github-link";
import { ScrollToTop } from "@/components/scroll-to-top";
import LoadingScreen from "@/components/LoadingScreen";

export default function Portfolio() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main
        className="h-dvh overflow-y-scroll scroll-smooth"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Hero />
        <Journey />
        <Projects />
        <GitHubLink />
      </main>
      <ScrollToTop />
    </>
  );
}
