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

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      <div className=" h-screen flex flex-col justify-center items-center ">
        <Canvas>
          <PerspectiveCamera position={[0, 0, 0]} />
          <OrbitControls enableZoom={false} />
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
