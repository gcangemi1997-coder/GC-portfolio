"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "Elite News",
    description:
      "A bold Neo-Brutalist news aggregator built with React and the New York Times API. Features real-time news fetching, category navigation, dedicated article detail pages, and global state management with Context API.",
    image: "/images/elite-news.jpg",
    tech: ["React", "Vite", "Axios", "Context API", "CSS Modules"],
    liveUrl: "https://elite-news.vercel.app/",
    githubUrl: "https://github.com/gcangemi1997-coder/Elite-News",
  },
  {
    title: "Owly App",
    description:
      "A professional EdTech SaaS platform for exploring educational books using the Open Library API. Built with modular architecture, featuring skeleton loaders, smart caching, graceful error handling, and unit testing with Vitest.",
    image: "/images/owly-app.jpg",
    tech: ["JavaScript", "Vite", "Axios", "Lodash", "Vitest"],
    liveUrl: "https://owly-app.vercel.app/",
    githubUrl: "https://github.com/gcangemi1997-coder/Owly-App",
  },
]

const otherProjects = [
  {
    title: "DnA Project",
    description: "A modern website built with HTML and CSS, focused on clean design and smooth user experience with responsive layouts.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/gcangemi1997-coder/DnA_Project",
    liveUrl: "https://gcangemi1997-coder.github.io/DnA_Project/index.html",
  },
  {
    title: "GreenEarth",
    description: "An eco-themed landing page demonstrating responsive layout with Flexbox and CSS animations.",
    tech: ["HTML5", "CSS3", "Flexbox"],
    githubUrl: "https://github.com/gcangemi1997-coder/GreenEarth_Project",
    liveUrl: "https://gcangemi1997-coder.github.io/GreenEarth_Project/index.html",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my projects and skills as a Full Stack Developer.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/gcangemi1997-coder/gcangemi1997-coder.github.io",
  },
]

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof featuredProjects)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative grid md:grid-cols-12 gap-4 items-center ${
        isEven ? "" : "md:text-right"
      }`}
    >
      {/* Project Image with parallax */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100, rotateY: isEven ? -15 : 15 }}
        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`md:col-span-7 ${isEven ? "md:col-start-1" : "md:col-start-6"} relative`}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative group"
        >
          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden bg-secondary"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div style={{ scale: imageScale, y: imageY }} className="w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-primary/20"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(21, 253, 192, 0.1) 0%, transparent 70%)",
              }}
            />
          </motion.div>
        </a>
      </motion.div>

      {/* Project Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 100 : -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className={`md:col-span-6 ${
          isEven
            ? "md:col-start-6 md:text-right"
            : "md:col-start-1 md:row-start-1 md:text-left"
        } relative z-10`}
      >
        <motion.p
          className="text-primary font-mono text-sm mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          Featured Project
        </motion.p>
        <motion.h3
          className="text-xl md:text-2xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          whileHover={{ x: isEven ? -5 : 5 }}
        >
          {project.title}
        </motion.h3>
        <motion.div
          className="bg-card p-6 rounded-lg shadow-xl border border-border mb-4 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          whileHover={{ borderColor: "rgba(21, 253, 192, 0.3)" }}
        >
          <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
            {project.description}
          </p>
          {/* Card shimmer on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Tech stack with stagger */}
        <motion.ul
          className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground mb-4 ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.tech.map((tech, i) => (
            <motion.li
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.05, type: "spring" }}
              whileHover={{ color: "rgb(21, 253, 192)", scale: 1.1 }}
            >
              {tech}
            </motion.li>
          ))}
        </motion.ul>

        {/* Links with hover animation */}
        <motion.div
          className={`flex gap-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 200 }}
            aria-label="View source code"
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            aria-label="View live project"
          >
            <ExternalLink className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function OtherProject({
  project,
  index,
}: {
  project: (typeof otherProjects)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -12,
        boxShadow: "0 20px 40px -20px rgba(21, 253, 192, 0.2)",
      }}
      className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all group relative overflow-hidden"
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <motion.div
            animate={isInView ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            <Folder className="h-10 w-10 text-primary" />
          </motion.div>
          <div className="flex gap-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200 }}
              aria-label="View source code"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
                aria-label="View live project"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </div>
        <motion.h3
          className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
          {project.tech.map((tech, i) => (
            <motion.li
              key={tech}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
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
                03.
              </motion.span>{" "}
              Projects
            </h2>
            <motion.div
              className="h-px bg-border flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ originX: 0 }}
            />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-foreground">
              Other Noteworthy Projects
            </h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <OtherProject key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://github.com/gcangemi1997-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View More on GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
