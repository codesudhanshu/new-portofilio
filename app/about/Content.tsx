'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { about, company } from '@/lib/copy'
import { CtaBanner } from '@/components/CtaBanner'
import { CanvasSkeleton } from '@/components/three/CanvasSkeleton'

const MorphBlob = dynamic(() => import('@/components/three/MorphBlob'), {
  ssr: false,
  loading: () => <CanvasSkeleton />,
})

export default function Content() {
  return (
    <>
      {/* HERO — 2001 / deep space, Monolith as backdrop */}
      <section className="relative min-h-[82vh] overflow-hidden bg-black text-cream">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <MorphBlob />
        </motion.div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'radial-gradient(ellipse 72% 80% at 28% 55%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 42%, rgba(0,0,0,0.15) 72%, rgba(0,0,0,0) 92%)',
          }}
        />
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 z-[2] opacity-50"
        />
        <div
          aria-hidden
          className="vignette-dark pointer-events-none absolute inset-0 z-[2]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-32 bg-gradient-to-b from-transparent to-black"
        />

        <div className="container-x relative z-10 grid min-h-[82vh] grid-cols-1 items-center gap-10 py-24 md:grid-cols-12 md:py-0">
          <div className="md:col-span-8 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-baseline gap-4"
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
                ▸ 01 / {about.hero.eyebrow}
              </span>
              <span className="h-px flex-1 bg-cream/15" aria-hidden />
              <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
                SYS://STUDIO
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
              {about.hero.h1}
              <span className="terminal-cursor" aria-hidden />
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[10px] uppercase tracking-[0.24em] text-cream/45"
            >
              <span>STATUS · DRIFTING</span>
              <span className="text-cream/30">/</span>
              <span>NODE · NOIDA-01</span>
              <span className="text-cream/30">/</span>
              <span>CYCLE · {new Date().getFullYear()}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY — deep space, log-entry typography */}
      <section className="overflow-hidden bg-black py-28 text-cream md:py-36">
        <div className="container-x">
          <div className="relative max-w-[640px]">
            {/* glowing margin marker — like a spacecraft log rule */}
            <span
              aria-hidden
              className="absolute -left-6 top-1 h-full w-[2px] bg-vermilion/45 shadow-[0_0_12px_rgba(232,71,42,0.55)]"
            />
            <div className="space-y-7 text-[17px] leading-[1.75] text-cream/72 md:text-[18px]">
              {about.story.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — sequence of monoliths */}
      <section className="relative overflow-hidden bg-[#070A09] py-24 text-cream md:py-32">
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
              ▸ 02 / What we hold to
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://VALUES
            </span>
          </div>
          <div className="mt-14 md:mt-20">
            {about.values.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="border-t border-cream/12 py-12 md:py-16"
              >
                <div className="grid gap-6 md:grid-cols-12 md:items-baseline">
                  <span className="md:col-span-2 font-sans text-xs uppercase tracking-[0.22em] text-cream/45">
                    0{i + 1}
                  </span>
                  <h3 className="md:col-span-10 text-display text-[clamp(32px,4.8vw,64px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
                    {v}
                  </h3>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-cream/12" />
          </div>
        </div>
      </section>

      {/* TEAM — pods in deep space */}
      <section className="relative overflow-hidden bg-[#0A0E0D] py-24 text-cream md:py-32">
        <div className="container-x">
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
              ▸ 03 / The teams
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://CREW
            </span>
          </div>
          <h2 className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
            Four pods. One studio.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/65">
            We organise around capability, not departments. Every project draws
            from the pods it needs — and never from the ones it does not.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-5 md:mt-20 md:grid-cols-4 md:gap-6">
            {about.team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-cream/10 bg-[#13181A]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-vermilion shadow-[0_0_8px_rgba(232,71,42,0.5)] transition-transform duration-700 group-hover:scale-x-100" />
                </div>
                <h3 className="mt-4 text-display text-xl leading-tight tracking-[-0.02em] text-cream">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-cream/55">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDRESS — coordinates */}
      <section className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0"
        />
        <div className="container-x relative">
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
              ▸ 04 / Find us
            </span>
            <span className="h-px flex-1 bg-cream/15" aria-hidden />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
              SYS://COORDINATES
            </span>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <h2 className="text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream">
                We work out of Noida.
              </h2>
            </div>
            <div className="md:col-span-7 md:pl-8">
              <p className="text-display text-2xl leading-relaxed tracking-[-0.02em] text-cream md:text-3xl">
                {company.legal}
                <br />
                {company.address.line1}
                <br />
                {company.address.line2}
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-cream/55">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-2 block text-base text-cream transition-colors hover:text-vermilion"
                  >
                    {company.email}
                  </a>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-cream/55">
                    Hours
                  </p>
                  <p className="mt-2 text-base text-cream/75">
                    Mon–Fri · 10:00–19:00 IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Want to work together?"
        sub="Pitch us a problem. We will come back with a thoughtful answer — even if it is that we are not the right fit."
        button="Get in touch"
      />
    </>
  )
}
