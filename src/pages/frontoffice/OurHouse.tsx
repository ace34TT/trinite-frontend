import React from "react";
import img from "./../../assets/3d.png";
import { useTranslation } from "react-i18next";
export default function OurHouse() {
  const { t } = useTranslation();
  return (
    // <div className="-mt-20 h-screen flex flex-col justify-center items-center min-h-[940px]">
    //   <img src={img} alt="" />
    //   <div className="text-3xl text-center">
    //     Entre tradition et modernité symbole fort de liberté <br /> et
    //     d’émancipation
    //   </div>
    // </div>
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
