'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { home } from '@/lib/copy'
import { ServiceCard } from '@/components/ServiceCard'
import { CtaBanner } from '@/components/CtaBanner'
import { MarqueeTicker } from '@/components/MarqueeTicker'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { SoftwareIcon } from '@/components/icons/SoftwareIcon'
import { MarketingIcon } from '@/components/icons/MarketingIcon'
import { StaffingIcon } from '@/components/icons/StaffingIcon'

const MatrixRain = dynamic(() => import('@/components/MatrixRain'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#080C0A]" aria-hidden />,
})

const ICON_MAP = {
  'software-development': SoftwareIcon,
  'digital-marketing': MarketingIcon,
  'staffing-solutions': StaffingIcon,
} as const

// Page-load sequence: nav (handled in layout) → eyebrow (200ms) → h1 line 1 (400ms)
// → h1 line 2 (500ms) → underline (600ms) → sub (650ms) → CTAs (750ms) → canvas (900ms)
const fadeUp = (delay: number, duration = 0.8) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: [0.65, 0, 0.35, 1] },
  },
})
const drawUnderline = (delay: number) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      delay,
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
    },
  },
})
const canvasFade = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
})

export default function HomeContent() {
  return (
    <>
      {/* SECTION 1 — HERO (full-bleed dark, matrix rain backdrop) */}
      <section className="relative min-h-[100vh] overflow-hidden bg-[#080C0A] text-cream">
        {/* Matrix rain — full bleed behind everything */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={canvasFade(0.4)}
          className="absolute inset-0 z-0"
        >
          <MatrixRain />
        </motion.div>

        {/* Soft radial scrim — darkens the area where text lives so it stays
            legible against the busy rain without obscuring it elsewhere */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'radial-gradient(ellipse 75% 80% at 30% 50%, rgba(8,12,10,0.88) 0%, rgba(8,12,10,0.6) 40%, rgba(8,12,10,0.18) 70%, rgba(8,12,10,0) 90%)',
          }}
        />

        {/* Bottom edge — fade matrix rain into the next dark section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-b from-transparent to-[#0A0E0D]"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          className="container-x relative z-10 grid min-h-[100vh] grid-cols-1 items-center gap-10 pt-24 pb-16 md:grid-cols-12 md:py-0"
        >
          <div className="md:col-span-8 lg:col-span-7">
            <motion.div
              variants={fadeUp(0.2, 0.6)}
              className="flex items-baseline gap-4 text-cream/70"
            >
              <span className="font-sans text-xs uppercase tracking-[0.18em]">
                01 / {home.hero.eyebrow}
              </span>
              <span className="h-px flex-1 bg-cream/20" aria-hidden />
              <span className="font-sans text-xs uppercase tracking-[0.18em]">
                Est. Noida
              </span>
            </motion.div>

            <h1 className="mt-7 text-display text-[clamp(36px,5.4vw,64px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
              <motion.span variants={fadeUp(0.4)} className="block">
                {home.hero.line1}
              </motion.span>
              <motion.span variants={fadeUp(0.5)} className="block">
                {home.hero.line2}
              </motion.span>
            </h1>

            <motion.span
              variants={drawUnderline(0.6)}
              className="mt-7 block h-[2px] w-24 origin-left bg-vermilion"
              aria-hidden
            />

            <motion.p
              variants={fadeUp(0.65, 0.7)}
              className="mt-7 max-w-xl text-[17px] leading-relaxed text-cream/75 md:text-[18px]"
            >
              {home.hero.sub}
            </motion.p>

            <motion.div
              variants={fadeUp(0.75, 0.6)}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/contact" className="btn-primary">
                {home.hero.ctaPrimary}
              </Link>
              <Link
                href="/work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-cream/35 px-7 text-sm font-medium text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-ink"
              >
                {home.hero.ctaSecondary}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — SERVICES (dark, terminal-style) */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#0A0E0D] py-24 text-cream md:py-32"
      >
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
              ▸ {home.services.sectionNumber} / {home.services.eyebrow}
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://OFFERINGS
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            {home.services.heading}
            <span className="terminal-cursor" aria-hidden />
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-7">
            {home.services.items.map((item, i) => {
              const Icon = ICON_MAP[item.slug as keyof typeof ICON_MAP]
              return (
                <ServiceCard
                  key={item.slug}
                  icon={Icon}
                  name={item.name}
                  blurb={item.blurb}
                  href={`/services/${item.slug}`}
                  index={i}
                  tone="dark"
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — STATS BAND (dark + scan-lines + phosphor flicker) */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-24">
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
              ▸ 03 / By the numbers
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://METRICS
            </span>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {home.stats.map((s) => (
              <div key={s.label}>
                <div className="phosphor-glow text-display text-[clamp(56px,7vw,96px)] leading-none tracking-[-0.02em] text-[#B6FFC4]">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-sm text-cream/65">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE — tech stack ticker (dark) */}
      <MarqueeTicker items={home.marquee} tone="dark" />

      {/* SECTION 4 — WHY BIECH (dark editorial) */}
      <section className="relative overflow-hidden bg-[#0A0E0D] py-24 text-cream md:py-32">
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-60"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
              ▸ {home.why.sectionNumber} / {home.why.eyebrow}
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://ETHOS
            </span>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="md:col-span-7 text-display italic text-[clamp(28px,3.6vw,46px)] leading-[1.15] tracking-[-0.02em] text-balance text-cream/90"
            >
              {home.why.quote}
            </motion.blockquote>
            <ul className="md:col-span-5 space-y-7">
              {home.why.points.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative pl-6"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-1 h-full w-[2px] bg-[#B6FFC4]/70 shadow-[0_0_8px_rgba(0,255,65,0.45)]"
                  />
                  <h3 className="text-base font-semibold text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {p.body}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROCESS (dark terminal-card sequence) */}
      <section className="relative overflow-hidden bg-[#0E1311] py-24 text-cream md:py-32">
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-50"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
              ▸ {home.process.sectionNumber} / {home.process.eyebrow}
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://PIPELINE
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,52px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            {home.process.heading}
          </h2>
        </div>
        <div className="horizontal-scroll relative mt-14 overflow-x-auto md:mt-20">
          <div className="container-x flex min-w-max gap-6 md:grid md:min-w-0 md:grid-cols-5 md:gap-5">
            {home.process.steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="relative w-[260px] shrink-0 rounded-2xl border border-cream/10 bg-[#13181A] p-6 md:w-auto"
              >
                <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.24em] text-[#B6FFC4]/75">
                  <span>STEP {String(i + 1).padStart(2, '0')}</span>
                  <span className="text-cream/30">›</span>
                </div>
                <div className="mt-4 text-display text-vermilion text-[40px] leading-none tracking-[-0.02em]">
                  {step.n}
                </div>
                <h3 className="mt-5 text-display text-[22px] leading-tight tracking-[-0.02em] text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {step.body}
                </p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-[#B6FFC4]/35 via-cream/10 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA BANNER */}
      <CtaBanner
        heading={home.cta.heading}
        sub={home.cta.sub}
        button={home.cta.button}
      />
    </>
  )
}
