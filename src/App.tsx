import "./App.css";
import { Routes, Route } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import MainLayout from "./pages/frontoffice/MainLayout";
import OurHouse from "./pages/frontoffice/OurHouse";
import Trinity from "./pages/frontoffice/trinity/Trinity";
import Workshop from "./pages/frontoffice/Workshop";
import Contact from "./pages/frontoffice/contact/Contact";
import Portal from "./pages/frontoffice/portal/Portal";
import Homepage from "./pages/frontoffice/homepage/Homepage";
import CustomCursor from "./components/custom-cursor/CustomCursor";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";

function App() {
  // const dispatch = useDispatch();
  const preloading = useSelector((state: RootState) => state.preloading);
  return (
    <>
      {/* {!preloading && <CustomCursor />} */}
      {!isMobile && <CustomCursor />}
      <Helmet>
        <link
          rel="preload"
          href="./assets/font/HelveticaNowText-ExtraBold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Helmet>
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
