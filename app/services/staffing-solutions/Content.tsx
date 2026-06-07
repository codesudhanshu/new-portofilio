'use client'

import { motion } from 'framer-motion'
import { staffing } from '@/lib/copy'
import { PageHero } from '@/components/PageHero'
import { CtaBanner } from '@/components/CtaBanner'

export default function Content() {
  return (
    <>
      <PageHero
        eyebrow={staffing.hero.eyebrow}
        h1={staffing.hero.h1}
        sub={staffing.hero.sub}
      />

      {/* HOW IT WORKS */}
      <section className="border-b border-white/8 bg-[#0B0F19] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">How it works</span>
          <h2 className="mt-3 text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-white">
            Three steps, no recruiter theatre.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {staffing.steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-white/8 bg-[#161c2a] p-7"
              >
                <span className="text-4xl font-black tracking-tight text-vermilion">{step.n}</span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="border-b border-white/8 bg-[#0F1624] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">Roles we place</span>
          <h2 className="mt-3 text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-white">
            Senior, mid, sometimes junior — when the fit is right.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/50">
            Our network leans senior. We will place at any level, but we will never send a CV we have not technically vetted.
          </p>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {staffing.roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="inline-flex items-center rounded-full border border-white/8 bg-[#0B0F19] px-4 py-1.5 text-sm font-medium text-white/55 transition-colors hover:border-vermilion/40 hover:text-white"
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
