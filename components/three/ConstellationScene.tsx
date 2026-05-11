'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

// Ghost in the Shell — cyberpunk network. Nodes are people, lines are
// network ties between teammates. Every ~6.5s the teams reform; nodes
// streak along data-trails to their new positions. A vertical scan-bar
// sweeps down the scene like the title sequence's body-assembly shots.

const PINK = '#FF3FA0'
const CYAN = '#00E5E5'
const PURPLE = '#9B30FF'

const NODE_COUNT = 18
const TEAM_COUNT = 5
const REFORM_INTERVAL = 6.5

type Node = {
  current: THREE.Vector3
  target: THREE.Vector3
  team: number
}

function teamCentre(i: number): THREE.Vector3 {
  const anchors: [number, number, number][] = [
    [-2.0, 0.8, 0],
    [1.6, 1.1, -0.2],
    [-1.4, -1.0, 0.4],
    [1.9, -0.8, 0.1],
    [0.0, 0.1, -0.5],
  ]
  return new THREE.Vector3(...anchors[i % anchors.length])
}

function jitter(amount = 0.4): THREE.Vector3 {
  return new THREE.Vector3(
    (Math.random() - 0.5) * amount,
    (Math.random() - 0.5) * amount,
    (Math.random() - 0.5) * amount * 0.6
  )
}

function buildAssignment(): number[] {
  const assignment: number[] = []
  for (let i = 0; i < NODE_COUNT; i++) {
    assignment.push(i % TEAM_COUNT)
  }
  for (let i = assignment.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[assignment[i], assignment[j]] = [assignment[j], assignment[i]]
  }
  return assignment
}

function Teams() {
  const groupRef = useRef<THREE.Group>(null)
  const meshRefs = useRef<THREE.Mesh[]>([])
  const lineRef = useRef<THREE.LineSegments>(null)
  // Data-trail line refs — drawn between current pos and target during reform
  const trailRef = useRef<THREE.LineSegments>(null)
  const [reformPulse, setReformPulse] = useState(0)

  const nodes = useMemo<Node[]>(() => {
    const assignment = buildAssignment()
    return assignment.map((team) => {
      const c = teamCentre(team)
      const j = jitter()
      const target = c.clone().add(j)
      return { current: target.clone(), target, team }
    })
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      const assignment = buildAssignment()
      assignment.forEach((team, i) => {
        nodes[i].team = team
        nodes[i].target = teamCentre(team).add(jitter())
      })
      setReformPulse(performance.now())
    }, REFORM_INTERVAL * 1000)
    return () => clearInterval(id)
  }, [nodes])

  const maxLines = (NODE_COUNT * (NODE_COUNT - 1)) / 2
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines])
  const trailPositions = useMemo(() => new Float32Array(NODE_COUNT * 6), [])

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.05

    // GitS reformations are quicker and more "digital" than the slow lerp
    // we had before — nodes snap toward target with a sharper coefficient
    nodes.forEach((n, i) => {
      n.current.lerp(n.target, delta * 2.6)
      const m = meshRefs.current[i]
      if (m) m.position.copy(n.current)
    })

    // Team links — only same-team within range
    let idx = 0
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].team !== nodes[j].team) continue
        const d = nodes[i].current.distanceTo(nodes[j].current)
        if (d > 1.6) continue
        if (idx + 6 > linePositions.length) break
        linePositions[idx++] = nodes[i].current.x
        linePositions[idx++] = nodes[i].current.y
        linePositions[idx++] = nodes[i].current.z
        linePositions[idx++] = nodes[j].current.x
        linePositions[idx++] = nodes[j].current.y
        linePositions[idx++] = nodes[j].current.z
      }
    }
    if (lineRef.current) {
      const attr = lineRef.current.geometry.attributes.position as
        | THREE.BufferAttribute
        | undefined
      if (attr) {
        attr.needsUpdate = true
        lineRef.current.geometry.setDrawRange(0, idx / 3)
      }
    }

    // Data-trail rendering: for ~700ms after a reform, draw a line from
    // each node's current position to its target. Lines fade as nodes settle.
    const sinceReform = (performance.now() - reformPulse) / 1000
    let trailIdx = 0
    if (sinceReform < 0.85) {
      nodes.forEach((n) => {
        if (n.current.distanceTo(n.target) < 0.05) return
        if (trailIdx + 6 > trailPositions.length) return
        trailPositions[trailIdx++] = n.current.x
        trailPositions[trailIdx++] = n.current.y
        trailPositions[trailIdx++] = n.current.z
        trailPositions[trailIdx++] = n.target.x
        trailPositions[trailIdx++] = n.target.y
        trailPositions[trailIdx++] = n.target.z
      })
    }
    if (trailRef.current) {
      const attr = trailRef.current.geometry.attributes.position as
        | THREE.BufferAttribute
        | undefined
      if (attr) {
        attr.needsUpdate = true
        trailRef.current.geometry.setDrawRange(0, trailIdx / 3)
      }
      const mat = trailRef.current.material as THREE.LineBasicMaterial
      mat.opacity = Math.max(0, 0.7 - sinceReform * 0.85)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Persistent team links */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={CYAN} transparent opacity={0.55} />
      </lineSegments>

      {/* Reform data-trails — bright pink, fade out fast */}
      <lineSegments ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[trailPositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={PINK} transparent opacity={0} />
      </lineSegments>

      {/* Nodes — hot-pink emissive spheres, the "people" */}
      {nodes.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshRefs.current[i] = el
          }}
        >
          <sphereGeometry args={[0.13, 18, 18]} />
          <meshStandardMaterial
            color={PINK}
            emissive={PINK}
            emissiveIntensity={0.85}
            metalness={0.45}
            roughness={0.32}
          />
        </mesh>
      ))}
    </group>
  )
}

// Vertical scan-bar — sweeps top to bottom continuously, like the GitS
// title-sequence body-assembly shots
function ScanBar() {
  const ref = useRef<THREE.Mesh>(null)
  const matRef = useRef<THREE.MeshBasicMaterial>(null)

  useFrame(() => {
    if (!ref.current || !matRef.current) return
    const t = (performance.now() % 4200) / 4200
    // Sweep from y=3.2 down to y=-3.2
    ref.current.position.y = 3.2 - t * 6.4
    // Sharp at centre, faded at extremes
    const fadeT = Math.sin(t * Math.PI)
    matRef.current.opacity = 0.08 + fadeT * 0.22
  })

  return (
    <mesh ref={ref} position={[0, 3, 0.5]}>
      <planeGeometry args={[14, 0.18]} />
      <meshBasicMaterial
        ref={matRef}
        color={CYAN}
        transparent
        opacity={0.18}
        toneMapped={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// Streaming vertical code-rain in deep background — atmospheric "Net is vast"
function NetStream() {
  const ref = useRef<THREE.Points>(null)
  const COUNT = 260

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8
      arr[i * 3 + 2] = -6 - Math.random() * 4
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    const arr = (ref.current.geometry.attributes.position as THREE.BufferAttribute)
      .array as Float32Array
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] -= delta * (0.6 + (i % 5) * 0.15)
      if (arr[i * 3 + 1] < -4.2) {
        arr[i * 3 + 1] = 4.2
        arr[i * 3] = (Math.random() - 0.5) * 12
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
        color={PURPLE}
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.42}
        depthWrite={false}
      />
    </points>
  )
}

export default function ConstellationScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, #1A0A24 0%, #0A0612 70%, #050308 100%)',
      }}
    >
      <ambientLight intensity={0.45} />
      {/* Hot pink key — magenta wash on the network */}
      <pointLight position={[3, 3, 3]} intensity={1.0} color={PINK} />
      {/* Cyan rim — the cool side of the cyberpunk duotone */}
      <pointLight position={[-3, -2, 2]} intensity={0.7} color={CYAN} />
      {/* Electric purple bg-fill */}
      <pointLight position={[0, 0, -3]} intensity={0.5} color={PURPLE} />

      <NetStream />
      <Teams />
      <ScanBar />
    </Canvas>
  )
}
