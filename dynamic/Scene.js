
// // // // // // // // "use client"
// // // // // // // // import React, { useRef, useState, useEffect, useMemo } from 'react'
// // // // // // // // import { useFrame } from '@react-three/fiber'
// // // // // // // // import { Text3D, Center, MeshTransmissionMaterial, Float, ContactShadows } from '@react-three/drei'
// // // // // // // // import * as THREE from 'three'

// // // // // // // // function AnimatedLetter({ char, position, isVisible }) {
// // // // // // // //   const mesh = useRef()
  
// // // // // // // //   useFrame(() => {
// // // // // // // //     if (mesh.current) {
// // // // // // // //       const targetOpacity = isVisible ? 1 : 0
// // // // // // // //       const targetScale = isVisible ? 1 : 0.8
// // // // // // // //       // Smooth interpolation for entrance and exit
// // // // // // // //       mesh.current.material.opacity = THREE.MathUtils.lerp(mesh.current.material.opacity, targetOpacity, 0.1)
// // // // // // // //       mesh.current.scale.setScalar(THREE.MathUtils.lerp(mesh.current.scale.x, targetScale, 0.1))
// // // // // // // //     }
// // // // // // // //   })

// // // // // // // //   return (
// // // // // // // //     <Text3D
// // // // // // // //       ref={mesh}
// // // // // // // //       font="/fonts/montserrat.json"
// // // // // // // //       size={0.75}
// // // // // // // //       height={0.15}
// // // // // // // //       position={position}
// // // // // // // //       bevelEnabled
// // // // // // // //       bevelThickness={0.02}
// // // // // // // //       bevelSize={0.02}
// // // // // // // //     >
// // // // // // // //       {char}
// // // // // // // //       <MeshTransmissionMaterial 
// // // // // // // //         backside 
// // // // // // // //         samples={15}
// // // // // // // //         thickness={0.15} 
// // // // // // // //         chromaticAberration={0.05} 
// // // // // // // //         roughness={0.1} 
// // // // // // // //         transparent
// // // // // // // //         opacity={0}
// // // // // // // //         color="#ffffff"
// // // // // // // //       />
// // // // // // // //     </Text3D>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default function Scene() {
// // // // // // // //   const groupRef = useRef()
// // // // // // // //   const [visibleChars, setVisibleChars] = useState(0)
// // // // // // // //   const [showAll, setShowAll] = useState(true)
// // // // // // // //   const letters = useMemo(() => "DxAssist".split(''), [])

// // // // // // // //   // Spacing logic: Custom kerning to stop D and x from mixing
// // // // // // // //   const getLetterXPos = (index) => {
// // // // // // // //     const baseSpacing = 0.65;
// // // // // // // //     let offset = index * baseSpacing;
// // // // // // // //     if (index > 0) offset += 0.18; // Specific gap for the Dx transition
// // // // // // // //     return offset;
// // // // // // // //   };

// // // // // // // //   // 3D Mouse Tracking (Interactive Tilt)
// // // // // // // //   useFrame((state) => {
// // // // // // // //     if (groupRef.current) {
// // // // // // // //       const { x, y } = state.mouse
// // // // // // // //       groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.4, 0.1)
// // // // // // // //       groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.4, 0.1)
// // // // // // // //     }
// // // // // // // //   })

// // // // // // // //   // Animation Cycle: Type -> Pause -> Disappear 1.5s -> Repeat
// // // // // // // //   useEffect(() => {
// // // // // // // //     let typingInterval;
// // // // // // // //     const startTyping = () => {
// // // // // // // //       setVisibleChars(0);
// // // // // // // //       setShowAll(true);
// // // // // // // //       typingInterval = setInterval(() => {
// // // // // // // //         setVisibleChars((prev) => (prev < letters.length ? prev + 1 : prev));
// // // // // // // //       }, 120);
// // // // // // // //     };

// // // // // // // //     const mainCycle = setInterval(() => {
// // // // // // // //       setShowAll(false); // Words vanish
// // // // // // // //       setTimeout(() => startTyping(), 1500); // REAPPEAR AFTER 1.5 SECONDS
// // // // // // // //     }, 10000);

// // // // // // // //     startTyping();
// // // // // // // //     return () => { clearInterval(typingInterval); clearInterval(mainCycle); };
// // // // // // // //   }, [letters.length]);

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <ambientLight intensity={0.5} />
// // // // // // // //       <pointLight position={[10, 10, 10]} intensity={2} />
// // // // // // // //       <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={15} blur={2.5} far={4} />
      
// // // // // // // //       <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
// // // // // // // //         <Center>
// // // // // // // //           <group ref={groupRef}>
// // // // // // // //             {letters.map((char, i) => (
// // // // // // // //               <AnimatedLetter 
// // // // // // // //                 key={i} 
// // // // // // // //                 char={char} 
// // // // // // // //                 position={[getLetterXPos(i), 0, 0]} 
// // // // // // // //                 isVisible={showAll && i < visibleChars} 
// // // // // // // //               />
// // // // // // // //             ))}
// // // // // // // //           </group>
// // // // // // // //         </Center>
// // // // // // // //       </Float>
// // // // // // // //     </>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // "use client"
// // // // // // // import { useRef } from "react"
// // // // // // // import { useFrame } from "@react-three/fiber"
// // // // // // // import { Center, Text3D, Environment } from "@react-three/drei"
// // // // // // // import * as THREE from "three"

// // // // // // // export default function Scene() {
// // // // // // //   const logo = useRef()

// // // // // // //   useFrame((state) => {
// // // // // // //     if (!logo.current) return
// // // // // // //     const t = state.clock.elapsedTime
// // // // // // //     logo.current.rotation.y = Math.sin(t * 0.25) * 0.18
// // // // // // //     logo.current.position.y = Math.sin(t * 0.6) * 0.06
// // // // // // //   })

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* CINEMATIC LIGHTING */}
// // // // // // //       <ambientLight intensity={0.4} />
// // // // // // //       <directionalLight position={[6, 6, 6]} intensity={2.4} />
// // // // // // //       <directionalLight position={[-6, -4, 3]} intensity={1.4} />

// // // // // // //       {/* REALISTIC REFLECTIONS */}
// // // // // // //       <Environment preset="city" />

// // // // // // //       <Center>
// // // // // // //         <group ref={logo}>
// // // // // // //           <Text3D
// // // // // // //             font="/fonts/montserrat.json"
// // // // // // //             size={1.05}
// // // // // // //             height={0.24}
// // // // // // //             bevelEnabled
// // // // // // //             bevelThickness={0.03}
// // // // // // //             bevelSize={0.025}
// // // // // // //             bevelSegments={14}
// // // // // // //           >
// // // // // // //             DxAssist
// // // // // // //             <meshPhysicalMaterial
// // // // // // //               color="#e8faf7"
// // // // // // //               metalness={1}
// // // // // // //               roughness={0.22}
// // // // // // //               clearcoat={1}
// // // // // // //               clearcoatRoughness={0.15}
// // // // // // //               reflectivity={1}
// // // // // // //             />
// // // // // // //           </Text3D>
// // // // // // //         </group>
// // // // // // //       </Center>
// // // // // // //     </>
// // // // // // //   )
// // // // // // // }
// // // // // // "use client"

// // // // // // import { useRef, useMemo } from "react"
// // // // // // import { useFrame } from "@react-three/fiber"
// // // // // // import { Center, Text, Environment, Sparkles } from "@react-three/drei"
// // // // // // import * as THREE from "three"

// // // // // // export default function Scene() {
// // // // // //   const textRef = useRef()
// // // // // //   const glowRef = useRef()

// // // // // //   // Animated gradient material
// // // // // //   const gradientMaterial = useMemo(() => {
// // // // // //     return new THREE.MeshStandardMaterial({
// // // // // //       color: "#7fffd4",
// // // // // //       emissive: new THREE.Color("#00ffd5"),
// // // // // //       emissiveIntensity: 1.5,
// // // // // //       metalness: 0.6,
// // // // // //       roughness: 0.15,
// // // // // //     })
// // // // // //   }, [])

// // // // // //   useFrame((state) => {
// // // // // //     const t = state.clock.elapsedTime

// // // // // //     // Floating + breathing motion
// // // // // //     if (textRef.current) {
// // // // // //       textRef.current.position.y = Math.sin(t * 0.8) * 0.12
// // // // // //       textRef.current.rotation.y = Math.sin(t * 0.4) * 0.25
// // // // // //     }

// // // // // //     // Pulsing glow
// // // // // //     if (glowRef.current) {
// // // // // //       glowRef.current.material.emissiveIntensity =
// // // // // //         1.2 + Math.sin(t * 2) * 0.6
// // // // // //     }
// // // // // //   })

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* CINEMATIC LIGHT SETUP */}
// // // // // //       <ambientLight intensity={0.15} />
// // // // // //       <directionalLight position={[5, 6, 5]} intensity={2.5} color="#a7fff3" />
// // // // // //       <pointLight position={[-5, -3, 2]} intensity={1.5} color="#00ffe1" />

// // // // // //       {/* HDR ENV FOR DEPTH */}
// // // // // //       <Environment preset="night" />

// // // // // //       {/* AI PARTICLE FIELD */}
// // // // // //       <Sparkles
// // // // // //         count={120}
// // // // // //         scale={[12, 6, 6]}
// // // // // //         size={2}
// // // // // //         speed={0.6}
// // // // // //         color="#4fffe6"
// // // // // //       />

// // // // // //       <Center>
// // // // // //         <group ref={textRef}>
// // // // // //           {/* MAIN TITLE */}
// // // // // //           <Text
// // // // // //             fontSize={1.25}
// // // // // //             letterSpacing={-0.05}
// // // // // //             anchorX="center"
// // // // // //             anchorY="middle"
// // // // // //           >
// // // // // //             Dx Assist
// // // // // //             <primitive object={gradientMaterial} />
// // // // // //           </Text>

// // // // // //           {/* GLOW BACK LAYER */}
// // // // // //           <Text
// // // // // //             ref={glowRef}
// // // // // //             fontSize={1.3}
// // // // // //             letterSpacing={-0.05}
// // // // // //             anchorX="center"
// // // // // //             anchorY="middle"
// // // // // //             position={[0, 0, -0.08]}
// // // // // //           >
// // // // // //             Dx Assist
// // // // // //             <meshStandardMaterial
// // // // // //               color="#00ffe1"
// // // // // //               emissive="#00ffe1"
// // // // // //               emissiveIntensity={2}
// // // // // //               transparent
// // // // // //               opacity={0.35}
// // // // // //             />
// // // // // //           </Text>
// // // // // //         </group>
// // // // // //       </Center>
// // // // // //     </>
// // // // // //   )
// // // // // // }
// // // // // "use client"

// // // // // import { useRef } from "react"
// // // // // import { useFrame } from "@react-three/fiber"
// // // // // import { Center, Text, Environment, Sparkles, Ring } from "@react-three/drei"
// // // // // import * as THREE from "three"

// // // // // export default function Scene() {
// // // // //   const group = useRef()
// // // // //   const core = useRef()
// // // // //   const text = useRef()

// // // // //   useFrame((state) => {
// // // // //     const t = state.clock.elapsedTime

// // // // //     // Whole system slow rotation
// // // // //     if (group.current) {
// // // // //       group.current.rotation.y = t * 0.12
// // // // //     }

// // // // //     // Core breathing
// // // // //     if (core.current) {
// // // // //       core.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05)
// // // // //     }

// // // // //     // Text float
// // // // //     if (text.current) {
// // // // //       text.current.position.y = Math.sin(t * 1.5) * 0.12
// // // // //     }
// // // // //   })

// // // // //   return (
// // // // //     <>
// // // // //       {/* LIGHTING */}
// // // // //       <ambientLight intensity={0.05} />
// // // // //       <pointLight position={[0, 0, 4]} intensity={3} color="#00ffd5" />
// // // // //       <pointLight position={[3, 2, -2]} intensity={1.5} color="#6affff" />

// // // // //       {/* ENV */}
// // // // //       <Environment preset="night" />

// // // // //       {/* PARTICLES */}
// // // // //       <Sparkles
// // // // //         count={180}
// // // // //         scale={[10, 6, 6]}
// // // // //         size={2}
// // // // //         speed={0.4}
// // // // //         color="#5fffe9"
// // // // //       />

// // // // //       <Center>
// // // // //         <group ref={group}>
// // // // //           {/* AI CORE */}
// // // // //           <mesh ref={core}>
// // // // //             <sphereGeometry args={[0.45, 64, 64]} />
// // // // //             <meshStandardMaterial
// // // // //               color="#00ffd5"
// // // // //               emissive="#00ffd5"
// // // // //               emissiveIntensity={2.5}
// // // // //               roughness={0.15}
// // // // //               metalness={0.2}
// // // // //             />
// // // // //           </mesh>

// // // // //           {/* ENERGY RINGS */}
// // // // //           {[1.2, 1.6, 2.0].map((r, i) => (
// // // // //             <Ring
// // // // //               key={i}
// // // // //               args={[r, r + 0.02, 128]}
// // // // //               rotation={[Math.PI / 2, 0, i * 0.6]}
// // // // //             >
// // // // //               <meshBasicMaterial
// // // // //                 color="#00ffd5"
// // // // //                 transparent
// // // // //                 opacity={0.25}
// // // // //               />
// // // // //             </Ring>
// // // // //           ))}

// // // // //           {/* TITLE */}
// // // // //           <group ref={text} position={[0, -1.2, 0]}>
// // // // //             <Text
// // // // //               fontSize={1.25}
// // // // //               letterSpacing={-0.04}
// // // // //               anchorX="center"
// // // // //               anchorY="middle"
// // // // //             >
// // // // //               Dx Assist
// // // // //               <meshStandardMaterial
// // // // //                 color="#eafffb"
// // // // //                 emissive="#00ffd5"
// // // // //                 emissiveIntensity={0.8}
// // // // //                 metalness={0.6}
// // // // //                 roughness={0.2}
// // // // //               />
// // // // //             </Text>

// // // // //             {/* TEXT GLOW */}
// // // // //             <Text
// // // // //               fontSize={1.3}
// // // // //               letterSpacing={-0.04}
// // // // //               position={[0, 0, -0.1]}
// // // // //             >
// // // // //               Dx Assist
// // // // //               <meshStandardMaterial
// // // // //                 color="#00ffd5"
// // // // //                 emissive="#00ffd5"
// // // // //                 emissiveIntensity={2}
// // // // //                 transparent
// // // // //                 opacity={0.25}
// // // // //               />
// // // // //             </Text>
// // // // //           </group>
// // // // //         </group>
// // // // //       </Center>
// // // // //     </>
// // // // //   )
// // // // // }
// // // // "use client"

// // // // import { useRef, useMemo } from "react"
// // // // import { useFrame } from "@react-three/fiber"
// // // // import { Center, Text, Environment, Sparkles } from "@react-three/drei"
// // // // import * as THREE from "three"

// // // // /* ======================
// // // //    CUSTOM ENERGY SHADER
// // // // ====================== */
// // // // const EnergyMaterial = {
// // // //   uniforms: {
// // // //     time: { value: 0 },
// // // //     color: { value: new THREE.Color("#00ffe1") }
// // // //   },
// // // //   vertexShader: `
// // // //     varying vec2 vUv;
// // // //     varying float vNoise;
// // // //     uniform float time;

// // // //     float noise(vec3 p){
// // // //       return sin(p.x) * sin(p.y) * sin(p.z);
// // // //     }

// // // //     void main() {
// // // //       vUv = uv;
// // // //       vec3 p = position;
// // // //       vNoise = noise(p + time * 0.8);
// // // //       p += normal * vNoise * 0.35;
// // // //       gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
// // // //     }
// // // //   `,
// // // //   fragmentShader: `
// // // //     varying vec2 vUv;
// // // //     varying float vNoise;
// // // //     uniform vec3 color;

// // // //     void main() {
// // // //       float glow = smoothstep(0.0, 1.0, vNoise);
// // // //       gl_FragColor = vec4(color * glow * 1.6, 1.0);
// // // //     }
// // // //   `
// // // // }

// // // // export default function Scene() {
// // // //   const core = useRef()
// // // //   const shader = useRef()

// // // //   const energyMat = useMemo(
// // // //     () =>
// // // //       new THREE.ShaderMaterial({
// // // //         ...EnergyMaterial,
// // // //         transparent: false,
// // // //       }),
// // // //     []
// // // //   )

// // // //   useFrame((state) => {
// // // //     const t = state.clock.elapsedTime
// // // //     if (shader.current) shader.current.uniforms.time.value = t
// // // //     if (core.current) core.current.rotation.y += 0.003
// // // //   })

// // // //   return (
// // // //     <>
// // // //       {/* DEEP CINEMA LIGHT */}
// // // //       <ambientLight intensity={0.02} />
// // // //       <pointLight position={[0, 0, 4]} intensity={4} color="#00ffe1" />
// // // //       <pointLight position={[3, -2, -3]} intensity={2} color="#5fffff" />

// // // //       <Environment preset="night" />

// // // //       {/* DATA STORM */}
// // // //       <Sparkles
// // // //         count={350}
// // // //         scale={[14, 8, 8]}
// // // //         size={1.5}
// // // //         speed={0.8}
// // // //         color="#7ffff2"
// // // //       />

// // // //       <Center>
// // // //         <group>
// // // //           {/* ENERGY CORE */}
// // // //           <mesh ref={core}>
// // // //             <icosahedronGeometry args={[1.2, 32]} />
// // // //             <primitive ref={shader} attach="material" object={energyMat} />
// // // //           </mesh>

// // // //           {/* TITLE EMERGES */}
// // // //           <group position={[0, -2.4, 0]}>
// // // //             <Text
// // // //               fontSize={1.35}
// // // //               letterSpacing={-0.06}
// // // //               anchorX="center"
// // // //               anchorY="middle"
// // // //             >
// // // //               Dx Assist
// // // //               <meshStandardMaterial
// // // //                 color="#eafffb"
// // // //                 emissive="#00ffe1"
// // // //                 emissiveIntensity={1.2}
// // // //                 metalness={0.7}
// // // //                 roughness={0.18}
// // // //               />
// // // //             </Text>

// // // //             <Text
// // // //               fontSize={1.45}
// // // //               letterSpacing={-0.06}
// // // //               position={[0, 0, -0.15]}
// // // //             >
// // // //               Dx Assist
// // // //               <meshStandardMaterial
// // // //                 color="#00ffe1"
// // // //                 emissive="#00ffe1"
// // // //                 emissiveIntensity={3}
// // // //                 transparent
// // // //                 opacity={0.18}
// // // //               />
// // // //             </Text>
// // // //           </group>
// // // //         </group>
// // // //       </Center>
// // // //     </>
// // // //   )
// // // // }
// // // "use client"

// // // import { useRef } from "react"
// // // import { useFrame } from "@react-three/fiber"
// // // import { Environment, Float, Sparkles } from "@react-three/drei"
// // // import * as THREE from "three"

// // // export default function Scene() {
// // //   const ribbon1 = useRef()
// // //   const ribbon2 = useRef()

// // //   useFrame((state) => {
// // //     const t = state.clock.elapsedTime

// // //     if (ribbon1.current) {
// // //       ribbon1.current.rotation.y = t * 0.12
// // //       ribbon1.current.rotation.z = Math.sin(t * 0.6) * 0.2
// // //     }

// // //     if (ribbon2.current) {
// // //       ribbon2.current.rotation.y = -t * 0.1
// // //       ribbon2.current.rotation.x = Math.sin(t * 0.5) * 0.25
// // //     }
// // //   })

// // //   return (
// // //     <>
// // //       {/* SOFT CINEMA LIGHT */}
// // //       <ambientLight intensity={0.25} />
// // //       <directionalLight position={[6, 8, 6]} intensity={2.2} />
// // //       <pointLight position={[-4, -2, 4]} intensity={1.6} />

// // //       {/* REALISTIC ENV */}
// // //       <Environment preset="studio" />

// // //       {/* PARTICLE DUST (BIO DATA FEEL) */}
// // //       <Sparkles
// // //         count={160}
// // //         scale={[12, 6, 6]}
// // //         size={1.8}
// // //         speed={0.3}
// // //         color="#bffcf5"
// // //       />

// // //       {/* LIQUID LIGHT RIBBON 1 */}
// // //       <Float speed={0.8} floatIntensity={0.6} rotationIntensity={0.3}>
// // //         <mesh ref={ribbon1}>
// // //           <torusKnotGeometry args={[1.2, 0.25, 260, 24]} />
// // //           <meshPhysicalMaterial
// // //             color="#d9f7f3"
// // //             metalness={0.3}
// // //             roughness={0.12}
// // //             transmission={0.9}
// // //             thickness={0.4}
// // //             clearcoat={1}
// // //             clearcoatRoughness={0.1}
// // //           />
// // //         </mesh>
// // //       </Float>

// // //       {/* LIQUID LIGHT RIBBON 2 */}
// // //       <Float speed={1.1} floatIntensity={0.4} rotationIntensity={0.4}>
// // //         <mesh ref={ribbon2} scale={0.85}>
// // //           <torusKnotGeometry args={[1.4, 0.18, 260, 24]} />
// // //           <meshPhysicalMaterial
// // //             color="#e6fffb"
// // //             metalness={0.25}
// // //             roughness={0.15}
// // //             transmission={0.95}
// // //             thickness={0.5}
// // //             clearcoat={1}
// // //             clearcoatRoughness={0.12}
// // //           />
// // //         </mesh>
// // //       </Float>
// // //     </>
// // //   )
// // // }
// // "use client"

// // import { useRef } from "react"
// // import { useFrame } from "@react-three/fiber"
// // import { Center, Text, Environment } from "@react-three/drei"
// // import * as THREE from "three"

// // export default function Scene() {
// //   const smoke1 = useRef()
// //   const smoke2 = useRef()
// //   const textRef = useRef()

// //   useFrame((state) => {
// //     const t = state.clock.elapsedTime

// //     // Smoke slow movement
// //     if (smoke1.current) {
// //       smoke1.current.rotation.z = t * 0.02
// //       smoke1.current.material.opacity =
// //         0.35 + Math.sin(t * 0.6) * 0.05
// //     }

// //     if (smoke2.current) {
// //       smoke2.current.rotation.z = -t * 0.015
// //       smoke2.current.material.opacity =
// //         0.25 + Math.cos(t * 0.5) * 0.05
// //     }

// //     // Text gentle floating
// //     if (textRef.current) {
// //       textRef.current.position.y = Math.sin(t * 0.6) * 0.06
// //       textRef.current.material.opacity =
// //         0.85 + Math.sin(t * 0.8) * 0.1
// //     }
// //   })

// //   return (
// //     <>
// //       {/* LIGHTING */}
// //       <ambientLight intensity={0.2} />
// //       <directionalLight position={[4, 6, 5]} intensity={2} />
// //       <pointLight position={[-3, 2, 4]} intensity={1.2} />

// //       <Environment preset="studio" />

// //       {/* SMOKE LAYER BACK */}
// //       <mesh ref={smoke1} position={[0, 0, -1]}>
// //         <planeGeometry args={[8, 4]} />
// //         <meshBasicMaterial
// //           transparent
// //           depthWrite={false}
// //           opacity={0.35}
// //           color="#dfe7e5"
// //         />
// //       </mesh>

// //       {/* SMOKE LAYER FRONT */}
// //       <mesh ref={smoke2} position={[0, 0.2, -0.8]}>
// //         <planeGeometry args={[7, 3.5]} />
// //         <meshBasicMaterial
// //           transparent
// //           depthWrite={false}
// //           opacity={0.25}
// //           color="#f0f5f4"
// //         />
// //       </mesh>

// //       {/* TEXT */}
// //       <Center>
// //         <Text
// //           ref={textRef}
// //           fontSize={1.3}
// //           letterSpacing={-0.03}
// //           anchorX="center"
// //           anchorY="middle"
// //         >
// //           Dx Assist
// //           <meshStandardMaterial
// //             color="#ffffff"
// //             emissive="#9ee7dc"
// //             emissiveIntensity={0.6}
// //             metalness={0.2}
// //             roughness={0.3}
// //             transparent
// //             opacity={0.9}
// //           />
// //         </Text>
// //       </Center>
// //     </>
// //   )
// // }
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
