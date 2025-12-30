
"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Environment } from "@react-three/drei"
import * as THREE from "three"

function ParticleText() {
  const textRef = useRef()
  const pointsRef = useRef()

  const particles = useMemo(() => {
    const count = 4000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.1
    }

    if (textRef.current) {
      textRef.current.material.opacity =
        0.85 + Math.sin(t * 1.2) * 0.1
    }
  })

  return (
    <>
      {/* PARTICLE CLOUD */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particles}
            count={particles.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#9ff5ea"
          transparent
          opacity={0.6}
        />
      </points>

      {/* TEXT CORE */}
      <Text
        ref={textRef}
        fontSize={1.4}
        letterSpacing={-0.04}
        anchorX="center"
        anchorY="middle"
      >
        Dx Assist
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00ffe1"
          emissiveIntensity={1.2}
          metalness={0.6}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </Text>
    </>
  )
}

export default function Scene() {
  return (
    <>
      {/* LIGHTING */}
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0, 6]} intensity={3} color="#00ffe1" />
      <pointLight position={[-4, 2, -2]} intensity={1.5} />

      <Environment preset="night" />

      <ParticleText />
    </>
  )
}
