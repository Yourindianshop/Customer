import React from "react";
import Navbar from "../pages/home/Navbar";
import Footer from "./Footer";

const Feature = () => {
  return (
    <div>
      <Navbar />
      <div class="flex justify-center items-center h-screen">
        <iframe
          src="https://lottie.host/embed/6fb5025f-eaeb-475d-adac-f121a885c729/sqZE4l5tvg.json"
          title="hello"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Feature;
