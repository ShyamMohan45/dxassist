"use client"

import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"

export default function Three() {
  return (
    <div className="h-full w-full bg-[#020617]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  )
}