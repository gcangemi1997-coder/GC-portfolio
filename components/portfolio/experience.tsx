"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: "freelance",
    company: "Freelance",
    title: "Junior Web Developer",
    date: "2026 - Present",
    description: [
      "Development of showcase websites and landing pages for local clients",
      "Building responsive, mobile-first web applications using modern CSS techniques",
      "Implementing SEO best practices to improve search engine visibility",
      "Collaborating with clients to understand requirements and deliver tailored solutions",
    ],
  },
  {
    id: "internship",
    company: "Web Agency XYZ",
    title: "Front-end Intern",
    date: "2025",
    description: [
      "Supported the development team in maintaining e-commerce portals",
      "Implemented new UI features using HTML, CSS, and JavaScript",
      "Participated in code reviews and learned best practices from senior developers",
      "Gained experience with version control using Git and collaborative workflows",
    ],
  },
  {
    id: "education",
    company: "Start2Impact University",
    title: "Master in Full Stack Development",
    date: "2025",
    description: [
      "Completed intensive training in React, Node.js, and modern web technologies",
      "Built full-stack applications following Agile methodologies",
      "Collaborated with peers on group projects simulating real-world scenarios",
      "Developed strong foundation in both frontend and backend development",
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(experiences[0].id)

  const activeExperience = experiences.find((exp) => exp.id === activeTab)!

  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="text-primary font-mono">04.</span> Experience
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Experience Tabs */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={cn(
                    "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all relative",
                    "hover:bg-secondary/50 hover:text-primary",
                    activeTab === exp.id
                      ? "text-primary bg-secondary/50"
                      : "text-muted-foreground"
                  )}
                >
                  {exp.company}
                  {/* Active indicator */}
                  <span
                    className={cn(
                      "absolute md:left-0 bottom-0 md:bottom-auto md:top-0 h-0.5 md:h-full md:w-0.5 w-full md:rounded-r rounded-t bg-primary transition-all",
                      activeTab === exp.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 py-2 md:pl-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {activeExperience.title}{" "}
                <span className="text-primary">@ {activeExperience.company}</span>
              </h3>
              <p className="text-sm font-mono text-muted-foreground mb-4">
                {activeExperience.date}
              </p>
              <ul className="space-y-3">
                {activeExperience.description.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground text-sm">
                    <span className="text-primary mt-1.5 flex-shrink-0">&#9654;</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
