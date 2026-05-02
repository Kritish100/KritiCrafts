"use client"

import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Products } from "@/components/landing/products"
import { Partners } from "@/components/landing/partners"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { Chatbot } from "@/components/landing/chatbot"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <Products />
      <Testimonials />
      <FAQ />
      <Footer />
      <Chatbot />
    </main>
  )
}
