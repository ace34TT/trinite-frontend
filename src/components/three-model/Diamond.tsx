import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cone: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export function Diamond(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Diamond (1).gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials.Material}
        position={[0, 0.98, 0]}
        rotation={[Math.PI, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Diamond (1).gltf");
