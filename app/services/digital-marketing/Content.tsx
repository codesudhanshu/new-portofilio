'use client'

import { motion } from 'framer-motion'
import { marketing } from '@/lib/copy'
import { PageHero } from '@/components/PageHero'
import { CtaBanner } from '@/components/CtaBanner'

export default function Content() {
  return (
    <>
      <PageHero
        eyebrow={marketing.hero.eyebrow}
        h1={marketing.hero.h1}
        sub={marketing.hero.sub}
      />

      {/* OFFERINGS */}
      <section className="border-b border-white/8 bg-[#0B0F19] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">Channels we run</span>
          <h2 className="mt-3 text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-[#0F0F0F]">
            Six disciplines, one accountable team.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {marketing.offerings.map((o, i) => (
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

      {/* RESULTS */}
      <section className="border-b border-white/8 bg-[#0F1624] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">{marketing.results.eyebrow}</span>
          <h2 className="mt-3 text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-[#0F0F0F]">
            We measure what we ship.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {marketing.results.items.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-white/8 bg-[#161c2a] p-8"
              >
                <div className="text-[clamp(48px,6vw,72px)] font-black leading-none tracking-[-0.04em] text-vermilion">
                  {r.metric}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{r.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/35">
            Numbers from real engagements. Specifics under NDA — we will share in a call.
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
