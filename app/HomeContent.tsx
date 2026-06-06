'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'

import { faqs, commitments, testimonials } from '@/lib/copy'
import { CtaBanner } from '@/components/CtaBanner'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { MarqueeTicker } from '@/components/MarqueeTicker'

/* ─── animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})
const fadeUpHero = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ─── data ─── */
const SERVICES = [
  {
    slug: 'software-development', tag: 'Engineering', name: 'Software Development',
    desc: 'Web platforms, SaaS products, mobile apps, internal tools, and APIs — built clean, shipped on time, engineered to last five years from now.',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=900&q=85&auto=format&fit=crop',
  },
  {
    slug: 'digital-marketing', tag: 'Growth', name: 'Digital Marketing',
    desc: 'Search, performance ads, content, and lifecycle — the channels where the numbers compound. We run campaigns where the maths actually works.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&auto=format&fit=crop',
  },
  {
    slug: 'software-development', tag: 'Mobile', name: 'Mobile App Development',
    desc: 'React Native for cross-platform speed. Native iOS / Android when the product demands it. From concept to the App Store in weeks, not months.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=85&auto=format&fit=crop',
  },
  {
    slug: 'software-development', tag: 'Infrastructure', name: 'Cloud & DevOps',
    desc: 'AWS, GCP, CI/CD pipelines, infrastructure-as-code, containerisation, and observability. Set up once, sleep through the night thereafter.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85&auto=format&fit=crop',
  },
  {
    slug: 'software-development', tag: 'Design', name: 'UI / UX Design',
    desc: 'User research, wireframes, Figma prototypes, and full design systems. Design-led, conversion-tested, handed off pixel-perfect.',
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=85&auto=format&fit=crop',
  },
  {
    slug: 'staffing-solutions', tag: 'Talent', name: 'Staff Augmentation',
    desc: 'Vetted senior engineers and designers on-demand, integrated into your team in days. Technical interviews done by us, not HR.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85&auto=format&fit=crop',
  },
]

const STATS = [
  { value: 50, suffix: '+', label: 'Projects Shipped', desc: 'Across all service lines' },
  { value: 30, suffix: '+', label: 'Expert Team', desc: 'Senior engineers & strategists' },
  { value: 10, suffix: '+', label: 'Years of Delivery', desc: 'Since 2015' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Across all engagements' },
]

const CASE_STUDIES = [
  {
    tag: 'EdTech · Software Dev',
    tagColor: 'from-blue-500 to-[#1163fb]',
    title: 'Learning Platform — 40K users in 30 days',
    desc: 'Live-class streaming, cohort management, and progress dashboards shipped in 12 weeks.',
    metrics: [{ v: '40K+', l: 'Learners' }, { v: '12 wks', l: 'Timeline' }, { v: '99.9%', l: 'Uptime' }],
  },
  {
    tag: 'D2C · Digital Marketing',
    tagColor: 'from-[#0c4fcb] to-purple-500',
    title: '4.2× ROAS — Full-funnel rebuild',
    desc: 'Attribution re-architected from pixel to server-side. Google, Meta, and email unified.',
    metrics: [{ v: '4.2×', l: 'Blended ROAS' }, { v: '−38%', l: 'CPL' }, { v: '+118%', l: 'Organic' }],
  },
  {
    tag: 'FinTech · Staffing',
    tagColor: 'from-[#1163fb] to-cyan-500',
    title: '8 senior engineers placed in 6 weeks',
    desc: 'London fintech needed to double engineering org. Every placement is still active.',
    metrics: [{ v: '8', l: 'Engineers' }, { v: '6 wks', l: 'Timeline' }, { v: '100%', l: 'Retention' }],
  },
]

const PROCESS = [
  { n: '01', title: 'Discovery', desc: 'Deep-dive into your goals, users, and constraints before a single line of code.' },
  { n: '02', title: 'Planning', desc: 'Scope, milestones, and success metrics — written down and signed off.' },
  { n: '03', title: 'Design', desc: 'Architecture, wireframes, and a working prototype you can actually test.' },
  { n: '04', title: 'Development', desc: 'Two-week sprints, weekly demos, code review on every pull request.' },
  { n: '05', title: 'Testing', desc: 'Automated tests, QA passes, and performance benchmarks before ship.' },
  { n: '06', title: 'Launch', desc: 'Staged rollout, runbooks, observability setup, and training for your team.' },
]

const CLIENTS = ['TechVentures', 'DataFlow Inc.', 'CloudBase', 'MarketEdge', 'BuildSpace', 'GrowthLab', 'QuantumOps', 'NexaCore']

/* ─── Scroll Image Reveal (motion.dev pattern) ─── */
function ScrollReveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'start 0.15'],
  })

  // Spring for buttery smooth response
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  })

  // Clip opens bottom-up as you scroll down
  const clipPath = useTransform(
    smooth,
    [0, 1],
    ['inset(0 0 100% 0 round 16px)', 'inset(0 0 0% 0 round 16px)']
  )

  // Slight upward drift while revealing
  const y = useTransform(smooth, [0, 1], [48, 0])

  // Subtle scale — content "grows" into view
  const scale = useTransform(smooth, [0, 1], [0.92, 1])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ clipPath, y, scale, transformOrigin: 'bottom center' }}>
        {children}
      </motion.div>
    </div>
  )
}

/* backward-compat alias */
const RevealCard = ScrollReveal

/* ─── Wave Lines (Xicom style) ─── */
const WAVES = [
  // Bundle 1 — blue to indigo (upper sweep)
  { d: 'M900 -180 C730 80 580 280 480 450 S340 620 290 870', color: '#3B82F6', w: 1.2, op: 0.5, delay: '0s' },
  { d: 'M900 -120 C740 90 590 290 490 460 S350 630 300 880', color: '#1163fb', w: 1.4, op: 0.55, delay: '0.2s' },
  { d: 'M900 -60 C750 100 600 300 500 470 S360 640 310 890', color: '#1163fb', w: 1.6, op: 0.6, delay: '0.4s' },
  { d: 'M900 0 C760 110 610 310 510 480 S370 650 320 900', color: '#1163fb', w: 1.8, op: 0.65, delay: '0.6s' },
  { d: 'M900 60 C770 130 625 330 525 500 S385 665 340 910', color: '#0c4fcb', w: 1.6, op: 0.6, delay: '0.8s' },
  // Bundle 2 — purple to fuchsia (mid sweep)
  { d: 'M900 130 C820 140 710 240 625 370 S535 510 500 700', color: '#9333EA', w: 1.5, op: 0.55, delay: '0.3s' },
  { d: 'M900 185 C828 185 718 285 635 415 S547 555 515 745', color: '#A855F7', w: 1.7, op: 0.6, delay: '0.5s' },
  { d: 'M900 240 C836 240 730 340 650 470 S565 610 535 800', color: '#C026D3', w: 1.9, op: 0.65, delay: '0.7s' },
  { d: 'M900 295 C844 285 744 385 668 515 S585 655 557 850', color: '#DB2777', w: 1.7, op: 0.6, delay: '0.9s' },
  { d: 'M900 350 C852 330 758 430 685 560 S605 700 580 900', color: '#E879A0', w: 1.4, op: 0.5, delay: '1.1s' },
  // Bundle 3 — pink to red/orange (lower tighter curves)
  { d: 'M900 410 C878 400 848 420 808 462 S754 528 730 640', color: '#EC4899', w: 1.3, op: 0.55, delay: '0.4s' },
  { d: 'M900 470 C882 460 857 478 820 518 S768 584 746 696', color: '#F43F5E', w: 1.5, op: 0.6, delay: '0.6s' },
  { d: 'M900 530 C886 520 865 538 832 578 S782 644 762 758', color: '#EF4444', w: 1.7, op: 0.65, delay: '0.8s' },
  { d: 'M900 590 C890 580 873 598 845 638 S800 704 782 820', color: '#F97316', w: 1.5, op: 0.6, delay: '1.0s' },
  { d: 'M900 650 C894 640 881 658 857 698 S817 764 802 882', color: '#FB923C', w: 1.2, op: 0.45, delay: '1.2s' },
  // Extra outer glow lines (wide, blurry, subtle)
  { d: 'M900 -200 C700 50 530 300 420 520 S290 680 240 900', color: '#2563EB', w: 3, op: 0.15, delay: '0s' },
  { d: 'M900 300 C840 280 780 340 730 440 S680 560 670 720', color: '#BE185D', w: 3, op: 0.15, delay: '0.5s' },
  { d: 'M900 700 C896 670 888 680 870 710 S845 760 838 860', color: '#EA580C', w: 3, op: 0.12, delay: '1s' },
]

function WaveLines() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[65%] overflow-hidden">
      <svg
        viewBox="0 0 900 900"
        className="h-full w-full"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden
      >
        <defs>
          <filter id="wglow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="wglow-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {WAVES.map((w, i) => (
          <path
            key={i}
            d={w.d}
            stroke={w.color}
            strokeWidth={w.w}
            fill="none"
            opacity={w.op}
            filter={w.w > 2 ? 'url(#wglow-soft)' : 'url(#wglow)'}
            style={{
              animation: `wavePulse ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: w.delay,
            }}
          />
        ))}
        {/* Bright center highlight lines */}
        <path d="M900 0 C760 110 610 310 510 480 S370 650 320 900" stroke="#4d8ffc" strokeWidth="0.8" fill="none" opacity="0.9" filter="url(#wglow)" />
        <path d="M900 240 C836 240 730 340 650 470 S565 610 535 800" stroke="#E879A0" strokeWidth="0.8" fill="none" opacity="0.9" filter="url(#wglow)" />
      </svg>
      {/* Left fade so waves don't overlap text */}
      <div className="absolute inset-y-0 left-0 w-1/3" style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }} />
    </div>
  )
}

/* ─── Dashboard Mockup ─── */
function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: '1000px' }}
      className="relative"
    >
      {/* Glow behind card */}
      <div className="absolute inset-0 -z-10 rounded-2xl blur-3xl opacity-30"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, #1163fb 0%, #0c4fcb 50%, transparent 80%)' }} />

      <div className="glass-strong rounded-2xl p-5 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>
            <span className="ml-2 text-xs font-semibold text-white/50">Analytics Dashboard</span>
          </div>
          <span className="rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-green-400">● Live</span>
        </div>

        {/* Metric cards */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Revenue', value: '$124K', delta: '+18%', color: 'text-green-400' },
            { label: 'Users', value: '4,321', delta: '+24%', color: 'text-blue-400' },
            { label: 'Conv. Rate', value: '8.2%', delta: '+3.1%', color: 'text-violet-400' },
          ].map((m) => (
            <div key={m.label} className="rounded-xl border border-white/8 bg-white/4 p-3">
              <p className="text-[10px] font-medium text-white/40">{m.label}</p>
              <p className="mt-1 text-base font-black text-white">{m.value}</p>
              <p className={`text-[10px] font-semibold ${m.color}`}>{m.delta}</p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="mt-4">
          <p className="mb-2 text-[10px] font-medium text-white/40">Monthly Revenue</p>
          <div className="flex items-end gap-1.5 h-16">
            {[35, 52, 44, 68, 58, 75, 62, 85, 72, 90, 78, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.04 }}
                className="flex-1 rounded-t-sm"
                style={{ background: `linear-gradient(to top, #1163fb, #0c4fcb)`, opacity: i === 11 ? 1 : 0.5 + i * 0.04 }}
              />
            ))}
          </div>
          <div className="mt-1.5 flex justify-between text-[8px] text-white/25">
            {['J','F','M','A','M','J','J','A','S','O','N','D'].map(m => <span key={m}>{m}</span>)}
          </div>
        </div>

        {/* Project list */}
        <div className="mt-4 space-y-2">
          {[
            { name: 'Learning Platform', pct: 89, color: '#1163fb' },
            { name: 'Marketing Campaign', pct: 72, color: '#0c4fcb' },
            { name: 'Team Velocity', pct: 94, color: '#3B82F6' },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <span className="w-28 text-[10px] text-white/50 truncate">{p.name}</span>
              <div className="flex-1 h-1.5 rounded-full bg-white/8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${p.pct}%` }}
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className="h-full rounded-full"
                  style={{ background: p.color }}
                />
              </div>
              <span className="text-[10px] font-semibold text-white/60">{p.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── FAQ Item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-white/8">
      <button type="button" onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left">
        <span className="pr-4 text-base font-semibold text-white">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1163fb]/20 text-[#4d8ffc]"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" d="M6 1v10M1 6h10" /></svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-white/55">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Main ─── */
export default function HomeContent() {
  return (
    <>
      {/* ══════════════════════════════════════
          1. HERO — Xicom style
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(120deg, #0A0A0A 0%, #0A0A0A 45%, #111111 100%)' }}>
        {/* Animated neon wave lines */}
        <WaveLines />

        {/* Dark overlay on left — keeps text legible */}
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to right, #0A0A0A 20%, rgba(10,10,10,0.82) 48%, rgba(10,10,10,0.35) 68%, transparent 85%)' }} />

        {/* Subtle dot grid */}
        <div className="bg-dot pointer-events-none absolute inset-0 opacity-20" />

        {/* Content — centered */}
        <div className="container-x relative z-10 flex min-h-screen flex-col items-center justify-center py-24 text-center">
          <motion.h1 {...fadeUpHero(0)}
            className="max-w-6xl text-[clamp(32px,6vw,96px)] font-black leading-[1.08] tracking-[-0.04em] text-white">
            Enterprise Transformation,<br />
            <span className="gradient-text">Engineered for Growth.</span>
          </motion.h1>

          <motion.p {...fadeUpHero(0.14)}
            className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-white/55 md:text-xl">
            Since 2015, Biech partners with forward-thinking companies to architect, build, and scale digital products — software, marketing, and engineering teams that deliver measurable transformation.
          </motion.p>

          <motion.div {...fadeUpHero(0.26)} className="mt-9">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-full px-[90px] text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              style={{ background: '#1163fb' }}
            >
              Consult Our Experts →
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          2. TRUSTED COMPANIES
      ══════════════════════════════════════ */}
      <section className="border-y border-white/6 bg-[#111111] py-12">
        <div className="container-x mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">
            Trusted by growing companies worldwide
          </p>
        </div>
        <MarqueeTicker items={CLIENTS} tone="dark" />
      </section>

      {/* ══════════════════════════════════════
          3. SERVICES
      ══════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-28 md:py-36">
        <div className="container-x">
          <ScrollReveal className="text-center">
            <span className="section-label">What we build</span>
            <h2 className="mt-5 text-[clamp(28px,4vw,52px)] font-black tracking-[-0.03em] text-white">
              End-to-end digital services
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
              Three core practices — software, marketing, talent — under one roof. Built to compound each other.
            </p>
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-6">
            {SERVICES.map((s, i) => {
              const imgLeft = i % 2 === 0
              return (
                <ScrollReveal key={s.name}>
                  <Link
                    href={`/services/${s.slug}`}
                    className={`glass card-glow group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-[#1163fb]/30 hover:shadow-[0_24px_70px_rgba(17,99,251,0.15)] md:flex-row ${imgLeft ? '' : 'md:flex-row-reverse'}`}
                  >
                    {/* Image */}
                    <div className="relative h-56 w-full shrink-0 overflow-hidden md:h-auto md:w-[42%]">
                      <Image
                        src={s.img}
                        alt={s.name}
                        fill
                        sizes="(max-width:768px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient overlay on image */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: imgLeft
                            ? 'linear-gradient(to right, transparent 60%, rgba(11,15,25,0.85))'
                            : 'linear-gradient(to left, transparent 60%, rgba(11,15,25,0.85))',
                        }}
                      />
                      {/* Tag badge */}
                      <span className="absolute left-4 top-4 rounded-full bg-[#1163fb]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        {s.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-center p-10 md:p-14">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#4d8ffc]">
                        {String(i + 1).padStart(2, '0')} / {s.tag}
                      </span>
                      <h3 className="mt-3 text-[clamp(24px,3vw,40px)] font-black leading-tight tracking-tight text-white">
                        {s.name}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-white/55">
                        {s.desc}
                      </p>
                      <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#4d8ffc] transition-all group-hover:gap-4">
                        Explore service
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. STATISTICS
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#111111] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(17,99,251,0.15) 0%, transparent 70%)' }} />
        <div className="container-x relative">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} className="text-center">
                <div className="gradient-text text-[clamp(48px,6vw,80px)] font-black leading-none tracking-[-0.04em]">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-base font-bold text-white">{s.label}</p>
                <p className="mt-1 text-xs text-white/35">{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. CASE STUDIES
      ══════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-28 md:py-36">
        <div className="container-x">
          <motion.div {...fadeUp()} className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">Case studies</span>
              <h2 className="mt-5 text-[clamp(28px,4vw,52px)] font-black tracking-[-0.03em] text-white">
                Real results, real clients.
              </h2>
            </div>
            <Link href="/work" className="btn-outline h-10 px-5 text-sm shrink-0">
              All case studies →
            </Link>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {CASE_STUDIES.map((c, i) => (
              <RevealCard key={c.title}>
                <div className="glass card-glow group flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                  <span className={`inline-flex w-fit rounded-full bg-gradient-to-r ${c.tagColor} px-3 py-1 text-[11px] font-bold text-white`}>
                    {c.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-black leading-snug tracking-tight text-white">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">{c.desc}</p>
                  <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/8 pt-5">
                    {c.metrics.map(m => (
                      <div key={m.l} className="text-center">
                        <p className="gradient-text text-xl font-black">{m.v}</p>
                        <p className="mt-0.5 text-[10px] text-white/40">{m.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. DEVELOPMENT PROCESS
      ══════════════════════════════════════ */}
      <section className="bg-[#111111] py-28 md:py-36">
        <div className="container-x">
          <motion.div {...fadeUp()} className="text-center">
            <span className="section-label">How we work</span>
            <h2 className="mt-5 text-[clamp(28px,4vw,52px)] font-black tracking-[-0.03em] text-white">
              A process built on respect for your time.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((step, i) => (
              <motion.div key={step.n} {...fadeUp(i * 0.06)}
                className="glass group relative rounded-2xl p-6 transition-all duration-300 hover:border-[#1163fb]/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1163fb] to-[#0c4fcb] text-sm font-black text-white shadow-[0_0_20px_rgba(17,99,251,0.4)]">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{step.desc}</p>
                {/* Connector line */}
                {i < 5 && i % 3 !== 2 && (
                  <span aria-hidden className="absolute right-0 top-9 hidden translate-x-1/2 text-white/20 lg:block">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-28 md:py-36">
        <div className="container-x">
          <motion.div {...fadeUp()} className="text-center">
            <span className="section-label">Testimonials</span>
            <h2 className="mt-5 text-[clamp(28px,4vw,52px)] font-black tracking-[-0.03em] text-white">
              What our clients say.
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp(i * 0.08)}
                className="glass flex flex-col rounded-2xl p-7 transition-all duration-200 hover:border-[#1163fb]/20">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20" aria-hidden>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-white/65">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #1163fb, #0c4fcb)' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. FAQ
      ══════════════════════════════════════ */}
      <section className="bg-[#111111] py-28 md:py-36">
        <div className="container-x">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <motion.div {...fadeUp()}>
              <span className="section-label">FAQ</span>
              <h2 className="mt-5 text-[clamp(28px,4vw,48px)] font-black tracking-[-0.03em] text-white">
                Common questions, straight answers.
              </h2>
              <p className="mt-5 text-base text-white/50">
                Still have questions? We reply within one working day.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Ask us directly →
              </Link>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              {faqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
              <div className="border-t border-white/8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. CONTACT CTA
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 opacity-25"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(17,99,251,0.2) 0%, transparent 65%)' }} />
        <div className="container-x relative">
          <motion.div {...fadeUp()} className="mx-auto max-w-3xl text-center">
            <span className="section-label">Get started</span>
            <h2 className="mt-6 text-[clamp(32px,5vw,64px)] font-black leading-[1.04] tracking-[-0.04em] text-white">
              Ready to build something <span className="gradient-text">remarkable?</span>
            </h2>
            <p className="mt-6 text-lg text-white/50">
              Tell us about your project. We reply within one working day and come back with a written proposal within a week.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Start a Project →
              </Link>
              <a
                href="https://wa.me/918796938004?text=Hi%2C%20I%20found%20Biech%20online."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-7 text-sm font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/15 sm:w-auto"
              >
                <svg viewBox="0 0 32 32" className="h-4 w-4 fill-[#25D366]" aria-hidden>
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.857 6.5L4 29l7.703-1.82A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.02-1.352l-.36-.213-3.735.882.918-3.622-.234-.376A9.944 9.944 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.5 5c-.277 0-.58.006-.836.263-.278.278-1.164 1.14-1.164 2.78 0 1.641 1.193 3.225 1.359 3.448.167.222 2.313 3.725 5.703 5.078 2.818 1.114 3.39.893 4.003.837.614-.056 1.976-.808 2.254-1.587.279-.78.279-1.447.195-1.587-.083-.14-.306-.222-.64-.39-.334-.167-1.976-.975-2.282-1.086-.306-.11-.528-.167-.75.167-.222.333-.862 1.085-1.057 1.308-.195.222-.39.25-.724.083-.334-.167-1.41-.52-2.686-1.657-1-.894-1.674-1.997-1.87-2.33-.195-.334-.02-.515.147-.68.15-.15.334-.39.5-.585.167-.195.222-.334.334-.557.11-.222.056-.418-.028-.585-.083-.167-.742-1.813-1.028-2.474-.269-.632-.543-.543-.75-.553a14.8 14.8 0 0 0-.64-.01z" />
                </svg>
                Schedule on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
