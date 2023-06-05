import "./style.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { handleHoveringContact } from "../../../features/cursor.feature";
const elements = [
  require("./../../../assets/element/image 54.png"),
  require("./../../../assets/element/image 56.png"),
];
export default function Contact() {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const dispatch = useDispatch();
  const handleOpenEmailForm = () => {
    const emailAddress = "bonjour@trinite.paris"; // Replace with your desired email address
    const composeMailURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${encodeURIComponent(
      emailAddress
    )}`;
    window.open(composeMailURL, "_blank");
  };
  return (
    <>
      <Helmet>
        <title>Trinité - Contact</title>
      </Helmet>
      <div
        className="flex flex-1 flex-col items-center justify-center px-4"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <div
          className="h-[280px] xl:h-[450px] w-auto overflow-hidden"
          onMouseEnter={() => dispatch(handleHoveringContact({ value: true }))}
          onMouseLeave={() => dispatch(handleHoveringContact({ value: false }))}
          onClick={handleOpenEmailForm}
        >
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
