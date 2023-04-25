import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import SwiperCore, { Navigation } from "swiper";
import "./style.css";
import "swiper/swiper.min.css";
import "./../../../assets/font/style.css";
import bg from "./../../../assets/background/Capture d’écran 2023-04-21 à 22.24 1.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  require("./../../../assets/products/bracelet 1.png"),
  require("./../../../assets/products/Group 3.png"),
  require("./../../../assets/products/bracelet 4.png"),
];

SwiperCore.use([Navigation]);
export default function Trinity() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Helmet>
        <title>Trinité - Trinité</title>
      </Helmet>
      <div className="pt-0 sm:pt-16" style={{ fontFamily: "CustomFont" }}>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="h-[515px] sm:h-auto py-16 px-14 flex items-center justify-center border border-gray-300">
            {t("Trinite.trad1")}
          </div>
          <div className="h-[515px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="w-full h-full">
              <Slider {...settings}>
                <div>
                  <div className="h-full flex flex-col items-center">
                    <div className="flex justify-between gap-10">
                      <p>{t("Trinite.trad2")}</p>
                      <p>2300€</p>
                    </div>
                    <img src={images[0]} className="items-s" alt="" />
                  </div>
                </div>
                <div>
                  <div
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">Bracelet TRINITE</p>
                    <p>Or jaune 750/1000</p>
                    <p>Taille : S-M</p>
                    <p>
                      Tous nos bijoux sont fabriqués dans nos ateliers
                      d'exception à partir de matériaux précieux recyclés.
                    </p>
                    <p>
                      Un certificat d'authenticité est fourni avec chacun de nos
                      bijoux.
                    </p>
                    <p>
                      Tous les articles Trinité sont soigneusement conditionnés
                      dans un emballage Trinité.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="h-[515px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="w-full h-full">
              <Slider {...settings}>
                <div className="h-full">
                  <div className="flex justify-between gap-10">
                    <p>{t("Trinite.trad3")}</p>
                    <p>660€</p>
                  </div>
                  <img className="self-center" src={images[1]} alt="" />
                </div>
                <div>
                  <div
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">Bracelet TRINITE</p>
                    <p>Or jaune 750/1000</p>
                    <p>Taille : S-M</p>
                    <p>
                      Tous nos bijoux sont fabriqués dans nos ateliers
                      d'exception à partir de matériaux précieux recyclés.
                    </p>
                    <p>
                      Un certificat d'authenticité est fourni avec chacun de nos
                      bijoux.
                    </p>
                    <p>
                      Tous les articles Trinité sont soigneusement conditionnés
                      dans un emballage Trinité.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="h-[515px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="w-full h-full">
              <Slider {...settings}>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex justify-between gap-10">
                      <p>{t("Trinite.trad4")}</p>
                      <p>940€</p>
                    </div>
                    <img
                      className="self-center justify-self-center"
                      src={images[2]}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">Bracelet TRINITE</p>
                    <p>Or jaune 750/1000</p>
                    <p>Taille : S-M</p>
                    <p>
                      Tous nos bijoux sont fabriqués dans nos ateliers
                      d'exception à partir de matériaux précieux recyclés.
                    </p>
                    <p>
                      Un certificat d'authenticité est fourni avec chacun de nos
                      bijoux.
                    </p>
                    <p>
                      Tous les articles Trinité sont soigneusement conditionnés
                      dans un emballage Trinité.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="h-[515px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="container">
              <Slider {...settings}>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex justify-between gap-10">
                      <p>{t("Trinite.trad5")}</p>
                      <p>4200€</p>
                    </div>
                    <img src={images[0]} alt="" />
                  </div>
                </div>
                <div>
                  <div
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">Bracelet TRINITE</p>
                    <p>Or jaune 750/1000</p>
                    <p>Taille : S-M</p>
                    <p>
                      Tous nos bijoux sont fabriqués dans nos ateliers
                      d'exception à partir de matériaux précieux recyclés.
                    </p>
                    <p>
                      Un certificat d'authenticité est fourni avec chacun de nos
                      bijoux.
                    </p>
                    <p>
                      Tous les articles Trinité sont soigneusement conditionnés
                      dans un emballage Trinité.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="h-[515px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="container">
              <Slider {...settings}>
                <div className="h-full">
                  <div className="flex justify-between gap-10">
                    <p>{t("Trinite.trad3")}</p>
                    <p>660€</p>
                  </div>
                  <img className="self-center" src={images[1]} alt="" />
                </div>
                <div>
                  <div
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">Bracelet TRINITE</p>
                    <p>Or jaune 750/1000</p>
                    <p>Taille : S-M</p>
                    <p>
                      Tous nos bijoux sont fabriqués dans nos ateliers
                      d'exception à partir de matériaux précieux recyclés.
                    </p>
                    <p>
                      Un certificat d'authenticité est fourni avec chacun de nos
                      bijoux.
                    </p>
                    <p>
                      Tous les articles Trinité sont soigneusement conditionnés
                      dans un emballage Trinité.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="h-[515px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="container">
              <Slider {...settings}>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex justify-between gap-10">
                      <p>{t("Trinite.trad4")}</p>
                      <p>940€</p>
                    </div>
                    <img
                      className="self-center justify-self-center"
                      src={images[2]}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">Bracelet TRINITE</p>
                    <p>Or jaune 750/1000</p>
                    <p>Taille : S-M</p>
                    <p>
                      Tous nos bijoux sont fabriqués dans nos ateliers
                      d'exception à partir de matériaux précieux recyclés.
                    </p>
                    <p>
                      Un certificat d'authenticité est fourni avec chacun de nos
                      bijoux.
                    </p>
                    <p>
                      Tous les articles Trinité sont soigneusement conditionnés
                      dans un emballage Trinité.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="h-[515px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border border-gray-300">
            <div className="container">
              <Slider {...settings}>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex justify-between gap-10">
                      <p>{t("Trinite.trad5")}</p>
                      <p>4200€</p>
                    </div>
                    <img src={images[0]} alt="" />
                  </div>
                </div>
                <div>
                  <div
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">Bracelet TRINITE</p>
                    <p>Or jaune 750/1000</p>
                    <p>Taille : S-M</p>
                    <p>
                      Tous nos bijoux sont fabriqués dans nos ateliers
                      d'exception à partir de matériaux précieux recyclés.
                    </p>
                    <p>
                      Un certificat d'authenticité est fourni avec chacun de nos
                      bijoux.
                    </p>
                    <p>
                      Tous les articles Trinité sont soigneusement conditionnés
                      dans un emballage Trinité.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="h-[515px] sm:h-auto py-16 px-14 flex items-center justify-center border border-gray-300"></div>
        </div>
      </div>
    </>
  );
}
