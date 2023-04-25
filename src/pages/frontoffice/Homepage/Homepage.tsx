import { useRef, useEffect } from "react";
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../../assets/font/style.css";
import { gsap } from "gsap";
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
  const hiddenText = useRef(null);
  useEffect(() => {
    const el = hiddenText.current;
    gsap.fromTo(
      el,
      {
        y: "360",
      },
      {
        y: "100",
        duration: 3,
        ease: "none",
      }
    );
  }, []);
  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center h-screen w-full absolute  top-0 left-0 min-h-[650px]">
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
      <div
        style={{ fontFamily: "CustomFont" }}
        className="text-md sm:text-3xl absolute bottom-24 w-full text-center"
      >
        <div
          id="text-1"
          className="bg-lime-500 "
          style={{ zIndex: -1 }}
          ref={hiddenText}
        >
          {t("home.trad1")}
          <br className="sr-only sm:not-sr-only absolute" /> {t("home.trad2")}
        </div>
        <div id="cache" className="bg-red-800 h-16" style={{ zIndex: 2 }}>
          rouge rouge
        </div>
      </div>
    </>
  );
}
