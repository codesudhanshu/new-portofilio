'use client'

import { motion } from 'framer-motion'
import { company } from '@/lib/copy'

const SECTIONS = [
  {
    title: 'Acceptance of terms',
    body: `By accessing or using the website at biech.in ("Site"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Site. Biech Software Technologies Pvt. Ltd. ("Biech", "we", "us") reserves the right to update these terms at any time. Continued use after changes are posted constitutes acceptance.`,
  },
  {
    title: 'Services',
    body: `Biech provides software development, digital marketing, and staffing solutions to businesses. Specific terms governing any engagement — scope, deliverables, payment, ownership, and warranties — are set out in a separate Statement of Work or Services Agreement executed between Biech and the client. These Terms cover only your use of the Site and general enquiries made through it.`,
  },
  {
    title: 'Intellectual property',
    body: `All content on this Site — including text, graphics, logos, and code — is the property of Biech Software Technologies Pvt. Ltd. and is protected under applicable Indian copyright and intellectual property law. You may not reproduce, distribute, or use any Site content for commercial purposes without our prior written consent. Fair use for reference or review is permitted with proper attribution.`,
  },
  {
    title: 'Use of the Site',
    body: `You agree not to: (a) use the Site for any unlawful purpose; (b) attempt to gain unauthorised access to any part of the Site or its infrastructure; (c) transmit any harmful, offensive, or disruptive content through the contact form; (d) scrape or harvest data from the Site using automated tools. We reserve the right to block access without notice for violations of these terms.`,
  },
  {
    title: 'Contact form and enquiries',
    body: `Submitting a message through our contact form does not create a contract or client relationship. It initiates a conversation. No engagement, obligation, or confidentiality arises on either side until a written agreement is signed. We will use your contact details only to respond to your enquiry, as described in our Privacy Policy.`,
  },
  {
    title: 'Disclaimers',
    body: `The Site is provided "as is" without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses. Case study metrics and testimonials on the Site reflect specific client outcomes and are not guarantees of future results. We make no representation that any service described is available in your jurisdiction.`,
  },
  {
    title: 'Limitation of liability',
    body: `To the fullest extent permitted by law, Biech Software Technologies Pvt. Ltd. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use this Site. Our total liability for any claim arising from Site use shall not exceed INR 1,000 (one thousand rupees). This limitation does not apply to liabilities that cannot be excluded under applicable law.`,
  },
  {
    title: 'Third-party links',
    body: `The Site may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. Linking does not imply endorsement.`,
  },
  {
    title: 'Governing law and disputes',
    body: `These Terms are governed by and construed in accordance with the laws of India. Any dispute arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Gautam Buddha Nagar (Greater Noida), Uttar Pradesh, India. We encourage you to contact us directly at Softwaretechnologiesbiech@gmail.com before initiating any formal proceeding.`,
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
            ▸ Legal · Terms
          </span>
          <span className="h-px flex-1 bg-cream/15" aria-hidden />
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-cream/55">
            SYS://TERMS_CONDITIONS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
          className="mt-6 text-display text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-cream"
        >
          Terms &amp; Conditions
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
        <div className="mt-16 max-w-2xl md:mt-20">
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
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

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-2xl rounded-2xl border border-cream/10 bg-[#0F1311] p-7"
        >
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-cream/55">
            Questions about these terms
          </p>
          <p className="mt-3 text-base leading-relaxed text-cream/75">
            Write to{' '}
            <a
              href={`mailto:${company.email}`}
              className="text-cream underline decoration-vermilion underline-offset-4 transition-colors hover:text-vermilion"
            >
              {company.email}
            </a>{' '}
            with the subject "Legal Query". We will respond within five working
            days.
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
