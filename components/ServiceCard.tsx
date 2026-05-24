'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function ServiceCard({
  icon: Icon,
  name,
  blurb,
  href,
  index,
  tone = 'light',
}: {
  icon: React.ComponentType<{ className?: string }>
  name: string
  blurb: string
  href: string
  index: number
  tone?: 'light' | 'dark'
}) {
  const isDark = tone === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      <Link
        href={href}
        className={
          isDark
            ? 'group relative flex h-full min-h-[300px] md:min-h-[420px] flex-col rounded-3xl border border-cream/12 bg-[#0F1311] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FFC4]/55 hover:bg-[#131814] md:p-10'
            : 'group relative flex h-full min-h-[300px] md:min-h-[420px] flex-col rounded-3xl border border-ink/15 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-vermilion hover:bg-muted/55 md:p-10'
        }
      >
        {/* Card index — terminal style, only in dark variant */}
        {isDark && (
          <span className="absolute right-6 top-6 font-sans text-[10px] uppercase tracking-[0.22em] text-[#B6FFC4]/70">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}

        <Icon
          className={
            isDark
              ? 'h-12 w-12 text-[#B6FFC4] transition-colors duration-300 group-hover:text-vermilion'
              : 'h-12 w-12 text-ink transition-colors duration-300 group-hover:text-vermilion'
          }
        />
        <h3
          className={
            isDark
              ? 'mt-12 text-display text-[clamp(28px,3.4vw,40px)] leading-[1.05] tracking-[-0.02em] text-balance text-cream'
              : 'mt-12 text-display text-[clamp(28px,3.4vw,40px)] leading-[1.05] tracking-tightest text-balance'
          }
        >
          {name}
        </h3>
        <p
          className={
            isDark
              ? 'mt-4 text-sm leading-relaxed text-cream/65 md:text-[15px]'
              : 'mt-4 text-sm leading-relaxed text-ink/70 md:text-[15px]'
          }
        >
          {blurb}
        </p>
        <div
          className={
            isDark
              ? 'mt-auto flex items-center gap-2 pt-12 text-sm font-medium text-cream'
              : 'mt-auto flex items-center gap-2 pt-12 text-sm font-medium'
          }
        >
          <span className="relative">
            Explore
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-vermilion transition-transform duration-500 group-hover:scale-x-100" />
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
