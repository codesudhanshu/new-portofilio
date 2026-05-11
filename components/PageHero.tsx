'use client'

import { motion } from 'framer-motion'

export function PageHero({
  eyebrow,
  h1,
  sub,
  scene,
  index = '01',
  meta = 'Capabilities',
  accent = '#E8472A',
}: {
  eyebrow: string
  h1: string
  sub?: string
  scene: React.ReactNode
  index?: string
  meta?: string
  /** Hex string. Drives the leading-arrow colour and the terminal cursor. */
  accent?: string
}) {
  // sci-fi terminal-style transformed meta: "Build & Ship" -> "BUILD_SHIP"
  const sysTag = `SYS://${meta
    .toUpperCase()
    .replace(/\s*&\s*/g, '_')
    .replace(/\s+/g, '_')}`

  return (
    <section
      className="relative min-h-[78vh] overflow-hidden bg-[#080C0A] text-cream"
      style={{ ['--accent' as string]: accent }}
    >
      {/* 3D scene as full-bleed backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        {scene}
      </motion.div>

      {/* Scrim — concentrated on the left where text lives */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 72% 80% at 28% 55%, rgba(8,12,10,0.88) 0%, rgba(8,12,10,0.55) 42%, rgba(8,12,10,0.18) 72%, rgba(8,12,10,0) 92%)',
        }}
      />

      {/* CRT scan lines */}
      <div
        aria-hidden
        className="scanlines pointer-events-none absolute inset-0 z-[2]"
      />

      {/* Vignette — cinematic edge darkening */}
      <div
        aria-hidden
        className="vignette-dark pointer-events-none absolute inset-0 z-[2]"
      />

      {/* Bottom gradient back into the next dark section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-32 bg-gradient-to-b from-transparent to-[#0A0E0D]"
      />

      <div className="container-x relative z-10 grid min-h-[78vh] grid-cols-1 items-center gap-10 py-24 md:grid-cols-12 md:py-0">
        <div className="md:col-span-8 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-baseline gap-4"
          >
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: accent }}
            >
              ▸ {index} / {eyebrow}
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              {sysTag}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="mt-6 text-display text-[clamp(30px,4.4vw,56px)] leading-[1.06] tracking-[-0.02em] text-balance text-cream"
          >
            {h1}
            <span className="terminal-cursor" aria-hidden />
          </motion.h1>

          {sub && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-6 max-w-xl text-[17px] leading-relaxed text-cream/72 md:text-[18px]"
            >
              {sub}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[10px] uppercase tracking-[0.24em] text-cream/45"
          >
            <span>STATUS · OPERATIONAL</span>
            <span className="text-cream/30">/</span>
            <span>NODE · NOIDA-01</span>
            <span className="text-cream/30">/</span>
            <span>CYCLE · {new Date().getFullYear()}</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
