"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Greeting with sparkle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
          </motion.div>
          <p className="text-primary font-mono text-sm md:text-base">
            Hello, my name is
          </p>
        </motion.div>

        {/* Name with letter animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance"
        >
          {"Giorgio Cangemi".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.03,
                ease: "easeOut",
              }}
              className="inline-block"
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Title with gradient reveal */}
        <motion.h2
          initial={{ opacity: 0, y: 20, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-muted-foreground mb-6"
        >
          Full Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          I build exceptional digital experiences that live on the web.
          Currently focused on building responsive, accessible, and performant
          web applications with modern technologies.
        </motion.p>

        {/* CTA Buttons with stagger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="w-full sm:w-auto relative overflow-hidden group">
              <a href="#projects">
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links with bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { Icon: Github, href: "https://github.com/gcangemi1997-coder", label: "GitHub Profile" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/giorgio-cangemi-7b4b77172/", label: "LinkedIn Profile" },
            { Icon: Mail, href: "mailto:g.cangemi1997@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-muted-foreground hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              whileHover={{
                scale: 1.2,
                y: -5,
                rotate: [0, -10, 10, 0],
                transition: { rotate: { duration: 0.4 } },
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator with pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors block"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-label="Scroll to about section"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
