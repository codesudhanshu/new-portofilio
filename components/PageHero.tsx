'use client'

import { motion } from 'framer-motion'

export function PageHero({
  eyebrow, h1, sub,
}: {
  eyebrow: string
  h1: string
  sub?: string
  index?: string
  scene?: React.ReactNode
  meta?: string
  accent?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-[#111111]">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-10 blur-[80px]"
        style={{ background: 'radial-gradient(circle, #1163fb, transparent 70%)' }} />
      <div className="bg-dot pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-x relative py-20 md:py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label">{eyebrow}</span>
          <h1 className="mt-5 max-w-3xl text-[clamp(32px,5vw,64px)] font-black leading-[1.04] tracking-[-0.03em] text-white text-balance">
            {h1}
          </h1>
          {sub && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/50">{sub}</p>}
        </motion.div>
      </div>
    </section>
  )
}
