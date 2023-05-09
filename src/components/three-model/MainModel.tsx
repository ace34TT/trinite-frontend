import { useGLTF } from "@react-three/drei";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { useWindowSize } from "react-use";
import {
  GLTFResultDiamond,
  GLTFResultStandard,
  GLTFResultTricolor,
} from "./GLTFResults.type";
import { TextureLoader } from "three";

const MainModel = forwardRef((props: JSX.IntrinsicElements["group"], ref) => {
  const [scale, setScale] = useState(3.5);
  const { width } = useWindowSize();

  const standardModel = useGLTF(
    "models/model-1/Bracelet-Gold-transformed.glb"
  ) as GLTFResultStandard;
  const tricolorModel = useGLTF(
    "models/model-2/Bracelet-tricolor-transformed.glb"
  ) as GLTFResultTricolor;
  const diamondModel = useGLTF(
    "models/model-3/Bracelet-with-diamond-transformed.glb"
  ) as GLTFResultDiamond;
  //
  // if (standardModel.materials["Scratched Gold"] && envMap) {
  //   standardModel.materials["Scratched Gold"].envMap = envMap;
  // }
  const groupRef = useRef<THREE.Group>(null);
  //
  useEffect(() => {
    if (width < 768) {
      setScale(0.1);
    } else {
      setScale(0.15);
    }
  }, [width]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });
  useFrame(({ mouse }) => {
    const { y } = mouse;
    if (groupRef.current) {
      groupRef.current.rotation.x = y * Math.PI * -0.1;
    }
  });
  const [activeModel, setActiveModel] = useState(0);
  useImperativeHandle(ref, () => ({
    log(activeModel: number) {
      setActiveModel(activeModel);
    },
  }));
  // const [colorMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
  //   "textures/gold/gold powder coated_baseColor.jpeg",
  //   // "PavingStones092_1K_Displacement.jpg",
  //   "textures/gold/gold powder coated_normal.jpeg",
  //   "textures/gold/gold powder coated_roughness.jpeg",
  //   "textures/gold/gold powder coated_ambientOcclusion.jpeg",
  // ]);
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <>
        {activeModel === 0 ? (
          <group position={[0, -0.2, 0]} rotation={[1.8, 0, 1.2]} scale={scale}>
            <mesh
              geometry={standardModel.nodes.Circle001.geometry}
              material={standardModel.materials["Scratched Gold"]}
            >
              {/* <sphereGeometry args={[10, 100, 100]} /> */}
              {/* <meshStandardMaterial
                map={colorMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap}
                aoMap={aoMap}
              /> */}
            </mesh>
            <mesh
              geometry={standardModel.nodes.Circle001_1.geometry}
              material={standardModel.materials["Scratched Gold"]}
            />
            <mesh
              geometry={standardModel.nodes.Circle001_2.geometry}
              material={standardModel.materials["Scratched Gold"]}
            />
          </group>
        ) : activeModel === 1 ? (
          <group position={[0, -0.2, 0]} rotation={[1.8, 0, 1.2]} scale={scale}>
            <mesh
              geometry={tricolorModel.nodes.Circle001.geometry}
              material={tricolorModel.materials["Scratched Gold"]}
            />
            <mesh
              geometry={tricolorModel.nodes.Circle001_1.geometry}
              material={tricolorModel.materials["Scratched Gold.001"]}
            />
            <mesh
              geometry={tricolorModel.nodes.Circle001_2.geometry}
              material={tricolorModel.materials["Scratched Gold.002"]}
            />
          </group>
        ) : activeModel === 2 ? (
          <>
            <mesh
              geometry={diamondModel.nodes.Diamond.geometry}
              material={diamondModel.materials["Dispersive diamond"]}
              position={[0, -0.2, 0]}
              rotation={[1.8, 0, 1.2]}
              scale={scale}
            />
            <group
              position={[0, -0.2, 0]}
              rotation={[1.8, 0, 1.2]}
              scale={scale}
            >
              <mesh
                geometry={diamondModel.nodes.Circle009_1.geometry}
                material={diamondModel.materials.Material}
              />
              <mesh
                geometry={diamondModel.nodes.Circle009_2.geometry}
                material={diamondModel.materials["Scratched Gold"]}
              />
              <mesh
                geometry={diamondModel.nodes.Circle009_3.geometry}
                material={diamondModel.materials["Scratched Gold"]}
              />
              <mesh
                geometry={diamondModel.nodes.Circle009_4.geometry}
                material={diamondModel.materials["Scratched Gold"]}
              />
            </group>
          </>
        ) : null}
      </>
    </group>
  );
});

export default MainModel;
useGLTF.preload("models/model-1/Bracelet-Gold-transformed.glb");
useGLTF.preload("models/model-2/Bracelet-tricolor-transformed.glb");
useGLTF.preload("models/model-3/Bracelet-with-diamond-transformed.glb");
