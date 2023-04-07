/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Bracelet-compressed.glb --types
*/

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group } from "three";
import { useFrame, useThree } from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    Circle002: THREE.Mesh;
  };
  materials: {
    ["Scratched Gold"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "models/final/Bracelet-compressed.glb"
  ) as GLTFResult;

  const groupRef = useRef<THREE.Group>(null);

  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [prevMouseCoords, setPrevMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: { clientX: any; clientY: any }) {
      const { clientX, clientY } = event;
      setPrevMouseCoords(mouseCoords);
      setMouseCoords({ x: clientX, y: clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseCoords]);

  useFrame(() => {
    const { x, y } = mouseCoords;
    const { x: prevX, y: prevY } = prevMouseCoords;
    const group = groupRef.current;

    if (group) {
      const newX = (x / window.innerWidth) * 2 - 1;
      const newY = -(y / window.innerHeight) * 2 + 1;
      const prevXNormalized = (prevX / window.innerWidth) * 2 - 1;
      const prevYNormalized = -(prevY / window.innerHeight) * 2 + 1;

      const maxRotationX = Math.PI / 20;
      const maxRotationY = Math.PI / 20;

      group.rotation.x += -(newY - prevYNormalized) * 0.1;
      group.rotation.y += (newX - prevXNormalized) * 0.1;

      if (group.rotation.x > maxRotationX) {
        group.rotation.x = maxRotationX;
      } else if (group.rotation.x < -maxRotationX) {
        group.rotation.x = -maxRotationX;
      }

      if (group.rotation.y > maxRotationY) {
        group.rotation.y = maxRotationY;
      } else if (group.rotation.y < -maxRotationY) {
        group.rotation.y = -maxRotationY;
      }
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Circle002.geometry}
        material={materials["Scratched Gold"]}
        position={[0, 0, 0]}
        rotation={[1.55, 0, 1.2]}
        scale={3.5}
      />
    </group>
  );
}

useGLTF.preload("models/final/Bracelet-compressed.glb");
