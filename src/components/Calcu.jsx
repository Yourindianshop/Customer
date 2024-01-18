import React from "react";
import Navbar from "../pages/home/Navbar";
import Footer from "./Footer";
import Calci from "../pages/home/Calci";

const Calcu = () => {
  return (
    <div>
      <Navbar />
      <Calci />
      <img src="/maze.png" alt="" />
      <Footer />
    </div>
  );
};

export default Calcu;
