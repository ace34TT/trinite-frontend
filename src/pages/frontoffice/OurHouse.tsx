import React from "react";
import img from "./../../assets/3d.png";
import { useTranslation } from "react-i18next";
export default function OurHouse() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center py-16 prose max-w-none text-2xl w-screen">
      <div className="w-4/12 text-black dark:text-white  ">
        <p>
          {t("OurHouse.trad1")}
          <br />
          {t("OurHouse.trad2")}
        </p>
        <br />
        <p>{t("OurHouse.trad3")}</p>
        <p>{t("OurHouse.trad4")}</p>
        <br />
        <p>{t("OurHouse.trad5")}</p>
        <br />
        <p>{t("OurHouse.trad6")}</p>
        <p>{t("OurHouse.trad7")}</p>
      </div>
    </div>
  );
}
