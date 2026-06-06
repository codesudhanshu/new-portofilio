'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CtaBanner({ heading, sub, button, href = '/contact' }: {
  heading: string; sub?: string; button: string; href?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-25"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(17,99,251,0.2) 0%, transparent 65%)' }} />
      <div className="container-x relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Ready to start?</span>
          <h2 className="mt-6 text-[clamp(32px,5vw,60px)] font-black leading-[1.04] tracking-[-0.04em] text-white text-balance">
            {heading}
          </h2>
          {sub && <p className="mx-auto mt-5 max-w-xl text-lg text-white/50">{sub}</p>}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href={href} className="btn-primary w-full sm:w-auto">
              {button} →
            </Link>
            <Link href="/work" className="btn-outline w-full sm:w-auto">
              See our work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
