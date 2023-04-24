import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./../../assets/font/style.css";
import { useEffect, useMemo, useRef, useState } from "react";
const images = [
  require("./../../assets/deco/image 40.png"),
  require("./../../assets/deco/image 41.png"),
  require("./../../assets/deco/image 42.png"),
];

interface IPosition {
  y: number;
  x: number;
}
export default function OurHouse() {
  const { t } = useTranslation();

  useEffect(() => {
    // your effect code here
  }, []);
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
              <img
                className="absolute top-0 -left-96 w-80 m-0 hidden sm:block"
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
              <img
                className="absolute top-0 -left-96 w-[300px] m-0 hidden sm:block"
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
              <img
                className="absolute -top-24 -right-[400px] 2xl:-right-[550px] w-96 m-0 hidden sm:block"
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
