"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Initialize theme on component mount
  useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        setIsDark(true)
        document.documentElement.classList.add("dark")
      } else {
        setIsDark(false)
        document.documentElement.classList.remove("dark")
      }
    }
  })

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector("main")
      if (mainElement) {
        const scrollTop = mainElement.scrollTop
        setIsScrolled(scrollTop > 50)
      }
    }

    const mainElement = document.querySelector("main")
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll)
      return () => mainElement.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const mainElement = document.querySelector("main")
    const section = document.getElementById(sectionId)

    if (mainElement && section) {
      const sectionTop = section.offsetTop
      mainElement.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }

    setIsMenuOpen(false)
  }

  const navigationItems = [
    { name: "Home", id: "hero" },
    { name: "Journey", id: "journey" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "github" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-lg transition-all duration-500 ease-in-out ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
              isScrolled ? "h-12" : "h-20"
            }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("hero")}
                className={`font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 ease-in-out ${
                  isScrolled ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl lg:text-4xl"
                }`}
              >
                Ilham
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-black dark:text-white/80 hover:text-black dark:hover:text-white px-3 py-2 font-medium transition-all duration-500 ease-in-out hover:scale-105 ${
                      isScrolled ? "text-sm" : "text-base lg:text-lg"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>

            {/* Desktop Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={toggleTheme}
                size="icon"
                variant="outline"
                className={`rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 ease-in-out hover:scale-110 ${
                  isScrolled ? "w-10 h-10" : "w-12 h-12"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun
                    className={`text-yellow-500 transition-all duration-500 ease-in-out ${
                      isScrolled ? "h-4 w-4" : "h-5 w-5"
                    }`}
                  />
                ) : (
                  <Moon
                    className={`text-blue-600 transition-all duration-500 ease-in-out ${
                      isScrolled ? "h-4 w-4" : "h-5 w-5"
                    }`}
                  />
                )}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <Button
                onClick={toggleTheme}
                size="icon"
                variant="outline"
                className={`rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 ease-in-out ${
                  isScrolled ? "w-9 h-9" : "w-11 h-11"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun
                    className={`text-yellow-500 transition-all duration-500 ease-in-out ${
                      isScrolled ? "h-4 w-4" : "h-5 w-5"
                    }`}
                  />
                ) : (
                  <Moon
                    className={`text-blue-600 transition-all duration-500 ease-in-out ${
                      isScrolled ? "h-4 w-4" : "h-5 w-5"
                    }`}
                  />
                )}
              </Button>

              {/* Hamburger Menu */}
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                size="icon"
                variant="outline"
                className={`rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 ease-in-out ${
                  isScrolled ? "w-9 h-9" : "w-11 h-11"
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X
                    className={`text-white transition-all duration-500 ease-in-out ${
                      isScrolled ? "h-4 w-4" : "h-5 w-5"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`text-gray-700 dark:text-gray-300 transition-all duration-500 ease-in-out ${
                      isScrolled ? "h-4 w-4" : "h-5 w-5"
                    }`}
                  />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 dark:from-black/95 dark:via-purple-950/95 dark:to-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Navigation Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-8"
          onClick={() => setIsMenuOpen(false)}>
          {/* Navigation Items */}
          <nav className="flex flex-col items-center space-y-8">
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white text-3xl sm:text-4xl lg:text-5xl font-bold hover:text-yellow-300 dark:hover:text-yellow-400 transition-all duration-300 hover:scale-110 transform ${
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : "0ms",
                  transitionDuration: "600ms",
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div
            className={`absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl transition-all duration-1000 ${
              isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ transitionDelay: isMenuOpen ? "800ms" : "0ms" }}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl transition-all duration-1000 ${
              isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ transitionDelay: isMenuOpen ? "1000ms" : "0ms" }}
          />
        </div>
      </div>
    </>
  )
}
