"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "The CRM they built transformed how we handle customer relationships. WhatsApp integration alone increased our response rate by 300%.",
    author: "Sarah Chen",
    role: "Head of Sales",
    company: "TechCorp",
    rating: 5,
  },
  {
    quote:
      "Their ERP solution unified our operations across 12 locations. Real-time inventory visibility has been a game-changer.",
    author: "Michael Rodriguez",
    role: "COO",
    company: "RetailMax",
    rating: 5,
  },
  {
    quote:
      "The AI agents they deployed handle 60% of our customer queries automatically. The ROI was visible within the first month.",
    author: "Priya Sharma",
    role: "CTO",
    company: "FinanceHub",
    rating: 5,
  },
  {
    quote:
      "Our LMS now serves 10,000+ employees across the globe. The analytics dashboard gives us insights we never had before.",
    author: "David Kim",
    role: "L&D Director",
    company: "GlobalEd",
    rating: 5,
  },
  {
    quote:
      "The HRMS implementation was seamless. Payroll errors dropped to zero and employee satisfaction with HR processes improved significantly.",
    author: "Amanda Foster",
    role: "HR Manager",
    company: "StartupX",
    rating: 5,
  },
  {
    quote:
      "Working with this team felt like having an in-house development team. They understood our business needs from day one.",
    author: "James Liu",
    role: "Founder",
    company: "InnovateLab",
    rating: 5,
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

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
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
            Client Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {"Don't"} just take our word for it. Here&apos;s what our clients have to
            say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="rounded-xl border border-border bg-card p-6"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
