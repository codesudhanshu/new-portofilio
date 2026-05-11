'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CtaBanner({
  heading,
  sub,
  button,
  href = '/contact',
}: {
  heading: string
  sub?: string
  button: string
  href?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[#0A0E0D] py-24 text-cream md:py-32">
      <div
        aria-hidden
        className="scanlines pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden
        className="vignette-dark pointer-events-none absolute inset-0"
      />

      <div className="container-x relative">
        {/* Editorial / terminal header */}
        <div className="flex items-baseline gap-4">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
            ▸ TRANSMISSION_OUTGOING
          </span>
          <span className="h-px flex-1 bg-cream/15" aria-hidden />
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
            SYS://CONTACT
          </span>
        </div>

        {/* Glowing console divider */}
        <div
          aria-hidden
          className="mt-8 h-px w-full bg-vermilion/55 shadow-[0_0_14px_rgba(232,71,42,0.55)]"
        />

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-8 text-display text-[clamp(36px,5.5vw,72px)] leading-[1.02] tracking-[-0.02em] text-balance text-cream"
          >
            {heading}
            <span className="terminal-cursor" aria-hidden />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-start gap-6 md:col-span-4"
          >
            {sub && (
              <p className="text-base leading-relaxed text-cream/75">{sub}</p>
            )}
            <Link
              href={href}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-vermilion px-7 text-sm font-medium text-cream shadow-[0_0_24px_rgba(232,71,42,0.35)] transition-all duration-300 hover:bg-cream hover:text-vermilion hover:shadow-[0_0_30px_rgba(247,244,239,0.35)]"
            >
              {button}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
