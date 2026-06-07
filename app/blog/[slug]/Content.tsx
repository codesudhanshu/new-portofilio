'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { BlogPost } from '@/lib/blog'
import { posts } from '@/lib/blog'

const CATEGORY_COLORS: Record<string, string> = {
  'Software Development': 'bg-blue-900/40 text-blue-300',
  'Digital Marketing': 'bg-green-900/40 text-green-300',
  'Staffing Solutions': 'bg-purple-900/40 text-purple-300',
}

export default function PostContent({ post }: { post: BlogPost }) {
  const related = posts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 2)

  return (
    <div className="bg-[#0B0F19]">
      {/* Hero */}
      <section className="border-b border-white/8 bg-[#0F1624] py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/45 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All articles
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLORS[post.category] ?? 'bg-ink/5 text-white/50'}`}>
                {post.category}
              </span>
              <span className="text-sm text-white/35">{post.date}</span>
              <span className="text-white/25">·</span>
              <span className="text-sm text-white/35">{post.readTime}</span>
            </div>

            <h1 className="mt-5 text-[clamp(28px,4vw,48px)] font-black leading-[1.06] tracking-[-0.03em] text-white text-balance">
              {post.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-white/50">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-vermilion text-sm font-bold text-white">
                B
              </div>
              <span className="text-sm font-medium text-white">{post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 md:py-16">
        <div className="container-x max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose-custom"
          >
            {post.sections.map((s, i) => (
              <div key={i} className="mb-8">
                {s.heading && (
                  <h2 className="mb-3 text-xl font-bold tracking-tight text-white">
                    {s.heading}
                  </h2>
                )}
                <p className="text-[17px] leading-[1.75] text-white/55">
                  {s.body}
                </p>
              </div>
            ))}
          </motion.article>

          {/* CTA inside post */}
          <div className="mt-14 rounded-2xl border border-white/8 bg-[#161c2a] p-8">
            <span className="section-label">Work with us</span>
            <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-base text-white/50">
              We are a software, marketing, and staffing studio based in Greater Noida. We would love to hear what you are building.
            </p>
            <Link href="/contact" className="btn-primary mt-5 inline-flex">
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-white/8 py-12 md:py-16">
          <div className="container-x">
            <h2 className="text-lg font-bold text-white">More from {post.category}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-xl border border-white/8 p-5 transition-all duration-200 hover:border-vermilion/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                >
                  <h3 className="font-bold text-white group-hover:text-vermilion transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-white/45">{p.excerpt}</p>
                  <p className="mt-3 text-xs text-white/30">{p.date} · {p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
