import { Canvas } from "@react-three/fiber";
import React from "react";
import ComputersCanvas from "./three-models/MainModel";

export default function Homepage() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center min-h-[940px]">
      <ComputersCanvas></ComputersCanvas>
      <div className="text-3xl text-center">
        Entre tradition et modernité symbole fort de liberté <br /> et
        d’émancipation
      </div>
    </div>
  );
}
