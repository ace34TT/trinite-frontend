import { motion, useAnimation } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const onMouseMove = (e: { clientX: any; clientY: any }) => {
    setCursorPosition({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div
      className="cursor w-10 h-10 rounded-full flex justify-center items-center bg-transparent border-2 border-white"
      style={{
        transform: `translate(${cursorPosition.x - 16}px, ${
          cursorPosition.y - 16
        }px)`,
      }}
    >
      <div className="w-4 h-4 rounded-full bg-white"></div>
    </div>
  );
};

export default CustomCursor;
