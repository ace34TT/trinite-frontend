import React from "react";
import MainHeader from "../../components/main-header/MainHeader";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import CookieConsent from "react-cookie-consent";

function MainLayout() {
  return (
    <motion.div>
      <CookieConsent
        flipButtons
        debug={true}
        location="bottom"
        buttonText="Accepter"
        enableDeclineButton
        declineButtonText="Refuser"
        cookieName="myAwesomeCookieName2"
        style={{
          background: "#0e0e0e",
          color: "black",
          width: "100%",
          padding: 8,
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
        }}
        buttonStyle={{
          color: "#000",
          backgroundColor: "white",
          fontSize: "13px",
        }}
        declineButtonStyle={{ background: "none" }}
        expires={150}
      >
        <div className={"w-10/12 prose max-w-none text-xs text-white"}>
          <h2 className="text-white uppercase">
            politique relative aux cookies
          </h2>
          <p>
            Ce site utilise des cookies pour améliorer votre expérience. En
            continuant à naviguer sur ce site, vous acceptez l'utilisation de
            cookies. Pour en savoir plus sur notre politique en matière de
            cookies et sur la façon de les contrôler, veuillez consulter notre
            politique de confidentialité.
          </p>
        </div>
      </CookieConsent>
      <div className="flex flex-col min-h-screen">
        <MainHeader />
        <div className=" flex-grow bg-white text-black dark:bg-black dark:text-white">
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
}

export default MainLayout;
