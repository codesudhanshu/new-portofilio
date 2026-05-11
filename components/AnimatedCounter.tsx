'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useMotionValue } from 'framer-motion'

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionVal = useMotionValue(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionVal, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toString() + suffix
        }
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix, duration, motionVal])

  return <span ref={ref}>{`0${suffix}`}</span>
}
