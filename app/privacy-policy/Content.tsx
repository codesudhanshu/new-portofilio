'use client'

import { motion } from 'framer-motion'
import { company } from '@/lib/copy'

const SECTIONS = [
  { title: 'What we collect', body: `When you submit our contact form, we collect your name, email address, phone number (optional), company name (optional), and the message you provide. We also receive standard server logs — IP address, browser type, page visited, and timestamp — which are automatically generated when you visit our site.` },
  { title: 'Why we collect it', body: `We use your contact details solely to respond to your enquiry and to follow up on any project discussion you initiate. Server logs are retained for security monitoring and to diagnose technical issues. We do not build marketing profiles, run retargeting campaigns against form submitters, or sell your data to any third party.` },
  { title: 'How long we keep it', body: `Contact form submissions are retained for up to 24 months from the date of submission, or until you ask us to delete them — whichever comes first. Server logs are automatically purged after 90 days. If an engagement leads to a signed contract, we retain project-related communications for the duration required by applicable law.` },
  { title: 'Cookies and analytics', body: `We do not currently use third-party analytics scripts or advertising pixels. If this changes, we will update this policy and, where required by law, obtain your consent before any tracking begins.` },
  { title: 'Third-party services', body: `Our site is hosted on Vercel. Form data is stored in a MongoDB database provisioned on our cloud infrastructure. Neither Vercel nor our database provider is permitted to use your data for purposes beyond hosting our service.` },
  { title: 'Your rights', body: `Under the Information Technology Act, 2000 (India) and applicable data-protection rules, you may request access to, correction of, or deletion of your personal data at any time. To exercise these rights, email us at ${company.email} with the subject "Data Request". We will respond within 14 working days.` },
  { title: 'Security', body: `Connections to this site are encrypted via TLS. Form data in transit is encrypted end-to-end. Access to our database is restricted to authorised personnel only and requires authentication.` },
  { title: 'Changes to this policy', body: `We may update this policy as our services evolve. Material changes will be noted at the top of this page with a revised date. Continued use of this site after changes are posted constitutes acceptance of the updated policy.` },
]

export default function Content() {
  return (
    <div className="bg-[#0B0F19]">
      <section className="border-b border-white/8 bg-[#0F1624] py-16 md:py-20">
        <div className="container-x">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span className="section-label">Legal · Privacy</span>
            <h1 className="mt-3 text-[clamp(32px,4.5vw,56px)] font-black tracking-[-0.03em] text-white">Privacy Policy</h1>
            <p className="mt-3 text-sm text-white/35">{company.legal} · Last updated: May 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <div className="space-y-px">
            {SECTIONS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="border-t border-white/8 py-8"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-bold text-vermilion">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="text-xl font-bold tracking-tight text-white">{s.title}</h2>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-white/50">{s.body}</p>
              </motion.div>
            ))}
            <div className="border-t border-white/8" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-12 rounded-2xl border border-white/8 bg-[#161c2a] p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">Questions about this policy</p>
            <p className="mt-3 text-base text-white/55">
              Write to{' '}
              <a href={`mailto:${company.email}`} className="font-semibold text-white underline decoration-vermilion underline-offset-4 transition-colors hover:text-vermilion">
                {company.email}
              </a>{' '}
              with the subject "Privacy Query". We will respond within five working days.
            </p>
            <p className="mt-3 text-sm text-white/35">
              {company.legal} · GST: {company.gst}<br />
              {company.address.line1}, {company.address.line2}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
