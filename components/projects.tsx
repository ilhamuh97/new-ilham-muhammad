"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Clock, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    name: "ClassifyAI",
    link: "https://classify-ai.vercel.app/",
    techStack: ["React", "Tensorflow.js", "p5.js", "Ant Design", "ApexCharts"],
    description:
      "The ClassifyAI web-based application enables users to create image classification models through a simple, code-free interface, accessible on both desktop and mobile devices. It guides users through four main steps: class creation, parameter setup, training, and real-time prediction testing.",
    status: "done",
  },
  {
    name: "SASO E-Commerce",
    link: null,
    techStack: ["Next.js", "Node.js", "Ant Design", "MongoDB", "express.js"],
    description: "This website was developed as an ordering system for food and drinks at the annual SASO food festival organized by IWKZ e.V., first launched at SASO 2022. Initially serving a single event, the project later evolved into the IW-Commerce website with enhanced functionality to support multiple events.",
    status: "done",
  },
  {
    name: "IW-Commerce",
    link: null,
    techStack: ["Next.js", "Node.js", "Supabase", "express.js"],
    description: "IW-Commerce is the second version of the SASO E-commerce website, featuring an improved UI/UX, enhanced functionalities, and support for multiple events. The website is currently under development.",
    status: "ongoing",
  },
  {
    name: "Preattentive Test",
    link: "https://ilhamuh97.github.io/preattentive-test/",
    techStack: ["p5.js", "HTML", "CSS", "JavaScript"],
    description: "This is a small project developed to create a website that tests preattentive vision. The website aims to explore how preattentive processing functions in the human visual system.",
    status: "done",
  },
  {
    name: "Hanoi Visualizer",
    link: "https://hanoi-viz.netlify.app/",
    techStack: ["svg.js", "HTML", "CSS", "JavaScript"],
    description: "Hanoi Visualizer is a campus project that animates the execution of code for the Tower of Hanoi game. It helps visualize how the algorithm works step by step.",
    status: "done",
  },
  {
    name: "Histogram",
    link: "https://show-histogram.netlify.app/",
    techStack: ["highcharts", "HTML", "CSS", "JavaScript"],
    description: "This website is a simple project that visualizes the distribution of data in a histogram format. It allows users to input data and see how it is represented graphically.",
    status: "done",
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section
      id="projects"
      className="h-dvh flex items-center justify-center px-4 pt-16 pb-6 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 dark:from-violet-950 dark:via-purple-950 dark:to-fuchsia-950 relative overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent animate-fade-in-down">
          My Projects
        </h2>

        <div className="relative">
          {/* Floating Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-20">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-violet-200/50 dark:border-violet-700/50 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto -translate-x-5"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-violet-200/50 dark:border-violet-700/50 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto translate-x-5"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <Card className="min-h-[350px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-up flex flex-col">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {currentProject.name}
                </CardTitle>
                <div className="flex items-center gap-2">
                  {currentProject.status === "done" ? (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Done
                    </Badge>
                  ) : (
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 shadow-lg">
                      <Clock className="w-3 h-3 mr-1" />
                      Ongoing
                    </Badge>
                  )}
                </div>
              </div>

              {currentProject.link && (
                <div className="flex items-center gap-2">
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 dark:text-violet-400 hover:text-purple-600 dark:hover:text-purple-400 text-xs sm:text-sm lg:text-base flex items-center gap-1 font-semibold hover:scale-105 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              )}
            </CardHeader>

            <CardContent className="flex flex-col flex-1">
              {/* Description - Takes up available space */}
              <div className="flex-1">
                <CardDescription className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {currentProject.description}
                </CardDescription>
              </div>

              {/* Tech Stack - Always at bottom */}
              <div className="mt-6 pt-4 border-t border-violet-100 dark:border-violet-800">
                <p className="text-xs sm:text-sm lg:text-base font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-500 dark:text-violet-400" />
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950 border-violet-200 dark:border-violet-700 text-violet-700 dark:text-violet-300 hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg"
                      : "bg-violet-200 dark:bg-violet-700 hover:bg-violet-300 dark:hover:bg-violet-600"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
