import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

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
    "models/bracelet/Bracelet.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Circle002.geometry}
        material={materials["Scratched Gold"]}
        position={[-0.27, 2.17, 0.1]}
        rotation={[2.48, 0, -1.91]}
        scale={0.08}
      />
    </group>
  );
}

useGLTF.preload("models/bracelet/Bracelet.glb");
