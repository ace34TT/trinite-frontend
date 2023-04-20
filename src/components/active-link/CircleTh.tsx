import React from "react";

interface IProps {
  theme: string;
}
export default function CircleTh({ theme }: IProps) {
  return (
    <svg
      width="178"
      height="81"
      viewBox="0 0 178 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.9993 2C9.94218 31.3446 12.9108 50.4419 27.0636 61.6208C47.703 77.9233 70.6984 79.6092 97.8943 78.8549C139.877 77.6904 176.465 69.5391 175.996 55.0997C175.526 40.6603 138.469 27.6183 120.879 23.4262C103.591 19.3063 82.649 18.0697 46.9994 24.8236C10.0086 31.8316 -1.55018 48.3458 2.90605 54.8668"
        stroke={theme === "dark" ? "white" : "black"}
        stroke-width="3"
      />
    </svg>
  );
}
