import { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useProgress } from "@react-three/drei";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Model } from "../../../components/three-model/Bracelet";
import "./style.css";
export default function Homepage() {
  const { progress } = useProgress();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        setPercentage(i);
      }, i * 600);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      {progress < 100 ? (
        <div
          className="flex flex-1 flex-col items-center justify-center  text-9xl"
          style={{ height: "calc(100vh - 152px)" }}
        >
          <div id="loader">{percentage} %</div>
        </div>
      ) : (
        <div
          className="flex flex-col justify-center items-center pb-7"
          style={{ height: "calc(100vh - 200px)" }}
        >
          <div className="w-[100%] h-[70%]">
            <Canvas>
              <PerspectiveCamera position={[0, 0, 0]} />
              <OrbitControls
                enableZoom={false}
                enableRotate={false}
                enablePan={false}
              />
              <Suspense fallback={null}>
                <Model />
                <Environment preset="warehouse" />
              </Suspense>
            </Canvas>
          </div>
          <div className="text-md sm:text-3xl text-center mb-5 px-5 font-roman">
            Entre tradition et modernité symbole fort de{" "}
            <br className="sr-only sm:not-sr-only" /> liberté et d’émancipation.
          </div>
        </div>
      )}
    </>
  );
}
