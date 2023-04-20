import React from "react";

interface IProps {
  theme: string;
}
export default function CircleRd({ theme }: IProps) {
  return (
    <svg
      width="149"
      height="80"
      viewBox="0 0 149 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M92.6565 1.96365C23.6577 25.9751 18.484 39.6518 21.5622 54.9712C24.8035 71.1029 40.7242 79.4979 91.8759 77.9149C148.354 76.1671 152.159 60.7473 144.176 42.9808C142.996 40.355 139.943 35.0659 126.013 29.5607C101.017 19.6827 84.9954 19.8483 76.9262 20.0343C62.0287 20.3776 27.4736 22.813 1.70366 43.297"
        stroke={theme === "dark" ? "white" : "black"}
        stroke-width="3"
      />
    </svg>
  );
}
