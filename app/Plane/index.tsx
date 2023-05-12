"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, ShaderMaterial } from "three";
import { PlaneMaterial, PlaneMaterialImpl } from "../shaders/planeMaterial";

type Props = {};

export const Plane = (props: Props) => {
  const planeMaterial = useRef<ShaderMaterial & PlaneMaterialImpl>(null);

  useFrame(({ clock }) => {
    if (!planeMaterial.current) return;
    planeMaterial.current.time = clock.getElapsedTime() * 0.02;
  });

  return (
    <mesh>
      <planeGeometry args={[10, 10, 300, 300]} />
      <planeMaterial
        key={PlaneMaterial.key}
        ref={planeMaterial}
        // wireframe
        color={[new Color("yellow"), new Color("red"), new Color("white")]}
      />
    </mesh>
  );
};
