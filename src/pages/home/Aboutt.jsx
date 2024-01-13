// Aboutt.jsx

import React from "react";
import Navbar from "./Navbar"; // Make sure to adjust the path based on your project structure
import Footer from "../../components/Footer"; // Adjust the path as needed
import "./Aboutt.css"; // You can create a separate CSS file for the About page

const Aboutt = () => {
  return (
    <div className="about-page">
      <Navbar />

      <div className="about-content">
        <h1>
          Welcome to YourIndianShop - Connecting You to the Heart of India!
        </h1>
        <p>
          At YourIndianShop, we understand the unique needs of Indians living
          abroad and individuals with a profound interest in the vibrant,
          diverse, and culturally rich offerings of India. Our mission is to
          turn your dreams of shopping from your favorite Indian online stores
          into a hassle-free reality.
        </p>
        <p>
          Whether you're an Indian expatriate missing the taste of home or
          someone enchanted by the allure of Indian products, we've got you
          covered. We specialize in bridging the gap between you and your
          desired Indian products, overcoming the challenge of international
          shipping barriers.
        </p>{" "}
        <img src="/home/delivery.gif" alt="Delivery GIF" />
      </div>

      <Footer />
    </div>
  );
};

export default Aboutt;
