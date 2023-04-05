import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
// import SphereThreeModel from "../../components/three-model/SphereThreeModel";
import { Environment } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      <div className=" h-screen flex flex-col justify-center items-center min-h-[940px]">
        <Canvas>
          <Suspense fallback={null}>
            {/* <SphereThreeModel /> */}
            <Environment preset="sunset" background />
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
