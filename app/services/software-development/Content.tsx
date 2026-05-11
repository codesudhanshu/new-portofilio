'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { software } from '@/lib/copy'
import { PageHero } from '@/components/PageHero'
import { CtaBanner } from '@/components/CtaBanner'
import { CanvasSkeleton } from '@/components/three/CanvasSkeleton'

const GlobeScene = dynamic(() => import('@/components/three/GlobeScene'), {
  ssr: false,
  loading: () => <CanvasSkeleton />,
})

// Tron-grid cyan — drives the page's accent (terminal cursor, leading arrows,
// hover edges, glow shadows)
const TRON = '#5DCBE9'
const TRON_GLOW = 'rgba(93,203,233,0.55)'
const TRON_GLOW_FAINT = 'rgba(93,203,233,0.25)'

export default function Content() {
  return (
    <>
      <PageHero
        eyebrow={software.hero.eyebrow}
        h1={software.hero.h1}
        sub={software.hero.sub}
        scene={<GlobeScene />}
        meta="Build & Ship"
        accent={TRON}
      />

      {/* OFFERINGS — dark cards, cyan accents */}
      <section
        className="relative overflow-hidden bg-[#0A0E0D] py-24 text-cream md:py-32"
        style={{ ['--accent' as string]: TRON }}
      >
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-50"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: TRON }}
            >
              ▸ 02 / What we build
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://OFFERINGS
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            From small internal tools to platforms that scale.
            <span className="terminal-cursor" aria-hidden />
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {software.offerings.map((o, i) => (
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
                className="group relative rounded-2xl border border-cream/10 bg-[#0F1311] p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  // Hover ring picks up cyan glow via inline style
                }}
              >
                <span
                  aria-hidden
                  className="absolute -top-px left-6 h-px w-12 transition-all duration-300 group-hover:w-20"
                  style={{
                    backgroundColor: TRON,
                    boxShadow: `0 0 8px ${TRON_GLOW}`,
                  }}
                />
                <div
                  className="h-1 w-10"
                  style={{ backgroundColor: TRON, boxShadow: `0 0 10px ${TRON_GLOW}` }}
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

      {/* PROCESS — terminal pipeline, cyan numerals */}
      <section
        className="relative overflow-hidden bg-[#070A09] py-24 text-cream md:py-32"
        style={{ ['--accent' as string]: TRON }}
      >
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: TRON }}
            >
              ▸ 03 / How we ship
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://PIPELINE
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,52px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            A predictable engagement, end to end.
          </h2>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-cream/8 md:mt-20 md:grid-cols-5">
            {software.process.map((step, i) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#0F1311] p-6"
              >
                <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.24em]">
                  <span style={{ color: TRON }}>STEP {String(i + 1).padStart(2, '0')}</span>
                  <span className="text-cream/30">›</span>
                </div>
                <div
                  className="mt-3 text-display text-3xl leading-none tracking-[-0.02em]"
                  style={{ color: TRON, textShadow: `0 0 10px ${TRON_GLOW_FAINT}` }}
                >
                  {step.n}
                </div>
                <h3 className="mt-5 text-display text-xl leading-tight tracking-[-0.02em] text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* STACK — dark pills, cyan glow on hover */}
      <section
        className="relative overflow-hidden bg-[#0A0E0D] py-24 text-cream md:py-32"
        style={{ ['--accent' as string]: TRON }}
      >
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: TRON }}
            >
              ▸ 04 / Tools we reach for
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://STACK
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            Mature stack. Few surprises.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/65">
            We pick boring tools when the job is critical. We use the new ones
            when the new ones are clearly better. We do not chase frameworks for
            their own sake.
          </p>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {software.stack.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.025 }}
                className="inline-flex items-center rounded-full border border-cream/15 bg-[#0F1311] px-3.5 py-1.5 text-xs text-cream/80 transition-all duration-300 hover:text-cream"
                style={{
                  // Hover effect via JS-light: rely on CSS hover for border
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = TRON
                  e.currentTarget.style.boxShadow = `0 0 12px ${TRON_GLOW}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Have something to build?"
        sub="Tell us the rough shape of it. We will reply with thoughts, a timeline, and a number."
        button="Start a Project"
      />
    </>
  )
}
