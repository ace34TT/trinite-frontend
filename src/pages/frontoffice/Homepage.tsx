import { Suspense } from "react";
import { Helmet } from "react-helmet";
// import SphereThreeModel from "../../components/three-model/SphereThreeModel";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Model } from "../../components/three-model/Bracelet";
// import { Model } from "../../components/three-model/MainModel";

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      <div className=" h-screen flex flex-col justify-center items-center min-h-[500px]">
        <Canvas>
          <PerspectiveCamera position={[0, 0, 10]} />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={1.5}
            maxPolarAngle={1.5}
          />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="sunset" />
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
