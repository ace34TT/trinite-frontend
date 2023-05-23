import "./style.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const elements = [
  require("./../../../assets/element/image 54.png"),
  require("./../../../assets/element/image 56.png"),
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
        className="flex flex-1 flex-col items-center justify-center px-4"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <div className="h-[280px] xl:h-[450px] w-auto overflow-hidden">
          <img
            src={language === "fr" ? elements[1] : elements[0]}
            className="h-full w-auto object-cover object-center"
            alt=""
            style={{ transform: "scale(1.4)" }}
          />
        </div>
      </div>
    </>
  );
}
