"use client"

import { motion } from "framer-motion"
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
    href: "mailto:contact@example.com",
    label: "Email",
  },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Social Links - Mobile */}
        <div className="flex justify-center gap-6 mb-8 md:hidden">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <Heart className="inline-block h-4 w-4 text-primary mx-1" />
            by Giorgio Cangemi
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      {/* Fixed Side Elements - Desktop */}
      <div className="hidden md:block">
        {/* Left Side - Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed left-8 bottom-0 flex flex-col items-center gap-6"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </motion.a>
          ))}
          <div className="w-px h-24 bg-muted-foreground/30" />
        </motion.div>

        {/* Right Side - Email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed right-8 bottom-0 flex flex-col items-center gap-6"
        >
          <a
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            contact@example.com
          </a>
          <div className="w-px h-24 bg-muted-foreground/30" />
        </motion.div>
      </div>
    </footer>
  )
}
