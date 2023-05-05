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
import { Model as Model2 } from "../../../components/three-model/Bracelet2";
import { Model as Model3 } from "../../../components/three-model/Bracelet3";
import "./style.css";
import { gsap } from "gsap";
import { RectAreaLight } from "three";
import { Diamond } from "../../../components/three-model/Diamond";

export default function Homepage() {
  const { t } = useTranslation();
  const [activeModel, setActiveModel] = useState(0);
  const textHiddenRef = useRef(null);
  const handleActiveModel = () => {
    activeModel === 0 ? setActiveModel(1) : setActiveModel(0);
  };
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

  const childRef = useRef<any>(null);
  //
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Start measuring time
    const t0 = performance.now();

    // Simulate fetching data
    setTimeout(() => {
      setData("Data loaded");
      // Stop measuring time
      const t1 = performance.now();
      // Calculate and log the time it took to update the component
      console.log(`Component update took ${t1 - t0} milliseconds.`);
    }, 1000);
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
          <OrbitControls enablePan={false} />
          <Suspense fallback={null}>
            {/* <Model3></Model3> */}
            <Diamond></Diamond>
            {/* {!isMobile ? (
              <>
                {activeModel === 0 ? (
                  <Model ref={childRef} />
                ) : (
                  <Model2 ref={childRef} />
                )}
              </>
            ) : (
              <Model ref={childRef} />
            )} */}
            <Environment preset="forest" background />
          </Suspense>
        </Canvas>
      </div>
      <div
        style={{ fontFamily: "CustomFont" }}
        className="text-md sm:text-3xl absolute bottom-20 w-full text-center"
      >
        {!isMobile ? (
          <div className="mb-10 flex justify-center ">
            {activeModel === 0 ? (
              <div
                onClick={() => {
                  handleActiveModel();
                  childRef!.current!.getAlert();
                }}
                className="w-7 h-7 rounded-full border-2 border-yellow-900 bg-yellow-100 transition-transform duration-300 hover:scale-110"
              ></div>
            ) : (
              <div
                className="w-7 h-7 rounded-full border-2 border-pink-900 bg-gradient-to-br from-pink-400 via-yellow-100 to-gray-300 transition-transform duration-300 hover:scale-110"
                onClick={() => {
                  handleActiveModel();
                }}
              ></div>
            )}
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
