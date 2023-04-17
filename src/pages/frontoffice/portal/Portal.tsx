import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "./../../../assets/logo/logo-trinité.png";
import { Helmet } from "react-helmet";
export default function Portal() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Trinité</title>
      </Helmet>
      <div className="h-screen w-screen flex flex-col justify-center gap-52 items-center dark:bg-black">
        <div></div>
        <div className="text-white flex items-center gap-32">
          <img src={logo} className="h-32" alt="" />
          <div className="the-house text-4xl">
            MAISON <br /> DE HAUTE <br /> JOAILLERIE
          </div>
        </div>
        <div className="flex items-center gap-5 text-white font-light text-3xl">
          <div
            className="p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
            onClick={() => navigate("/accueil")}
          >
            {t("homepage_1")}
          </div>
          <div className="border border-gray-400 h-16"></div>
          <div className="p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out">
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
