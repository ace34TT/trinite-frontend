import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "react-three-fiber";
import { useWindowSize } from "react-use";

type GLTFResult = GLTF & {
  nodes: {
    Circle002: THREE.Mesh;
    Circle003: THREE.Mesh;
    Circle004: THREE.Mesh;
  };
  materials: {
    ["Scratched Gold"]: THREE.MeshStandardMaterial;
    ["Scratched Gold.002"]: THREE.MeshStandardMaterial;
    ["Scratched Gold.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "models/model-2/Bracelet-2-compressed-transformed.glb"
  ) as GLTFResult;

  const [scale, setScale] = useState(3.5);
  const { width } = useWindowSize();

  const groupRef = useRef<THREE.Group>(null);
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

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Circle004.geometry}
        material={materials["Scratched Gold.001"]}
        position={[0.03, 0.595, -0.01]}
        rotation={[1.61, 0, -1.91]}
        scale={scale}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        material={materials["Scratched Gold"]}
        position={[0.03, 0.295, -0.02]}
        rotation={[1.61, 0, -1.91]}
        scale={scale}
      />
      <mesh
        geometry={nodes.Circle003.geometry}
        material={materials["Scratched Gold.002"]}
        position={[0.03, 0, -0.02]}
        rotation={[1.61, 0, -1.91]}
        scale={scale}
      />
    </group>
  );
}

useGLTF.preload("models/model-2/Bracelet-2-compressed-transformed.glb");
