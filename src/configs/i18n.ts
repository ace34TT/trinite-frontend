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
        home: {
          trad1: "Entre tradition et modernité , symbole fort de",
          trad2: "liberté et d’émancipation.",
        },

        header: {
          trad1: "La maison",
          trad2: "L’atelier",
        },
        OurHouse: {
          trad1:
            "Bienvenue dans l'univers intemporel des bijoux Trinité, une véritable ode à l'histoire et à l'artisanat d'antan.",
          trad2:
            "Chacune des pièces de notre collection évoque un trésor ancien comme déniché par un archéologue passionné.",
          trad3:
            "Créée en 2022 par Antsa Gaëlle, la maison est profondément inspirée des bijoux traditionnels “Vango Vango” de Madagascar, dont elle est originaire. reflétant la richesse du pays où l'histoire culturelle et le savoir-faire artisanal sont mis en avant pour vous offrir des créations d'exception.",
          trad4:
            "Notre emblématique bracelet Trinité est plus qu'un simple bijou, c'est un symbole de l'histoire et de la culture de Madagascar,   transmis de génération en génération dans la culture malgache.",
          trad5:
            "Chez Trinté, chaque bijoux est une pièce unique, créée avec passion et savoir-faire artisanal, pour vous offrir une expérience unique et intemporelle, où la qualité, l'éthique et la durabilité sont au cœur de notre engagement.",
          trad6:
            "Nous sommes fiers de mettre en lumière les traditions malgaches tout en apportant notre touche personnelle à chacune de nos créations.",
          trad7:
            "Plongez dans notre univers d'élégance et de raffinement, où le temps semble suspendu et où chaque bijou est chargé d'une symbolique forte et émotionnelle.",
          trad8:
            "Rejoignez-nous dans cette aventure hors du temps et découvrez notre collection de bijoux qui est chargée d'une symbolique forte et émotionnelle.",
        },
        Trinite: {
          trad1:
            "La collection Trinité incarne la fusion exquise entre l'héritage ancestral et l'audace de l'innovation. La\u00A0collection allie la sagesse d'un savoir-faire séculaire aux aspirations novatrices d'une nouvelle génération, pour offrir des créations uniques et intemporelles.",
          trad2: {
            txt1: "Bracelet TRINITE",
            txt2: "Or jaune",
          },
          trad3: {
            txt1: "Bracelet TRINITE",
            txt2: "Or jaune et diamants",
          },
          trad4: {
            txt1: "Bracelet TRINITE",
            txt2: "Or jaune et saphir cabochon bleu",
          },
          trad5: {
            txt1: "Bracelet TRINITE 3 or",
            txt2: "Or rose ,Or jaune et Or blanc",
          },
          trad6: {
            txt1: "Bague TRINITE",
            txt2: "Or jaune",
          },
          trad7: {
            txt1: "Bague TRINITE 3 or",
            txt2: "Or jaune ,diamants",
          },
          trad8: {
            txt1: "Bague TRINITE 3 or",
            txt2: "Or rose ,Or jaune et Or blanc",
          },
          trad9:
            "La collection Trinité est une rencontre. Entre héritage et innovation. Entre des siécles de savoir-faire et le désir de penser le bijoux autrement. Entre l'expertise des meilleurs ateliers de Madagascar et la vision créative de la nouvelle génération.",
          text1: {
            trad1: "Bracelet TRINITE",
            trad2: "Or jaune 750/1000",
            trad3: "Taille : S-M",
            trad4:
              "Tous nos bijoux sont fabriqués dans nos ateliers d'exception à partir de matériaux précieux recyclés.",
            trad5:
              "Un certificat d'authenticité est fourni avec chacun de nos bijoux.",
            trad6:
              "Tous les articles Trinité sont soigneusement conditionnés dans un emballage Trinité.",
          },
          text2: {
            trad1: "Bracelet TRINITE",
            trad2: "Or jaune 750/1000 serti de 48 diamants DE 0,01 carat",
            trad3: "Taille : S-M",
            trad4:
              "Tous nos bijoux sont fabriqués dans nos ateliers d'exception à partir de matériaux précieux recyclés.",
            trad5:
              "Un certificat d'authenticité est fourni avec chacun de nos bijoux.",
            trad6:
              "Tous les articles Trinité sont soigneusement conditionnés dans un emballage Trinité.",
          },
          text3: {
            trad1: "Bracelet TRINITE",
            trad2: "Or jaune 750/1000 serti de 48 saphirs cabochon bleu",
            trad3:
              "Tous nos bijoux sont fabriqués dans nos ateliers d'exception à partir de matériaux précieux recyclés.",
            trad4:
              "Un certificat d'authenticité est fourni avec chacun de nos bijoux.",
            trad5:
              "Tous les articles Trinité sont soigneusement conditionnés dans un emballage Trinité.",
          },
          text4: {
            trad1: "Bracelet TRINITE 3 or",
            trad2: "Or rose 750/1000, or jaune 750/1000, or blanc 750/1000",
            trad3: "Taille : S-M",
            trad4:
              "Tous nos bijoux sont fabriqués dans nos ateliers d'exception à partir de matériaux précieux recyclés.",
            trad5:
              "Un certificat d'authenticité est fourni avec chacun de nos bijoux.",
            trad6:
              "Tous les articles Trinité sont soigneusement conditionnés dans un emballage Trinité.",
          },
          text5: {
            trad1: "Bague TRINITE",
            trad2: "Or jaune 750/1000",
            trad3: "Toutes les tailles entre dispo 41 et 62.",
            trad4:
              "Tous nos bijoux sont fabriqués dans nos ateliers d'exception à partir de matériaux précieux recyclés.",
            trad5:
              "Un certificat d'authenticité est fourni avec chacun de nos bijoux.",
            trad6:
              "Tous les articles Trinité sont soigneusement conditionnés dans un emballage Trinité.",
          },
          text6: {
            trad1: "Bague TRINITE",
            trad2: "Or jaune 750/1000 serti de 6 diamants",
            trad3: "Toutes les tailles entre dispo 41 et 62.",
            trad4:
              "Tous nos bijoux sont fabriqués dans nos ateliers d'exception à partir de matériaux précieux recyclés.",
            trad5:
              "Un certificat d'authenticité est fourni avec chacun de nos bijoux.",
            trad6:
              "Tous les articles Trinité sont soigneusement conditionnés dans un emballage Trinité.",
          },
          text7: {
            trad1: "Bague TRINITE 3 or",
            trad2: "Or rose 750/1000, or jaune 750/1000, or blanc 750/1000",
            trad3: "Toutes les tailles entre dispo 41 et 62.",
            trad4:
              "Tous nos bijoux sont fabriqués dans nos ateliers d'exception à partir de matériaux précieux recyclés.",
            trad5:
              "Un certificat d'authenticité est fourni avec chacun de nos bijoux.",
            trad6:
              "Tous les articles Trinité sont soigneusement conditionnés dans un emballage Trinité.",
          },
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
            "chaque bijou Trinité porte les poinçons et gravures suivantes: ",
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
        home: {
          trad1: "Between tradition and modernity, a strong symbol of",
          trad2: "freedom and emancipation.",
        },
        header: {
          trad1: "THE MAISON",
          trad2: "STUDIO",
        },
        OurHouse: {
          trad1:
            "Immerse yourself in the timeless universe of Trinité jewelry, a true ode to the history and craftsmanship of yesteryear.",
          trad2:
            "Each of the pieces in our collection evokes an ancient treasure unearthed by a passionate archaeologist.",
          trad3:
            'Created in 2022 by Antsa Gaëlle, the house is inspired by traditional "Vango Vango" jewelry from Madagascar, where it is from. reflecting the wealth of the country where cultural history and craftsmanship are put forward to offer you exceptional creations.',
          trad4:
            "Our iconic Trinity bracelet is more than just a piece of jewelry, it's a symbol of Madagascar's history and culture, passed down from generation to generation in Malagasy culture.",
          trad5:
            "At Trintée, each jewel is a unique piece, created with passion and craftsmanship, to offer you a unique and timeless experience, where quality, ethics and sustainability are at the heart of our commitment.",
          trad6:
            "We are proud to highlight Malagasy traditions while bringing our personal touch to each of our creations.Immerse yourself in our world of elegance and refinement, where time seems suspended and where each jewel is charged with a strong and emotional symbolism.",
          trad7:
            "Immerse yourself in our universe of elegance and refinement, where time seems to stand still and each piece of jewelry is charged with strong emotional symbolism.",
          trad8:
            "Join us in this timeless adventure and discover our jewelry collection inspired by Malagasy history and culture.",
        },
        Trinite: {
          trad1:
            "The Trinité collection is a meeting point. Between heritage and innovation. Between centuries of craftsmanship and the desire to think of jewelry differently. Between the expertise of the best workshops in Madagascar and the creative vision of the new generation.",
          trad2: {
            txt1: "TRINITE Bracelet",
            txt2: "Yellow gold",
          },
          trad3: {
            txt1: "TRINITE Bracelet",
            txt2: "Yellow gold and diamonds",
          },
          trad4: {
            txt1: "TRINITE Bracelet",
            txt2: "Or jaune et saphir cabochon bleu",
          },
          trad5: {
            txt1: "Bracelet TRINITE 3 gold",
            txt2: "Yellow gold and blue sapphire cabochon",
          },
          trad6: {
            txt1: "Ring Bracelet",
            txt2: "Yellow gold",
          },
          trad7: {
            txt1: "Ring TRINITE 3 gold",
            txt2: "Yellow gold, diamonds",
          },
          trad8: {
            txt1: "Ring TRINITE 3 gold",
            txt2: "Pink gold, yellow gold and white gold",
          },
          trad9:
            "The Trinity collection is an encounter. Between inheritance and innovation. Between centuries of know-how and the desire to think jewelry otherwise. Between the expertise of the best workshops of Madagascar and the creative vision of the new generation.",
          text1: {
            trad1: "TRINITY bracelet",
            trad2: "750/1000 yellow gold",
            trad3: "Size: S-M",
            trad4:
              "All our jewelry is made in our exceptional workshops from recycled precious materials.",
            trad5:
              "A certificate of authenticity is provided with each of our jewelry.",
            trad6:
              "All Trinity items are carefully packaged in Trinity packaging.",
          },
          text2: {
            trad1: "TRINITY bracelet",
            trad2: "750/1000 yellow gold set with 48 0.01 carat diamonds",
            trad3: "Size: S-M",
            trad4:
              "All our jewelry is made in our exceptional workshops from recycled precious materials.",
            trad5:
              "A certificate of authenticity is provided with each of our jewelry.",
            trad6:
              "All Trinity items are carefully packaged in Trinity packaging.",
          },
          text3: {
            trad1: "TRINITY bracelet",
            trad2: "750/1000 yellow gold set with 48 blue cabochon sapphires",
            trad3:
              "All our jewelry is made in our exceptional workshops from recycled precious materials.",
            trad4:
              "A certificate of authenticity is provided with each of our jewelry.",
            trad5:
              "All Trinity items are carefully packaged in Trinity packaging.",
          },
          text4: {
            trad1: "Bracelet TRINITE 3 gold",
            trad2:
              "750/1000 pink gold, 750/1000 yellow gold, 750/1000 white gold",
            trad3: "Size: S-M",
            trad4:
              "All our jewelry is made in our exceptional workshops from recycled precious materials.",
            trad5:
              "A certificate of authenticity is provided with each of our jewelry.",
            trad6:
              "All Trinity items are carefully packaged in Trinity packaging.",
          },
          text5: {
            trad1: "TRINITY ring",
            trad2: "750/1000 yellow gold",
            trad3: "All sizes between available 41 and 62.",
            trad4:
              "All our jewelry is made in our exceptional workshops from recycled precious materials.",
            trad5:
              "A certificate of authenticity is provided with each of our jewelry.",
            trad6:
              "All Trinity items are carefully packaged in Trinity packaging.",
          },
          text6: {
            trad1: "TRINITY ring",
            trad2: "750/1000 yellow gold set with 6 diamonds",
            trad3: "All sizes between available 41 and 62.",
            trad4:
              "All our jewelry is made in our exceptional workshops from recycled precious materials.",
            trad5:
              "Un certificat d'authenticité est fourni avec chacun de nos bijoux.",
            trad6:
              "All Trinity items are carefully packaged in Trinity packaging.",
          },
          text7: {
            trad1: "TRINITE 3 gold ring",
            trad2:
              "750/1000 pink gold, 750/1000 yellow gold, 750/1000 white gold",
            trad3: "All sizes between available 41 and 62.",
            trad4:
              "All our jewelry is made in our exceptional workshops from recycled precious materials.",
            trad5:
              "A certificate of authenticity is provided with each of our jewelry.",
            trad6:
              "All Trinity items are carefully packaged in Trinity packaging.",
          },
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
            "Each Trinité jewelry piece bears the following stamps and engravings: ",
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
