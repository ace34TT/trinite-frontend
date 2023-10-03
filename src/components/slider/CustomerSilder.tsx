import React, { ReactNode, useState } from "react";
import { isMobile } from "react-device-detect";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./style.css";
import Slider, { ResponsiveObject } from "react-slick";
import { useTranslation } from "react-i18next";
interface IProps {
  children: ReactNode;
  desc: ReactNode;
}

function CustomPrevArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow custom-prev-arrow absolute bottom-0 -left-10 transform cursor-pointer z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={42} className="text-zinc-300 " />
    </div>
  );
}

function CustomNextArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <div
      // className="slick-arrow custom-next-arrow absolute top-1/2 -right-10 transform -translate-y-1/2 cursor-pointer z-10"
      className="slick-arrow rounded-full custom-next-arrow absolute bottom-0 -right-10 transform cursor-pointer z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={42} className="text-zinc-300" />
    </div>
  );
}

const CustomSlider: React.FC<IProps> = ({ children, desc }) => {
  const [showItems, setShowItems] = useState(false);
  const settings = {
    dots: showItems,
    arrows: showItems,
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
  const { t } = useTranslation();
  return (
    <div
      className="h-[450px] sm:h-auto py-5 px-7 sm:py-16 sm:px-14 flex flex-col items-center justify-start border-t sm:border-l dark:border-zinc-700 border-zinc-300"
      onMouseEnter={() => setShowItems(true)}
      onMouseLeave={() => setShowItems(false)}
    >
      <div className="w-full h-full flex flex-col gap-1 sm:gap-4">
        <div className="w-full flex justify-between gap-10">{desc}</div>
        <br className="sr-only sm:not-sr-only" />
        <div className="h-full">
          <Slider {...settings}>{children}</Slider>
        </div>{" "}
      </div>
    </div>
  );
};
export default CustomSlider;
