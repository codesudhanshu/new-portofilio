'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { contact, company } from '@/lib/copy'
import { LeadForm } from '@/components/LeadForm'

const LogogramScene = dynamic(
  () => import('@/components/LogogramScene').then((m) => m.LogogramScene),
  { ssr: false }
)

// Arrival — warm cream "ink" against misty teal-grey
const INK = '#E8DDC9'

export default function Content() {
  return (
    <section
      className="relative overflow-hidden bg-[#0E1418] py-20 text-cream md:py-28"
      style={{ ['--accent' as string]: INK }}
    >
      {/* Atmospheric backdrop — heavy fog */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 75% 50%, rgba(123,152,175,0.08) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 15% 100%, rgba(232,221,201,0.04) 0%, transparent 65%)',
        }}
      />
      {/* Logogram drifts on the right side, slowly forming + dissolving */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[55%] opacity-80 md:block lg:w-[50%]">
        <LogogramScene />
      </div>
      {/* Mobile: logogram as faint full-width backdrop */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-30 md:hidden">
        <LogogramScene />
      </div>
      {/* Scan-lines for cinematic cohesion with the rest of the site */}
      <div
        aria-hidden
        className="scanlines pointer-events-none absolute inset-0 z-[2] opacity-40"
      />
      {/* Vignette */}
      <div
        aria-hidden
        className="vignette-dark pointer-events-none absolute inset-0 z-[2]"
      />

      <div className="container-x relative z-10">
        {/* Editorial / terminal header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline gap-4"
        >
          <span
            className="font-sans text-[11px] uppercase tracking-[0.22em]"
            style={{ color: INK }}
          >
            ▸ 01 / {contact.hero.eyebrow}
          </span>
          <span className="h-px flex-1 bg-cream/15" aria-hidden />
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
            SYS://OPEN_CHANNEL
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
          className="mt-6 max-w-3xl text-display text-[clamp(34px,5.2vw,68px)] leading-[1.04] tracking-[-0.02em] text-balance text-cream"
        >
          {contact.hero.h1}
          <span className="terminal-cursor" aria-hidden />
        </motion.h1>
        {contact.hero.sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cream/72 md:text-[17px]"
          >
            {contact.hero.sub}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[10px] uppercase tracking-[0.24em] text-cream/45"
        >
          <span>STATUS · LISTENING</span>
          <span className="text-cream/30">/</span>
          <span>NODE · NOIDA-01</span>
          <span className="text-cream/30">/</span>
          <span>RESPONSE · 24H</span>
        </motion.div>

        <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-16">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <div className="space-y-10">
              {contact.channels.map((c) => (
                <div
                  key={c.label}
                  className="border-t border-cream/15 pt-6"
                >
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-cream/55">
                    {c.label}
                  </p>
                  {c.label === 'Email' ? (
                    <a
                      href={`mailto:${c.value}`}
                      className="mt-2 block text-display text-2xl tracking-[-0.02em] text-cream transition-colors hover:text-vermilion"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-display text-2xl tracking-[-0.02em] text-cream">
                      {c.value}
                    </p>
                  )}
                </div>
              ))}
              <div className="border-t border-cream/15 pt-6">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-cream/55">
                  Studio
                </p>
                <p className="mt-3 text-base leading-relaxed text-cream/75">
                  {company.legal}
                  <br />
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </p>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="rounded-3xl border border-cream/10 bg-[#0A0F12]/85 p-7 backdrop-blur-sm md:p-10">
              <LeadForm tone="dark" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
