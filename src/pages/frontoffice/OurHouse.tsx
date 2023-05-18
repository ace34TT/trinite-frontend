import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./../../assets/font/style.css";
import { motion } from "framer-motion";

const images = [
  require("./../../assets/deco/image 40.png"),
  require("./../../assets/deco/image 41.png"),
  require("./../../assets/deco/image 42.png"),
];

export default function OurHouse() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Trinité - La Maison</title>
      </Helmet>
      <div
        style={{ fontFamily: "CustomFont" }}
        className="flex justify-center py-0 sm:py-16 prose max-w-none text-md sm:text-2xl w-screen overflow-hidden"
      >
        <div className="text-justify w-10/12 sm:w-4/12 text-black dark:text-white leading-5 sm:leading-snug ">
          <p className="">
            {t("OurHouse.trad1")}
            <br />
            {t("OurHouse.trad2")}
          </p>
          <br />
          <p className="relative">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              initial={{
                x: -500,
                y: -250,
                rotate: 50,
              }}
              animate={{
                x: 0,
                y: 0,
                rotate: 0,
                transition: { duration: 0.5, ease: "linear" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 -left-96 2xl:-left-[400px] hidden w-[250px] sm:block z-20"
            >
              <img src={images[0]} className="m-0" alt="" />
            </motion.div>

            {t("OurHouse.trad3")}
          </p>
          <p>{t("OurHouse.trad4")}</p>
          <br />
          <div className="relative">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              initial={{
                x: -500,
                y: -50,
                rotate: 25,
              }}
              whileInView={{
                x: 0,
                y: 0,
                rotate: 0,
                transition: { delay: 0.05, duration: 0.5, ease: "easeInOut" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 -left-[400px] 2xl:-left-[450px] hidden sm:block w-[350px] z-20"
            >
              <img src={images[2]} className="m-0" alt="" />
            </motion.div>
            <p>
              {t("OurHouse.trad2")} {t("OurHouse.trad5")}
            </p>
          </div>
          <div className="relative">
            <p>{t("OurHouse.trad6")}</p>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              initial={{
                x: 175,
                y: -300,
                rotate: 40,
              }}
              whileInView={{
                x: 0,
                y: 0,
                rotate: 0,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 -right-[450px] hidden sm:block w-[400px] z-20"
            >
              <img src={images[1]} className="m-0" alt="" />
            </motion.div>
          </div>
          <br />
          <p>{t("OurHouse.trad8")}</p>
        </div>
      </div>
    </>
  );
}
