import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import OurHouse from "../pages/frontoffice/OurHouse";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    fr: {
      translation: {
        homepage_1: "Entrer",
        header: {
          trad1: "La maison",
          trad2: "L’atelier",
        },
        OurHouse: {
          trad1:
            "Plongez dans l'univers intemporel des bijoux Trinité, une véritable ode à l'histoire et à l'artisanat d'antan.Chacune des pièces de notre collection évoque un trésor ancien comme déniché par un archéologue passionné.",
          trad2:
            "Chacune des pièces de notre collection évoque un trésor ancien comme déniché par un archéologue passionné.",
          trad3:
            "Créée en 2022 par Antsa Gaëlle, notre marque est profondément inspirée des bijoux traditionnels de Madagascar, reflétant la richesse du pays où l'histoire culturelle, la durabilité et le savoir-faire artisanal sont mis en avant pour vous offrir des créations d'exception.",
          trad4:
            "Notre emblématique bracelet Vango Vango est plus qu'un simple bijou, c'est un symbole de l'histoire et de la culture de Madagascar, fruit d'un savoir-faire ancestral transmis de génération en génération. Avec son design unique et son charme intemporel, il est l'accessoire parfait pour les clients les plus exigeants, qui cherchent à se démarquer avec style et élégance.",
          trad5:
            "Chez Trintée, chaque bijoux est une pièce unique, créée avec passion et savoir-faire artisanal, pour vous offrir une expérience unique et intemporelle, où la qualité, l'éthique et la durabilité sont au cœur de notre engagement.",
          trad6:
            "Nous sommes fiers de mettre en lumière les traditions malgaches tout en apportant notre touche personnelle à chacune de nos créations.",
          trad7:
            " Plongez dans notre univers d'élégance et de raffinement, où le temps semble suspendu et où chaque bijou est chargé d'une symbolique forte et émotionnelle.",
          trad8:
            " Rejoignez-nous dans cette aventure hors du temps et découvrez notre collection de bijoux inspirée par l'histoire et la culture malgaches.",
        },
        Trinite: {
          trad1:
            "La collection Trinité est une rencontre. Entre héritage et innovation. Entre des siécles de savoir-faire et le désir de penser le bijoux autrement. Entre l'expertise des meilleurs ateliers de Madagascar et la vision créative de la nouvelle génération.",
          trad2:
            "Bracelet en or 18 CARATS de Madagascar Or Rose, Or et Or blanc",
          trad3:
            "Boucles d’oreilles en or 18 CARATS de Madagascar Or Rose, Or et Or blanc",
          trad4: "Bague en or 18 CARATS de Madagascar Or Rose, Or et Or blanc",
          trad5:
            "Bracelet en or 18 CARATS de Madagascar Or Rose, Or et Or blanc orné de 6 diamants",
          trad6:
            "La collection Trinité est une rencontre. Entre héritage et innovation. Entre des siécles de savoir-faire et le désir de penser le bijoux autrement. Entre l'expertise des meilleurs ateliers de Madagascar et la vision créative de la nouvelle génération.",
          trad7:
            "La collection Trinité est une rencontre. Entre héritage et innovation. Entre des siécles de savoir-faire et le désir de penser le bijoux autrement. Entre l'expertise des meilleurs ateliers de Madagascar et la vision créative de la nouvelle génération.",
          trad8:
            "La collection Trinité est une rencontre. Entre héritage et innovation. Entre des siécles de savoir-faire et le désir de penser le bijoux autrement. Entre l'expertise des meilleurs ateliers de Madagascar et la vision créative de la nouvelle génération.",
          trad9:
            "La collection Trinité est une rencontre. Entre héritage et innovation. Entre des siécles de savoir-faire et le désir de penser le bijoux autrement. Entre l'expertise des meilleurs ateliers de Madagascar et la vision créative de la nouvelle génération.",
        },

        Studio: {
          trad1:
            "Nous utilisons des matériaux précieux soigneusement sélectionnés pour leur qualité et leur origine éthique, tout en valorisant le travail des artisans et en leur offrant des conditions de travail équitables. En choisissant notre marque, vous êtes non seulement assurés d'acquérir des bijoux de haute qualitée, mais également de contribuer à la préservation des traditions artisanales de Madagascar, de soutenir les travailleurs locaux et de faire un choix éthique.",
          trad2: "Nos métaux précieux",
          trad3:
            "argent 925 : argent de 1er titre composé de 925 millièmes d’argent et de 75 millièmes de cuivre",
          trad4:
            "or jaune 750/1000 : or 18 carats composé de 750 millièmes d’or pur",
          trad5:
            "or rouge 750/1000 : or 18 carats composé de 750 millièmes d’or pur",
          trad6: "or blanc 750/1000 : or 18 carats ",
          trad7: "poinçons et gravures ",
          trad8:
            "chaque bijou Trinité porte les poinçons et gravures suivantes :",
          trad9: "le poinçon de maître garantissant le lieu de fabrication",
          trad10:
            "le poinçon de l’état certifiant la qualité du métal précieux :tête d’aigle pour l’or et tête de minerve pour l’argent",
          trad11:
            "le poinçon Trinité signe la création originale de notre marque",
          trad12: "925 ou 750 attestant de la pureté du métal précieux",
          trad13: "le logo Trinité",
          trad14:
            "  le numéro de lot qui garantit la traçabilité de production de l’objet",
        },
      },
    },
    en: {
      translation: {
        homepage_1: "Enter",
        header: {
          trad1: "THE MAISON",
          trad2: "STUDIO",
        },
        OurHouse: {
          trad1:
            "Dive into the timeless universe of Trinitée jewelry, a true ode to history and ancient craftsmanship.",
          trad2:
            "Each piece in our collection evokes an ancient treasure unearthed by a passionate archaeologist.",
          trad3:
            "Founded in 2022 by Antsa Gaëlle, our brand is deeply inspired by traditional Malagasy jewelry,reflecting the richness of a country where cultural history, sustainability, and artisanal expertise are emphasized to offer you exceptional creations.",
          trad4:
            "Our iconic Vango Vango bracelet is more than just jewelry, it's a symbol of Madagascar's history and culture, the fruit of ancestral know- how passed down from generation to generation. With its unique design and timeless charm, it's the perfect accessory for discerning clients seeking to stand out with style and elegance.",
          trad5:
            "At Trinitée, each piece of jewelry is a unique creation made with passion and artisanal expertise to offer you a unique and timeless experience, where quality, ethics, and sustainability are at the heart of our commitment.",
          trad6:
            "We are proud to highlight Malagasy traditions while bringing our own personal touch to each of our creations.",
          trad7:
            "Immerse yourself in our universe of elegance and refinement, where time seems to stand still and each piece of jewelry is charged with strong emotional symbolism.",
          trad8:
            "Join us on this timeless adventure and discover our collection of jewelry inspired by Malagasy history and culture.",
        },
        Trinite: {
          trad1:
            "The Trinity collection is an encounter. Between heritage and innovation. Between centuries of know-how and the desire to think of jewelry differently. Between the expertise of the best workshops in Madagascar and the creative vision of the new generation.",
          trad2:
            "18 CARAT gold bracelet from Madagascar Rose Gold, Gold and White Gold",
          trad3:
            "18 CARAT gold earrings from Madagascar Rose Gold, Gold and White Gold",
          trad4:
            "18 CARAT gold ring from Madagascar Rose gold, Gold and White gold",
          trad5:
            "18 CARAT gold bracelet from Madagascar Rose Gold, Gold and White Gold adorned with 6 diamonds",
          trad6:
            "The Trinity collection is an encounter. Between inheritance and innovation. Between centuries of know-how and the desire to think jewelry otherwise. Between the expertise of the best workshops of Madagascar and the creative vision of the new generation.",
          trad7:
            "The Trinity collection is an encounter. Between inheritance and innovation. Between centuries of know-how and the desire to think jewelry otherwise. Between the expertise of the best workshops of Madagascar and the creative vision of the new generation.",
          trad8:
            "The Trinity collection is an encounter. Between inheritance and innovation. Between centuries of know-how and the desire to think jewelry otherwise. Between the expertise of the best workshops of Madagascar and the creative vision of the new generation.",
          trad9:
            "The Trinity collection is an encounter. Between inheritance and innovation. Between centuries of know-how and the desire to think jewelry otherwise. Between the expertise of the best workshops of Madagascar and the creative vision of the new generation.",
        },
        Studio: {
          trad1:
            "We use carefully selected precious materials for their quality and ethical origin, while valuing the work of artisans and providing them with fair working conditions. By choosing our brand, you are not only guaranteed to acquire high-quality jewelry, but also to contribute to the preservation of artisanal traditions in Madagascar, support local workers, and make an ethical choice.",
          trad2: "Our precious metals",
          trad3:
            "925 silver: first-grade silver composed of 925 parts per thousand silver and 75 parts per thousand copper 750/1000",
          trad4:
            "yellow gold: 18-carat gold composed of 750 parts per thousand pure gold 750/1000 red",
          trad5:
            "gold: 18-carat gold composed of 750 parts per thousand pure gold 750/1000",
          trad6: "white gold: 18-carat gold",
          trad7: "Stamps and engravings",
          trad8:
            "Each Trinité jewelry piece bears the following stamps and engravings",
          trad9: "The master stamp guarantees the place of manufacture",
          trad10:
            "The state stamp certifies the quality of the precious metal: an eagle's head for gold and a minerva's head for silver",
          trad11:
            "The Trinité stamp signifies the original creation of our brand",
          trad12: "925 or 750 attests to the purity of the precious metal",
          trad13: "The Trinité logo",
          trad14:
            "The lot number that guarantees the traceability of the object's production.",
        },
      },
    },
  },
});

export default i18n;
