import React from "react";
import MainHeader from "../../components/main-header/MainHeader";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function MainLayout() {
  // const pageVariants = {
  //   initial: {
  //     opacity: 0,
  //     x: "-100vw",
  //   },
  //   in: {
  //     opacity: 1,
  //     x: 0,
  //   },
  //   out: {
  //     opacity: 0,
  //     x: "100vw",
  //   },
  // };
  // const pageTransition = {
  //   type: "tween",
  //   ease: "anticipate",
  //   duration: 0.5,
  // };
  return (
    <motion.div
    // initial="initial"
    // animate="in"
    // exit="out"
    // variants={pageVariants}
    // transition={pageTransition}
    >
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
