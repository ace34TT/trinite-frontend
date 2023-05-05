import * as THREE from "three";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "react-three-fiber";
import { useWindowSize } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setRotation } from "../../features/rotation.feature";

type GLTFResult = GLTF & {
  nodes: {
    Circle002: THREE.Mesh;
    Circle002_1: THREE.Mesh;
    Circle002_2: THREE.Mesh;
  };
  materials: {
    ["Scratched Gold.001"]: THREE.MeshStandardMaterial;
    ["Scratched Gold"]: THREE.MeshStandardMaterial;
    ["Scratched Gold.002"]: THREE.MeshStandardMaterial;
  };
};

export const Model = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    "models/final-result/model-2/Bracelet-transformed.glb"
  ) as GLTFResult;
  const rotation = useSelector((state: RootState) => state.rotation);
  const dispatch = useDispatch();
  const [scale, setScale] = useState(3.5);
  const { width } = useWindowSize();
  const groupRef = useRef<THREE.Group>(null);
  useEffect(() => {
    if (width < 768) {
      setScale(0.1);
    } else {
      setScale(0.15);
    }
  }, [width]);

  // useFrame(() => {
  //   if (groupRef.current) {
  //     groupRef.current.rotation.y += 0.01;
  //   }
  // });

  // useFrame(({ mouse }) => {
  //   const { y } = mouse;
  //   if (groupRef.current) {
  //     groupRef.current.rotation.x = y * Math.PI * -0.1;
  //   }
  // });
  //

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group
        position={[0, -0.2, 0]}
        rotation={[rotation.x, rotation.y, rotation.z]}
        scale={scale}
      >
        <mesh
          geometry={nodes.Circle002.geometry}
          material={materials["Scratched Gold.001"]}
        />
        <mesh
          geometry={nodes.Circle002_1.geometry}
          material={materials["Scratched Gold"]}
        />
        <mesh
          geometry={nodes.Circle002_2.geometry}
          material={materials["Scratched Gold.002"]}
        />
      </group>
    </group>
  );
});

useGLTF.preload("models/final-result/model-2/Bracelet-transformed.glb");
