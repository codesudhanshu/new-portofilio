'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

// Blade Runner — vertical neon billboards in amber haze, drifting embers,
// dystopian-future-Tokyo at night. Camera slowly drifts so the parallax
// reads like flying down a corridor between buildings.

const AMBER = '#FF9544'
const AMBER_BRIGHT = '#FFB870'
const CYAN = '#3FA8B8'
const PINK = '#FF6F8C'
const PALETTE = [AMBER, AMBER_BRIGHT, CYAN, PINK]

const BILLBOARD_COUNT = 14

type Billboard = {
  pos: [number, number, number]
  size: [number, number, number]
  color: string
  pulseRate: number
  pulsePhase: number
}

function buildBillboards(): Billboard[] {
  const arr: Billboard[] = []
  for (let i = 0; i < BILLBOARD_COUNT; i++) {
    // Two corridors of billboards either side of camera centre line
    const side = i % 2 === 0 ? -1 : 1
    const xJitter = (Math.random() - 0.5) * 0.8
    const x = side * (1.6 + Math.random() * 1.4) + xJitter
    const y = -1 + Math.random() * 2.5 // varied vertical anchoring
    const z = -8 + (i / BILLBOARD_COUNT) * 14 + (Math.random() - 0.5) * 1.2

    // Tall narrow rectangles — billboards
    const w = 0.18 + Math.random() * 0.22
    const h = 1.6 + Math.random() * 2.4
    const d = 0.04 + Math.random() * 0.05

    arr.push({
      pos: [x, y, z],
      size: [w, h, d],
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      pulseRate: 0.5 + Math.random() * 1.4,
      pulsePhase: Math.random() * Math.PI * 2,
    })
  }
  return arr
}

function Billboards() {
  const groupRef = useRef<THREE.Group>(null)
  const matRefs = useRef<THREE.MeshBasicMaterial[]>([])
  const billboards = useMemo(() => buildBillboards(), [])

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Drift the whole group slowly toward camera so closer billboards pass
      // and recycle to the back — corridor-flythrough feel
      groupRef.current.position.z += delta * 0.18
      if (groupRef.current.position.z > 6) {
        groupRef.current.position.z = 0
      }
    }

    // Independent neon pulse per billboard
    const t = performance.now() * 0.001
    matRefs.current.forEach((mat, i) => {
      if (!mat) return
      const b = billboards[i]
      const pulse = (Math.sin(t * b.pulseRate + b.pulsePhase) + 1) * 0.5
      mat.opacity = 0.55 + pulse * 0.4
    })
  })

  return (
    <group ref={groupRef}>
      {billboards.map((b, i) => (
        <mesh key={i} position={b.pos}>
          <boxGeometry args={b.size} />
          <meshBasicMaterial
            ref={(el) => {
              if (el) matRefs.current[i] = el
            }}
            color={b.color}
            transparent
            opacity={0.85}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  )
}

// Hazy amber atmosphere — drifting embers visible against the dark
function Embers() {
  const ref = useRef<THREE.Points>(null)
  const COUNT = 380

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6
      arr[i * 3 + 2] = -10 + Math.random() * 14
    }
    return arr
  }, [])

  const seeds = useMemo(
    () => Array.from({ length: COUNT }, () => Math.random()),
    []
  )

  useFrame((_, delta) => {
    if (!ref.current) return
    const arr = (ref.current.geometry.attributes.position as THREE.BufferAttribute)
      .array as Float32Array
    const t = performance.now() * 0.001
    for (let i = 0; i < COUNT; i++) {
      // Slow rise + horizontal drift — embers carried by wind
      arr[i * 3 + 1] += delta * (0.08 + seeds[i] * 0.12)
      arr[i * 3] += Math.sin(t * 0.4 + seeds[i] * 6) * delta * 0.06
      arr[i * 3 + 2] += delta * 0.18
      if (arr[i * 3 + 1] > 4 || arr[i * 3 + 2] > 6) {
        arr[i * 3] = (Math.random() - 0.5) * 12
        arr[i * 3 + 1] = -4 - Math.random() * 2
        arr[i * 3 + 2] = -10 + Math.random() * 4
      }
    }
    ;(ref.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={AMBER_BRIGHT}
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </points>
  )
}

// A single low-flying horizontal beam — geisha-billboard / blimp suggestion
function HorizontalBeam() {
  const ref = useRef<THREE.Mesh>(null)
  const matRef = useRef<THREE.MeshBasicMaterial>(null)

  useFrame(() => {
    if (!ref.current || !matRef.current) return
    const t = performance.now() * 0.0007
    ref.current.position.x = Math.sin(t) * 5.5
    ref.current.position.y = 1.8 + Math.cos(t * 1.3) * 0.4
    matRef.current.opacity = 0.4 + Math.sin(t * 2.2) * 0.15
  })

  return (
    <mesh ref={ref} position={[0, 1.8, -3]}>
      <boxGeometry args={[2.2, 0.12, 0.08]} />
      <meshBasicMaterial
        ref={matRef}
        color={CYAN}
        transparent
        opacity={0.5}
        toneMapped={false}
      />
    </mesh>
  )
}

export default function ParticleStream() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.6, 5], fov: 52 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{
        background:
          'radial-gradient(ellipse at 50% 65%, #1a0a05 0%, #0A0805 60%, #050302 100%)',
      }}
    >
      {/* Heavy amber-tinted fog — Blade Runner haze */}
      <fog attach="fog" args={['#0A0805', 4, 16]} />

      <ambientLight intensity={0.22} color={AMBER} />
      {/* Strong amber back-light from below — neon street-level glow */}
      <pointLight position={[0, -2, 0]} intensity={1.4} color={AMBER} />
      {/* Cool cyan from above — overhead neon */}
      <pointLight position={[2, 4, 1]} intensity={0.9} color={CYAN} />
      {/* Vermilion punch — distant hot light */}
      <pointLight position={[-3, 0, -4]} intensity={0.7} color="#FF4422" />

      <Embers />
      <HorizontalBeam />
      <Billboards />
    </Canvas>
  )
}
