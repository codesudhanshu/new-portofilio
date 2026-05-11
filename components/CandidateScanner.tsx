'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PINK = '#FF3FA0'
const CYAN = '#00E5E5'
const GREEN = '#7CFFB6'
const RED = '#FF4755'
const AMBER = '#FFB870'

const STAGES = [
  { key: 'SCREENING_CV', label: 'CV / SCREENING' },
  { key: 'SKILLS_PROBE', label: 'TECH SKILLS' },
  { key: 'CULTURE_FIT', label: 'CULTURE FIT' },
  { key: 'REFERENCES', label: 'REFERENCES' },
  { key: 'INTERVIEW_SIM', label: 'INTERVIEW' },
] as const

type StageKey = (typeof STAGES)[number]['key']

type StageResult = { pass: boolean; result: string }

type Candidate = {
  id: string
  role: string
  experience: number
  match: number
  selected: boolean
  stages: Record<StageKey, StageResult>
}

const CANDIDATES: Candidate[] = [
  {
    id: '0xA47F-9E12',
    role: 'Senior Backend Engineer',
    experience: 8,
    match: 91,
    selected: true,
    stages: {
      SCREENING_CV: { pass: true, result: '8Y VERIFIED' },
      SKILLS_PROBE: { pass: true, result: '94 / 100' },
      CULTURE_FIT: { pass: true, result: 'ALIGNED' },
      REFERENCES: { pass: true, result: '3 / 3' },
      INTERVIEW_SIM: { pass: true, result: 'STRONG' },
    },
  },
  {
    id: '0xC823-1D55',
    role: 'Mid Frontend Engineer',
    experience: 4,
    match: 58,
    selected: false,
    stages: {
      SCREENING_CV: { pass: true, result: '4Y VERIFIED' },
      SKILLS_PROBE: { pass: false, result: '62 / 100' },
      CULTURE_FIT: { pass: true, result: 'ALIGNED' },
      REFERENCES: { pass: true, result: 'VERIFIED' },
      INTERVIEW_SIM: { pass: false, result: 'BELOW BAR' },
    },
  },
  {
    id: '0xE49B-7A30',
    role: 'DevOps Engineer',
    experience: 10,
    match: 88,
    selected: true,
    stages: {
      SCREENING_CV: { pass: true, result: '10Y VERIFIED' },
      SKILLS_PROBE: { pass: true, result: '89 / 100' },
      CULTURE_FIT: { pass: true, result: 'STRONG' },
      REFERENCES: { pass: true, result: 'VERIFIED' },
      INTERVIEW_SIM: { pass: true, result: 'PASS' },
    },
  },
  {
    id: '0x3F12-B891',
    role: 'Product Designer',
    experience: 6,
    match: 64,
    selected: false,
    stages: {
      SCREENING_CV: { pass: true, result: '6Y VERIFIED' },
      SKILLS_PROBE: { pass: true, result: '78 / 100' },
      CULTURE_FIT: { pass: false, result: 'MIS-MATCH' },
      REFERENCES: { pass: true, result: 'VERIFIED' },
      INTERVIEW_SIM: { pass: true, result: 'PASS' },
    },
  },
  {
    id: '0x812A-D406',
    role: 'Staff ML Engineer',
    experience: 12,
    match: 95,
    selected: true,
    stages: {
      SCREENING_CV: { pass: true, result: '12Y VERIFIED' },
      SKILLS_PROBE: { pass: true, result: '98 / 100' },
      CULTURE_FIT: { pass: true, result: 'STRONG' },
      REFERENCES: { pass: true, result: '5 / 5' },
      INTERVIEW_SIM: { pass: true, result: 'STRONG' },
    },
  },
]

const STAGE_MS = 760
const SCAN_MS = STAGE_MS * STAGES.length // 3.8s
const VERDICT_MS = 1900

type Phase = 'scanning' | 'verdict'

export function CandidateScanner() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('scanning')
  // Number of stages COMPLETED so far for the current candidate (0..STAGES.length)
  const [stageStep, setStageStep] = useState(0)

  useEffect(() => {
    setPhase('scanning')
    setStageStep(0)

    const stageTimers: ReturnType<typeof setTimeout>[] = []
    for (let s = 1; s <= STAGES.length; s++) {
      stageTimers.push(setTimeout(() => setStageStep(s), s * STAGE_MS))
    }
    const toVerdict = setTimeout(() => setPhase('verdict'), SCAN_MS)
    const toNext = setTimeout(
      () => setIndex((i) => (i + 1) % CANDIDATES.length),
      SCAN_MS + VERDICT_MS
    )
    return () => {
      stageTimers.forEach(clearTimeout)
      clearTimeout(toVerdict)
      clearTimeout(toNext)
    }
  }, [index])

  const c = CANDIDATES[index]
  const verdictColour = c.selected ? GREEN : RED
  const verdictLabel = c.selected ? 'SELECTED' : 'REJECTED'
  const verdictGlyph = c.selected ? '✓' : '✕'

  const currentStageKey = STAGES[Math.min(stageStep, STAGES.length - 1)].key
  const currentStageLabel = STAGES[Math.min(stageStep, STAGES.length - 1)].label

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-cream/10 bg-[#0E0518]"
      style={{
        boxShadow: '0 0 60px rgba(255,63,160,0.15) inset',
      }}
    >
      {/* Top status bar — animated stage label */}
      <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-[#0A0410]/85 px-5 py-3 font-sans text-[10px] uppercase tracking-[0.22em]">
        <span style={{ color: PINK }}>▸ SUBJECT // {c.id}</span>
        <span className="flex items-center gap-2">
          {phase === 'scanning' ? (
            <>
              <motion.span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: AMBER, boxShadow: `0 0 8px ${AMBER}` }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={`stage-${c.id}-${currentStageKey}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18 }}
                  style={{ color: AMBER }}
                >
                  {currentStageLabel}
                </motion.span>
              </AnimatePresence>
            </>
          ) : (
            <span className="text-cream/55">COMPLETE</span>
          )}
        </span>
      </div>

      {/* Background grid */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="scan-grid"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 22 0 L 0 0 0 22"
              fill="none"
              stroke={CYAN}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#scan-grid)" />
      </svg>

      {/* Caricature — wireframe humanoid bust */}
      <AnimatePresence mode="wait">
        <motion.svg
          key={c.id}
          viewBox="0 0 240 320"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-x-0 top-12 h-[calc(100%-3rem)] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-hidden
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            fill="none"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Head */}
            <circle cx="120" cy="92" r="38" stroke={PINK} />
            {/* Neck */}
            <path d="M104 128 L104 148" stroke={PINK} />
            <path d="M136 128 L136 148" stroke={PINK} />
            {/* Shoulders + torso bust */}
            <path
              d="M52 184 Q60 154 96 148 L144 148 Q180 154 188 184 L196 320"
              stroke={PINK}
            />
            <path d="M44 320 L52 184" stroke={PINK} />
            {/* Arm hints */}
            <path
              d="M58 184 L44 268"
              stroke={PINK}
              strokeWidth="1.1"
              opacity="0.55"
            />
            <path
              d="M182 184 L196 268"
              stroke={PINK}
              strokeWidth="1.1"
              opacity="0.55"
            />
            {/* Cyber chest plate */}
            <rect
              x="92"
              y="196"
              width="56"
              height="38"
              rx="3"
              stroke={CYAN}
              opacity="0.6"
            />
            <line
              x1="120"
              y1="196"
              x2="120"
              y2="234"
              stroke={CYAN}
              opacity="0.35"
            />
            <circle cx="120" cy="215" r="2.5" fill={CYAN} />
            {/* Registration crosshairs */}
            <path
              d="M28 28 L28 44 M28 28 L44 28"
              stroke={CYAN}
              opacity="0.7"
            />
            <path
              d="M212 28 L212 44 M212 28 L196 28"
              stroke={CYAN}
              opacity="0.7"
            />
          </g>
        </motion.svg>
      </AnimatePresence>

      {/* Stage-region highlight — different region per stage */}
      <AnimatePresence>
        {phase === 'scanning' && (
          <motion.div
            key={`hl-${c.id}-${currentStageKey}`}
            className="pointer-events-none absolute z-[3] rounded-full"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              ...stageHighlightBox(currentStageKey),
              background: `radial-gradient(ellipse at center, rgba(0,229,229,0.18) 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Continuous scan beam — sweeps full panel during scanning */}
      <AnimatePresence>
        {phase === 'scanning' && (
          <motion.div
            key={`scan-${c.id}`}
            className="pointer-events-none absolute inset-x-0 z-[6] h-[3px]"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${CYAN} 50%, transparent 100%)`,
              boxShadow: `0 0 14px ${CYAN}, 0 0 6px ${CYAN}`,
            }}
            initial={{ top: '8%', opacity: 0 }}
            animate={{ top: '92%', opacity: [0, 1, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: SCAN_MS / 1000, ease: 'linear' }}
          />
        )}
      </AnimatePresence>

      {/* DOSSIER overlay — bottom-right, builds up as stages complete */}
      <div className="absolute right-3 bottom-16 z-20 w-[58%] max-w-[260px] rounded-md border border-cream/12 bg-[#0A0410]/85 p-3 backdrop-blur-sm">
        <div className="font-sans text-[9px] uppercase tracking-[0.24em] text-cream/45">
          DOSSIER
        </div>
        <ul className="mt-2 space-y-1 font-mono text-[10px] leading-tight">
          {STAGES.map((stage, i) => {
            const completed = i < stageStep
            const active = i === stageStep && phase === 'scanning'
            const result = c.stages[stage.key]
            return (
              <li
                key={stage.key}
                className="flex items-center gap-2"
                style={{
                  color: completed
                    ? result.pass
                      ? GREEN
                      : RED
                    : active
                      ? AMBER
                      : 'rgba(247,244,239,0.32)',
                }}
              >
                <span className="w-3 shrink-0">
                  {completed ? (result.pass ? '✓' : '✕') : active ? '⟳' : '·'}
                </span>
                <span className="w-[88px] shrink-0 truncate">
                  {stage.key}
                </span>
                <span className="flex-1 truncate text-right">
                  {completed ? result.result : active ? 'ANALYZING' : ''}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Verdict overlay — full-panel flash */}
      <AnimatePresence>
        {phase === 'verdict' && (
          <motion.div
            key={`v-${c.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-30 flex items-center justify-center"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, ${
                c.selected
                  ? 'rgba(124,255,182,0.22)'
                  : 'rgba(255,71,85,0.22)'
              } 0%, rgba(10,4,16,0.78) 70%)`,
            }}
          >
            <div className="text-center">
              <div
                className="text-display text-[clamp(48px,9vw,96px)] leading-none tracking-[-0.02em]"
                style={{
                  color: verdictColour,
                  textShadow: `0 0 26px ${verdictColour}`,
                }}
              >
                {verdictGlyph}
              </div>
              <div
                className="mt-3 font-sans text-sm uppercase tracking-[0.32em]"
                style={{ color: verdictColour }}
              >
                {verdictLabel}
              </div>
              <div className="mt-2 font-sans text-[10px] uppercase tracking-[0.22em] text-cream/55">
                MATCH · {c.match}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom telemetry */}
      <div className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-2 gap-x-4 gap-y-1 border-t border-cream/10 bg-[#0A0410]/85 px-5 py-3 font-sans text-[10px] uppercase tracking-[0.18em]">
        <div className="text-cream/55">ROLE</div>
        <div className="text-cream/55">EXP</div>
        <div className="truncate text-cream">{c.role}</div>
        <div className="text-cream">{c.experience} YR</div>
      </div>
    </div>
  )
}

// Region of the figure that lights up during each stage
function stageHighlightBox(stage: StageKey): {
  top: string
  width: string
  height: string
} {
  switch (stage) {
    case 'SCREENING_CV':
      return { top: '14%', width: '60%', height: '24%' } // head area
    case 'SKILLS_PROBE':
      return { top: '38%', width: '55%', height: '24%' } // chest plate
    case 'CULTURE_FIT':
      return { top: '20%', width: '85%', height: '60%' } // full figure wash
    case 'REFERENCES':
      return { top: '48%', width: '70%', height: '28%' } // mid-torso / data plate
    case 'INTERVIEW_SIM':
      return { top: '14%', width: '40%', height: '28%' } // head close-up
  }
}
