import { Suspense, useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../../assets/font/style.css";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Model } from "../../../components/three-model/Bracelet";
import { Model as Model2 } from "../../../components/three-model/TricolorBracelet";
import { Model as Model3 } from "../../../components/three-model/DiamondBracelet";
import "./style.css";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function Homepage() {
  const { t } = useTranslation();
  const [activeModel, setActiveModel] = useState(0);
  const textHiddenRef = useRef(null);
  const theme = useSelector((state: RootState) => state.theme);
  useEffect(() => {
    const el = textHiddenRef.current;
    const hider = document.getElementById("hider");
    if (hider) {
      gsap.fromTo(
        el,
        {
          y: 100,
        },
        {
          y: 0,
          duration: 1,
          ease: "none",
          onComplete: () => {
            hider.style.display = "none";
          },
        }
      );
    }
  }, []);
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const childRef = useRef<THREE.Group>(null);
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
          <OrbitControls enablePan={false} maxZoom={150} minZoom={90} />
          <Suspense fallback={null}>
            {!isMobile ? (
              <>
                {activeModel === 0 ? (
                  <Model ref={childRef} />
                ) : activeModel === 1 ? (
                  <Model2 ref={childRef} />
                ) : activeModel === 2 ? (
                  <Model3 ref={childRef} />
                ) : null}
              </>
            ) : (
              <Model ref={childRef} />
            )}
            <Environment preset="warehouse" />
          </Suspense>
        </Canvas>
      </div>
      <div
        style={{ fontFamily: "CustomFont" }}
        className="text-md sm:text-3xl absolute bottom-20 w-full text-center"
      >
        {!isMobile ? (
          <div className="mb-10 flex justify-center gap-4">
            <div
              onClick={() => {
                setActiveModel(0);
              }}
              className={`w-7 h-7 rounded-full border-2 ${
                theme.currentTheme === "dark"
                  ? activeModel === 0
                    ? "border-white"
                    : "border-black"
                  : activeModel === 0
                  ? "border-black"
                  : "border-white"
              } bg-yellow-900 transition-transform duration-300 hover:scale-110`}
            ></div>
            <div
              className={`w-7 h-7 rounded-full border-2 ${
                theme.currentTheme === "dark"
                  ? activeModel === 1
                    ? "border-white"
                    : "border-black"
                  : activeModel === 1
                  ? "border-black"
                  : "border-white"
              } bg-gradient-to-br from-pink-400 via-yellow-100 to-gray-300 transition-transform duration-300 hover:scale-110`}
              onClick={() => {
                setActiveModel(1);
              }}
            ></div>
            <div
              className={`w-7 h-7 rounded-full border-2 ${
                theme.currentTheme === "dark"
                  ? activeModel === 2
                    ? "border-white"
                    : "border-black"
                  : activeModel === 2
                  ? "border-black"
                  : "border-white"
              } bg-gradient-to-br  from-yellow-100 to-gray-300 transition-transform duration-300 hover:scale-110`}
              onClick={() => {
                setActiveModel(2);
              }}
            ></div>
          </div>
        ) : (
          <></>
        )}
        <div id="text-hidden" ref={textHiddenRef}>
          {t("home.trad1")}
          <br className="sr-only sm:not-sr-only" /> {t("home.trad2")}
        </div>
        <div
          id="hider"
          className="bg-white dark:bg-black  h-40 w-full absolute  left-0 z-10"
        ></div>
      </div>
    </>
  );
}
