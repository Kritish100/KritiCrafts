import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Kriti Crafts | Enterprise Software Solutions",
  description:
    "Solo developer crafting innovative solutions with AI, modern web technologies, and creative problem-solving.",
  keywords: [
    "CRM",
    "ERP",
    "LMS",
    "HRMS",
    "AI Agents",
    "Enterprise Software",
    "Custom Development",
  ],
  authors: [{ name: "Studio" }],
  openGraph: {
    title: "Kriti Crafts | Enterprise Software Solutions",
    description:
      "Solo developer crafting innovative solutions with AI, modern web technologies, and creative problem-solving.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kriti Crafts | Enterprise Software Solutions",
    description:
      "Solo developer crafting innovative solutions with AI, modern web technologies, and creative problem-solving.",
  },
  icons: {
    icon: [
      {
        url: "/kc-icon-48x48.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/kc-icon-48x48.png",
        media: "(prefers-color-scheme: dark)",
      },
      // {
      //   url: "/icon.svg",
      //   type: "image/svg+xml",
      // },
    ],
    // apple: "/apple-icon.png",
    apple: "/kc-icon-48x48.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
