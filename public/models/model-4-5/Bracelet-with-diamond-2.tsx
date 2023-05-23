/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Bracelet-with-diamond-2.glb --transform --types
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Circle001: THREE.Mesh
    Circle001_1: THREE.Mesh
    Circle001_2: THREE.Mesh
    Circle016: THREE.Mesh
  }
  materials: {
    ['Scratched Gold']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Bracelet-with-diamond-2-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-0.05, 0.42, -0.43]} rotation={[-1.57, 0, -1.91]} scale={0.08}>
        <mesh geometry={nodes.Circle001.geometry} material={materials['Scratched Gold']} />
        <mesh geometry={nodes.Circle001_1.geometry} material={materials['Scratched Gold']} />
        <mesh geometry={nodes.Circle001_2.geometry} material={materials['Scratched Gold']} />
      </group>
      <mesh geometry={nodes.Circle016.geometry} material={materials.Material} position={[-0.05, 0.42, -0.43]} rotation={[-1.57, 0, -1.92]} scale={0.08} />
    </group>
  )
}

useGLTF.preload('/Bracelet-with-diamond-2-transformed.glb')
