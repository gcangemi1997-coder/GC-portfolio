"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/gcangemi1997-coder",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/giorgio-cangemi-7b4b77172/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:g.cangemi1997@gmail.com",
    label: "Email",
  },
]

export function Footer() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <footer className="py-12 px-4 border-t border-border relative">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Social Links - Mobile */}
        <div className="flex justify-center gap-6 mb-8 md:hidden">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>

        {/* Copyright with animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.p
            className="text-sm text-muted-foreground flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1"
            >
              <Heart className="inline-block h-4 w-4 text-primary" />
            </motion.span>
            by Giorgio Cangemi
          </motion.p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Fixed Side Elements - Desktop */}
      <div className="hidden md:block">
        {/* Left Side - Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="fixed left-8 bottom-0 flex flex-col items-center gap-6 xl:left-10 2xl:left-14"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { rotate: { duration: 0.3 } },
              }}
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </motion.a>
          ))}
          <motion.div
            className="w-px h-24 bg-muted-foreground/30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            style={{ originY: 1 }}
          />
        </motion.div>

        {/* Right Side - Email */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="fixed right-8 bottom-0 flex flex-col items-center gap-6 xl:right-10 2xl:right-14"
        >
          <motion.a
            href="mailto:g.cangemi1997@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs tracking-widest"
            style={{ writingMode: "vertical-rl" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            whileHover={{
              y: -5,
              color: "rgb(21, 253, 192)",
              textShadow: "0 0 8px rgba(21, 253, 192, 0.5)",
            }}
          >
            g.cangemi1997@gmail.com
          </motion.a>
          <motion.div
            className="w-px h-24 bg-muted-foreground/30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            style={{ originY: 1 }}
          />
        </motion.div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </footer>
  )
}
