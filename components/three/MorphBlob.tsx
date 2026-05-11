'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { MathUtils } from 'three'

// 2001: A Space Odyssey — the Monolith + starfield.
// Pure black space, ~1800 pinpoint stars, slowly drifting. The Monolith
// (1:4:9 ratio) rotates very slowly so an edge gradually catches a side
// rim-light, dwarfed by stillness. A subtle cream radial behind it
// references the Strauss "sun rising" composition.

const STAR_COUNT = 1800

function Stars() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(STAR_COUNT * 3)
    for (let i = 0; i < STAR_COUNT; i++) {
      // Distribute on a large sphere so the camera is "inside" the field
      const r = 18 + Math.random() * 22
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.008
    // Subtle camera-relative drift via mouse
    const targetX = state.mouse.y * 0.05
    const targetY = state.mouse.x * 0.05
    ref.current.rotation.x = MathUtils.lerp(
      ref.current.rotation.x,
      targetX,
      delta * 1.4
    )
    // Note: we re-use rotation.y for the auto-spin above; the mouse y-drift
    // here is intentionally folded into the same axis at low magnitude
    ref.current.rotation.z = MathUtils.lerp(
      ref.current.rotation.z,
      targetY,
      delta * 1.4
    )
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#FFFFFF"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  )
}

function Monolith() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.06
  })

  // 1:4:9 ratio — the Monolith's exact proportions in the film
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[1, 4, 0.22]} />
      <meshStandardMaterial
        color="#000000"
        metalness={0.18}
        roughness={0.32}
        emissive="#0A0A0A"
        emissiveIntensity={0.4}
      />
    </mesh>
  )
}

export default function MorphBlob() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.2, 5.2], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{
        background:
          'radial-gradient(ellipse 30% 45% at 50% 50%, rgba(247,244,239,0.18) 0%, rgba(247,244,239,0.04) 35%, #000000 70%)',
      }}
    >
      <ambientLight intensity={0.18} />
      {/* Cream key light — rim catches the monolith's leading edge */}
      <directionalLight position={[6, 3, 4]} intensity={1.4} color="#FFF5E0" />
      {/* HAL-eye accent — weak vermilion from the opposite side */}
      <pointLight position={[-4, -1, -2]} intensity={0.55} color="#E8472A" />

      <Stars />
      <Monolith />
    </Canvas>
  )
}
