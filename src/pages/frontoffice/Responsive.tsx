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
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header className="flex justify-around items-center  py-7 bg-white text-black dark:bg-black dark:text-white">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Bouton pour activer/désactiver le menu mobile */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {/*
                Barres de menu mobile. 
                Utilise la classe "hidden" pour cacher les barres de menu mobile
                sur les appareils plus grands.
              */}
            <svg
              className={`${showMenu ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* X icône de fermeture utilisée pour fermer le menu mobile */}
            <svg
              className={`${showMenu ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="">
          <Link to={"/accueil"}>
            <img
              src={theme.currentTheme === "dark" ? logo[0] : logo[1]}
              className="h-24"
              alt=""
            />
          </Link>
        </div>
        <ul className="flex items-center font-normal gap-10 text-xl">
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
      <header
        className={`${showMenu ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Accueil
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            À propos
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </header>
    </div>
  );
}
