'use client'

import { motion } from 'framer-motion'
import { contact, company } from '@/lib/copy'
import { LeadForm } from '@/components/LeadForm'

export default function Content() {
  return (
    <section className="bg-[#0B0F19]">
      {/* Header */}
      <div className="border-b border-white/8 bg-[#0F1624]">
        <div className="container-x py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="section-label">{contact.hero.eyebrow}</span>
            <h1 className="mt-3 text-[clamp(32px,5vw,64px)] font-black leading-[1.04] tracking-[-0.03em] text-white">
              {contact.hero.h1}
            </h1>
            {contact.hero.sub && (
              <p className="mt-4 max-w-xl text-base text-white/50">{contact.hero.sub}</p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container-x py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4"
          >
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 block text-lg font-semibold text-white transition-colors hover:text-vermilion break-all"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">Phone</p>
                <a
                  href={`tel:${company.phone}`}
                  className="mt-2 block text-lg font-semibold text-white transition-colors hover:text-vermilion"
                >
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">WhatsApp</p>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Hi%2C%20I%20found%20Biech%20online%20and%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-[#25D366]"
                >
                  <svg viewBox="0 0 32 32" className="h-5 w-5 shrink-0 fill-[#25D366]" aria-hidden>
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.857 6.5L4 29l7.703-1.82A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.02-1.352l-.36-.213-3.735.882.918-3.622-.234-.376A9.944 9.944 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.5 5c-.277 0-.58.006-.836.263-.278.278-1.164 1.14-1.164 2.78 0 1.641 1.193 3.225 1.359 3.448.167.222 2.313 3.725 5.703 5.078 2.818 1.114 3.39.893 4.003.837.614-.056 1.976-.808 2.254-1.587.279-.78.279-1.447.195-1.587-.083-.14-.306-.222-.64-.39-.334-.167-1.976-.975-2.282-1.086-.306-.11-.528-.167-.75.167-.222.333-.862 1.085-1.057 1.308-.195.222-.39.25-.724.083-.334-.167-1.41-.52-2.686-1.657-1-.894-1.674-1.997-1.87-2.33-.195-.334-.02-.515.147-.68.15-.15.334-.39.5-.585.167-.195.222-.334.334-.557.11-.222.056-.418-.028-.585-.083-.167-.742-1.813-1.028-2.474-.269-.632-.543-.543-.75-.553a14.8 14.8 0 0 0-.64-.01z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">Hours</p>
                <p className="mt-2 text-base text-white/55">Mon–Fri · 10:00–19:00 IST</p>
              </div>
              <div className="border-t border-white/8 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">Studio</p>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {company.legal}<br />
                  {company.address.line1}<br />
                  {company.address.line2}
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-8"
          >
            <div className="rounded-2xl border border-white/8 bg-[#161c2a] p-7 md:p-10">
              <LeadForm tone="light" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
