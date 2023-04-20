import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./../../assets/font/style.css";
const images = [
  require("./../../assets/products/article_01.png"),
  require("./../../assets/products/article_02.png"),
  require("./../../assets/products/article_03.png"),
];

export default function Trinity() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Trinité - Trinité</title>
      </Helmet>
      <div className="pt-0 sm:pt-16" style={{ fontFamily: 'CustomFont' }} >
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="h-[462px] sm:h-auto py-16 px-14 flex items-center justify-center border border-gray-300">
            {t("Trinite.trad1")}
          </div>
          <div className="h-[462px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>{t("Trinite.trad2")}</p>
              <p>2300€</p>
            </div>
            <img src={images[0]} alt="" />
          </div>
          <div className="h-[462px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>{t("Trinite.trad3")}</p>
              <p>660€</p>
            </div>
            <img className="justify-self-center" src={images[1]} alt="" />
          </div>
          <div className="h-[462px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>{t("Trinite.trad4")}</p>
              <p>940€</p>
            </div>
            <img src={images[2]} alt="" />
          </div>
          <div className="h-[462px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>{t("Trinite.trad5")}</p>
              <p>4200€</p>
            </div>
            <img src={images[0]} alt="" />
          </div>
          <div className="h-[462px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>{t("Trinite.trad3")}</p>
              <p>660€</p>
            </div>
            <img className="justify-self-center" src={images[1]} alt="" />
          </div>
          <div className="h-[462px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>{t("Trinite.trad4")}</p>
              <p>940€</p>
            </div>
            <img src={images[2]} alt="" />
          </div>
          <div className="h-[462px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>{t("Trinite.trad5")}</p>
              <p>4200€</p>
            </div>
            <img src={images[0]} alt="" />
          </div>
          <div className="h-[462px] sm:h-auto py-16 px-14 flex items-center justify-center border border-gray-300"></div>
        </div>
      </div>
    </>
  );
}
