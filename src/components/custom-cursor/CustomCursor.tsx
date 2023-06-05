import { motion, useAnimation } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CustomCursor = () => {
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
  const cursor = useSelector((state: RootState) => state.cursor);

  return (
    <div
      className={`cursor ${
        cursor.hoveringTitles
          ? "mix-blend-difference w-10 h-10"
          : cursor.hoveringContact
          ? "w-32 h-32"
          : "w-5 h-5"
      }  rounded-full flex justify-center items-center border-2 bg-black border-black dark:bg-white dark:border-white`}
      style={{
        transform: `translate(${
          cursorPosition.x - (cursor.hoveringTitles ? 20 : 16)
        }px, ${cursorPosition.y - (cursor.hoveringTitles ? 20 : 16)}px)`,
        transition: "width 0.3s, height 0.3s",
      }}
    >
      {cursor.hoveringContact && (
        <div
          className={`${
            cursor.hoveringContact ? "scale-100" : "scale-0"
          } text-2xl font-extrabold`}
          style={{ transition: "transform 0.3 ease-in-out" }}
        >
          Contact
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
