'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

// Tron / Tron Legacy — vector grid floor extending to a black horizon, with
// a wireframe architecture floating above it. Pulses ride the edges
// like lightcycle trails. Pure cyan electric-blue against deep black.

const TRON = '#5DCBE9'
const TRON_BRIGHT = '#9DEEFF'
const ACCENT = '#E8472A'

const NODE_COUNT = 14
const PULSE_COUNT = 8

type Node = { pos: THREE.Vector3 }
type Edge = { a: number; b: number }

function buildGraph(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = []
  // Two stacked rings — feels architectural / system-diagram, not random
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2
    nodes.push({
      pos: new THREE.Vector3(Math.cos(a) * 1.5, 0.85, Math.sin(a) * 1.5),
    })
  }
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6
    nodes.push({
      pos: new THREE.Vector3(Math.cos(a) * 1.5, -0.85, Math.sin(a) * 1.5),
    })
  }
  // Central hub
  nodes.push({ pos: new THREE.Vector3(0, 0, 0) })
  nodes.push({ pos: new THREE.Vector3(0, 0, 0) })

  const edges: Edge[] = []
  const seen = new Set<string>()
  const add = (a: number, b: number) => {
    if (a === b) return
    const k = a < b ? `${a}-${b}` : `${b}-${a}`
    if (seen.has(k)) return
    seen.add(k)
    edges.push({ a, b })
  }
  for (let i = 0; i < 6; i++) {
    add(i, (i + 1) % 6)
    add(6 + i, 6 + ((i + 1) % 6))
    add(i, 6 + i)
    add(i, 12)
    add(6 + i, 12)
  }

  return { nodes, edges }
}

function GridFloor() {
  // gridHelper with line material — the iconic Tron grid.
  // Uses scene fog (set on Canvas) to fade lines into black at distance.
  return (
    <gridHelper
      args={[60, 60, TRON, TRON]}
      position={[0, -2.6, 0]}
    />
  )
}

function Architecture() {
  const groupRef = useRef<THREE.Group>(null)
  const wireRefs = useRef<THREE.Mesh[]>([])
  const pulseRefs = useRef<THREE.Mesh[]>([])

  const { nodes, edges } = useMemo(() => buildGraph(), [])

  const pulses = useMemo(
    () =>
      Array.from({ length: PULSE_COUNT }, () => ({
        edge: Math.floor(Math.random() * edges.length),
        progress: Math.random(),
        speed: 0.65 + Math.random() * 0.45,
      })),
    [edges.length]
  )

  const linePositions = useMemo(() => {
    const arr = new Float32Array(edges.length * 6)
    edges.forEach((e, i) => {
      arr[i * 6] = nodes[e.a].pos.x
      arr[i * 6 + 1] = nodes[e.a].pos.y
      arr[i * 6 + 2] = nodes[e.a].pos.z
      arr[i * 6 + 3] = nodes[e.b].pos.x
      arr[i * 6 + 4] = nodes[e.b].pos.y
      arr[i * 6 + 5] = nodes[e.b].pos.z
    })
    return arr
  }, [edges, nodes])

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.1

    // Subtle wireframe pulse — modules look "alive"
    wireRefs.current.forEach((m, i) => {
      if (!m) return
      const phase = performance.now() * 0.001 + i * 0.4
      const s = 1 + Math.sin(phase) * 0.04
      m.scale.setScalar(s)
    })

    // Lightcycle-trail pulses ride the edges
    pulses.forEach((p, i) => {
      const m = pulseRefs.current[i]
      if (!m) return
      p.progress += delta * p.speed
      if (p.progress >= 1) {
        p.progress = 0
        p.edge = Math.floor(Math.random() * edges.length)
        p.speed = 0.65 + Math.random() * 0.45
      }
      const e = edges[p.edge]
      const a = nodes[e.a].pos
      const b = nodes[e.b].pos
      m.position.set(
        a.x + (b.x - a.x) * p.progress,
        a.y + (b.y - a.y) * p.progress,
        a.z + (b.z - a.z) * p.progress
      )
    })
  })

  return (
    <group ref={groupRef}>
      {/* Wireframe edges between modules */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={TRON} transparent opacity={0.85} />
      </lineSegments>

      {/* Wireframe module boxes — glowing edges, no fill */}
      {nodes.map((n, i) => {
        const isCenter = i === 12
        const size = isCenter ? 0.42 : 0.24
        return (
          <group key={i} position={n.pos}>
            {/* Edge wireframe */}
            <mesh
              ref={(el) => {
                if (el) wireRefs.current[i] = el
              }}
            >
              <boxGeometry args={[size, size, size]} />
              <meshBasicMaterial
                wireframe
                color={isCenter ? ACCENT : TRON_BRIGHT}
                transparent
                opacity={isCenter ? 1 : 0.9}
              />
            </mesh>
            {/* Solid inner core for glow body */}
            <mesh>
              <boxGeometry args={[size * 0.62, size * 0.62, size * 0.62]} />
              <meshStandardMaterial
                color={isCenter ? ACCENT : TRON}
                emissive={isCenter ? ACCENT : TRON}
                emissiveIntensity={isCenter ? 0.9 : 0.55}
                metalness={0.4}
                roughness={0.5}
              />
            </mesh>
          </group>
        )
      })}

      {/* Pulses — bright cyan dots ride the edges */}
      {pulses.map((_, i) => (
        <mesh
          key={`p${i}`}
          ref={(el) => {
            if (el) pulseRefs.current[i] = el
          }}
        >
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color={TRON_BRIGHT} />
        </mesh>
      ))}
    </group>
  )
}

export default function GlobeScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.2, 5.6], fov: 46 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{
        background:
          'radial-gradient(ellipse at 50% 65%, #03101A 0%, #000000 75%)',
      }}
    >
      {/* Distance fog — makes the grid recede into the black horizon */}
      <fog attach="fog" args={['#000000', 7, 22]} />

      <ambientLight intensity={0.32} />
      {/* Cyan key light — the Tron world is lit by its grid */}
      <directionalLight position={[3, 4, 4]} intensity={0.8} color={TRON} />
      {/* Cool fill */}
      <pointLight position={[-3, -2, 3]} intensity={0.55} color={TRON} />
      {/* Vermilion accent — the central node's HAL-eye glow */}
      <pointLight position={[0, 0, 1]} intensity={0.9} color={ACCENT} />

      <GridFloor />
      <Architecture />
    </Canvas>
  )
}
