import React from "react";
import Navbar from "../pages/home/Navbar";
import Footer from "./Footer";

const Feature = () => {
  return (
    <div>
      <Navbar />
      <div class="flex justify-center items-center h-screen">
        <h3 className="text-6xl font-bold">Coming Soon...</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Feature;
