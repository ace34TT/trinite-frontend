import React from "react";
import img from "./../../assets/3d.png";
export default function OurHouse() {
  return (
    <div className="-mt-20 h-screen flex flex-col justify-center items-center bg-black min-h-[940px]">
      <img src={img} alt="" />
      <div className="text-white text-3xl text-center">
        Entre tradition et modernité symbole fort de liberté <br /> et
        d’émancipation
      </div>
    </div>
  );
}
