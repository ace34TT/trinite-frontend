import React from "react";
import MainHeader from "../../components/frontoffice/MainHeader";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default MainLayout;
