import React from "react";

interface IProps {
  theme: string;
}
export default function CircleSt({ theme }: IProps) {
  return (
    <svg
      width="182"
      height="83"
      viewBox="0 0 182 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65.9247 2C-6.41527 25.6869 17.6981 60.5594 30.0806 67.7971C48.1376 78.3516 82.8692 80.9565 97.2068 80.9565C108.938 80.9565 153.906 82.2724 169.547 70.429C174.341 66.7988 179.137 61.8635 179.974 50.0319C180.626 40.8203 168.873 32.9647 153.254 25.6869C127.837 13.8435 91.3411 13.1855 82.8688 13.1855C72.4415 13.1855 0.0840141 15.8174 2.03888 47.4"
        stroke={theme === "dark" ? "white" : "black"}
        stroke-width="3"
      />
    </svg>
  );
}
