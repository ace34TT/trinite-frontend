import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Model } from "../../../components/three-model/Bracelet";
import "./style.css";
export default function Homepage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      <div
        className="flex flex-col justify-center items-center"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <div className="w-full h-[80%]">
          <Canvas>
            <PerspectiveCamera position={[0, 0, 0]} />
            <OrthographicCamera
              position={[0, 0, 100]}
              zoom={90}
              near={0.1}
              far={5000}
              makeDefault // this line will make this camera the default camera for the scene
            />
            <OrbitControls
              enableZoom={false}
              // enableRotate={false}
              enablePan={false}
            />
            <Suspense fallback={null}>
              <Model />
              <Environment preset="warehouse" />
            </Suspense>
          </Canvas>
        </div>
        <div className="text-md sm:text-3xl text-center px-5 font-roman">
          {t("home.trad1")}
          <br className="sr-only sm:not-sr-only" /> {t("home.trad2")}
        </div>
      </div>
    </>
  );
}
