"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import * as THREE from "three"

function Stars({ count = 1600 }) {   // ⭐ EFFECTIVELY FEWER STARS
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 44   // 🌌 wider space
      arr[i * 3 + 1] = (Math.random() - 0.5) * 32
      arr[i * 3 + 2] = -Math.random() * 45          // 🌌 deeper
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return

    const t = clock.elapsedTime

    // ✨ subtle twinkle (LESS noise)
    pointsRef.current.material.opacity =
      0.55 + Math.sin(t * 1.2) * 0.15

    // 🚀 FASTER LEFT → RIGHT MOTION (MATCH REF)
    pointsRef.current.position.x = (t * 0.6) % 18 - 9
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#9ff5ea"
        size={0.11}          // ⭐ visually same as ref
        sizeAttenuation
        transparent
        opacity={0.6}        // ⭐ makes far stars fade
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

  


export default function Scene() {
  const textRef = useRef()
  const { gl } = useThree()

  useEffect(() => {
    gl.setClearColor("#020617", 1)
  }, [gl])

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.material.emissiveIntensity =
        0.9 + Math.sin(clock.elapsedTime * 1.4) * 0.3
    }
  })

  return (
    <>
      {/* ⭐ STARS */}
      <Stars />

      {/* 💡 LIGHTING */}
      <ambientLight intensity={0.1} />
      <pointLight
        position={[0, 0, 6]}
        intensity={2.9}
        color="#00ffe1"
      />

      {/* ✨ TEXT */}
      <Text
        ref={textRef}
        fontSize={1.6}
        letterSpacing={-0.05}
        anchorX="center"
        anchorY="middle"
      >
        Dx Assist
        <meshStandardMaterial
          color="#dffffa"
          emissive="#00ffe1"
          emissiveIntensity={0.95}
          metalness={0.4}
          roughness={0.35}
          transparent
          opacity={0.96}
        />
      </Text>
    </>
  )
}