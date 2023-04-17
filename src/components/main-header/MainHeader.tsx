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

// usage
// to disable scrolling

const MainHeader = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  const [activeLanguage, setActiveLanguage] = useState(0);
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const disableScroll = () => {
    const scrollTop = document.body.scrollTop;
    const scrollLeft = document.body.scrollLeft;
    console.log("====================================");
    console.log(scrollTop, scrollLeft);
    console.log("====================================");
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  // enable scrolling
  const enableScroll = () => {
    window.onscroll = function () {};
  };

  return (
    <header className=" bg-white text-black dark:bg-black dark:text-white pt-6 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-around h-16 pb-5 sm:pb-0 border-b-2  border-white sm:border-b-0">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
            {/* Bouton pour activer/désactiver le menu mobile */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none  focus:ring-inset focus:ring-white pb-5"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                toggleMenu();
                disableScroll();
              }}
            >
              <span className="sr-only">Open main menu</span>
              {/*
                Barres de menu mobile. 
                Utilise la classe "hidden" pour cacher les barres de menu mobile
                sur les appareils plus grands.
              */}
              <svg
                className={`${showMenu ? "hidden" : "block"} h-10 w-10`}
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
                className={`${showMenu ? "block" : "hidden"} h-10 w-10`}
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
        </div>
      </div>

      {/* Menu mobile qui apparaît lorsque le bouton est cliqué */}
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } sm:hidden pt-20 absolute bg-white dark:bg-black w-[100%] h-screen overscroll-none`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="  block px-3 py-3   text-base font-medium">
            <Link to={"/notre-maison"}>{t("header.trad1")}</Link>
          </a>
          <a href="#" className="   block px-3 py-3   text-base font-medium">
            <Link to={"/trinite"}>Trinité</Link>
          </a>
          <a href="#" className="   block px-3 py-3   text-base font-medium">
            <Link to={"/atelier"}>{t("header.trad2")}</Link>
          </a>
          <a href="#" className="   block px-3 py-3  text-base font-medium">
            <Link to="/contact">Contact</Link>
          </a>
          <div className="px-3 py-3">
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
          </div>
          <div className="px-3 py-3">
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
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
