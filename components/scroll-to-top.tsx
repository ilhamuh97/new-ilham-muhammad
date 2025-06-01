"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mainElement = document.querySelector("main")

    if (!mainElement) return

    const toggleVisibility = () => {
      // Show button when user scrolls down from the first section (more than 50% of viewport height)
      if (mainElement.scrollTop > window.innerHeight * 0.5) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    mainElement.addEventListener("scroll", toggleVisibility)

    return () => mainElement.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const mainElement = document.querySelector("main")
    if (mainElement) {
      mainElement.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
