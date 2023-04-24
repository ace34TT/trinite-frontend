/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Bracelet-compressed.glb --types
*/

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "react-three-fiber";
import { useWindowSize } from "react-use";

type GLTFResult = GLTF & {
  nodes: {
    Circle002: THREE.Mesh;
  };
  materials: {
    ["Scratched Gold"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const [scale, setScale] = useState(3.5);
  const { width } = useWindowSize();
  const { nodes, materials } = useGLTF(
    "models/final/Bracelet-compressed.glb"
  ) as GLTFResult;

  const groupRef = useRef<THREE.Group>(null);
  const [cursorX, setCursorX] = useState(0);
  useEffect(() => {
    if (width < 768) {
      setScale(1.8);
    } else {
      setScale(3);
    }
  }, [width]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  useFrame(({ mouse }) => {
    const { y } = mouse;
    if (groupRef.current) {
      groupRef.current.rotation.x = y * Math.PI * -0.1;
    }
  });

  useFrame(({ mouse }) => {
    // Update the cursorX state based on the horizontal movement of the mouse
    setCursorX(mouse.x);
    // Calculate the target rotation speed based on the cursorX value
    const targetRotationSpeed = cursorX * 0.2;
    if (groupRef.current) {
      const currentRotationSpeed = THREE.MathUtils.lerp(
        groupRef.current.userData.rotationSpeed,
        targetRotationSpeed,
        0.1
      );
      groupRef.current.userData.rotationSpeed = currentRotationSpeed;
    }
  });
  return (
    <>
      <group ref={groupRef} {...props} dispose={null}>
        <mesh
          geometry={nodes.Circle002.geometry}
          material={materials["Scratched Gold"]}
          position={[0, -0.2, 0]}
          rotation={[1.8, 0, 1.2]}
          scale={scale}
        />
      </group>
    </>
  );
}

useGLTF.preload("models/final/Bracelet-compressed.glb");
