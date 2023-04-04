import React from "react";
import "./style.css";
export default function Contact() {
  return (
    <div
      className="flex flex-1 flex-col items-center justify-center  "
      style={{ height: "calc(100vh - 200px)" }}
    >
      <div className="contact flex flex-col  justify-center items-center prose max-w-none text-black dark:text-white text-4xl font-extrabold">
        <p className="uppercase m-2 text-black dark:text-white">Contact</p>
        <br />
        <p className="m-3">bonjour@trinité.com</p>
        <p className="m-3">0622007168</p>
        <p className="m-3 underline cursor-pointer">Prendre rendez-vous</p>
      </div>
    </div>
  );
}
