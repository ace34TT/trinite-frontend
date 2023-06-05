import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme.feature";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RootState } from "../../redux/store";
import CircleSt from "../active-link/CircleSt";
import CircleNd from "../active-link/CircleNd";
import CircleRd from "../active-link/CircleRd";
import CircleTh from "../active-link/CircleTh";
import DarkLogo from "../logo/DarkLogo";
import LightLogo from "../logo/LightLogo";
import { handleHoveringTitles } from "../../features/cursor.feature";

const languages = [
  {
    code: "fr",
    name: "Français",
    icon: require("./../../assets/icon/france.png"),
  },
  {
    code: "en",
    name: "English",
    icon: require("./../../assets/icon/united-kingdom.png"),
  },
];

const MainHeader = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  const [activeLanguage, setActiveLanguage] = useState(0);
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "auto";
  }

  function hideCanvas() {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.style.display = "none";
    }
  }

  function appearCanvas() {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.style.display = "block";
    }
  }

  useEffect(() => {
    if (showMenu) {
      hideCanvas();
    } else if (!showMenu) {
      appearCanvas();
    }
  }, [showMenu]);

  const [activeLink, setActiveLink] = useState(-1);
  return (
    <header className="z-10 bg-opacity-0 text-black bg-black dark:text-white">
      {/* Menu pour Desktop */}
      <div className="px-2 sm:px-6 lg:px-8 mt-5 sm:mt-10">
        <div className="relative flex items-center justify-around h-24 pb-5 sm:pb-0 border-b-2  border-white sm:border-b-0">
          <div
            id="iconMobile"
            className="absolute inset-y-0 left-0 flex items-center xl:hidden "
          >
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none  focus:ring-inset focus:ring-white pb-5"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                toggleMenu();
              }}
            >
              <svg
                className={`${showMenu ? "hidden" : "block"} h-10 w-10`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                onClick={() => {
                  disableScroll();
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${showMenu ? "block" : "hidden"} h-10 w-10`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                onClick={() => {
                  enableScroll();
                }}
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
          <div id="logo" className="">
            <Link
              className=""
              to={"/accueil"}
              onClick={() => {
                setActiveLink(-1);
              }}
            >
              {theme.currentTheme === "dark" ? <DarkLogo /> : <LightLogo />}
            </Link>
          </div>
          <div
            id="text-1"
            className="hidden xl:block py-7 text-black dark:text-white"
          >
            <ul className="flex items-center font-normal gap-16 text-md uppercase hiragino-font">
              <li>
                <NavLink
                  className={`${
                    theme.currentTheme === "dark" ? "link-dark" : "link"
                  } relative text-xl`}
                  to={"/notre-maison"}
                  onClick={() => {
                    setActiveLink(1);
                  }}
                >
                  {t("header.trad1")}
                  {activeLink === 1 && (
                    <div className="absolute -top-14 -left-20">
                      <CircleSt theme={theme.currentTheme}></CircleSt>
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    theme.currentTheme === "dark" ? "link-dark" : "link"
                  } relative text-xl`}
                  to={"/trinite"}
                  onClick={() => {
                    setActiveLink(2);
                  }}
                >
                  Trinité
                  {activeLink === 2 && (
                    <div className="absolute -top-16 -left-10">
                      <CircleNd theme={theme.currentTheme}></CircleNd>
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    theme.currentTheme === "dark" ? "link-dark" : "link"
                  } relative text-xl`}
                  to={"/atelier"}
                  onClick={() => {
                    setActiveLink(3);
                  }}
                >
                  {t("header.trad2")}
                  {activeLink === 3 && (
                    <div className="absolute -top-10 -left-12">
                      <CircleRd theme={theme.currentTheme}></CircleRd>
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    theme.currentTheme === "dark" ? "link-dark" : "link"
                  } relative text-xl`}
                  to="/contact"
                  onClick={() => {
                    setActiveLink(4);
                  }}
                >
                  Contact
                  {activeLink === 4 && (
                    <div className="absolute -top-14 -left-8">
                      <CircleTh theme={theme.currentTheme}></CircleTh>
                    </div>
                  )}
                </NavLink>
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
                  className="uppercase text-xl"
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
                      <div
                        className={`block w-11 h-6 border-2 rounded-xl border-black  ${
                          theme.currentTheme === "dark"
                            ? "bg-black border-white"
                            : "bg-white border-black"
                        }`}
                      />
                      <div
                        className={`dot absolute right-0 top-0 w-6 h-6 rounded-full transition ${
                          theme.currentTheme === "dark"
                            ? "bg-white"
                            : "bg-black"
                        }`}
                      />
                    </div>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div
            id="text2"
            className="text-2xl uppercase hidden sm:block leading-5 hiragino-font"
            onMouseEnter={() => dispatch(handleHoveringTitles({ value: true }))}
            onMouseLeave={() =>
              dispatch(handleHoveringTitles({ value: false }))
            }
          >
            Maison <br /> de haute <br /> joaillerie
          </div>
        </div>
      </div>
      {/* Menu mobile */}
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } pt-20 absolute bg-white dark:bg-black w-[100%] h-screen overscroll-none `}
        id="mobile-menu"
      >
        <div className="pl-6 pt-2 pb-3 space-y-1 uppercase">
          <div
            id="phone-header"
            onClick={() => {
              toggleMenu();
              enableScroll();
            }}
          >
            <div className="flex flex-col gap-12 pl-8 hiragino-font">
              <div className="relative">
                {activeLink === 1 && (
                  <div className="absolute -top-14 -left-20">
                    <CircleSt theme={theme.currentTheme}></CircleSt>
                  </div>
                )}
                <Link
                  className="block text-xl font-medium relative hiragino-font"
                  to={"/notre-maison"}
                  onClick={() => {
                    setActiveLink(1);
                  }}
                >
                  {t("header.trad1")}
                </Link>
              </div>
              <div className="relative">
                {activeLink === 2 && (
                  <div className="absolute -top-14 -left-10">
                    <CircleNd theme={theme.currentTheme}></CircleNd>
                  </div>
                )}
                <Link
                  className="block  text-xl font-medium relative"
                  to={"/trinite"}
                  onClick={() => {
                    setActiveLink(2);
                  }}
                >
                  Trinité
                </Link>
              </div>
              <Link
                className="block text-xl font-medium relative "
                to={"/atelier"}
                onClick={() => {
                  setActiveLink(3);
                }}
              >
                {t("header.trad2")}
                {activeLink === 3 && (
                  <div className="absolute -top-10 -left-12">
                    <CircleRd theme={theme.currentTheme}></CircleRd>
                  </div>
                )}
              </Link>
              <Link
                className="block text-xl font-medium relative "
                to="/contact"
                onClick={() => {
                  setActiveLink(4);
                }}
              >
                Contact
                {activeLink === 4 && (
                  <div className="absolute -top-14 -left-9">
                    <CircleTh theme={theme.currentTheme}></CircleTh>
                  </div>
                )}
              </Link>
              <div className="">
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
                  className="uppercase text-xl"
                >
                  {activeLanguage === 0 ? languages[1].name : languages[0].name}
                </button>
              </div>
              <div className="">
                <div className="flex items-center w-full">
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
                      <div
                        className={`block w-11 h-6 border-2 rounded-xl border-black  ${
                          theme.currentTheme === "dark"
                            ? "bg-black border-white"
                            : "bg-white border-black"
                        }`}
                      />
                      <div
                        className={`dot absolute right-0 top-0 w-6 h-6 rounded-full transition ${
                          theme.currentTheme === "dark"
                            ? "bg-white"
                            : "bg-black"
                        }`}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
