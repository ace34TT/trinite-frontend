import { Suspense, useRef, useState } from "react";
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
import { Model as Model2 } from "./../../../components/three-model/Braccelet2";
import "./style.css";

export default function Homepage() {
  const { t } = useTranslation();
  const [activeModel, setActiveModel] = useState(0);
  const handleActiveModel = () => {
    activeModel === 0 ? setActiveModel(1) : setActiveModel(0);
  };
  //
  const groupRef = useRef<THREE.Group>(null);

  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center h-screen w-full absolute  top-0 left-0 min-h-[650px]">
        <div></div>
        <Canvas>
          <PerspectiveCamera position={[0, 0, 0]} />
          <OrthographicCamera
            position={[0, 0, 100]}
            zoom={90}
            near={0.1}
            far={5000}
            makeDefault // this line will make this camera the default camera for the scene
          />
          <OrbitControls enablePan={false} maxZoom={150} minZoom={50} />
          <group ref={groupRef}>
            {activeModel === 0 ? <Model /> : <Model2 />}
            <Environment preset="warehouse" />
          </group>
          {/* <Suspense fallback={null}>
            {activeModel === 0 ? <Model /> : <Model2 />}
            <Environment preset="warehouse" />
          </Suspense> */}
        </Canvas>
      </div>
      <div
        style={{ fontFamily: "CustomFont" }}
        className="text-md sm:text-3xl absolute bottom-28 w-full text-center"
      >
        <div className=" flex justify-center ">
          {activeModel === 0 ? (
            <div
              onClick={() => {
                handleActiveModel();
              }}
              className="w-7 h-7 rounded-full border-4 border-white bg-yellow-100 transition-transform duration-300 hover:scale-110"
            ></div>
          ) : (
            <div
              className="w-7 h-7 rounded-full border-4 border-white bg-gradient-to-br from-pink-400 via-yellow-100 to-gray-300 transition-transform duration-300 hover:scale-110"
              onClick={() => {
                handleActiveModel();
              }}
            ></div>
          )}
        </div>
        {t("home.trad1")}
        <br className="sr-only sm:not-sr-only" /> {t("home.trad2")}
      </div>
    </>
  );
}
