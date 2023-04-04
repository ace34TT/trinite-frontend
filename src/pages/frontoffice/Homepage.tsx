import React from "react";
import { Helmet } from "react-helmet";
export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Trinité - Accueil</title>
      </Helmet>
      <div className=" h-screen flex flex-col justify-center items-center min-h-[940px]">
        {/* <img src={img} alt="" /> */}
        <div className="text-3xl text-center">
          Entre tradition et modernité symbole fort de liberté <br /> et
          d’émancipation
        </div>
      </div>
    </>
  );
}
