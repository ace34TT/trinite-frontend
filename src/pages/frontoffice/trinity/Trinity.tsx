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
  require("./../../../assets/products/10.png"), // 0
  require("./../../../assets/products/12.png"), // 1
  require("./../../../assets/products/11.png"), // 2
  require("./../../../assets/products/13.png"), // 3
  require("./../../../assets/products/14.png"), // 4
  require("./../../../assets/products/9.png"), // 5
  //
  require("./../../../assets/products/gd-1.png"), // 6
  require("./../../../assets/products/gd-2.png"), // 7
  require("./../../../assets/products/gd-3.png"), // 8
  require("./../../../assets/products/gd-4.png"), // 9
  //
  require("./../../../assets/products/tc-1.png"), // 10
  require("./../../../assets/products/tc-2.png"), // 11
  require("./../../../assets/products/tc-3.png"), // 12
  require("./../../../assets/products/tc-4.png"), // 13
  //
  require("./../../../assets/element/coming-soon.png"), // 14
];

function CustomPrevArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow custom-prev-arrow absolute top-1/2 -left-10 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={42} className="text-gray-300" />
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
      <MdKeyboardArrowRight size={42} className="text-gray-300" />
    </div>
  );
}

export default function Trinity() {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: false,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <div className="h-[800px] sm:h-auto py-16 px-14 flex flex-col items-center justify-center border-t sm:border-l border-gray-300">
            <p className="text-justify text-xl">{t("Trinite.trad1")}</p>
          </div>
          <div className="h-[800px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border-t sm:border-l border-gray-300">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full flex justify-between gap-10">
                <p className="flex-grow">
                  {t("Trinite.trad2.txt1")}
                  <br />
                  {t("Trinite.trad2.txt2")}
                </p>
                <p>3200€</p>
              </div>{" "}
              <br />
              <Slider {...settings}>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[5]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[3]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[4]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    id="text-1"
                    className="flex flex-col gap-4 p-10 justify-start bg-cover bg-center text-black h-full"
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
          <div className="h-[800px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border-t sm:border-l border-gray-300">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full flex justify-between gap-10">
                <p>
                  {t("Trinite.trad3.txt1")}
                  <br></br>
                  {t("Trinite.trad3.txt2")}
                </p>
                <p>5300€</p>
              </div>
              <br />
              <Slider {...settings}>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[6]} alt="" className="w-80" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[7]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[8]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[9]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    id="text-2"
                    className="h-full flex flex-col gap-4 p-10  justify-start bg-cover bg-center text-black"
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
          <div className="h-[800px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border-t sm:border-l border-gray-300">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full flex justify-between gap-10">
                <p>
                  {t("Trinite.trad5.txt1")}
                  <br></br>
                  {t("Trinite.trad5.txt2")}
                </p>
                <p>3400€</p>
              </div>
              <br />
              <Slider {...settings}>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img
                        src={images[10]}
                        alt=""
                        style={{ mixBlendMode: "darken" }}
                        className="w-96"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[11]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[12]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[13]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    id="text-2"
                    className="h-full flex flex-col gap-4 p-10  justify-start bg-cover bg-center text-black"
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
          <div className="h-[800px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border-t sm:border-l border-gray-300">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full flex justify-between gap-10">
                <p>
                  {t("Trinite.trad4.txt1")}
                  <br></br>
                  {t("Trinite.trad4.txt2")}
                </p>
                <p>3900€</p>
              </div>
              <br />
              <Slider {...settings}>
                <div className="h-full w-full">
                  <div className="h-full flex flex-col items-center relative">
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[14]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    id="text-3"
                    className="h-full flex flex-col gap-4 p-10  justify-start bg-cover bg-center text-black"
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
          <div className="h-[800px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border-t sm:border-l border-gray-300">
            <div className="h-full w-full flex flex-col gap-4">
              <div className="w-full flex justify-between gap-10">
                <p>
                  {t("Trinite.trad6.txt1")}
                  <br></br>
                  {t("Trinite.trad6.txt2")}
                </p>
                <p>5300€</p>
              </div>
              <br />
              <Slider {...settings}>
                <div className="h-full">
                  <div className="h-full relative flex flex-col items-center">
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[14]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    id="text-2"
                    className="h-full flex flex-col gap-4 p-10 justify-start bg-cover bg-center text-black"
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
          <div className="h-[800px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border-t sm:border-l border-gray-300">
            <div className="h-full w-full flex flex-col gap-4">
              <div className="w-full flex justify-between gap-10">
                <p>
                  {t("Trinite.trad7.txt1")}
                  <br></br>
                  {t("Trinite.trad7.txt2")}
                </p>
                <p>3200€</p>
              </div>
              <br />
              <Slider {...settings}>
                <div className="h-full">
                  <div className=" h-full relative flex flex-col items-center">
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[14]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    id="text-2"
                    className="h-full flex flex-col gap-4 p-10  justify-start bg-cover bg-center text-black"
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
          <div className="h-[800px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border-t sm:border-l border-gray-300">
            <div className="h-full w-full flex flex-col gap-4">
              <div className="w-full flex justify-between gap-10">
                <p>
                  {t("Trinite.trad8.txt1")}
                  <br></br>
                  {t("Trinite.trad8.txt2")}
                </p>
                <p>3200€</p>
              </div>
              <br />
              <Slider {...settings}>
                <div className="h-full w-full">
                  <div className="h-full w-full relative flex flex-col items-center">
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[14]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    id="text-2"
                    className="h-full flex flex-col gap-4 p-10  justify-start bg-cover bg-center text-black"
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
          <div className="sr-only sm:not-sr-only h-[800px] sm:h-auto py-16 px-14 flex flex-col items-center justify-start border-t border-l border-gray-300">
            <div className="h-full w-full flex flex-col gap-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
