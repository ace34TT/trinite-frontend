import { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useProgress } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import {
  Environment,
  OrbitControls,
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
          {t("home.trad1")}
          <br className="sr-only sm:not-sr-only" /> {t("home.trad2")}
        </div>
      </div>
    </>
  );
}
