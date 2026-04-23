"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
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
    <section id="experience" className="py-24 px-4 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"
            style={{ top: `${20 + i * 20}%` }}
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "100%" } : {}}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
              <motion.span
                className="text-primary font-mono"
                animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                04.
              </motion.span>{" "}
              Experience
            </h2>
            <motion.div
              className="h-px bg-border flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ originX: 0 }}
            />
          </div>

          {/* Experience Tabs */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border relative">
              {/* Animated indicator */}
              <motion.div
                className="absolute hidden md:block left-0 w-0.5 h-10 bg-primary rounded-r"
                animate={{
                  top: `${experiences.findIndex((e) => e.id === activeTab) * 40}px`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              {experiences.map((exp, i) => (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: "rgba(21, 253, 192, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all relative",
                    activeTab === exp.id
                      ? "text-primary bg-secondary/50"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {exp.company}
                  {/* Mobile indicator */}
                  <motion.span
                    className={cn(
                      "absolute md:hidden bottom-0 left-0 h-0.5 bg-primary rounded-t",
                      activeTab === exp.id ? "w-full" : "w-0"
                    )}
                    layoutId="mobile-indicator"
                  />
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="flex-1 py-2 md:pl-6"
              >
                <motion.h3
                  className="text-lg font-semibold text-foreground mb-1"
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {activeExperience.title}{" "}
                  <motion.span
                    className="text-primary"
                    whileHover={{ scale: 1.05 }}
                  >
                    @ {activeExperience.company}
                  </motion.span>
                </motion.h3>
                <motion.p
                  className="text-sm font-mono text-muted-foreground mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {activeExperience.date}
                </motion.p>
                <ul className="space-y-3">
                  {activeExperience.description.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex gap-3 text-muted-foreground text-sm"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.08 }}
                    >
                      <motion.span
                        className="text-primary mt-1.5 flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.08, type: "spring" }}
                      >
                        &#9654;
                      </motion.span>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
