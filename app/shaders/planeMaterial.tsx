import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from "three";

export const PlaneMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  // vertex shader
  /*glsl*/`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/`
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(color, 0.5);
    }
  `
)



export type PlaneMaterialImpl = {
  color?: THREE.Color;
  time?: number;
} & JSX.IntrinsicElements["shaderMaterial"];

declare global {
  namespace JSX {
    interface IntrinsicElements {
      planeMaterial: PlaneMaterialImpl;
    }
  }
}

// declaratively
extend({ PlaneMaterial })

// <mesh>
//   <colorShiftMaterial color="hotpink" time={1} />
// </mesh>

// // imperatively, all uniforms are available as setter/getters and constructor args
// const material = new ColorShiftMaterial({ color: new THREE.Color("hotpink") })
// material.time = 1