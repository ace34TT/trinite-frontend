import React from "react";
import img from "./../../assets/3d.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
export default function OurHouse() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Trinité - La Maison</title>
      </Helmet>
      <div className="flex justify-center py-0 sm:py-16 prose max-w-none text-md sm-text-2xl w-screen">
        <div className="w-10/12 sm:w-4/12 text-black dark:text-white leading-5 ">
          <p>
            {t("OurHouse.trad1")}
            <br />
            {t("OurHouse.trad2")}{" "}
          </p>
          <br />
          <p>{t("OurHouse.trad3")}</p>
          <p>{t("OurHouse.trad4")}</p>
          <br />
          <p>{t("OurHouse.trad5")}</p>
          <p>{t("OurHouse.trad6")}</p>
          <br />
          <p>{t("OurHouse.trad7")}</p>
          <p>{t("OurHouse.trad8")}</p>
        </div>
      </div>
    </>
  );
}
