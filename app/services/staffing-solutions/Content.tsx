'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { staffing } from '@/lib/copy'
import { PageHero } from '@/components/PageHero'
import { CtaBanner } from '@/components/CtaBanner'
import { CandidateScanner } from '@/components/CandidateScanner'
import { CanvasSkeleton } from '@/components/three/CanvasSkeleton'

const ConstellationScene = dynamic(
  () => import('@/components/three/ConstellationScene'),
  {
    ssr: false,
    loading: () => <CanvasSkeleton />,
  }
)

// Ghost in the Shell — hot pink primary, cyan secondary, electric purple
const PINK = '#FF3FA0'
const CYAN = '#00E5E5'
const PINK_GLOW = 'rgba(255,63,160,0.55)'
const PINK_GLOW_FAINT = 'rgba(255,63,160,0.28)'
const CYAN_GLOW_FAINT = 'rgba(0,229,229,0.25)'

export default function Content() {
  return (
    <>
      <PageHero
        eyebrow={staffing.hero.eyebrow}
        h1={staffing.hero.h1}
        sub={staffing.hero.sub}
        scene={<ConstellationScene />}
        meta="Talent & Teams"
        accent={PINK}
      />

      {/* HOW IT WORKS — three terminal cards on deep purple-black */}
      <section
        className="relative overflow-hidden bg-[#0A0612] py-24 text-cream md:py-32"
        style={{ ['--accent' as string]: PINK }}
      >
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-50"
        />
        {/* Top: subtle pink/cyan glow band */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,63,160,0.07), transparent 60%), linear-gradient(to bottom, rgba(0,229,229,0.05), transparent 70%)',
          }}
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: PINK }}
            >
              ▸ 02 / How it works
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://INTAKE_PIPELINE
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            Three steps, no recruiter theatre.
            <span className="terminal-cursor" aria-hidden />
          </h2>

          <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-14">
            {/* Left — live candidate scanner */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="md:col-span-5 lg:col-span-5"
            >
              <CandidateScanner />
              <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.24em] text-cream/45">
                LIVE FEED · SHORTLIST_PIPELINE
              </p>
            </motion.div>

            {/* Right — the three steps as a compact terminal list */}
            <ol className="md:col-span-7 lg:col-span-7 space-y-5">
              {staffing.steps.map((step, i) => (
                <motion.li
                  key={step.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative rounded-2xl border border-cream/10 bg-[#13091F] p-6 transition-all duration-300 md:p-7"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = PINK
                    e.currentTarget.style.boxShadow = `0 0 18px ${PINK_GLOW_FAINT}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute -top-px left-7 h-px w-10 transition-all duration-300 group-hover:w-20"
                    style={{
                      backgroundColor: CYAN,
                      boxShadow: `0 0 8px ${CYAN_GLOW_FAINT}`,
                    }}
                  />
                  <div className="flex items-baseline gap-4">
                    <span
                      className="font-sans text-[10px] uppercase tracking-[0.24em]"
                      style={{ color: PINK }}
                    >
                      STEP {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-display text-2xl leading-none tracking-[-0.02em]"
                      style={{
                        color: PINK,
                        textShadow: `0 0 12px ${PINK_GLOW}`,
                      }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-3 text-display text-[22px] leading-tight tracking-[-0.02em] text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {step.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ROLES — cybernetic ID-tag pills */}
      <section
        className="relative overflow-hidden bg-[#070310] py-24 text-cream md:py-32"
        style={{ ['--accent' as string]: PINK }}
      >
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span
              className="font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: PINK }}
            >
              ▸ 03 / Roles we place
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://ROSTER
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            Senior, mid, sometimes junior — when the fit is right.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/65">
            Our network leans senior. We will place at any level, but we will
            never send you a CV we have not technically vetted.
          </p>
          <div className="mt-12 flex flex-wrap gap-2.5 md:mt-16">
            {staffing.roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                className="inline-flex items-center rounded-full border border-cream/15 bg-[#13091F] px-4 py-2 text-sm text-cream/80 transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = PINK
                  e.currentTarget.style.color = '#FFFFFF'
                  e.currentTarget.style.boxShadow = `0 0 14px ${PINK_GLOW}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.color = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                {role}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Need someone good — soon?"
        sub="Tell us the role. We will come back within 48 hours with a shortlist worth interviewing."
        button="Brief us"
      />
    </>
  )
}
