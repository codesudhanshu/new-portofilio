'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Arrival — heptapod-inspired ink logograms. Three stylised circular forms
// with internal flourishes that draw themselves in slowly (stroke-dashoffset
// from 1 → 0), hold for a beat, then fade out and the next one begins.
// Pure SVG; the "ink" is warm cream against a misty teal-grey backdrop.

const INK = '#E8DDC9'

// pathLength="1" lets us treat every path's length as 1 regardless of d.
// Each path drawing animation runs from delay … delay + duration.
type LogoPath = { d: string; delay: number; duration: number; width?: number }

const LOGOGRAMS: { paths: LogoPath[] }[] = [
  {
    paths: [
      // Outer ring (full)
      {
        d: 'M 0 -150 A 150 150 0 1 1 -0.01 -150',
        delay: 0,
        duration: 2.6,
      },
      // Inner concentric arc
      {
        d: 'M -90 0 A 90 90 0 1 1 90 0',
        delay: 0.4,
        duration: 1.6,
      },
      // Asymmetric flourish — a small loop on the upper-right
      {
        d: 'M 70 -110 Q 110 -120 120 -90 Q 100 -70 70 -85',
        delay: 1.0,
        duration: 0.9,
        width: 2.4,
      },
      // Lower-left tick mark
      {
        d: 'M -100 90 Q -130 95 -140 70',
        delay: 1.4,
        duration: 0.7,
        width: 2.4,
      },
      // Tiny dot-circle on the ring
      {
        d: 'M 130 -40 A 8 8 0 1 1 130.01 -40',
        delay: 1.7,
        duration: 0.5,
      },
    ],
  },
  {
    paths: [
      // Outer ring (full) — slightly inset
      {
        d: 'M 0 -148 A 148 148 0 1 1 -0.01 -148',
        delay: 0,
        duration: 2.6,
      },
      // Crescent inside
      {
        d: 'M -75 -45 A 90 90 0 0 1 75 -45',
        delay: 0.5,
        duration: 1.4,
      },
      // S-curve through the crescent
      {
        d: 'M -55 60 Q -10 30 30 60 Q 60 90 90 70',
        delay: 1.2,
        duration: 1.3,
        width: 2.4,
      },
      // Outer tick — top left
      {
        d: 'M -100 -110 Q -130 -120 -135 -95',
        delay: 1.6,
        duration: 0.7,
        width: 2.4,
      },
      // Outer ring bump — small attached circle bottom-right
      {
        d: 'M 110 100 A 14 14 0 1 1 110.01 100',
        delay: 1.9,
        duration: 0.6,
      },
    ],
  },
  {
    paths: [
      // Outer ring
      {
        d: 'M 0 -150 A 150 150 0 1 1 -0.01 -150',
        delay: 0,
        duration: 2.6,
      },
      // Inner spiral-like arc
      {
        d: 'M -60 -60 Q -20 -90 30 -50 Q 60 -10 30 30 Q -10 50 -50 20',
        delay: 0.5,
        duration: 1.8,
      },
      // Three radial dashes — N, NE, NW
      {
        d: 'M 0 -130 L 0 -110',
        delay: 1.2,
        duration: 0.4,
        width: 2.4,
      },
      {
        d: 'M 95 -95 L 80 -80',
        delay: 1.4,
        duration: 0.4,
        width: 2.4,
      },
      {
        d: 'M -95 -95 L -80 -80',
        delay: 1.6,
        duration: 0.4,
        width: 2.4,
      },
      // Bottom flourish
      {
        d: 'M -50 100 Q 0 130 50 100',
        delay: 1.9,
        duration: 0.8,
        width: 2.4,
      },
    ],
  },
]

const HOLD_MS = 2400 // beat after the logogram completes
const FADE_MS = 1500

export function LogogramScene() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'forming' | 'hold' | 'fading'>('forming')

  useEffect(() => {
    const formMs =
      Math.max(
        ...LOGOGRAMS[index].paths.map((p) => (p.delay + p.duration) * 1000)
      ) + 200

    setPhase('forming')
    const t1 = setTimeout(() => setPhase('hold'), formMs)
    const t2 = setTimeout(() => setPhase('fading'), formMs + HOLD_MS)
    const t3 = setTimeout(
      () => setIndex((i) => (i + 1) % LOGOGRAMS.length),
      formMs + HOLD_MS + FADE_MS
    )
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [index])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft misty backdrop — local radial bleed */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 70% 50%, rgba(232,221,201,0.06) 0%, transparent 60%)',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.svg
          key={index}
          viewBox="-200 -200 400 400"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 m-auto h-full w-full max-h-[90vh]"
          preserveAspectRatio="xMidYMid meet"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'fading' ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: phase === 'fading' ? FADE_MS / 1000 : 0.6,
            ease: 'easeInOut',
          }}
          aria-hidden
        >
          {/* Subtle outer halo behind the form */}
          <circle
            cx="0"
            cy="0"
            r="160"
            fill="none"
            stroke={INK}
            strokeWidth="0.4"
            opacity="0.12"
          />

          <g
            fill="none"
            stroke={INK}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(232,221,201,0.35))',
            }}
          >
            {LOGOGRAMS[index].paths.map((p, i) => (
              <motion.path
                key={i}
                d={p.d}
                pathLength={1}
                strokeDasharray={1}
                strokeWidth={p.width ?? 2}
                initial={{ strokeDashoffset: 1, opacity: 0 }}
                animate={{
                  strokeDashoffset: 0,
                  opacity: 1,
                }}
                transition={{
                  strokeDashoffset: {
                    delay: p.delay,
                    duration: p.duration,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    delay: p.delay,
                    duration: 0.3,
                  },
                }}
              />
            ))}
          </g>
        </motion.svg>
      </AnimatePresence>
    </div>
  )
}
