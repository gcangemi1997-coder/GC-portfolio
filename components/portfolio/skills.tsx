"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 100 },
      { name: "CSS3 / SCSS", level: 100 },
      { name: "JavaScript", level: 95 },
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    title: "Styling",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 95 },
      { name: "Flexbox & Grid", level: 95 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Node.js", level: 95 },
      { name: "REST APIs", level: 95 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between text-sm">
        <motion.span
          className="text-foreground font-medium"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.2 }}
        >
          {name}
        </motion.span>
        <motion.span
          className="text-primary font-mono"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 0.5, type: "spring", stiffness: 200 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full relative"
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "200%" } : {}}
            transition={{ duration: 1.5, delay: delay + 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30 relative overflow-hidden" ref={containerRef}>
      {/* Animated background decoration */}
      <motion.div
        style={{ rotate }}
        className="absolute -top-20 -left-20 w-64 h-64 border border-primary/10 rounded-full"
      />
      <motion.div
        style={{ rotate }}
        className="absolute -bottom-20 -right-20 w-80 h-80 border border-primary/10 rounded-full"
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
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
                02.
              </motion.span>{" "}
              Skills
            </h2>
            <motion.div
              className="h-px bg-border flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ originX: 0 }}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.15,
                  ease: "easeOut",
                }}
                className="space-y-6"
              >
                <motion.h3
                  className="text-lg font-semibold text-primary border-b border-border pb-2"
                  whileHover={{ x: 5 }}
                >
                  {category.title}
                </motion.h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.15 + skillIndex * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons with wave animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <p className="text-center text-muted-foreground mb-6">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind", "Git", "Node.js", "SCSS"].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{
                      delay: 0.8 + i * 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -8,
                      boxShadow: "0 10px 30px -10px rgba(21, 253, 192, 0.3)",
                    }}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
