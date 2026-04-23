"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, Code2 } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="text-primary font-mono">01.</span> About Me
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Bio Text */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I&apos;m Giorgio, a passionate web developer based in{" "}
                <span className="text-primary">Palermo, Italy</span>. I enjoy creating things 
                that live on the internet, whether that be websites, applications, or anything 
                in between. My goal is to always build products that provide pixel-perfect, 
                performant experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I recently completed my{" "}
                <span className="text-primary">Master in Full Stack Development</span> at 
                Start2Impact University, where I gained hands-on experience with modern 
                technologies like React, Node.js, and Agile methodologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying the beautiful Sicilian 
                coast. I&apos;m always open to new opportunities and challenges!
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Palermo, Italy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Available for hire</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span>Full Stack Focus</span>
                </div>
              </div>
            </div>

            {/* Image/Avatar Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold text-primary/30 font-mono">GC</span>
                </div>
                {/* Decorative corner */}
                <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-primary/30 rounded-lg -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
