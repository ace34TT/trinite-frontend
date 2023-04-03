import React from "react";
import { useTranslation } from "react-i18next";
export default function Workshop() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center py-16 prose max-w-none text-2xl w-screen">
      <div className="w-8/12 text-black dark:text-white  ">
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
        <div>
          {t("Studio.trad7")}
          <br />
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
  );
}
