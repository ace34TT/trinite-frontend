import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./../../assets/font/style.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  require("./../../assets/deco/image 40.png"),
  require("./../../assets/deco/image 41.png"),
  require("./../../assets/deco/image 42.png"),
];

export default function OurHouse() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1, // trigger animation when element is 50% visible
    triggerOnce: true, // only trigger animation once
  });
  return (
    <>
      <Helmet>
        <title>Trinité - La Maison</title>
      </Helmet>
      <div
        style={{ fontFamily: "CustomFont" }}
        className="flex justify-center py-0 sm:py-16 prose max-w-none text-md sm:text-2xl w-screen"
      >
        <div className="w-10/12 sm:w-4/12 text-black dark:text-white leading-5 sm:leading-snug ">
          <p>
            {t("OurHouse.trad1")}
            <br />
            <span className="relative">
              <motion.img
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                initial={{
                  x: -500,
                  y: -1000,
                  rotate: 320,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
                //
                style={{ transformOrigin: "50% 50%" }}
                className="absolute top-0 -left-96 2xl:-left-[600px] md w-11/12  m-0 hidden sm:block"
                src={images[0]}
                alt=""
              />
              {t("OurHouse.trad2")}
            </span>
          </p>
          <br />

          <p>{t("OurHouse.trad3")}</p>
          <p>{t("OurHouse.trad4")}</p>
          <br />
          <p>
            <span className="relative">
              <motion.img
                whileHover={{ scale: 1.2 }}
                ref={ref}
                initial={{
                  x: -500,
                  y: 1000,
                  rotate: 250,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
                //
                style={{ transformOrigin: "50% 50%" }}
                className="absolute top-0 -left-96 2xl:-left-[550px] w-[300px] 2xl:w-[500px] m-0 hidden sm:block"
                src={images[2]}
                alt=""
              />
              {t("OurHouse.trad2")} {t("OurHouse.trad5")}
            </span>
          </p>
          <p>{t("OurHouse.trad6")}</p>
          <br />
          <p>
            <span className="relative">
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                whileTap={{ scale: 0.8 }}
                initial={{
                  x: 500,
                  y: -100,
                  rotate: 40,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
                //
                style={{ transformOrigin: "50% 50%" }}
                className="absolute -top-40 -right-[450px] 2xl:-right-[620px] w-96 2xl:w-[500px] m-0 hidden sm:block"
                src={images[1]}
                alt=""
              />
              {t("OurHouse.trad7")}
            </span>
          </p>
          <p>{t("OurHouse.trad8")}</p>
        </div>
      </div>
    </>
  );
}
