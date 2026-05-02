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
} from "lucide-react"

const products = [
  {
    title: "CRM",
    subtitle: "with WhatsApp & Instagram",
    description:
      "Unified customer management with seamless social media integrations. Track leads, automate follow-ups, and close deals faster.",
    icon: Users,
    features: ["WhatsApp Business API", "Instagram DM Integration", "Lead Scoring"],
    social: [MessageCircle, Instagram],
  },
  {
    title: "ERP",
    subtitle: "Enterprise Resource Planning",
    description:
      "Complete business management suite. Inventory, accounting, procurement, and operations in one unified platform.",
    icon: Boxes,
    features: ["Real-time Inventory", "Financial Reporting", "Supply Chain"],
  },
  {
    title: "LMS",
    subtitle: "Learning Management System",
    description:
      "Build, deliver, and track training programs. Interactive courses with progress analytics and certifications.",
    icon: GraduationCap,
    features: ["Course Builder", "Progress Tracking", "Certifications"],
  },
  {
    title: "HRMS",
    subtitle: "Human Resource Management",
    description:
      "Streamline HR operations from recruitment to retirement. Payroll, attendance, performance reviews, and more.",
    icon: UserCheck,
    features: ["Payroll Management", "Leave Tracking", "Performance Reviews"],
  },
  {
    title: "AI Agents & Data Analysis",
    subtitle: "Intelligent Automation",
    description:
      "Deploy AI agents that understand your business. Automated insights, predictive analytics, and intelligent process automation.",
    icon: BrainCircuit,
    features: ["Custom AI Agents", "Predictive Analytics", "Process Automation"],
    isHot: true,
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
            The Big 5
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Enterprise solutions built for scale. Each product is customizable
            and integrates seamlessly with your existing stack.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.title}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-muted-foreground/30 ${
                  product.isHot ? "glow-accent lg:col-span-1" : ""
                } ${index >= 3 ? "lg:col-span-1" : ""}`}
              >
                {/* Hot Badge */}
                {product.isHot && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                    <Flame className="h-3 w-3" />
                    Hot
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${
                    product.isHot
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="mb-1 text-xl font-semibold">{product.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">
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
                      className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground"
                    >
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
