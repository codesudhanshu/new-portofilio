'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { about, company } from '@/lib/copy'
import { CtaBanner } from '@/components/CtaBanner'

export default function Content() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-white/8 bg-[#0F1624]">
        <div className="container-x py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="section-label">{about.hero.eyebrow}</span>
            <h1 className="mt-3 max-w-3xl text-[clamp(32px,5vw,64px)] font-black leading-[1.04] tracking-[-0.03em] text-[#0F0F0F] text-balance">
              {about.hero.h1}
            </h1>
            <div className="mt-6 flex flex-wrap gap-6">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[#0F0F0F]">2015</span>
                <span className="text-sm text-white/40">Founded</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[#0F0F0F]">50+</span>
                <span className="text-sm text-white/40">Projects shipped</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[#0F0F0F]">3</span>
                <span className="text-sm text-white/40">Service lines</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-b border-white/8 bg-[#0B0F19] py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="section-label">Our story</span>
            <div className="mt-8 space-y-6">
              {about.story.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-[17px] leading-[1.75] text-white/55"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-white/8 bg-[#0F1624] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">What we hold to</span>
          <div className="mt-10 space-y-px">
            {about.values.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-white/8 py-8"
              >
                <div className="grid md:grid-cols-12 md:items-baseline gap-4">
                  <span className="text-xs font-bold text-white/25 md:col-span-2">0{i + 1}</span>
                  <h3 className="md:col-span-10 text-[clamp(24px,3.5vw,40px)] font-black tracking-[-0.03em] text-[#0F0F0F] text-balance">
                    {v}
                  </h3>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/8" />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-white/8 bg-[#0B0F19] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">The teams</span>
          <h2 className="mt-3 text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-[#0F0F0F]">
            Four pods. One studio.
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/50">
            We organise around capability, not departments. Every project draws from the pods it needs.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {about.team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/8 bg-[#0F1624]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <h3 className="mt-3 font-bold text-[#0F0F0F]">{member.name}</h3>
                <p className="mt-0.5 text-sm text-white/45">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="border-b border-white/8 bg-[#0F1624] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">Find us</span>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-[#0F0F0F]">
                We work out of Greater Noida.
              </h2>
              <p className="mt-5 text-lg font-semibold leading-relaxed text-[#0F0F0F]">
                {company.legal}
              </p>
              <p className="mt-1 text-base text-white/50 leading-relaxed">
                {company.address.line1}<br />
                {company.address.line2}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">Email</p>
                <a href={`mailto:${company.email}`} className="mt-1 block text-lg font-semibold text-[#0F0F0F] transition-colors hover:text-vermilion">
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">Phone</p>
                <a href={`tel:${company.phone}`} className="mt-1 block text-lg font-semibold text-[#0F0F0F] transition-colors hover:text-vermilion">
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">Hours</p>
                <p className="mt-1 text-base text-white/55">Mon–Fri · 10:00–19:00 IST</p>
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
