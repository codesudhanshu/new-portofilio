'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { posts } from '@/lib/blog'

const CATEGORY_COLORS: Record<string, string> = {
  'Software Development': 'bg-blue-900/40 text-blue-300',
  'Digital Marketing': 'bg-green-900/40 text-green-300',
  'Staffing Solutions': 'bg-purple-900/40 text-purple-300',
}

export default function BlogContent() {
  const [featured, ...rest] = posts

  return (
    <div className="bg-[#0B0F19]">
      {/* Header */}
      <section className="border-b border-white/8 bg-[#0F1624] py-16 md:py-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="section-label">Insights</span>
            <h1 className="mt-3 text-[clamp(32px,4.5vw,56px)] font-black tracking-[-0.03em] text-[#0F0F0F]">
              From the Biech team.
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/50">
              Practical thinking on software, marketing, and talent — from people who do the work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="border-b border-white/8 py-12 md:py-16">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 rounded-2xl border border-white/8 bg-[#161c2a] p-8 transition-all duration-200 hover:border-vermilion/30 hover:shadow-lg md:grid-cols-2 md:p-10"
            >
              <div>
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLORS[featured.category] ?? 'bg-ink/5 text-white/50'}`}>
                  {featured.category}
                </span>
                <h2 className="mt-4 text-[clamp(22px,2.8vw,32px)] font-black leading-tight tracking-[-0.02em] text-[#0F0F0F] group-hover:text-vermilion transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white/50">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-sm text-white/35">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-vermilion">
                  Read article
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/8 bg-[#161c2a] p-6 transition-all duration-200 hover:border-vermilion/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                >
                  <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLORS[post.category] ?? 'bg-ink/5 text-white/50'}`}>
                    {post.category}
                  </span>
                  <h2 className="mt-4 flex-1 text-lg font-bold leading-snug tracking-tight text-[#0F0F0F] group-hover:text-vermilion transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/45">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4 text-xs text-white/35">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
