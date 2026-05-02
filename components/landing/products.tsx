"use client"

import { motion } from "framer-motion"
import {
  Users,
  Boxes,
  GraduationCap,
  UserCheck,
  BrainCircuit,
  MessageCircle,
  Instagram,
  Flame,
  Sparkles,
  Zap,
} from "lucide-react"

const products = [
  {
    title: "AI Agents & Data Analysis",
    subtitle: "Intelligent Automation That Transforms Your Business",
    description:
      "Deploy custom AI agents that understand your business context. From intelligent chatbots to predictive analytics, automate complex workflows and unlock insights from your data.",
    icon: BrainCircuit,
    features: ["Custom AI Agents", "Predictive Analytics", "Process Automation", "NLP"],
    isSignature: true,
  },
  {
    title: "CRM",
    subtitle: "with WhatsApp & Instagram",
    description:
      "Unified customer management with seamless social media integrations. Track leads, automate follow-ups, and close deals faster.",
    icon: Users,
    features: ["WhatsApp Business API", "Instagram DM Integration", "Lead Scoring"],
    social: [MessageCircle, Instagram],
    aiFeature: "AI-Powered Lead Scoring",
  },
  {
    title: "ERP",
    subtitle: "Enterprise Resource Planning",
    description:
      "Complete business management suite. Inventory, accounting, procurement, and operations in one unified platform.",
    icon: Boxes,
    features: ["Real-time Inventory", "Financial Reporting", "Supply Chain"],
    aiFeature: "AI Demand Forecasting",
  },
  {
    title: "LMS",
    subtitle: "Learning Management System",
    description:
      "Build, deliver, and track training programs. Interactive courses with progress analytics and certifications.",
    icon: GraduationCap,
    features: ["Course Builder", "Progress Tracking", "Certifications"],
    aiFeature: "AI Learning Paths",
  },
  {
    title: "HRMS",
    subtitle: "Human Resource Management",
    description:
      "Streamline HR operations from recruitment to retirement. Payroll, attendance, performance reviews, and more.",
    icon: UserCheck,
    features: ["Payroll Management", "Leave Tracking", "Performance Reviews"],
    aiFeature: "AI Resume Screening",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Solutions We Craft
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Enterprise solutions powered by AI. Each product features intelligent
            automation that sets your business apart from the competition.
          </p>
        </motion.div>

        {/* Products Grid - AI Agents first, then 2x2 grid for others */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {products.map((product) => {
            const Icon = product.icon
            const isSignature = product.isSignature

            return (
              <motion.div
                key={product.title}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg ${
                  isSignature
                    ? "glow-accent border-2 border-accent/50 bg-gradient-to-br from-accent/10 via-card to-card hover:border-accent/70"
                    : "border-border bg-card hover:border-accent/30"
                }`}
              >
                {/* Shimmer overlay for signature card */}
                {isSignature && (
                  <div className="ai-card-shimmer pointer-events-none absolute inset-0" />
                )}

                {/* Badge */}
                {isSignature ? (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm font-semibold text-accent-foreground shadow-lg">
                    <Flame className="h-4 w-4" />
                    Our Signature
                  </div>
                ) : product.aiFeature ? (
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-accent/10 border border-accent/20 px-2.5 py-1 text-xs font-medium text-accent">
                    <Zap className="h-3 w-3" />
                    {product.aiFeature}
                  </div>
                ) : null}

                {/* Icon */}
                {isSignature ? (
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                )}

                {/* Title & Subtitle */}
                <h3 className="mb-1 text-xl font-semibold">{product.title}</h3>
                <p className={`mb-3 text-sm ${isSignature ? "text-accent font-medium" : "text-muted-foreground"}`}>
                  {product.subtitle}
                </p>

                {/* Social Icons for CRM */}
                {product.social && (
                  <div className="mb-3 flex gap-2">
                    {product.social.map((SocialIcon, i) => (
                      <div
                        key={i}
                        className="flex h-7 w-7 items-center justify-center rounded-md bg-secondary"
                      >
                        <SocialIcon className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className={`rounded-md px-2 py-1 text-xs ${
                        isSignature
                          ? "flex items-center gap-1.5 border border-accent/30 bg-accent/10 font-medium text-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {isSignature && <Sparkles className="h-3 w-3 text-accent" />}
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Gradient */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
