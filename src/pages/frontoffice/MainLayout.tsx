import React from "react";
import MainHeader from "../../components/main-header/MainHeader";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <MainHeader />
      <div className="bg-white text-black dark:bg-black dark:text-white">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
