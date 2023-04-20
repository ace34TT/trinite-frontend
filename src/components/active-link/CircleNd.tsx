import React from "react";

interface IProps {
  theme: string;
}
export default function CircleNd({ theme }: IProps) {
  return (
    <svg
      width="165"
      height="68"
      viewBox="0 0 165 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M82.9344 10.2652C53.5631 -2.35751 15.3803 -0.537212 13.4223 15.8302C11.4642 32.1975 21.2546 49.5469 39.2037 56.4212C57.1529 63.2955 87.2687 65.3201 96.3147 65.587C118.506 66.2417 154.187 68.8596 162.237 44.6367C167.132 29.9061 147.878 10.9199 121.444 6.33708C103.971 3.30795 68.9014 3.39096 49.6469 6.99178C39.055 8.97259 2.97905 13.2114 2 27.2873"
        stroke={theme === "dark" ? "white" : "black"}
        stroke-width="3"
      />
    </svg>
  );
}
