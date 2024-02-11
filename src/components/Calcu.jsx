import React from "react";
import Navbar from "../pages/home/Navbar";
import Footer from "./Footer";
import Calci from "../pages/home/Calci";

const Calcu = () => {
  return (
    <div>
      <Navbar />
      <Calci />
      <img src="/maze.png" alt="" className="mt:-[-3rem]" />
      <Footer />
    </div>
  );
};

export default Calcu;
