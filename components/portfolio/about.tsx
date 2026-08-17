"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, Code2 } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" ref={containerRef}>
      {/* Parallax background element */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
              <motion.span
                className="text-primary font-mono"
                animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                01.
              </motion.span>{" "}
              About Me
            </h2>
            <motion.div
              className="h-px bg-border flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ originX: 0 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Bio Text */}
            <div className="md:col-span-2 space-y-4">
              {[
                <>
                  Hello! I&apos;m Giorgio, a passionate web developer based in{" "}
                  <span className="text-primary">Milano, Italy</span>. I enjoy creating things
                  that live on the internet, whether that be websites, applications, or anything
                  in between. My goal is to always build products that provide pixel-perfect,
                  performant experiences.
                </>,
                <>
                  I recently completed my{" "}
                  <span className="text-primary">Master in Full Stack Development</span> at
                  Start2Impact University, where I gained hands-on experience with modern
                  technologies like React, Node.js, and Agile methodologies.
                </>,
                <>
                  When I&apos;m not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or enjoying the beautiful Sicilian
                  coast. I&apos;m always open to new opportunities and challenges!
                </>,
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="text-muted-foreground leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}

              {/* Quick Info with staggered icons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
                {[
                  { Icon: MapPin, text: "Palermo, Italy" },
                  { Icon: Calendar, text: "Available for hire" },
                  { Icon: Code2, text: "Full Stack Focus" },
                ].map(({ Icon, text }, i) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    whileHover={{ scale: 1.05, x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <motion.div
                      animate={isInView ? { rotate: [0, 360] } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                    >
                      <Icon className="h-4 w-4 text-primary" />
                    </motion.div>
                    <span>{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Image/Avatar with 3D effect */}
            <motion.div
              variants={itemVariants}
              className="relative group perspective-1000"
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                  animate={isInView ? {
                    background: [
                      "linear-gradient(135deg, rgba(21, 253, 192, 0.2) 0%, rgba(21, 253, 192, 0.05) 100%)",
                      "linear-gradient(225deg, rgba(21, 253, 192, 0.2) 0%, rgba(21, 253, 192, 0.05) 100%)",
                      "linear-gradient(315deg, rgba(21, 253, 192, 0.2) 0%, rgba(21, 253, 192, 0.05) 100%)",
                      "linear-gradient(135deg, rgba(21, 253, 192, 0.2) 0%, rgba(21, 253, 192, 0.05) 100%)",
                    ],
                  } : {}}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <motion.span
                    className="text-6xl md:text-7xl font-bold text-primary/30 font-mono"
                    animate={isInView ? {
                      textShadow: [
                        "0 0 20px rgba(21, 253, 192, 0)",
                        "0 0 40px rgba(21, 253, 192, 0.3)",
                        "0 0 20px rgba(21, 253, 192, 0)",
                      ],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    GC
                  </motion.span>
                </motion.div>
              </motion.div>
              {/* Decorative corner with animation */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-full h-full border-2 border-primary/30 rounded-lg -z-10"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 4, y: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
