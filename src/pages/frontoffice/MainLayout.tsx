import React from "react";
import MainHeader from "../../components/main-header/MainHeader";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <div className=" flex-grow bg-white text-black dark:bg-black dark:text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
