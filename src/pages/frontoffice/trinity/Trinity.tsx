import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./style.css";
import "./../../../assets/font/style.css";
import bg from "./../../../assets/background/Capture d’écran 2023-04-21 à 22.24 1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const images = [
  require("./../../../assets/products/bracelet 1.png"),
  require("./../../../assets/products/Group 3.png"),
  require("./../../../assets/products/bracelet 4.png"),
];

function CustomPrevArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow custom-prev-arrow absolute top-1/2 -left-10 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={42} />
    </div>
  );
}

function CustomNextArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow custom-next-arrow absolute top-1/2 -right-10 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={42} />
    </div>
  );
}

export default function Trinity() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
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
                    id="text-1"
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">{t("Trinite.text1.trad1")}</p>
                    <p>{t("Trinite.text1.trad2")}</p>
                    <p>{t("Trinite.text1.trad3")}</p>
                    <p>{t("Trinite.text1.trad4")}</p>
                    <p>{t("Trinite.text1.trad5")}</p>
                    <p>{t("Trinite.text1.trad6")}</p>
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
                    id="text-2"
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">{t("Trinite.text2.trad1")}</p>
                    <p> {t("Trinite.text2.trad2")}</p>
                    <p> {t("Trinite.text2.trad3")}</p>
                    <p>{t("Trinite.text2.trad4")}</p>
                    <p>{t("Trinite.text2.trad5")}</p>
                    <p>{t("Trinite.text2.trad6")}</p>
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
                    id="text-3"
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center"> {t("Trinite.text3.trad1")}</p>

                    <p>{t("Trinite.text3.trad2")}</p>
                    <br />
                    <p>{t("Trinite.text3.trad3")}</p>
                    <p>{t("Trinite.text3.trad4")}</p>
                    <p>{t("Trinite.text3.trad5")}</p>
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
                    id="text-4"
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center"> {t("Trinite.text4.trad1")}</p>
                    <p>{t("Trinite.text4.trad2")}</p>
                    <p>{t("Trinite.text4.trad3")}</p>
                    <p>{t("Trinite.text4.trad4")}</p>
                    <p>{t("Trinite.text4.trad5")}</p>
                    <p>{t("Trinite.text4.trad6")}</p>
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
                    id="text-5"
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center"> {t("Trinite.text5.trad1")}</p>
                    <p> {t("Trinite.text5.trad2")}</p>
                    <p> {t("Trinite.text5.trad3")}</p>
                    <p>{t("Trinite.text5.trad4")}</p>
                    <p>{t("Trinite.text5.trad5")}</p>
                    <p>{t("Trinite.text5.trad6")}</p>
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
                    id="text-6"
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">{t("Trinite.text6.trad1")}</p>
                    <p>{t("Trinite.text6.trad2")}</p>
                    <p>{t("Trinite.text6.trad3")}</p>
                    <p>{t("Trinite.text6.trad4")}</p>
                    <p>{t("Trinite.text6.trad5")}</p>
                    <p>{t("Trinite.text6.trad6")}</p>
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
                    id="text-7"
                    className="flex flex-col gap-4 p-10  justify-center bg-cover bg-center text-black"
                    style={{ backgroundImage: `url('${bg}')` }}
                  >
                    <p className="text-center">{t("Trinite.text7.trad1")}</p>
                    <p>{t("Trinite.text7.trad2")}</p>
                    <p>{t("Trinite.text7.trad3")}</p>
                    <p>{t("Trinite.text7.trad4")}</p>
                    <p>{t("Trinite.text7.trad5")}</p>
                    <p>{t("Trinite.text7.trad6")}</p>
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
