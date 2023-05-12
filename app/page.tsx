"use client";
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Plane } from "./Plane";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-screen h-screen min-h-screen">
      <Canvas
        camera={{
          position: [0, 0, 5],
        }}
      >
        <CameraControls />

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Plane />
      </Canvas>
    </main>
  );
}
