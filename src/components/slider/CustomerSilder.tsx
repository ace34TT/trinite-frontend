import React, { ReactNode, useState } from "react";
import { isMobile } from "react-device-detect";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./style.css";
import Slider, { ResponsiveObject } from "react-slick";
interface IProps {
  children: ReactNode;
}

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

const CustomSlider: React.FC<IProps> = ({ children }) => {
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
  return (
    <div
      className="h-full"
      onMouseEnter={() => setShowItems(true)}
      onMouseLeave={() => setShowItems(false)}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
export default CustomSlider;
