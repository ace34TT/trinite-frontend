import React from "react";
import "./style.css";
import { Helmet } from "react-helmet";
import bg from "./../../../assets/background/Capture d’écran 2023-04-21 à 22.24 1.png";
import element from "./../../../assets/element/image 53.png";
export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Trinité - Contact</title>
      </Helmet>
      <div
        className="flex flex-1 flex-col items-center justify-center"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <img src={element} alt="" />
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
