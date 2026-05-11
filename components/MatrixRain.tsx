'use client'

import { useEffect, useRef } from 'react'

// Classic-Matrix digital rain — 2D canvas, falling 0s and 1s.
// Bright phosphor head per column, trail decays via a low-alpha bg overlay
// drawn each frame. Scales to its parent's box; respects reduced-motion.

const FONT_SIZE = 16
const COLUMN_W = 14
const HEAD_COLOUR = '#B6FFC4'
const BG_COLOUR = '#080C0A'
// Lower alpha => trails persist longer => more 0s/1s visible at any moment
const FADE_OVERLAY = 'rgba(8, 12, 10, 0.055)'

type Column = { y: number; speed: number; lastChar: '0' | '1' }

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    let rafId = 0
    let columns: Column[] = []

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const initialSpeed = () =>
      reduceMotion ? 0.35 : 0.55 + Math.random() * 0.85

    const setup = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const cssW = parent.clientWidth
      const cssH = parent.clientHeight
      canvas.width = cssW * dpr
      canvas.height = cssH * dpr
      canvas.style.width = `${cssW}px`
      canvas.style.height = `${cssH}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.font = `${FONT_SIZE}px ui-monospace, "JetBrains Mono", "Courier New", monospace`
      ctx.textBaseline = 'top'

      // Paint bg once — the per-frame fade overlay needs something to fade
      ctx.fillStyle = BG_COLOUR
      ctx.fillRect(0, 0, cssW, cssH)

      const colCount = Math.ceil(cssW / COLUMN_W)
      columns = Array.from({ length: colCount }, () => ({
        y: -Math.random() * cssH,
        speed: initialSpeed(),
        lastChar: Math.random() > 0.5 ? '1' : '0',
      }))
    }

    setup()

    let resizeTimer: number | undefined
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(setup, 120)
    }
    window.addEventListener('resize', onResize)

    const tick = () => {
      const parent = canvas.parentElement
      if (!parent) {
        rafId = requestAnimationFrame(tick)
        return
      }
      const cssW = parent.clientWidth
      const cssH = parent.clientHeight

      // Decay older characters
      ctx.fillStyle = FADE_OVERLAY
      ctx.fillRect(0, 0, cssW, cssH)

      ctx.fillStyle = HEAD_COLOUR
      for (let i = 0; i < columns.length; i++) {
        const col = columns[i]
        // Occasionally flip the digit so the column doesn't look static
        if (Math.random() > 0.85) {
          col.lastChar = Math.random() > 0.5 ? '1' : '0'
        }
        ctx.fillText(col.lastChar, i * COLUMN_W, col.y)

        col.y += col.speed * FONT_SIZE * 0.45
        if (col.y > cssH + 40 && Math.random() > 0.965) {
          col.y = -Math.random() * 220
          col.speed = initialSpeed()
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      window.clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  )
}
