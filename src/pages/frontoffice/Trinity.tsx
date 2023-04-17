import React from "react";
import { Helmet } from "react-helmet";
const images = [
  require("./../../assets/products/article_01.png"),
  require("./../../assets/products/article_02.png"),
  require("./../../assets/products/article_03.png"),
];
export default function Trinity() {
  return (
    <>
      <Helmet>
        <title>Trinité - Trinité</title>
      </Helmet>
      <div className="pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="py-16 px-14 flex items-center justify-center border border-gray-300">
            La collection Trinité est une rencontre. Entre héritage et
            innovation. Entre des siécles de savoir-faire et le désir de penser
            le bijoux autrement. Entre l'expertise des meilleurs ateliers de
            Madagascar et la vision créative de la nouvelle génération.
          </div>
          <div className="py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>
                Bracelet en or 18 CARATS de Madagascar Or Rose, Or et Or blanc
              </p>
              <p>2300€</p>
            </div>
            <img src={images[0]} alt="" />
          </div>
          <div className="py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>
                Boucles d’oreilles en or 18 CARATS de Madagascar Or Rose, Or et
                Or blanc
              </p>
              <p>660€</p>
            </div>
            <img className="justify-self-center" src={images[1]} alt="" />
          </div>
          <div className="py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>Bague en or 18 CARATS de Madagascar Or Rose, Or et Or blanc</p>
              <p>940€</p>
            </div>
            <img src={images[2]} alt="" />
          </div>
          <div className="py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="flex justify-between gap-10">
              <p>
                Bracelet en or 18 CARATS de Madagascar Or Rose, Or et Or blanc
                orné de 6 diamants
              </p>
              <p>4200€</p>
            </div>
            <img src={images[0]} alt="" />
          </div>
          <div className="py-16 px-14 flex items-center justify-center border border-gray-300">
            La collection Trinité est une rencontre. Entre héritage et
            innovation. Entre des siécles de savoir-faire et le désir de penser
            le bijoux autrement. Entre l'expertise des meilleurs ateliers de
            Madagascar et la vision créative de la nouvelle génération.
          </div>
          <div className="py-16 px-14 flex items-center justify-center border border-gray-300">
            La collection Trinité est une rencontre. Entre héritage et
            innovation. Entre des siécles de savoir-faire et le désir de penser
            le bijoux autrement. Entre l'expertise des meilleurs ateliers de
            Madagascar et la vision créative de la nouvelle génération.
          </div>
          <div className="py-16 px-14 flex items-center justify-center border border-gray-300">
            La collection Trinité est une rencontre. Entre héritage et
            innovation. Entre des siécles de savoir-faire et le désir de penser
            le bijoux autrement. Entre l'expertise des meilleurs ateliers de
            Madagascar et la vision créative de la nouvelle génération.
          </div>
          <div className="py-16 px-14 flex items-center justify-center border border-gray-300">
            La collection Trinité est une rencontre. Entre héritage et
            innovation. Entre des siécles de savoir-faire et le désir de penser
            le bijoux autrement. Entre l'expertise des meilleurs ateliers de
            Madagascar et la vision créative de la nouvelle génération.
          </div>
        </div>
      </div>
    </>
  );
}
