import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme.feature";
import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "./../../assets/logo/logo-trinité.png";
const languages = [
  { code: "fr", name: "Français" },
  { code: "en", name: "Anglais" },
];

export default function MainHeader() {
  const dispatch = useDispatch();
  const [activeLanguage, setActiveLanguage] = useState(0);
  const { t, i18n } = useTranslation();
  return (
    <header className="flex justify-around items-center  py-7 bg-white text-black dark:bg-black dark:text-white">
      <div
        className=""
        onClick={() => {
          console.log("Bonjour");
        }}
      >
        <img src={logo} className="h-24" alt="" />
      </div>
      <ul className="flex items-center font-normal gap-24 text-xl">
        <li>
          <Link to={"/notre-maison"}>{t("header.trad1")}</Link>
        </li>
        <li>
          <Link to={"/trinite"}>Trinite</Link>
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
                <div className="block bg-white w-14 h-8 rounded-full border-2 border-black"></div>
                <div className="dot absolute left-1 top-1 bg-black w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </li>
      </ul>
      <div className="text-2xl uppercase">
        Maison <br /> de haute <br /> joaeollerie
      </div>
    </header>
  );
}
