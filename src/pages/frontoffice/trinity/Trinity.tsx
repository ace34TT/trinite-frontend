import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./../../../assets/font/style.css";
import bg from "./../../../assets/background/Capture d’écran 2023-04-21 à 22.24 1.png";
import Slider, { ResponsiveObject } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { isMobile } from "react-device-detect";
import CustomSlider from "../../../components/slider/CustomerSilder";
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
  require("./../../../assets/products/main-item-1.png"), // 15
  require("./../../../assets/products/main-item-2.png"), // 16
  require("./../../../assets/products/main-item-3.png"), // 17
];

function CustomPrevArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <div
      // className="slick-arrow custom-prev-arrow absolute top-1/2 -left-10 transform -translate-y-1/2 cursor-pointer z-10"
      className="slick-arrow bg-zinc-300 rounded-full custom-prev-arrow absolute bottom-0 -left-10 transform cursor-pointer z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft
        size={42}
        className="text-black "
        style={{ strokeWidth: 1 }}
      />
    </div>
  );
}

function CustomNextArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <div
      // className="slick-arrow custom-next-arrow absolute top-1/2 -right-10 transform -translate-y-1/2 cursor-pointer z-10"
      className="slick-arrow bg-zinc-300 rounded-full custom-next-arrow absolute bottom-0 -right-10 transform cursor-pointer z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight
        size={42}
        className="text-black"
        style={{ strokeWidth: 1 }}
      />
    </div>
  );
}

export default function Trinity() {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: isMobile ? <></> : <CustomPrevArrow onClick={() => {}} />,
    nextArrow: isMobile ? <></> : <CustomNextArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dotsClass: "slick-dots custom-dots",
          appendDots: (dots: any) => (
            <div style={{ position: "absolute", bottom: "0px" }}>{dots}</div>
          ),
        },
      },
    ] as unknown as ResponsiveObject[],
  };

  return (
    <>
      <Helmet>
        <title>Trinité - Trinité</title>
      </Helmet>
      <div className="pt-0 " style={{ fontFamily: "CustomFont" }}>
        <div className="flex w-full justify-start p-10 lg:my-20 lg:px-32 ">
          <p className="text-sm sm:text-xl w-full lg:w-9/12 text-left white">
            {t("Trinite.trad1")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <div className="h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t sm:border-l dark:border-zinc-700 border-zinc-300">
            <div className="w-full h-full flex flex-col gap-1 sm:gap-4">
              <div className="w-full flex justify-between gap-10">
                <p className="flex-grow font-bold text-lg">
                  {t("Trinite.trad2.txt1")}
                  <br />
                  {t("Trinite.trad2.txt2")}
                </p>
                <p>3200€</p>
              </div>
              <br className="sr-only sm:not-sr-only" />
              <CustomSlider>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-auto w-full sm:w-[450px] flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[15]} alt="" />
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
                      className="h-auto w-72 sm:w-96 flex items-center justify-center"
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
                    className="text-sm sm:text-base flex flex-col gap-2 sm:gap-4 p-5 sm:p-10 justify-start bg-cover bg-center text-black h-full"
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
              </CustomSlider>
            </div>
          </div>
          <div className="h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t sm:border-l dark:border-zinc-700 border-zinc-300">
            <div className="w-full h-full flex flex-col gap-1 sm:gap-4">
              <div className="w-full flex justify-between gap-10">
                <p className="font-bold text-lg">
                  {t("Trinite.trad3.txt1")}
                  <br></br>
                  {t("Trinite.trad3.txt2")}
                </p>
                <p>5300€</p>
              </div>
              <br className="sr-only sm:not-sr-only" />
              <CustomSlider>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-auto w-full sm:w-[450px] flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[17]} alt="" />
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
                      className="h-auto w-full sm:w-[400px] flex items-center justify-center"
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
                      className="h-auto w-full sm:w-[450px] flex items-center justify-center"
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
                      className="h-auto w-full sm:w-[400px] flex items-center justify-center"
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
                    className="text-sm sm:text-base h-full flex flex-col gap-2 sm:gap-4 p-5 sm:p-10 justify-start bg-cover bg-center text-black"
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
              </CustomSlider>
            </div>
          </div>
          <div className="h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t sm:border-l dark:border-zinc-700 border-zinc-300">
            <div className="w-full h-full flex flex-col gap-1 sm:gap-4">
              <div className="w-full flex justify-between gap-10">
                <p className="font-bold text-lg">
                  {t("Trinite.trad5.txt1")}
                  <br></br>
                  {t("Trinite.trad5.txt2")}
                </p>
                <p>3400€</p>
              </div>
              <br className="sr-only sm:not-sr-only" />
              <CustomSlider>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-auto w-full sm:w-[450px] flex items-center justify-center"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img src={images[16]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="h-full flex flex-col items-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="h-auto w-72 sm:w-[375px] flex items-center justify-center"
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
                      className="h-auto w-80 sm:w-[375px] flex items-center justify-center"
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
                      className="h-auto w-80 sm:w-[375px] flex items-center justify-center"
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
                      className="h-auto w-80 sm:w-[350px] flex items-center justify-center"
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
                    className="text-sm sm:text-base h-full flex flex-col gap-2 sm:gap-4 p-5 sm:p-10 justify-start bg-cover bg-center text-black"
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
              </CustomSlider>
            </div>
          </div>
          <div className="h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t sm:border-l dark:border-zinc-700 border-zinc-300">
            <div className="w-full h-full flex flex-col gap-1 sm:gap-4">
              <div className="w-full flex justify-between gap-10">
                <p className="font-bold text-lg">
                  {t("Trinite.trad4.txt1")}
                  <br></br>
                  {t("Trinite.trad4.txt2")}
                </p>
                <p>3900€</p>
              </div>
              <br />
              <CustomSlider>
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
                    className="text-sm sm:text-base h-full flex flex-col gap-2 sm:gap-4 p-5 sm:p-10 justify-start bg-cover bg-center text-black"
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
              </CustomSlider>
            </div>
          </div>
          <div className="h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t sm:border-l dark:border-zinc-700 border-zinc-300">
            <div className="w-full h-full flex flex-col gap-1 sm:gap-4">
              <div className="w-full flex justify-between gap-10">
                <p className="font-bold text-lg">
                  {t("Trinite.trad6.txt1")}
                  <br></br>
                  {t("Trinite.trad6.txt2")}
                </p>
                <p>5300€</p>
              </div>
              <br className="sr-only sm:not-sr-only" />
              <CustomSlider>
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
                    className="text-sm sm:text-base h-full flex flex-col gap-2 sm:gap-4 p-5 sm:p-10 justify-start bg-cover bg-center text-black"
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
              </CustomSlider>
            </div>
          </div>
          <div className="h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t sm:border-l dark:border-zinc-700 border-zinc-300">
            <div className="w-full h-full flex flex-col gap-1 sm:gap-4">
              <div className="w-full flex justify-between gap-10">
                <p className="font-bold text-lg">
                  {t("Trinite.trad7.txt1")}
                  <br></br>
                  {t("Trinite.trad7.txt2")}
                </p>
                <p>3200€</p>
              </div>
              <br className="sr-only sm:not-sr-only" />
              <CustomSlider>
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
                    className="text-sm sm:text-base h-full flex flex-col gap-2 sm:gap-4 p-5 sm:p-10 justify-start bg-cover bg-center text-black"
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
              </CustomSlider>
            </div>
          </div>
          <div className="h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t sm:border-l dark:border-zinc-700 border-zinc-300">
            <div className="w-full h-full flex flex-col gap-1 sm:gap-4">
              <div className="w-full flex justify-between gap-10">
                <p className="font-bold text-lg">
                  {t("Trinite.trad8.txt1")}
                  <br></br>
                  {t("Trinite.trad8.txt2")}
                </p>
                <p>3200€</p>
              </div>
              <br className="sr-only sm:not-sr-only" />
              <CustomSlider>
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
                    className="text-sm sm:text-base h-full flex flex-col gap-2 sm:gap-4 p-5 sm:p-10 justify-start bg-cover bg-center text-black"
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
              </CustomSlider>
            </div>
          </div>
          <div className="sr-only sm:not-sr-only h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t border-l dark:border-zinc-700 border-zinc-300">
            <div className="w-full h-full flex flex-col gap-4"></div>
          </div>
          <div className="sr-only sm:not-sr-only h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t border-l dark:border-zinc-700 border-zinc-300">
            <div className="w-full h-full flex flex-col gap-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
