"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "Prativa Ethnic", initials: "PE", color: "text-amber-600" },
  { name: "TechCorp", initials: "TC", color: "text-blue-500" },
  { name: "InnovateLab", initials: "IL", color: "text-emerald-500" },
  { name: "DataFlow", initials: "DF", color: "text-violet-500" },
  { name: "CloudFirst", initials: "CF", color: "text-cyan-500" },
  { name: "NextGen Solutions", initials: "NG", color: "text-rose-500" },
]

function LogoItem({ partner }: { partner: { name: string; initials: string; color: string } }) {
  return (
    <div className="group flex flex-shrink-0 items-center gap-4 px-12">
      <div className={`text-3xl font-black ${partner.color}`}>
        {partner.initials}
      </div>
      <span className="whitespace-nowrap text-2xl font-semibold text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
        {partner.name}
      </span>
    </div>
  )
}

export function Partners() {
  return (
    <section className="overflow-hidden py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="mb-10 text-sm uppercase tracking-wider text-muted-foreground">
          Trusted by Industry Leaders
        </p>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling Track */}
        <div className="flex">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {partners.map((partner) => (
              <LogoItem key={partner.name} partner={partner} />
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <LogoItem key={`${partner.name}-dup`} partner={partner} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
