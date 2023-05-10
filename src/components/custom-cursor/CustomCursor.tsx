import { motion, useAnimation } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const cursorStyle: React.CSSProperties = {
    position: "fixed",
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
  };
  const cursorLinkStyle: React.CSSProperties = {
    position: "fixed",
    left: `${position.x}px`,
    top: `${position.y}px`,

    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
  };
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const onMouseEnter = useCallback(() => {
    setIsHoveringLink(true);
    controls.start({ height: 64, width: 64, opacity: 1 });
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHoveringLink(false);
    controls.start({ height: 40, width: 40, opacity: 0.5 });
  }, []);
  const controls = useAnimation();
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnter);
      link.addEventListener("mouseleave", onMouseLeave);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnter);
        link.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [onMouseEnter, onMouseLeave]);

  return (
    <div
      className="relative w-min"
      style={isHoveringLink ? cursorLinkStyle : cursorStyle}
    >
      <div className="w-16 h-16 bg-transparent border-4 border-stone-200 rounded-full"></div>
      <motion.div
        animate={controls}
        initial={{ height: 40, width: 40 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gray-50  rounded-full"
      ></motion.div>
    </div>
  );
};

export default CustomCursor;
