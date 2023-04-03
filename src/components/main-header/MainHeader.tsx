import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme.feature";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
export default function MainHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <header className="flex justify-around items-center  py-7 bg-white text-black dark:bg-black dark:text-white">
      <div className="">logo</div>
      <ul className="flex items-center font-normal gap-24 text-xl">
        <li>
          <Link to={"/notre-maison"}>La maison</Link>
        </li>
        <li>
          <Link to={"/trinite"}>Trinite</Link>
        </li>
        <li>
          <Link to={"/atelier"}>L’atelier</Link>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
        <li>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              onClick={() => {
                dispatch(toggleTheme());
              }}
              className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "
            ></div>
          </label>
        </li>
      </ul>
      <div className="text-2xl uppercase">
        Maison <br /> de haute <br /> joaeollerie
      </div>
    </header>
  );
}