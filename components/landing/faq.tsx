"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A standard CRM implementation takes 6-8 weeks, while a full ERP system can take 3-6 months. We provide detailed timelines during the discovery phase and keep you updated throughout.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely. We offer flexible support packages including 24/7 monitoring, regular updates, security patches, and dedicated account management. Most clients opt for our annual maintenance plans which include priority support.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes, integration is one of our core strengths. We work with REST APIs, GraphQL, webhooks, and have pre-built connectors for popular platforms like Salesforce, HubSpot, QuickBooks, and many more.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily work with Next.js, React, Node.js, and Python for AI/ML workloads. Our infrastructure runs on Cloudflare and Vercel for optimal performance. We choose the best stack for each project&apos;s specific needs.",
  },
  {
    question: "How do your AI Agents work?",
    answer:
      "Our AI agents are built on top of leading LLMs (OpenAI, Anthropic) and fine-tuned for your specific business context. They can handle customer support, data analysis, document processing, and workflow automation with human-like understanding.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both project-based pricing and retainer models. Project pricing is based on scope and complexity, while retainers provide ongoing development hours at discounted rates. We provide detailed proposals after the discovery call.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
