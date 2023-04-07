import { Suspense, useRef } from "react";
import { Helmet } from "react-helmet";
// import SphereThreeModel from "../../components/three-model/SphereThreeModel";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useEnvironment,
  useFBO,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Model } from "../../components/three-model/Bracelet";

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      <div className=" h-screen flex flex-col justify-center items-center ">
        <Canvas>
          <PerspectiveCamera position={[0, 0, 0]} />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={1}
            maxPolarAngle={1.5}
          />
          {/* <axesHelper />
          <gridHelper args={[10, 10]} /> */}
          <Suspense fallback={null}>
            <Model />
            <Environment preset="warehouse" />
          </Suspense>
        </Canvas>
        <div className="text-3xl text-center">
          Entre tradition et modernité symbole fort de liberté <br /> et
          d’émancipation
        </div>
      </div>
    </>
  );
}
