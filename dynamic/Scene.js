
"use client"
import React, { useRef, useState, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center, MeshTransmissionMaterial, Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedLetter({ char, position, isVisible }) {
  const mesh = useRef()
  
  useFrame(() => {
    if (mesh.current) {
      const targetOpacity = isVisible ? 1 : 0
      const targetScale = isVisible ? 1 : 0.8
      // Smooth interpolation for entrance and exit
      mesh.current.material.opacity = THREE.MathUtils.lerp(mesh.current.material.opacity, targetOpacity, 0.1)
      mesh.current.scale.setScalar(THREE.MathUtils.lerp(mesh.current.scale.x, targetScale, 0.1))
    }
  })

  return (
    <Text3D
      ref={mesh}
      font="/fonts/montserrat.json"
      size={0.75}
      height={0.15}
      position={position}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
    >
      {char}
      <MeshTransmissionMaterial 
        backside 
        samples={15}
        thickness={0.15} 
        chromaticAberration={0.05} 
        roughness={0.1} 
        transparent
        opacity={0}
        color="#ffffff"
      />
    </Text3D>
  )
}

export default function Scene() {
  const groupRef = useRef()
  const [visibleChars, setVisibleChars] = useState(0)
  const [showAll, setShowAll] = useState(true)
  const letters = useMemo(() => "DxAssist".split(''), [])

  // Spacing logic: Custom kerning to stop D and x from mixing
  const getLetterXPos = (index) => {
    const baseSpacing = 0.65;
    let offset = index * baseSpacing;
    if (index > 0) offset += 0.18; // Specific gap for the Dx transition
    return offset;
  };

  // 3D Mouse Tracking (Interactive Tilt)
  useFrame((state) => {
    if (groupRef.current) {
      const { x, y } = state.mouse
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.4, 0.1)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.4, 0.1)
    }
  })

  // Animation Cycle: Type -> Pause -> Disappear 1.5s -> Repeat
  useEffect(() => {
    let typingInterval;
    const startTyping = () => {
      setVisibleChars(0);
      setShowAll(true);
      typingInterval = setInterval(() => {
        setVisibleChars((prev) => (prev < letters.length ? prev + 1 : prev));
      }, 120);
    };

    const mainCycle = setInterval(() => {
      setShowAll(false); // Words vanish
      setTimeout(() => startTyping(), 1500); // REAPPEAR AFTER 1.5 SECONDS
    }, 10000);

    startTyping();
    return () => { clearInterval(typingInterval); clearInterval(mainCycle); };
  }, [letters.length]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={15} blur={2.5} far={4} />
      
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Center>
          <group ref={groupRef}>
            {letters.map((char, i) => (
              <AnimatedLetter 
                key={i} 
                char={char} 
                position={[getLetterXPos(i), 0, 0]} 
                isVisible={showAll && i < visibleChars} 
              />
            ))}
          </group>
        </Center>
      </Float>
    </>
  )
}