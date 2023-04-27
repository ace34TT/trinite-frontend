import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "./../../../assets/logo/logo-trinité.png";
import { Helmet } from "react-helmet";
import { useGLTF, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

export default function Portal() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  //
  const { progress } = useProgress();
  useGLTF.preload("models/final-result/model-1/Bracelet-Gold-transformed.glb");
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
        <title>Trinité</title>
      </Helmet>
      <div>
        {progress < 100 ? (
          // Show loading screen when isLoading is true
          <div className="h-screen w-screen flex items-center justify-center  text-9xl bg-black text-white">
            <div id="loader">{percentage} %</div>
          </div>
        ) : (
          // Render the Portal content when the model finishes loading
          <div className="h-screen w-screen flex flex-col justify-center gap-32 sm:gap-52 items-center dark:bg-black">
            <div className="sr-only sm:not-sr-only"></div>
            <div className="text-white flex flex-col-reverse sm:flex-row items-center gap-16 sm:gap-32">
              <img src={logo} className="h-28 sm:h-32" alt="" />
              <div className="the-house text-2xl sm:text-4xl ">
                MAISON <br /> DE HAUTE <br /> JOAILLERIE
              </div>
            </div>
            <div className="actions flex items-center gap-5 text-white font-light text-3xl">
              <div
                className="p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
                onClick={() => navigate("/accueil")}
              >
                {t("homepage_1")}
              </div>
              <div className="border border-gray-400 h-16"></div>
              <div className="p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out">
                <Link to={"/contact"}>Contact</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
