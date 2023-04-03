import React from "react";

export default function Workshop() {
  return (
    <div className="flex justify-center py-16 prose max-w-none text-2xl w-screen">
      <div className="w-8/12 text-black dark:text-white  ">
        <p>
          Nous utilisons des matériaux précieux soigneusement sélectionnés pour
          leur qualité et leur origine éthique, tout en valorisant le travail
          des artisans et en leur offrant des conditions de travail équitables.
          En choisissant notre marque, vous êtes non seulement assurés
          d'acquérir des bijoux de haute qualitée, mais également de contribuer
          à la préservation des traditions artisanales de Madagascar, de
          soutenir les travailleurs locaux et de faire un choix éthique.
        </p>
        <br />
        <div>
          Nos métaux précieux
          <ul className="m-0">
            <li className="m-0">
              argent 925 : argent de 1er titre composé de 925 millièmes d’argent
              et de 75 millièmes de cuivre
            </li>
            <li className="m-0">
              or jaune 750/1000 : or 18 carats composé de 750 millièmes d’or pur
            </li>
            <li className="m-0">
              or rouge 750/1000 : or 18 carats composé de 750 millièmes d’or pur
            </li>
            <li className="m-0"> or blanc 750/1000 : or 18 carats </li>
          </ul>
        </div>
        <br />
        <div>
          poinçons et gravures <br />
          chaque bijou Trinité porte les poinçons et gravures suivantes :
          <ul className="m-0">
            <li className="m-0">
              le poinçon de maître garantissant le lieu de fabrication
            </li>
            <li className="m-0">
              le poinçon de l’état certifiant la qualité du métal précieux :
              tête d’aigle pour l’or et tête de minerve pour l’argent
            </li>
            <li className="m-0">
              le poinçon Trinité signe la création originale de notre marque
            </li>
            <li className="m-0">
              925 ou 750 attestant de la pureté du métal précieux
            </li>
            <li className="m-0">le logo Trinité</li>
            <li className="m-0">
              le numéro de lot qui garantit la traçabilité de production de
              l’objet
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
