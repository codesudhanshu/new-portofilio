'use client'

import { motion } from 'framer-motion'
import { PageHero } from '@/components/PageHero'
import { CtaBanner } from '@/components/CtaBanner'

const SERVICE_BADGE: Record<string, string> = {
  'Software Development': 'bg-blue-900/40 text-blue-300',
  'Digital Marketing': 'bg-green-900/40 text-green-300',
  'Staffing Solutions': 'bg-purple-900/40 text-purple-300',
}

const PROJECTS = [
  {
    id: '001',
    service: 'Software Development',
    client: 'EdTech startup · Delhi',
    name: 'Learning Platform',
    detail: 'Live-class streaming, cohort management, and a student-facing progress dashboard — designed and shipped in 12 weeks.',
    result: '40K+ learners onboarded in month one.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: '002',
    service: 'Digital Marketing',
    client: 'D2C brand · Noida',
    name: 'Performance Growth Engine',
    detail: 'Full-funnel rebuild across Google, Meta, and email. Attribution re-architected from pixel to server-side events.',
    result: '4.2× blended ROAS over 90-day engagement.',
    tags: ['Google Ads', 'Meta', 'GA4', 'Email'],
  },
  {
    id: '003',
    service: 'Software Development',
    client: 'Investment firm · Mumbai',
    name: 'Portfolio Analytics Suite',
    detail: 'Internal tool replacing four spreadsheet workflows. Real-time data from five custodians, single unified dashboard.',
    result: 'Adopted as primary tool within 3 weeks of launch.',
    tags: ['React', 'Python', 'FastAPI', 'Redis'],
  },
  {
    id: '004',
    service: 'Staffing Solutions',
    client: 'Fintech scale-up · London',
    name: 'Engineering Expansion',
    detail: 'A 12-person engineering org needed to double. We shortlisted, vetted, and placed eight senior engineers in under six weeks.',
    result: '8 engineers placed. All still active at the company.',
    tags: ['Engineering', 'React', 'Python', 'DevOps'],
  },
  {
    id: '005',
    service: 'Software Development',
    client: 'B2B SaaS · Gurugram',
    name: 'Multi-tenant Platform',
    detail: 'Ground-up build — workspace isolation, billing, RBAC, and a public API. Spec to production in seven months.',
    result: 'Series A raised within 14 months of MVP.',
    tags: ['TypeScript', 'Go', 'Kubernetes', 'Stripe'],
  },
  {
    id: '006',
    service: 'Digital Marketing',
    client: 'Healthcare startup · Bangalore',
    name: 'Organic & Lifecycle',
    detail: 'Technical SEO overhaul, a full content programme, and an email lifecycle stack built from scratch over 12 months.',
    result: '+118% organic sessions · −38% cost-per-lead.',
    tags: ['SEO', 'Content', 'Email', 'Analytics'],
  },
]

const NDA_NOTES = [
  {
    n: '01',
    title: 'Clients, not logos',
    body: 'We work with real companies who trust us with real problems. We do not use their names as marketing without permission.',
  },
  {
    n: '02',
    title: 'References on request',
    body: 'If you need to speak to a past client before engaging, ask. We have arranged direct introductions dozens of times.',
  },
  {
    n: '03',
    title: 'Specs available in calls',
    body: 'Technical depth on any project — stack choices, scale, challenges — is available in a discovery call under NDA.',
  },
]

export default function Content() {
  return (
    <>
      <PageHero
        eyebrow="Selected Projects"
        h1="Work worth showing."
        sub="A selection across software, marketing, and staffing. Every engagement is under NDA — we share what we can."
      />

      {/* PROJECTS GRID */}
      <section className="border-b border-white/8 bg-[#0B0F19] py-20 md:py-28">
        <div className="container-x">
          <span className="section-label">What we have shipped</span>
          <h2 className="mt-3 text-[clamp(26px,3.5vw,40px)] font-black tracking-[-0.03em] text-white">
            50+ projects. Six below.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white/50">
            Client names withheld by agreement. If you need references, we will arrange direct introductions.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex flex-col rounded-2xl border border-white/8 bg-[#161c2a] p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white/25">CASE_{p.id}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${SERVICE_BADGE[p.service] ?? 'bg-ink/5 text-white/45'}`}>
                    {p.service}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-white">{p.name}</h3>
                <p className="mt-0.5 text-xs text-white/35">{p.client}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">{p.detail}</p>
                <div className="mt-5 rounded-xl border-l-2 border-vermilion bg-[#0B0F19] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">Result</p>
                  <p className="mt-1 text-sm font-semibold text-white">{p.result}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/8 bg-[#0B0F19] px-2.5 py-0.5 text-[11px] text-white/45">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NDA NOTE */}
      <section className="border-b border-white/8 bg-[#0F1624] py-20 md:py-24">
        <div className="container-x">
          <span className="section-label">A note on confidentiality</span>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {NDA_NOTES.map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-xl border border-white/8 bg-[#161c2a] p-6"
              >
                <span className="text-xs font-bold text-vermilion">{item.n}</span>
                <h3 className="mt-2 font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Have something worth building?"
        sub="Tell us the rough shape of it. We will reply with thoughts, a timeline, and a number."
        button="Start a Project"
      />
    </>
  )
}
