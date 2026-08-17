"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, Github, Linkedin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
    <section id="contact" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Section Header */}
          <motion.p
            variants={itemVariants}
            className="text-primary font-mono text-sm mb-2 flex items-center justify-center gap-2"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>
            05. What&apos;s Next?
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed"
          >
            I&apos;m currently looking for new opportunities and my inbox is always open.
            Whether you have a question, a project idea, or just want to say hi,
            I&apos;ll try my best to get back to you!
          </motion.p>

          {/* Contact Card */}
          <motion.div variants={itemVariants}>
            <Card className="border-border bg-card/50 backdrop-blur overflow-hidden">
              <CardContent className="p-6 md:p-8 relative">
                {/* Card background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <Send className="h-8 w-8 text-primary" />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl font-semibold text-foreground mb-2"
                    >
                      Message Sent!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground"
                    >
                      Thanks for reaching out. I&apos;ll get back to you soon!
                    </motion.p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left relative z-10">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { id: "name", type: "text", label: "Name", placeholder: "Your name" },
                        { id: "email", type: "email", label: "Email", placeholder: "your@email.com" },
                      ].map((field, i) => (
                        <motion.div
                          key={field.id}
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.4 + i * 0.1 }}
                        >
                          <label htmlFor={field.id} className="text-sm font-medium text-foreground">
                            {field.label}
                          </label>
                          <motion.div whileFocus={{ scale: 1.02 }}>
                            <Input
                              id={field.id}
                              name={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              required
                              className="bg-background border-border focus:border-primary transition-all"
                            />
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        className="bg-background border-border resize-none focus:border-primary transition-all"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full relative overflow-hidden group"
                          disabled={isSubmitting}
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                              <motion.span
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              >
                                Sending...
                              </motion.span>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                              </>
                            )}
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                )}

                {/* Alternative Contact Methods */}
                <motion.div
                  className="mt-8 pt-8 border-t border-border relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Or reach out directly
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { Icon: Mail, href: "mailto:g.cangemi1997@gmail.com", label: "Email" },
                      { Icon: Github, href: "https://github.com/gcangemi1997-coder", label: "GitHub", external: true },
                      { Icon: Linkedin, href: "https://www.linkedin.com/in/giorgio-cangemi-7b4b77172/", label: "LinkedIn", external: true },
                    ].map(({ Icon, href, label, external }, i) => (
                      <motion.a
                        key={label}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.9 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </motion.a>
                    ))}
                    <motion.span
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 }}
                    >
                      <MapPin className="h-4 w-4" />
                      Milano, Italy
                    </motion.span>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
