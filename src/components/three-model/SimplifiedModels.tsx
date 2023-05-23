import { useGLTF } from "@react-three/drei";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useFrame } from "react-three-fiber";
import { useWindowSize } from "react-use";
import {
  GLTFResultSM1,
  GLTFResultSM2,
  GLTFResultSM3,
} from "./GLTFMinified.type";
import { isMobile } from "react-device-detect";
const SimplifiedModels = forwardRef(
  (props: JSX.IntrinsicElements["group"], ref) => {
    const [scale, setScale] = useState(0.15);
    const { width } = useWindowSize();
    const standardModel = useGLTF(
      "models/model-1-v2/Bracelet-Gold-transformed.glb"
    ) as GLTFResultSM1;
    const tricolorModel = useGLTF(
      "models/model-2-v2/Bracelet-tricolor-transformed.glb"
    ) as GLTFResultSM2;
    const diamondModel = useGLTF(
      "models/model-3-v2/Bracelet-with-diamond-2-transformed.glb"
    ) as GLTFResultSM3;
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
    //

    return (
      <group ref={groupRef} {...props}>
        <>
          {activeModel === 0 ? (
            <group
              position={[0, -0.2, 0]}
              rotation={[1.8, 0, 1.2]}
              scale={scale}
            >
              <mesh
                geometry={standardModel.nodes.Circle001.geometry}
                material={standardModel.materials["Scratched Gold"]}
              />
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
            <group
              position={[0, -0.2, 0]}
              rotation={[1.8, 0, 1.2]}
              scale={scale}
            >
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
              <group
                position={[0, -0.2, 0]}
                rotation={[1.8, 0, 1.2]}
                scale={scale}
              >
                <mesh
                  geometry={diamondModel.nodes.Circle001.geometry}
                  material={diamondModel.materials["Scratched Gold"]}
                />
                <mesh
                  geometry={diamondModel.nodes.Circle001_1.geometry}
                  material={diamondModel.materials["Scratched Gold"]}
                />
                <mesh
                  geometry={diamondModel.nodes.Circle001_2.geometry}
                  material={diamondModel.materials["Scratched Gold"]}
                />
              </group>
              <mesh
                geometry={diamondModel.nodes.Circle016.geometry}
                material={diamondModel.materials.Material}
                position={[0, -0.2, 0]}
                rotation={[1.8, 0, 1.2]}
                scale={scale}
              />
            </>
          ) : (
            <></>
          )}
        </>
      </group>
    );
  }
);
export default SimplifiedModels;
if (!isMobile) {
  useGLTF.preload("models/model-1-v2/Bracelet-Gold-transformed.glb");
  useGLTF.preload("models/model-2-v2/Bracelet-tricolor-transformed.glb");
  useGLTF.preload("models/model-3-v2/Bracelet-with-diamond-2-transformed.glb");
}
