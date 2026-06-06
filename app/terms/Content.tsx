'use client'

import { motion } from 'framer-motion'
import { company } from '@/lib/copy'

const SECTIONS = [
  { title: 'Acceptance of terms', body: `By accessing or using the website at biech.in ("Site"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Site. Biech Software Technologies Pvt. Ltd. ("Biech", "we", "us") reserves the right to update these terms at any time. Continued use after changes are posted constitutes acceptance.` },
  { title: 'Services', body: `Biech provides software development, digital marketing, and staffing solutions to businesses. Specific terms governing any engagement — scope, deliverables, payment, ownership, and warranties — are set out in a separate Statement of Work or Services Agreement. These Terms cover only your use of the Site and general enquiries made through it.` },
  { title: 'Intellectual property', body: `All content on this Site — including text, graphics, logos, and code — is the property of Biech Software Technologies Pvt. Ltd. and is protected under applicable Indian copyright and intellectual property law. You may not reproduce, distribute, or use any Site content for commercial purposes without our prior written consent.` },
  { title: 'Use of the Site', body: `You agree not to: (a) use the Site for any unlawful purpose; (b) attempt to gain unauthorised access to any part of the Site or its infrastructure; (c) transmit any harmful, offensive, or disruptive content through the contact form; (d) scrape or harvest data from the Site using automated tools.` },
  { title: 'Contact form and enquiries', body: `Submitting a message through our contact form does not create a contract or client relationship. It initiates a conversation. No engagement, obligation, or confidentiality arises on either side until a written agreement is signed.` },
  { title: 'Disclaimers', body: `The Site is provided "as is" without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses. Case study metrics and testimonials reflect specific client outcomes and are not guarantees of future results.` },
  { title: 'Limitation of liability', body: `To the fullest extent permitted by law, Biech Software Technologies Pvt. Ltd. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use this Site. Our total liability for any claim arising from Site use shall not exceed INR 1,000.` },
  { title: 'Third-party links', body: `The Site may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.` },
  { title: 'Governing law and disputes', body: `These Terms are governed by and construed in accordance with the laws of India. Any dispute arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Gautam Buddha Nagar (Greater Noida), Uttar Pradesh, India.` },
]

export default function Content() {
  return (
    <div className="bg-[#0B0F19]">
      <section className="border-b border-white/8 bg-[#0F1624] py-16 md:py-20">
        <div className="container-x">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span className="section-label">Legal · Terms</span>
            <h1 className="mt-3 text-[clamp(32px,4.5vw,56px)] font-black tracking-[-0.03em] text-[#0F0F0F]">Terms &amp; Conditions</h1>
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
                  <h2 className="text-xl font-bold tracking-tight text-[#0F0F0F]">{s.title}</h2>
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
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">Questions about these terms</p>
            <p className="mt-3 text-base text-white/55">
              Write to{' '}
              <a href={`mailto:${company.email}`} className="font-semibold text-[#0F0F0F] underline decoration-vermilion underline-offset-4 transition-colors hover:text-vermilion">
                {company.email}
              </a>{' '}
              with the subject "Legal Query". We will respond within five working days.
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
