'use client'

import { motion } from 'framer-motion'

export function SectionHeading({
  number,
  eyebrow,
  heading,
  align = 'left',
  className = '',
}: {
  number?: string
  eyebrow?: string
  heading: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      {number && (
        <div
          aria-hidden
          className="text-display select-none text-[clamp(80px,14vw,160px)] leading-none text-ink/[0.07]"
        >
          {number}
        </div>
      )}
      {eyebrow && <p className="eyebrow mt-2">{eyebrow}</p>}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        className="mt-3 text-display text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-tightest text-balance"
      >
        {heading}
      </motion.h2>
    </div>
  )
}
