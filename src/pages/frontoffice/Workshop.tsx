import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./../../assets/font/style.css";
const images = [
  require("./../../assets/deco/Capture d’écran 2023-04-22 à 22.35.png"),
  require("./../../assets/deco/Capture d’écran 2023-04-22 à 22.36.png"),
  require("./../../assets/deco/Rectangle.png"),
];
export default function Workshop() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Trinité - Atelier</title>
      </Helmet>
      <div
        style={{ fontFamily: "CustomFont" }}
        className="flex justify-center py-0 sm:py-16 prose max-w-none text-base sm:text-2xl w-screen"
      >
        <div className="w-10/12 sm:w-6/12 text-black dark:text-white leading-5 sm:leading-snug">
          <div className="flex justify-center gap-4 ">
            <div className="hidden sm:block">
              <img
                className="cursor-pointer transition-transform duration-300 hover:scale-105 m-0"
                src={images[0]}
                alt=""
              />
            </div>
            <div>
              <img
                className="cursor-pointer transition-transform duration-300 hover:scale-105 m-0"
                src={images[2]}
                alt=""
              />
            </div>
            <div className="hidden sm:block">
              <img
                className="cursor-pointer transition-transform duration-300 hover:scale-105 m-0"
                src={images[1]}
                alt=""
              />
            </div>
          </div>
          <p>{t("Studio.trad1")}</p>
          <br />
          <div>
            {t("Studio.trad2")}
            <ul className="m-0">
              <li className="m-0">{t("Studio.trad3")}</li>
              <li className="m-0">{t("Studio.trad4")}</li>
              <li className="m-0">{t("Studio.trad5")}</li>
              <li className="m-0">{t("Studio.trad6")}</li>
            </ul>
          </div>
          <br />
          <div className="break-words">
            {t("Studio.trad7")}
            {t("Studio.trad8")}
            <ul className="m-0">
              <li className="m-0">{t("Studio.trad9")}</li>
              <li className="m-0">{t("Studio.trad10")}</li>
              <li className="m-0">{t("Studio.trad11")}</li>
              <li className="m-0">{t("Studio.trad12")}</li>
              <li className="m-0">{t("Studio.trad13")}</li>
              <li className="m-0">{t("Studio.trad14")}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
