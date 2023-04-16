import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme.feature";
import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RootState } from "../../redux/store";

const logo = [
  require("./../../assets/logo/logo-trinité.png"),
  require("./../../assets/logo/logo-w.png"),
];
const languages = [
  { code: "fr", name: "Français" },
  { code: "en", name: "Anglais" },
];

export default function MainHeader() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  const [activeLanguage, setActiveLanguage] = useState(0);
  const { t, i18n } = useTranslation();
  return (
    <header className="flex justify-around items-center  py-7 bg-white text-black dark:bg-black dark:text-white">
      <div className="">
        <Link to={"/accueil"}>
          <img
            src={theme.currentTheme === "dark" ? logo[0] : logo[1]}
            className="h-24"
            alt=""
          />
        </Link>
      </div>
      <ul className="flex items-center font-normal gap-10 text-xl uppercase">
        <li>
          <Link to={"/notre-maison"}>{t("header.trad1")}</Link>
        </li>
        <li>
          <Link to={"/trinite"}>Trinité</Link>
        </li>
        <li>
          <Link to={"/atelier"}>{t("header.trad2")}</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button
            onClick={() => {
              if (activeLanguage === 0) {
                i18n.changeLanguage(languages[1].code);
                setActiveLanguage(1);
                return;
              }
              i18n.changeLanguage(languages[0].code);
              setActiveLanguage(0);
            }}
          >
            {activeLanguage === 0 ? languages[1].name : languages[0].name}
          </button>
        </li>
        <li>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="toggleB"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggleB"
                  className="sr-only"
                  onClick={() => {
                    dispatch(toggleTheme());
                  }}
                />
                <div className="block bg-white w-14 h-8 border-2 rounded-md border-black"></div>
                <div className="dot absolute left-1 top-1 bg-black w-6 h-6 rounded-md transition"></div>
              </div>
            </label>
          </div>
        </li>
      </ul>
      <div className="text-xl uppercase">
        Maison <br /> de haute <br /> joaeollerie
      </div>
    </header>
  );
}
