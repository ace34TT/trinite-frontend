import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "./../../../assets/logo/logo-trinité.png";
import rightLogo from "./../../../assets/logo/right-logo.png";
import { Helmet } from "react-helmet";
import { useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDispatch } from "react-redux";
import { handleHoveringTitles } from "../../../features/cursor.feature";
export default function Portal() {
  const navigate = useNavigate();
  const { t } = useTranslation();
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

  const handleClick = async (to: string) => {
    controls.start({
      opacity: 1,
      scale: 50,
      transition: { duration: 0.5, onComplete: () => navigate(to) },
    });
  };
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>Trinité</title>
      </Helmet>
      <motion.div>
        {progress < 100 ? (
          <div
            className={`h-screen w-screen flex items-center justify-center  text-9xl bg-black text-white`}
          >
            <div id="loader">{percentage} %</div>
          </div>
        ) : (
          <div className="h-screen w-screen flex flex-col justify-center gap-32 sm:gap-52 items-center dark:bg-black">
            {/* <> {dispatch(setPreloading())}</> */}
            <div className="sr-only sm:not-sr-only"></div>
            <div className="text-white flex flex-col-reverse sm:flex-row items-center gap-16 sm:gap-32">
              <img src={logo} className="h-24 sm:h-32" alt="" />
              <div
                id="text2"
                className="text-2xl uppercase hidden sm:block leading-5 hiragino-font"
                onMouseEnter={() =>
                  dispatch(handleHoveringTitles({ value: true }))
                }
                onMouseLeave={() =>
                  dispatch(handleHoveringTitles({ value: false }))
                }
              >
                Maison <br /> de haute <br /> joaillerie
              </div>
            </div>
            <div className="actions flex items-center gap-5 text-white font-light text-3xl">
              <div
                className="p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
                onClick={() => {
                  handleClick("/accueil");
                }}
              >
                {t("homepage_1")}
              </div>
              <div className="border border-gray-400 h-16"></div>
              <div
                className="p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
                onClick={() => {
                  handleClick("/contact");
                }}
              >
                Contact
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
