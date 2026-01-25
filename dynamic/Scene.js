
"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import * as THREE from "three"


function Stars({ count = 2200 }) {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 50
      arr[i * 3 + 1] = (Math.random() - 0.5) * 36
      arr[i * 3 + 2] = -Math.random() * 60
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const t = clock.elapsedTime

  
    pointsRef.current.material.opacity =
      0.6 + Math.sin(t * 1.6) * 0.2

    
    pointsRef.current.position.x = (t * 1.8) % 30 - 15
    pointsRef.current.position.z = (t * 1.1) % 25 - 12
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
        size={0.13}
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}


export default function Scene() {
  const textRef = useRef()
  const { gl, camera } = useThree()

  useEffect(() => {
    gl.setClearColor("#020617", 1)

  
    camera.position.set(0, 0, 9)
    camera.lookAt(0, 0, 0)
  }, [gl, camera])

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.material.emissiveIntensity =
        1 + Math.sin(clock.elapsedTime * 1.5) * 0.35
    }
  })

  return (
    <>
    
      <Stars />

      
      <ambientLight intensity={0.15} />
      <pointLight
        position={[0, 0, 7]}
        intensity={3}
        color="#00ffe1"
      />

      
      <Text
       ref={textRef}
  position={[0, 0.5, 0]}   // 🔼 moves text upward
  fontSize={1.7}
  letterSpacing={-0.06}
  anchorX="center"
  anchorY="middle"
      >
        Dx Assist
        <meshStandardMaterial
          color="#dffffa"
          emissive="#00ffe1"
          emissiveIntensity={1}
          metalness={0.45}
          roughness={0.3}
          transparent
          opacity={0.97}
        />
      </Text>
    </>
  )
}