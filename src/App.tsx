import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import MainLayout from "./pages/frontoffice/MainLayout";
import OurHouse from "./pages/frontoffice/OurHouse";
import Trinity from "./pages/frontoffice/trinity/Trinity";
import Workshop from "./pages/frontoffice/Workshop";
import Contact from "./pages/frontoffice/contact/Contact";
import Portal from "./pages/frontoffice/portal/Portal";
import Homepage from "./pages/frontoffice/Homepage/Homepage";
import CustomCursor from "./components/custom-cursor/CustomCursor";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="accueil" element={<Homepage />}></Route>
          <Route path="notre-maison" element={<OurHouse />} />
          <Route path="trinite" element={<Trinity />} />
          <Route path="atelier" element={<Workshop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
