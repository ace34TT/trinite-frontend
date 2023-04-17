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
            La collection Trinité incarne la fusion exquise entre l'héritage
            ancestral et l'audace de l'innovation. La collection allie la
            sagesse d'un savoir-faire séculaire aux aspirations novatrices d'une
            nouvelle génération, pour offrir des créations uniques et
            intemporelles.
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
              <p>
                Bracelet en or 18 CARATS de Madagascar Or Rose, Or et Or blanc
                orné de 6 diamants
              </p>
              <p>4200€</p>
            </div>
            <img src={images[0]} alt="" />
          </div>
          <div className="py-16 px-14 flex items-center justify-center border border-gray-300"></div>
        </div>
      </div>
    </>
  );
}
