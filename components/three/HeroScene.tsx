'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { MathUtils } from 'three'

const ORBIT_RADIUS = 2.2
const ORBIT_SPEED = 0.16

// SOFTWARE — a precise octahedron (architectural, faceted)
function SoftwareForm({ phase }: { phase: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }, delta) => {
    if (!groupRef.current || !meshRef.current || !wireRef.current) return
    const t = clock.getElapsedTime()
    const a = t * ORBIT_SPEED + phase
    groupRef.current.position.set(
      Math.cos(a) * ORBIT_RADIUS,
      Math.sin(a * 0.9) * 0.45,
      Math.sin(a) * ORBIT_RADIUS * 0.6
    )
    meshRef.current.rotation.x += delta * 0.32
    meshRef.current.rotation.y += delta * 0.42
    wireRef.current.rotation.copy(meshRef.current.rotation)
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#E8472A"
          metalness={0.55}
          roughness={0.28}
          emissive="#E8472A"
          emissiveIntensity={0.18}
        />
      </mesh>
      <mesh ref={wireRef}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial
          wireframe
          color="#FFFFFF"
          transparent
          opacity={0.22}
        />
      </mesh>
    </group>
  )
}

// MARKETING — a torus (reach, broadcast, expansion)
function MarketingForm({ phase }: { phase: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }, delta) => {
    if (!groupRef.current || !meshRef.current) return
    const t = clock.getElapsedTime()
    const a = t * ORBIT_SPEED + phase
    groupRef.current.position.set(
      Math.cos(a) * ORBIT_RADIUS,
      Math.sin(a * 0.9) * 0.45,
      Math.sin(a) * ORBIT_RADIUS * 0.6
    )
    meshRef.current.rotation.x += delta * 0.45
    meshRef.current.rotation.z += delta * 0.25
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <torusGeometry args={[0.42, 0.13, 18, 80]} />
        <meshStandardMaterial
          color="#F4B942"
          metalness={0.65}
          roughness={0.32}
          emissive="#F4B942"
          emissiveIntensity={0.22}
        />
      </mesh>
    </group>
  )
}

// STAFFING — a cluster of seven small spheres (a team)
function StaffingForm({ phase }: { phase: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const dots = useMemo(() => {
    // Hand-placed positions for a balanced, recognisable cluster
    const positions: [number, number, number][] = [
      [0, 0.06, 0],
      [0.32, -0.12, 0.05],
      [-0.28, -0.05, -0.1],
      [0.04, 0.34, -0.18],
      [-0.18, 0.2, 0.22],
      [0.22, -0.3, -0.15],
      [-0.32, -0.28, 0.08],
    ]
    return positions.map((pos, i) => ({
      pos,
      size: 0.085 + (i % 2) * 0.02,
      hue: i % 3,
    }))
  }, [])

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    const a = t * ORBIT_SPEED + phase
    groupRef.current.position.set(
      Math.cos(a) * ORBIT_RADIUS,
      Math.sin(a * 0.9) * 0.45,
      Math.sin(a) * ORBIT_RADIUS * 0.6
    )
    groupRef.current.rotation.y += delta * 0.55
  })

  const palette = ['#E8472A', '#F4B942', '#FFC773']
  return (
    <group ref={groupRef}>
      {dots.map((d, i) => (
        <mesh key={i} position={d.pos}>
          <sphereGeometry args={[d.size, 18, 18]} />
          <meshStandardMaterial
            color={palette[d.hue]}
            metalness={0.5}
            roughness={0.32}
            emissive={palette[d.hue]}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

// Faint connecting ring — implies the three forms are part of one studio
function OrbitGuide() {
  return (
    <mesh rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[ORBIT_RADIUS, 0.005, 6, 96]} />
      <meshBasicMaterial color="#F4B942" transparent opacity={0.18} />
    </mesh>
  )
}

function Constellation() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const targetX = state.mouse.y * 0.18
    const targetZ = state.mouse.x * 0.18
    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      delta * 2
    )
    groupRef.current.rotation.z = MathUtils.lerp(
      groupRef.current.rotation.z,
      targetZ,
      delta * 2
    )
    groupRef.current.rotation.y += delta * 0.05
  })

  return (
    <group ref={groupRef}>
      <OrbitGuide />
      <SoftwareForm phase={0} />
      <MarketingForm phase={(2 * Math.PI) / 3} />
      <StaffingForm phase={(4 * Math.PI) / 3} />
    </group>
  )
}

// Sparse atmospheric dust — provides depth without competing with the forms
function Dust() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const COUNT = 140
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const r = 4.5 + Math.random() * 4.5
      const t = Math.random() * Math.PI * 2
      const p = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(p) * Math.cos(t)
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t)
      arr[i * 3 + 2] = r * Math.cos(p)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.012
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#F4B942"
        size={0.024}
        sizeAttenuation
        transparent
        opacity={0.42}
        depthWrite={false}
      />
    </points>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 5.6], fov: 44 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{
        background:
          'radial-gradient(ellipse at 55% 45%, #1a1612 0%, #0F0E0D 72%)',
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 3]} intensity={1.5} color="#FFF5E0" />
      <directionalLight
        position={[-3, 1, -2]}
        intensity={0.45}
        color="#E8472A"
      />
      <Dust />
      <Constellation />
    </Canvas>
  )
}
