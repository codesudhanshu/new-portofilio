'use client'

import { motion } from 'framer-motion'
import { software } from '@/lib/copy'
import { PageHero } from '@/components/PageHero'
import { CtaBanner } from '@/components/CtaBanner'

export default function Content() {
  return (
    <>
      <PageHero
        eyebrow={software.hero.eyebrow}
        h1={software.hero.h1}
        sub={software.hero.sub}
      />

      {/* OFFERINGS */}
      <section className="border-b border-white/8 bg-[#0B0F19] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">What we build</span>
          <h2 className="mt-3 text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-[#0F0F0F]">
            From small internal tools to platforms that scale.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {software.offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-white/8 bg-[#161c2a] p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              >
                <div className="h-1 w-8 rounded-full bg-vermilion" />
                <h3 className="mt-5 text-lg font-bold tracking-tight text-[#0F0F0F]">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{o.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-white/8 bg-[#0F1624] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">How we ship</span>
          <h2 className="mt-3 text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-[#0F0F0F]">
            A predictable engagement, end to end.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {software.process.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-xl border border-white/8 bg-[#161c2a] p-5"
              >
                <span className="text-3xl font-black tracking-tight text-vermilion">{step.n}</span>
                <h3 className="mt-3 font-bold text-[#0F0F0F]">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-b border-white/8 bg-[#0B0F19] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">Tech stack</span>
          <h2 className="mt-3 text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-[#0F0F0F]">
            Mature stack. Few surprises.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/50">
            We pick boring tools when the job is critical. We use the new ones when the new ones are clearly better.
          </p>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {software.stack.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="inline-flex items-center rounded-full border border-white/8 bg-[#0F1624] px-4 py-1.5 text-sm font-medium text-white/55 transition-colors hover:border-vermilion/40 hover:text-[#0F0F0F]"
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
