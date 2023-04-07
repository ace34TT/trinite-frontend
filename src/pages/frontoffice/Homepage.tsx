import { Suspense, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Html, useProgress } from "@react-three/drei";
// import SphereThreeModel from "../../components/three-model/SphereThreeModel";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Model } from "../../components/three-model/Bracelet";

export default function Homepage() {
  const { progress } = useProgress();
  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      {progress < 100 ? (
        <div
          className="flex flex-1 flex-col items-center justify-center  text-9xl"
          style={{ height: "calc(100vh - 200px)" }}
        >
          <div>{progress} %</div>
        </div>
      ) : (
        <div
          className=" h-screen flex flex-col justify-center items-center pb-7"
          style={{ height: "calc(100vh - 200px)" }}
        >
          <div className="w-[100%] h-[70%]">
            <Canvas>
              <PerspectiveCamera position={[0, 0, 0]} />
              <OrbitControls
                enableZoom={false}
                minPolarAngle={1}
                maxPolarAngle={1.5}
              />
              <Suspense fallback={null}>
                <Model />
                <Environment preset="warehouse" />
              </Suspense>
            </Canvas>
          </div>
          <div className="text-3xl text-center mb-5">
            Entre tradition et modernité symbole fort de liberté <br /> et
            d’émancipation
          </div>
        </div>
      )}
    </>
  );
}
