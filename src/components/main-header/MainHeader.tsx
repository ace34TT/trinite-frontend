import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme.feature";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RootState } from "../../redux/store";
const logo = [
  require("./../../assets/logo/logo-trinité.png"),
  require("./../../assets/logo/logo-w.png"),
];
const languages = [
  {
    code: "fr",
    name: "Français",
    icon: require("./../../assets/icon/france.png"),
  },
  {
    code: "en",
    name: "Anglais",
    icon: require("./../../assets/icon/united-kingdom.png"),
  },
];

interface ICircle {
  height: number;
  width: number;
}
const Circle = ({ height, width }: ICircle) => {
  return (
    <>
      <svg
        // width="182"
        // height="83"
        width={width}
        height={height}
        viewBox="0 0 182 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65.9247 2C-6.41527 25.6869 17.6981 60.5594 30.0806 67.7971C48.1376 78.3516 82.8692 80.9565 97.2068 80.9565C108.938 80.9565 153.906 82.2724 169.547 70.429C174.341 66.7988 179.137 61.8635 179.974 50.0319C180.626 40.8203 168.873 32.9647 153.254 25.6869C127.837 13.8435 91.3411 13.1855 82.8688 13.1855C72.4415 13.1855 0.0840141 15.8174 2.03888 47.4"
          stroke="white"
          stroke-width="3"
        />
      </svg>
    </>
  );
};

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
  const [activeLink, setActiveLink] = useState(1);
  return (
    <header className="z-50 bg-white text-black dark:bg-black dark:text-white pt-16 ">
      {/* Menu pour Desktop */}
      <div className="px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-around h-16 pb-5 sm:pb-0 border-b-2  border-white sm:border-b-0">
          <div
            id="iconMobile"
            className="absolute inset-y-0 left-0 flex items-center sm:hidden "
          >
            {/* Bouton pour activer/désactiver le menu mobile */}
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
              {/* X icône de fermeture utilisée pour fermer le menu mobile */}
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
            <Link to={"/accueil"}>
              <img
                src={theme.currentTheme === "dark" ? logo[0] : logo[1]}
                className="h-20 sm:h-24"
                alt=""
              />
            </Link>
          </div>
          <div
            id="text-1"
            className="hidden sm:block sm:ml-6 py-7 bg-white text-black dark:bg-black dark:text-white"
          >
            <ul className="flex items-center font-normal gap-16 text-md uppercase">
              <li>
                <div className="oval-shape"></div>
              </li>
              <li>
                <NavLink
                  className={`${
                    theme.currentTheme === "dark" ? "link-dark" : "link"
                  } relative`}
                  to={"/notre-maison"}
                  onClick={() => {
                    setActiveLink(1);
                  }}
                >
                  {t("header.trad1")}
                  {activeLink === 1 && (
                    <div className="absolute -top-10 -left-11">
                      <Circle height={82} width={183} />
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    theme.currentTheme === "dark" ? "link-dark" : "link"
                  } relative`}
                  to={"/trinite"}
                  onClick={() => {
                    setActiveLink(2);
                  }}
                >
                  Trinité
                  {activeLink === 2 && (
                    <div className="absolute -top-10 -left-14">
                      <Circle height={82} width={183} />
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    theme.currentTheme === "dark" ? "link-dark" : "link"
                  } relative`}
                  to={"/atelier"}
                  onClick={() => {
                    setActiveLink(3);
                  }}
                >
                  {t("header.trad2")}
                  {activeLink === 3 && (
                    <div className="absolute -top-10 -left-12">
                      <Circle height={82} width={183} />
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    theme.currentTheme === "dark" ? "link-dark" : "link"
                  } relative`}
                  to="/contact"
                  onClick={() => {
                    setActiveLink(4);
                  }}
                >
                  Contact
                  {activeLink === 4 && (
                    <div className="absolute -top-10 -left-11">
                      <Circle height={82} width={183} />
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
                >
                  <p className="uppercase">
                    {activeLanguage === 0 ? (
                      <div className="flex gap-4">
                        {languages[1].code}
                        <img className="h-8" src={languages[1].icon} alt="" />
                      </div>
                    ) : (
                      <div className="flex gap-4">
                        {languages[0].code}
                        <img className="h-8" src={languages[0].icon} alt="" />
                      </div>
                    )}
                  </p>
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
                        className={`block w-14 h-6 border-2 rounded-md border-black  ${
                          theme.currentTheme === "dark"
                            ? "bg-black border-white"
                            : "bg-white border-black"
                        }`}
                      />
                      <div
                        className={`dot absolute right-0 top-0 w-6 h-6 rounded-md transition ${
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
          <div id="text2" className="text-xl uppercase hidden sm:block">
            Maison <br /> de haute <br /> joaeollerie
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
        <div className="px-2 pt-2 pb-3 space-y-1 uppercase">
          <div
            id="phone-header"
            onClick={() => {
              toggleMenu();
              enableScroll();
            }}
          >
            <Link
              className="block px-3 py-3 text-base font-medium"
              to={"/notre-maison"}
            >
              {t("header.trad1")}
            </Link>

            <Link
              className="block px-3 py-3 text-base font-medium"
              to={"/trinite"}
            >
              Trinité
            </Link>
            <Link
              className="block px-3 py-3 text-base font-medium"
              to={"/atelier"}
            >
              {t("header.trad2")}
            </Link>

            <Link
              className="block px-3 py-3 text-base font-medium"
              to="/contact"
            >
              Contact
            </Link>
          </div>
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
              <p className="uppercase">
                {activeLanguage === 0 ? (
                  <img className="h-8" src={languages[1].icon} alt="" />
                ) : (
                  <img className="h-8" src={languages[0].icon} alt="" />
                )}
              </p>
            </button>
          </div>
          <div className="px-3 py-3">
            <label
              htmlFor="toggleB2"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggleB2"
                  className="sr-only"
                  onClick={() => {
                    dispatch(toggleTheme());
                  }}
                />
                <div
                  className={`block w-14 h-6 border-2 rounded-md border-black  ${
                    theme.currentTheme === "dark"
                      ? "bg-black border-white"
                      : "bg-white border-black"
                  }`}
                ></div>
                <div
                  className={`dot absolute right-0 top-0 w-6 h-6 rounded-md transition ${
                    theme.currentTheme === "dark" ? "bg-white" : "bg-black"
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
