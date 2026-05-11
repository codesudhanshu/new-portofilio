'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { marketing } from '@/lib/copy'
import { PageHero } from '@/components/PageHero'
import { CtaBanner } from '@/components/CtaBanner'
import { CanvasSkeleton } from '@/components/three/CanvasSkeleton'

const ParticleStream = dynamic(
  () => import('@/components/three/ParticleStream'),
  {
    ssr: false,
    loading: () => <CanvasSkeleton />,
  }
)

// Blade Runner amber — drives accents, neon edges, hover glows
const AMBER = '#FF9544'
const AMBER_GLOW = 'rgba(255,149,68,0.55)'
const AMBER_GLOW_FAINT = 'rgba(255,149,68,0.28)'

export default function Content() {
  return (
    <>
      <PageHero
        eyebrow={marketing.hero.eyebrow}
        h1={marketing.hero.h1}
        sub={marketing.hero.sub}
        scene={<ParticleStream />}
        meta="Reach & Growth"
        accent={AMBER}
      />

      {/* OFFERINGS — neon billboards as cards */}
      <section
        className="relative overflow-hidden bg-[#0A0805] py-24 text-cream md:py-32"
        style={{ ['--accent' as string]: AMBER }}
      >
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-50"
        />
        {/* Faint amber glow at top, like neon haze on the ceiling */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-48"
          style={{
            background:
              'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,149,68,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: AMBER }}
            >
              ▸ 02 / Channels we run
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://CHANNELS
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            Six disciplines, one accountable team.
            <span className="terminal-cursor" aria-hidden />
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {marketing.offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="group relative rounded-2xl border border-cream/10 bg-[#120907] p-7 transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = AMBER
                  e.currentTarget.style.boxShadow = `0 0 24px ${AMBER_GLOW_FAINT}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <div
                  className="h-1 w-10"
                  style={{
                    backgroundColor: AMBER,
                    boxShadow: `0 0 12px ${AMBER_GLOW}`,
                  }}
                />
                <h3 className="mt-6 text-display text-2xl leading-tight tracking-[-0.02em] text-cream">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {o.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS — hot amber readouts on near-black */}
      <section
        className="relative overflow-hidden bg-[#070403] py-24 text-cream md:py-32"
        style={{ ['--accent' as string]: AMBER }}
      >
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: AMBER }}
            >
              ▸ 03 / {marketing.results.eyebrow}
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://METRICS
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            We measure what we ship.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-cream/10 md:mt-20 md:grid-cols-3">
            {marketing.results.items.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-[#120907] p-10"
              >
                <div className="font-sans text-[10px] uppercase tracking-[0.24em] text-cream/45">
                  READOUT · {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  className="mt-3 text-display text-[clamp(56px,7vw,96px)] leading-none tracking-[-0.02em]"
                  style={{
                    color: AMBER,
                    textShadow: `0 0 24px ${AMBER_GLOW}, 0 0 6px ${AMBER_GLOW_FAINT}`,
                  }}
                >
                  {r.metric}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-cream/70">
                  {r.label}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-cream/55">
            Numbers from real engagements. Specifics under NDA — we will share
            in a call.
          </p>
        </div>
      </section>

      <CtaBanner
        heading="Want growth that compounds?"
        sub="One conversation tells us if our approach fits yours. No deck, no pitch — just a working session."
        button="Talk to us"
      />
    </>
  )
}
