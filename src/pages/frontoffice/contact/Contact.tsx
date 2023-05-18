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
        className="flex flex-1 flex-col items-center justify-center"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <img
          src={language === "fr" ? elements[1] : elements[0]}
          className="h-[450px]"
          alt=""
        />
      </div>
    </>
  );
}
