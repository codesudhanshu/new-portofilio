'use client'

import { motion } from 'framer-motion'
import { company } from '@/lib/copy'

const SECTIONS = [
  {
    title: 'What we collect',
    body: `When you submit our contact form, we collect your name, email address, phone number (optional), company name (optional), and the message you provide. We also receive standard server logs — IP address, browser type, page visited, and timestamp — which are automatically generated when you visit our site.`,
  },
  {
    title: 'Why we collect it',
    body: `We use your contact details solely to respond to your enquiry and to follow up on any project discussion you initiate. Server logs are retained for security monitoring and to diagnose technical issues. We do not build marketing profiles, run retargeting campaigns against form submitters, or sell your data to any third party.`,
  },
  {
    title: 'How long we keep it',
    body: `Contact form submissions are retained for up to 24 months from the date of submission, or until you ask us to delete them — whichever comes first. Server logs are automatically purged after 90 days. If an engagement leads to a signed contract, we retain project-related communications for the duration required by applicable law.`,
  },
  {
    title: 'Cookies and analytics',
    body: `We do not currently use third-party analytics scripts or advertising pixels. If this changes, we will update this policy and, where required by law, obtain your consent before any tracking begins.`,
  },
  {
    title: 'Third-party services',
    body: `Our site is hosted on Vercel. Form data is stored in a MongoDB database provisioned on our cloud infrastructure. Neither Vercel nor our database provider is permitted to use your data for purposes beyond hosting our service. We do not use any external CRM, email marketing platform, or lead-enrichment service with your contact data.`,
  },
  {
    title: 'Your rights',
    body: `Under the Information Technology Act, 2000 (India) and applicable data-protection rules, you may request access to, correction of, or deletion of your personal data at any time. To exercise these rights, email us at Softwaretechnologiesbiech@gmail.com with the subject "Data Request". We will respond within 14 working days.`,
  },
  {
    title: 'Security',
    body: `Connections to this site are encrypted via TLS. Form data in transit is encrypted end-to-end. Access to our database is restricted to authorised personnel only and requires authentication. No system is impenetrable, but we follow industry-standard practices to protect the data we hold.`,
  },
  {
    title: 'Changes to this policy',
    body: `We may update this policy as our services evolve. Material changes will be noted at the top of this page with a revised date. Continued use of this site after changes are posted constitutes acceptance of the updated policy.`,
  },
]

export default function Content() {
  return (
    <section className="relative overflow-hidden bg-[#0E1418] py-24 text-cream md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,71,42,0.05) 0%, transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="scanlines pointer-events-none absolute inset-0 opacity-30"
      />

      <div className="container-x relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline gap-4"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-vermilion">
            ▸ Legal · Privacy
          </span>
          <span className="h-px flex-1 bg-cream/15" aria-hidden />
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
            SYS://PRIVACY_POLICY
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
          className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-cream"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-cream/45"
        >
          {company.legal} · Last updated: May 2025
        </motion.p>

        {/* Sections */}
        <div className="mt-16 max-w-2xl space-y-0 md:mt-20">
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="border-t border-cream/12 py-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-vermilion">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-display text-xl leading-tight tracking-[-0.02em] text-cream">
                  {s.title}
                </h2>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-cream/70">
                {s.body}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-cream/12" />
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-2xl rounded-2xl border border-cream/10 bg-[#0F1311] p-7"
        >
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-cream/55">
            Questions about this policy
          </p>
          <p className="mt-3 text-base leading-relaxed text-cream/75">
            Write to{' '}
            <a
              href={`mailto:${company.email}`}
              className="text-cream underline decoration-vermilion underline-offset-4 transition-colors hover:text-vermilion"
            >
              {company.email}
            </a>{' '}
            with the subject "Privacy Query". We will respond within five
            working days.
          </p>
          <p className="mt-3 text-sm text-cream/45">
            {company.legal} · GST: {company.gst}
            <br />
            {company.address.line1}, {company.address.line2}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
