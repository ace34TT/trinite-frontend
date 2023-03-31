import React from "react";
const images = [require("./../../assets/products/article-01.png")];
export default function Workshop() {
  return (
    <div className="pt-16">
      <div className="grid grid-cols-3 gap-4 divide-x divide-y">
        <div className="py-16 px-14 flex items-center justify-center">
          La collection Trinité est une rencontre. Entre héritage et innovation.
          Entre des siécles de savoir-faire et le désir de penser le bijoux
          autrement. Entre l'expertise des meilleurs ateliers de Madagascar et
          la vision créative de la nouvelle génération.
        </div>
        <div className="py-16 px-14 flex flex-col items-center justify-center">
          <div className="flex justify-between gap-10">
            <p>
              Bracelet en or 18 CARATS de Madagascar Or Rose, Or et Or blanc
            </p>
            <p>2300€</p>
          </div>
          <img src={images[0]} alt="" />
        </div>
        <div className="py-16 px-14 flex items-center justify-center">
          La collection Trinité est une rencontre. Entre héritage et innovation.
          Entre des siécles de savoir-faire et le désir de penser le bijoux
          autrement. Entre l'expertise des meilleurs ateliers de Madagascar et
          la vision créative de la nouvelle génération.
        </div>
        <div className="py-16 px-14 flex items-center justify-center">
          La collection Trinité est une rencontre. Entre héritage et innovation.
          Entre des siécles de savoir-faire et le désir de penser le bijoux
          autrement. Entre l'expertise des meilleurs ateliers de Madagascar et
          la vision créative de la nouvelle génération.
        </div>
        <div className="py-16 px-14 flex items-center justify-center">
          La collection Trinité est une rencontre. Entre héritage et innovation.
          Entre des siécles de savoir-faire et le désir de penser le bijoux
          autrement. Entre l'expertise des meilleurs ateliers de Madagascar et
          la vision créative de la nouvelle génération.
        </div>
        <div className="py-16 px-14 flex items-center justify-center">
          La collection Trinité est une rencontre. Entre héritage et innovation.
          Entre des siécles de savoir-faire et le désir de penser le bijoux
          autrement. Entre l'expertise des meilleurs ateliers de Madagascar et
          la vision créative de la nouvelle génération.
        </div>
        <div className="py-16 px-14 flex items-center justify-center">
          La collection Trinité est une rencontre. Entre héritage et innovation.
          Entre des siécles de savoir-faire et le désir de penser le bijoux
          autrement. Entre l'expertise des meilleurs ateliers de Madagascar et
          la vision créative de la nouvelle génération.
        </div>
        <div className="py-16 px-14 flex items-center justify-center">
          La collection Trinité est une rencontre. Entre héritage et innovation.
          Entre des siécles de savoir-faire et le désir de penser le bijoux
          autrement. Entre l'expertise des meilleurs ateliers de Madagascar et
          la vision créative de la nouvelle génération.
        </div>
        <div className="py-16 px-14 flex items-center justify-center">
          La collection Trinité est une rencontre. Entre héritage et innovation.
          Entre des siécles de savoir-faire et le désir de penser le bijoux
          autrement. Entre l'expertise des meilleurs ateliers de Madagascar et
          la vision créative de la nouvelle génération.
        </div>
      </div>
    </div>
  );
}
