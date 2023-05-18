import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "./../../../assets/logo/logo-trinité.png";
import { Helmet } from "react-helmet";
import { useGLTF, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDispatch } from "react-redux";
import { setPreloading } from "../../../features/preloading.feature";

export default function Portal() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  //
  const { progress } = useProgress();
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        setPercentage(i);
      }, i * 600);
    }
  }, []);
  const controls = useAnimation();
  const onAnimationComplete = () => {
    navigate("/accueil");
  };
  const handleClick = async () => {
    controls.start({
      opacity: 1,
      scale: 50,
      transition: { duration: 0.5, onComplete: onAnimationComplete },
    }); // Scale back down to 1
  };
  return (
    <>
      <Helmet>
        <title>Trinité</title>
      </Helmet>
      <motion.div>
        {progress < 100 ? (
          // Show loading screen when isLoading is true
          <div className="h-screen w-screen flex items-center justify-center  text-9xl bg-black text-white">
            <div id="loader">{percentage} %</div>
          </div>
        ) : (
          // Render the Portal content when the model finishes loading
          <div className="h-screen w-screen flex flex-col justify-center gap-32 sm:gap-52 items-center dark:bg-black">
            {/* <> {dispatch(setPreloading())}</> */}
            <div className="sr-only sm:not-sr-only"></div>
            <div className="text-white flex flex-col-reverse sm:flex-row items-center gap-16 sm:gap-32">
              <img src={logo} className="h-28 sm:h-32" alt="" />
              <div className="the-house text-2xl sm:text-4xl hiragino-font">
                MAISON <br /> DE HAUTE <br /> JOAILLERIE
              </div>
            </div>
            <div className="actions flex items-center gap-5 text-white font-light text-3xl">
              <div
                className="p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
                onClick={() => {
                  handleClick();
                }}
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
      </motion.div>
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={controls}
        className="absolute bottom-0 left-1/2 w-32 h-32 rounded-full bg-white transform -translate-x-1/2"
      ></motion.div>
    </>
  );
}
