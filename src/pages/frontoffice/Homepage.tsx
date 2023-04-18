import { Helmet } from "react-helmet";
// import SphereThreeModel from "../../components/three-model/SphereThreeModel";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Model } from "../../components/three-model/Bracelet";
import { Suspense } from "react";

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      <div
        className=" h-screen flex flex-col justify-center items-center pb-7"
        style={{ height: "calc(100vh - 152px)" }}
      >
        <div className="w-[100%] h-[70%] relative">
          {/* <ModelViewer /> */}
          <Canvas>
            <PerspectiveCamera position={[0, 0, 0]} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
              <Model />
              <Environment preset="warehouse" />
            </Suspense>
          </Canvas>
        </div>
        <div className="text-3xl text-center mb-5">
          Entre tradition et modernité symbole fort de liberté <br /> et
          d’émancipation .
        </div>
      </div>
    </>
  );
}
