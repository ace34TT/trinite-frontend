import React, { useEffect, useState } from "react";
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
    width: `${150}px`,
    height: `${150}px`,
    borderRadius: "50%",
    backgroundColor: "red",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
  };

  return <div style={cursorStyle} />;
};

export default CustomCursor;
