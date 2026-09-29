"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState, type PointerEvent } from "react"
import { ArrowDown, ArrowUpRight, Github, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "MMG Burger",
    problem: "A complete ordering and shop-management experience for a sandwich business, bringing menu discovery, orders, and operations into one fast web app.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    image: "/images/mmg-burger-preview.png",
    demo: "https://mmg-burger.vercel.app/",
    github: "https://github.com/gcangemi1997-coder/MMG_Burger",
    accent: "from-orange-400/80 to-rose-500/80",
  },
  {
    title: "LookBook AI",
    problem: "An AI-assisted way to estimate the value of pre-owned clothing, helping people make faster, more informed resale decisions.",
    tech: ["React", "Node.js", "AI", "MongoDB", "Vercel"],
    image: "/images/lookbook-ai-preview.png",
    demo: "https://lookbook-ai.vercel.app/",
    github: "https://github.com/gcangemi1997-coder/lookbook-AI",
    accent: "from-fuchsia-400/80 to-violet-500/80",
  },
  {
    title: "Elite News",
    problem: "A focused news experience that turns the New York Times API into a bold, browsable aggregator with categories and article detail pages.",
    tech: ["React", "Vite", "Axios", "Context API", "CSS Modules"],
    image: "/images/elite-news.jpg",
    demo: "https://elite-news.vercel.app/",
    github: "https://github.com/gcangemi1997-coder/Elite-News",
    accent: "from-cyan-400/80 to-blue-500/80",
  },
  {
    title: "Tempo Lodigiano",
    problem: "A clear, useful weather dashboard that makes live forecasts and changing conditions easier to understand at a glance.",
    tech: ["JavaScript", "HTML", "CSS", "Weather API"],
    image: "/images/tempo-lodigiano-preview.png",
    demo: "https://weather-dashboard-gcangemi.vercel.app/",
    github: "https://github.com/gcangemi1997-coder/weather_dashboard",
    accent: "from-amber-300/80 to-cyan-400/80",
  },
  {
    title: "Owly App",
    problem: "An EdTech discovery platform that makes educational books easier to explore through smart search, caching, loading states, and resilient UX.",
    tech: ["JavaScript", "Vite", "Axios", "Lodash", "Vitest"],
    image: "/images/owly-app.jpg",
    demo: "https://owly-app.vercel.app/",
    github: "https://github.com/gcangemi1997-coder/Owly-App",
    accent: "from-violet-400/80 to-indigo-500/80",
  },
]

function ScratchCard({ project, active, onReveal }: { project: (typeof projects)[number]; active: boolean; onReveal: () => void }) {
  const [scratches, setScratches] = useState<Array<{ x: number; y: number }>>([])

  function scratch(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const point = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    setScratches((current) => [...current.slice(-34), point])
    onReveal()
  }

  return (
    <div className={`relative overflow-hidden rounded-xl border ${active ? "border-primary" : "border-white/15"}`}>
      <Image src={project.image} alt={`${project.title} project preview`} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500 via-slate-400 to-slate-600 transition-opacity duration-500" style={{ opacity: Math.max(0.22, 1 - scratches.length / 34) }} />
      <div className="absolute inset-0" onPointerMove={scratch} onPointerDown={scratch} style={{ background: scratches.map(({ x, y }) => `radial-gradient(circle 34px at ${x}px ${y}px, transparent 0 72%, rgba(148,163,184,.96) 74%)`).join(",") }} aria-label={`Scratch to reveal ${project.title}`} role="button" tabIndex={0} />
      <span className="absolute left-3 top-3 text-[10px] font-semibold tracking-wide text-white drop-shadow-md">{project.title}</span>
      <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/45 px-2 py-1 text-[9px] uppercase tracking-widest text-white/80">Scratch</span>
    </div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const screenScale = useTransform(scrollYProgress, [0.08, 0.7], [0.52, 1.42])
  const screenY = useTransform(scrollYProgress, [0, 0.7], [40, -10])
  const heroOpacity = useTransform(scrollYProgress, [0.55, 0.78], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[220vh] overflow-hidden" id="home">
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--primary)_20%,transparent),transparent_28%),radial-gradient(circle_at_80%_0%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_32%)]" />
        <motion.div className="relative z-10 mx-auto w-full max-w-6xl" style={{ opacity: heroOpacity }}>
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-5 flex items-center gap-2 font-mono text-sm text-primary">
                <Sparkles className="size-4" /> Available for meaningful builds
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-balance text-5xl font-semibold tracking-[-0.07em] text-foreground sm:text-7xl lg:text-8xl">
                Giorgio <span className="bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent">Cangemi</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Full Stack Developer crafting fast, thoughtful digital products where engineering meets visual clarity.
              </motion.p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href="#selected-work">Explore my work <ArrowDown data-icon="inline-end" /></a></Button>
                <Button asChild variant="outline" size="lg"><a href="/resume.pdf" download>Download CV</a></Button>
              </div>
            </div>

            <motion.div style={{ scale: screenScale, y: screenY }} className="relative mx-auto w-full max-w-5xl origin-center">
              <div className="absolute -inset-10 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-black/40 p-2 shadow-[0_40px_120px_-30px_color-mix(in_oklab,var(--primary)_45%,transparent)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] bg-black">
                  <Image src="/images/developer-computer.png" alt="Developer working at a computer" fill priority className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-white/5" />
                  <div id="selected-work" className="absolute left-5 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">Selected work / 2026</div>
                  <div className="absolute inset-x-5 bottom-5 overflow-hidden rounded-xl border border-white/15 bg-black/45 p-3 backdrop-blur-md">
                    <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/60"><span>Project archive</span><span>{String(activeProject + 1).padStart(2, "0")} / 05</span></div>
                    <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none]">
                      {projects.map((project, index) => (
                        <button key={project.title} onClick={() => setActiveProject(index)} className={`group min-w-[150px] flex-1 text-left transition-all duration-300 ${activeProject === index ? "scale-[1.03]" : "opacity-65 hover:opacity-100"}`} aria-pressed={activeProject === index}>
                          <div className={`relative aspect-[1.55] overflow-hidden rounded-lg border ${activeProject === index ? "border-primary" : "border-white/15"}`}>
                            {isMounted ? (
                              <ScratchCard project={project} active={activeProject === index} onReveal={() => setActiveProject(index)} />
                            ) : (
                              <Image src={project.image} alt={`${project.title} project preview`} fill className="object-cover" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    <motion.div layout className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-white">
                      <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-medium">{projects[activeProject].title}</h2><p className="mt-1 max-w-xl text-xs leading-relaxed text-white/65">{projects[activeProject].problem}</p></div><div className="flex gap-3"><a href={projects[activeProject].demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">Demo <ArrowUpRight className="size-3" /></a><a href={projects[activeProject].github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-white/80 hover:text-white">GitHub <Github className="size-3" /></a></div></div>
                      <div className="mt-2 flex flex-wrap gap-1.5">{projects[activeProject].tech.map((tech) => <span key={tech} className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/65">{tech}</span>)}</div>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-3 h-1.5 w-1/2 rounded-full bg-white/15" />
              <div className="mx-auto h-3 w-1/4 rounded-b-full bg-white/10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { projects }
