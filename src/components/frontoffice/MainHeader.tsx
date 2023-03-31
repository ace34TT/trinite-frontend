import React from "react";

export default function MainHeader() {
  return (
    <div className="flex justify-around items-center h-20 bg-black text-white">
      <div className="">logo</div>
      <ul className="flex items-center gap-24 text-2xl">
        <li>
          <a href="">Notre maison</a>
        </li>
        <li>
          <a href="">Trinite</a>
        </li>
        <li>
          <a href="">Unique</a>
        </li>
        <li>
          <a href="">Atelier</a>
        </li>
        <li>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </li>
      </ul>
      <div className="">maison de haute </div>
    </div>
  );
}
