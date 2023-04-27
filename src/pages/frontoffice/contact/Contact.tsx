import "./style.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const elements = [
  require("./../../../assets/element/image 53.png"),
  require("./../../../assets/element/image 54.png"),
];
export default function Contact() {
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <>
      <Helmet>
        <title>Trinité - Contact</title>
      </Helmet>
      <div
        className="flex flex-1 flex-col items-center justify-center"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <img
          src={language === "fr" ? elements[0] : elements[1]}
          className="h-[450px]"
          alt=""
        />
        {/* <div
          className="p-4 py-8 2xl:p-40 bg-cover bg-center"
          style={{ backgroundImage: `url('${bg}')` }}
        >
          <div className="contact flex flex-col justify-center items-center prose max-w-none text-gray-900 darken:text-white text-md sm:text-2xl font-extrabold uppercase ">
            <p className="uppercase m-2 text-gray-900 darken:text-white text-5xl">
              Contact
            </p>
            <div className="h-6"></div>
            <p className="m-3 ">bonjour@trinite.com</p>
            <p className="m-3">0622007168</p>
            <p className="m-3">www.trinite.jewelry.com</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
