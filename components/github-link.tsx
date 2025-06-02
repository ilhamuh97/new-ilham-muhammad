"use client"

import { Github, Heart } from "lucide-react"

export function GitHubLink() {
  return (
    <section
      id="github"
      className="h-dvh flex flex-col items-center justify-center px-4 pt-20 bg-gradient-to-br from-indigo-500 via-sky-500 to-indigo-500 dark:from-black dark:via-sky-950 dark:to-black relative overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="max-w-2xl mx-auto text-center flex-1 flex flex-col justify-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white animate-fade-in-down">
          View Source Code
        </h2>

        <a
          href="https://github.com/ilhamuh97/new-ilham-muhammad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-8 py-6 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105 hover:bg-white/20 dark:hover:bg-white/10 animate-fade-in-up"
        >
          <Github className="w-10 h-10 text-sky-200 group-hover:text-sky-800 dark:text-sky-600 dark:group-hover:text-sky-300 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <div className="text-left">
            <p className="font-bold text-sky-200 group-hover:text-sky-800 dark:text-sky-600 dark:group-hover:text-sky-300 transition-colors duration-300 text-lg sm:text-xl lg:text-2xl">
              Portfolio Website
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-sky-200/80 group-hover:text-sky-800 dark:text-sky-600/80 dark:group-hover:text-sky-300 transition-colors duration-300">
              View on GitHub
            </p>
          </div>
        </a>
      </div>

      <div className="py-8 w-full border-t border-white/20 dark:border-white/10 mt-auto relative z-10">
        <p className="text-xs sm:text-sm lg:text-base text-white/70 dark:text-white/60 text-center flex items-center justify-center gap-2">
          © 2025 ilhamuh97
        </p>
      </div>
    </section>
  )
}
