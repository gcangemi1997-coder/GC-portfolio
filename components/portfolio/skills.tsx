"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3 / SCSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Styling",
    skills: [
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 90 },
      { name: "Flexbox & Grid", level: 90 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Node.js", level: 70 },
      { name: "REST APIs", level: 75 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
        />
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="text-primary font-mono">02.</span> Skills
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <p className="text-center text-muted-foreground mb-6">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind", "Git", "Node.js", "SCSS"].map(
                (tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
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
