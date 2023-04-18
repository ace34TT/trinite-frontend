import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
export default function Workshop() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Trinité - Atelier</title>
      </Helmet>
      <div className="flex justify-center py-0 sm:py-16 prose max-w-none text-base sm:text-2xl w-screen">
        <div className="w-10/12 sm:w-4/12 text-black dark:text-white leading-5 sm:leading-snug">
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
