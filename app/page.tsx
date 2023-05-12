"use client"
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei'
import { PlaneMaterial } from "./shaders/planeMaterial";
import { Color } from "three";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-screen h-screen min-h-screen p-24">
      <Canvas camera={
        {
          position: [0, 0, 5],
        }
      }>
      {/* <PerspectiveCamera makeDefault /> */}

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          
        <planeGeometry args={[40, 20]} />
        <planeMaterial key={PlaneMaterial.key}  color={new Color("red")} />

        </mesh>
      </Canvas>
    </main>
  );
}
