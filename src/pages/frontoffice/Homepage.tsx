import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-52 items-center dark:bg-black">
      <div></div>
      <div className="text-white flex items-center gap-32">
        <div>Logo</div>
        <div>
          MAISON <br /> DE HAUTE <br /> JOAILLERIE
        </div>
      </div>
      <div className="flex items-center gap-5 text-white font-extrabold text-5xl">
        <div
          className="p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
          onClick={() => navigate("/notre-maison")}
        >
          Entrer
        </div>
        <div className="border border-gray-400 h-16"></div>
        <div className="p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out">
          Contact
        </div>
      </div>
    </div>
  );
}
