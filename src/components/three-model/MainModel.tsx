import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "react-three-fiber";
import { Group } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_27: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshBasicMaterial;
    ["Q12113-2-3"]: THREE.MeshBasicMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "models/frog/japanese_toad_bufo_japonicus-transformed.glb"
  ) as GLTFResult;

  const modelRef = useRef<Group>(null);
  const rotationSpeed = 0.005;
  // use the useFrame hook to update the rotation of the model on every frame
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed * clock.getDelta(); // increment rotation angle by a fixed amount
      if (modelRef.current.rotation.y > Math.PI * 2) {
        modelRef.current.rotation.y -= Math.PI * 2; // wrap the angle to keep it within 0 to 2*PI range
      }
    }
  });
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group rotation={[0.54, -0.59, -0.1]} scale={0.5}>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials["Q12113-2-3"]}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials["Q12113-2-3"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
        position={[0.12, 0, 0]}
        rotation={[0.38, 1.57, -1.95]}
        scale={0}
      />
    </group>
  );
}

useGLTF.preload("models/frog/japanese_toad_bufo_japonicus-transformed.glb");
