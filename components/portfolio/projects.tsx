"use client"

import { motion, useInView } from "framer-motion"
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative grid md:grid-cols-12 gap-4 items-center ${
        isEven ? "" : "md:text-right"
      }`}
    >
      {/* Project Image */}
      <div
        className={`md:col-span-7 ${isEven ? "md:col-start-1" : "md:col-start-6"} relative`}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative group"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </a>
      </div>

      {/* Project Content */}
      <div
        className={`md:col-span-6 ${
          isEven
            ? "md:col-start-6 md:text-right"
            : "md:col-start-1 md:row-start-1 md:text-left"
        } relative z-10`}
      >
        <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          {project.title}
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-xl border border-border mb-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        <ul
          className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground mb-4 ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div
          className={`flex gap-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="View source code"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="View live project"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <Folder className="h-10 w-10 text-primary" />
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="View source code"
          >
            <Github className="h-5 w-5" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
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
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="text-primary font-mono">03.</span> Projects
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Other Projects */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground">
              Other Noteworthy Projects
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <OtherProject key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
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
      </div>
    </section>
  )
}
