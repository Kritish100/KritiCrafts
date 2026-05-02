"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const quickStartOptions = [
  { label: "What is your ERP stack?", value: "erp-stack" },
  { label: "How do AI Agents work?", value: "ai-agents" },
  { label: "Book a meeting", value: "book-meeting" },
]

const simulatedResponses: Record<string, string[]> = {
  "erp-stack": [
    "Great question! Our ERP stack is built for modern enterprises:",
    "• **Frontend:** Next.js 14 with React Server Components for lightning-fast performance",
    "• **Backend:** Node.js microservices with GraphQL APIs",
    "• **Database:** PostgreSQL with real-time sync capabilities",
    "• **Infrastructure:** Deployed on Cloudflare Workers + Vercel Edge",
    "• **Integrations:** Pre-built connectors for 50+ enterprise tools",
    "Would you like me to schedule a technical deep-dive with our solutions architect?",
  ],
  "ai-agents": [
    "Our AI Agents are autonomous systems that understand your business context:",
    "**How they work:**",
    "1. We analyze your workflows and data patterns",
    "2. Fine-tune LLMs (GPT-4, Claude) on your specific domain",
    "3. Deploy agents that can read, write, and take actions in your systems",
    "**Use cases we've deployed:**",
    "• Customer support bots handling 60%+ of queries",
    "• Data analysis agents generating weekly insights",
    "• Document processing automating manual workflows",
    "Ready to see a live demo?",
  ],
  "book-meeting": [
    "I'd love to connect you with our team! 📅",
    "**Here's what happens next:**",
    "1. 30-min discovery call to understand your needs",
    "2. Technical assessment of your current systems",
    "3. Custom proposal with timeline and pricing",
    "**Available slots this week:**",
    "• Tuesday 2:00 PM - 2:30 PM",
    "• Wednesday 10:00 AM - 10:30 AM",
    "• Thursday 3:00 PM - 3:30 PM",
    "Which time works best for you? Or contact us directly at hello@studio.dev",
  ],
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateTyping = async (responses: string[]) => {
    setIsTyping(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const fullResponse = responses.join("\n\n")
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "assistant",
        content: fullResponse,
      },
    ])
    setIsTyping(false)
  }

  const handleQuickStart = async (option: (typeof quickStartOptions)[0]) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "user",
        content: option.label,
      },
    ])

    // Simulate response
    await simulateTyping(simulatedResponses[option.value])
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "user",
        content: userMessage,
      },
    ])

    // Simulate a generic response
    await simulateTyping([
      "Thanks for your message! I'm a demo bot showcasing the quality of conversational AI we build.",
      "For a production deployment, this would be connected to your knowledge base and business systems.",
      "Click one of the quick start options below to see more detailed responses, or reach out to our team for a live demo!",
    ])
  }

  return (
    <>
      {/* FAB Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open chat</span>
        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-success" />
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 bottom-4 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:right-6 sm:bottom-6"
            style={{
              maxHeight: "calc(100vh - 2rem)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
                  <Bot className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Studio AI</h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    Online • Demo Mode
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close chat</span>
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                    <Sparkles className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="mb-2 font-semibold">Welcome to Studio AI</h4>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Experience the quality of AI assistants we build. Try a
                    quick start below!
                  </p>
                  <div className="flex flex-col gap-2">
                    {quickStartOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleQuickStart(option)}
                        className="rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm transition-colors hover:bg-secondary"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.role === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-accent-foreground"
                        }`}
                      >
                        {message.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-1 rounded-2xl bg-secondary px-4 py-2">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Quick Start (when messages exist) */}
            {messages.length > 0 && (
              <div className="border-t border-border px-4 py-2">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {quickStartOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleQuickStart(option)}
                      className="shrink-0 rounded-full border border-border px-3 py-1 text-xs transition-colors hover:bg-secondary"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                />
                <Button type="submit" size="icon" className="h-10 w-10">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
