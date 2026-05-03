"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MessageCircle, Terminal, X, Instagram } from "lucide-react"

// Custom TikTok icon since lucide doesn't have it
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

// Custom Facebook icon
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@yourusername",
    icon: TikTokIcon,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/yourusername",
    icon: FacebookIcon,
  },
]
import { Button } from "@/components/ui/button"

const techStack = [
  { name: "Next.js 16", description: "React Framework" },
  { name: "Tailwind CSS", description: "Styling" },
  { name: "Cloudflare", description: "Edge Infrastructure" },
  { name: "OpenAI API", description: "AI/ML Backend" },
  { name: "Framer Motion", description: "Animations" },
  { name: "TypeScript", description: "Type Safety" },
]

export function Footer() {
  const [showDevOverlay, setShowDevOverlay] = useState(false)

  return (
    <>
      <footer id="contact" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Build Something Great?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              {"Let's"} discuss your project. Reach out through any channel that
              works for you.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="gap-2"
                onClick={() =>
                  (window.location.href = "mailto:hello@studio.dev")
                }
              >
                <Mail className="h-4 w-4" />
                Email Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-success/50 text-success hover:bg-success/10 hover:text-success"
                onClick={() =>
                  window.open("https://wa.me/1234567890", "_blank")
                }
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => (window.location.href = "tel:+1234567890")}
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Products
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#products"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    CRM
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    ERP
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    AI Agents
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded">
                {/* <span className="text-xs font-bold text-accent-foreground">
                  KC
                </span> */}
                <img src="/kc-icon-48x48.png" alt="Kriti Crafts Logo" className="h-4 w-4" />
              </div>
              <span className="text-sm text-muted-foreground">
                © 2026 Kriti Crafts. All rights reserved.
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Dev Easter Egg */}
            <button
              onClick={() => setShowDevOverlay(true)}
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>Console</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Dev Overlay */}
      <AnimatePresence>
        {showDevOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            onClick={() => setShowDevOverlay(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-4 w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-destructive" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-success" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    dev-console — kriti-crafts
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowDevOverlay(false)}
                  className="h-6 w-6"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close console</span>
                </Button>
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm">
                <p className="mb-4 text-muted-foreground">
                  <span className="text-success">$</span> cat tech-stack.json
                </p>
                <div className="rounded-lg bg-secondary/50 p-4">
                  <pre className="text-xs leading-relaxed">
                    <span className="text-muted-foreground">{"{"}</span>
                    {"\n"}
                    <span className="text-muted-foreground">
                      {"  "}&quot;name&quot;:
                    </span>{" "}
                    <span className="text-success">&quot;Kriti Crafts&quot;</span>,
                    {"\n"}
                    <span className="text-muted-foreground">
                      {"  "}&quot;version&quot;:
                    </span>{" "}
                    <span className="text-success">&quot;1.0.0&quot;</span>,{"\n"}
                    <span className="text-muted-foreground">
                      {"  "}&quot;stack&quot;:
                    </span>{" "}
                    [{"\n"}
                    {techStack.map((tech, index) => (
                      <span key={tech.name}>
                        {"    "}
                        <span className="text-accent">
                          &quot;{tech.name}&quot;
                        </span>
                        {index < techStack.length - 1 ? "," : ""}
                        <span className="text-muted-foreground/50">
                          {" "}
                          // {tech.description}
                        </span>
                        {"\n"}
                      </span>
                    ))}
                    {"  "}]{"\n"}
                    <span className="text-muted-foreground">{"}"}</span>
                  </pre>
                </div>
                <p className="mt-4 text-muted-foreground">
                  <span className="text-success">$</span>{" "}
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
