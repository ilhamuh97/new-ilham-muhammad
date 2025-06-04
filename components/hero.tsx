"use client"

import Image from "next/image"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export function Hero() {
  return (
    <section
      id="hero"
      className="
        h-dvh flex items-center justify-center px-4 py-8 relative overflow-hidden
        bg-gradient-to-br 
        from-sky-300 via-sky-400 to-cyan-500
        dark:from-sky-900 dark:via-sky-800 dark:to-cyan-900
      "
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="max-w-md mx-auto text-center space-y-6 relative z-10">
        <div className="relative w-48 h-48 mx-auto group">
          <div
            className="relative w-full h-full cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-3"
          >
            <Image
              src="assets/ilham-muhammad.jpeg"
              alt="Ilham's profile photo"
              width={256}
              height={256}
              className="rounded-full object-cover border-4 border-white/30 dark:border-white/50 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full group-hover:from-yellow-400/30 group-hover:to-orange-400/30 transition-all duration-300"></div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white animate-fade-in-up">
            Hi, my name is <span className="text-yellow-300 dark:text-yellow-400">Ilham</span>
          </h1>

          <p
            className="text-white/90 dark:text-white/95 text-sm sm:text-base leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            I am a{" "}
            <span className="text-cyan-300 dark:text-cyan-400 font-semibold">
              website developer
            </span>{" "}
            with a strong interest in visual computing, including fields like computer vision, image processing, and data visualization.
          </p>

          {/* Icon buttons */}
          <div
            className="flex justify-center gap-6 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://www.linkedin.com/in/ilhammuhammad-735b2b187/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-400 hover:text-blue-500 transition rounded-full bg-black/30 p-3"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/ilhamuh97"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-200 hover:text-white transition rounded-full bg-black/30 p-3"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="mailto:ilhamuh97@gmail.com"
              aria-label="Email"
              className="text-green-400 hover:text-green-500 transition rounded-full bg-black/30 p-3"
            >
              <FaEnvelope className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
