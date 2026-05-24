'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { PageHero } from '@/components/PageHero'
import { CtaBanner } from '@/components/CtaBanner'
import { CanvasSkeleton } from '@/components/three/CanvasSkeleton'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <CanvasSkeleton />,
})

const VERMILION = '#E8472A'
const TRON = '#5DCBE9'
const AMBER = '#FF9544'
const PINK = '#FF3FA0'

const SERVICE_ACCENT: Record<string, string> = {
  'Software Development': TRON,
  'Digital Marketing': AMBER,
  'Staffing Solutions': PINK,
}

const PROJECTS = [
  {
    id: 'CASE_001',
    service: 'Software Development',
    client: 'EdTech startup · Delhi',
    name: 'Learning Platform',
    detail:
      'Live-class streaming, cohort management, and a student-facing progress dashboard — designed and shipped in 12 weeks.',
    result: '40K+ learners onboarded in month one.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'CASE_002',
    service: 'Digital Marketing',
    client: 'D2C brand · Noida',
    name: 'Performance Growth Engine',
    detail:
      'Full-funnel rebuild across Google, Meta, and email. Attribution re-architected from pixel to server-side events.',
    result: '4.2× blended ROAS over 90-day engagement.',
    tags: ['Google Ads', 'Meta', 'GA4', 'Email'],
  },
  {
    id: 'CASE_003',
    service: 'Software Development',
    client: 'Investment firm · Mumbai',
    name: 'Portfolio Analytics Suite',
    detail:
      'Internal tool replacing four spreadsheet workflows. Real-time data from five custodians, single unified dashboard.',
    result: 'Adopted as primary tool within 3 weeks of launch.',
    tags: ['React', 'Python', 'FastAPI', 'Redis'],
  },
  {
    id: 'CASE_004',
    service: 'Staffing Solutions',
    client: 'Fintech scale-up · London',
    name: 'Engineering Expansion',
    detail:
      'A 12-person engineering org needed to double. We shortlisted, vetted, and placed eight senior engineers in under six weeks.',
    result: '8 engineers placed. All still active at the company.',
    tags: ['Engineering', 'React', 'Python', 'DevOps'],
  },
  {
    id: 'CASE_005',
    service: 'Software Development',
    client: 'B2B SaaS · Gurugram',
    name: 'Multi-tenant Platform',
    detail:
      'Ground-up build — workspace isolation, billing, RBAC, and a public API. Spec to production in seven months.',
    result: 'Series A raised within 14 months of MVP.',
    tags: ['TypeScript', 'Go', 'Kubernetes', 'Stripe'],
  },
  {
    id: 'CASE_006',
    service: 'Digital Marketing',
    client: 'Healthcare startup · Bangalore',
    name: 'Organic & Lifecycle',
    detail:
      'Technical SEO overhaul, a full content programme, and an email lifecycle stack built from scratch over 12 months.',
    result: '+118% organic sessions · −38% cost-per-lead.',
    tags: ['SEO', 'Content', 'Email', 'Analytics'],
  },
]

export default function Content() {
  return (
    <>
      <PageHero
        eyebrow="Selected Projects"
        h1="Work worth showing."
        sub="A selection across software, marketing, and staffing. Every engagement is under NDA — we share what we can."
        scene={<HeroScene />}
        index="01"
        meta="Our Work"
        accent={VERMILION}
      />

      {/* PROJECTS GRID */}
      <section className="relative overflow-hidden bg-[#0A0E0D] py-24 text-cream md:py-32">
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-50"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: VERMILION }}
            >
              ▸ 02 / What we have shipped
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://CASE_FILES
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            50+ projects. Six below.
            <span className="terminal-cursor" aria-hidden />
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/65">
            Client names are withheld by agreement. If you need references, we
            will arrange direct introductions.
          </p>

          <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => {
              const accent = SERVICE_ACCENT[p.service]
              const accentGlow = accent
                .replace('#', 'rgba(')
                .concat(', 0.45)')
                .replace('rgba(', 'rgba(')

              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.06,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="group relative flex flex-col rounded-2xl border border-cream/10 bg-[#0F1311] p-7 transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accent
                    e.currentTarget.style.boxShadow = `0 0 20px ${accentGlow}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  {/* Top accent bar */}
                  <span
                    aria-hidden
                    className="absolute -top-px left-6 h-px w-12 transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: accent }}
                  />

                  {/* Case ID + service badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-sans text-[10px] uppercase tracking-[0.24em]"
                      style={{ color: accent }}
                    >
                      {p.id}
                    </span>
                    <span
                      className="rounded-full border px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-[0.18em]"
                      style={{ borderColor: `${accent}55`, color: accent }}
                    >
                      {p.service}
                    </span>
                  </div>

                  {/* Project name */}
                  <h3 className="mt-5 text-display text-2xl leading-tight tracking-[-0.02em] text-cream">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-sans text-xs text-cream/45">{p.client}</p>

                  {/* Detail */}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/65">
                    {p.detail}
                  </p>

                  {/* Result highlight */}
                  <div
                    className="mt-6 rounded-xl border-l-2 bg-[#13181A] px-4 py-3"
                    style={{ borderColor: accent }}
                  >
                    <p
                      className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/50"
                    >
                      Result
                    </p>
                    <p className="mt-1 text-sm font-medium text-cream">{p.result}</p>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cream/10 bg-[#13181A] px-2.5 py-0.5 font-sans text-[10px] text-cream/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* NDA NOTE */}
      <section className="relative overflow-hidden bg-[#070A09] py-20 text-cream md:py-24">
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: VERMILION }}
            >
              ▸ 03 / A note on confidentiality
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://DISCLOSURE
            </span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Clients, not logos',
                body: 'We work with real companies who trust us with real problems. We do not use their names as marketing without permission.',
              },
              {
                n: '02',
                title: 'References on request',
                body: 'If you need to speak to a past client before engaging, ask. We have arranged direct introductions dozens of times.',
              },
              {
                n: '03',
                title: 'Specs available in calls',
                body: 'Technical depth on any project — stack choices, scale, challenges — is available in a discovery call under NDA.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-cream/12 pt-6"
              >
                <span
                  className="font-sans text-[10px] uppercase tracking-[0.24em]"
                  style={{ color: VERMILION }}
                >
                  {item.n}
                </span>
                <h3 className="mt-3 text-display text-xl leading-tight tracking-[-0.02em] text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Have something worth building?"
        sub="Tell us the rough shape of it. We will reply with thoughts, a timeline, and a number."
        button="Start a Project"
      />
    </>
  )
}
