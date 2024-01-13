import React from "react";
import "./Various.css";

const VariousSites = () => {
  return (
    <div className="various-sites-container">
      <div className="sites-gallery">
        {[...Array(16)].map((_, index) => (
          <div className="site-card" key={index}>
            <img
              className="site-img"
              src={`/comp/${index + 1}.png`}
              alt={`Site ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="nav-btnn">
        <a href="/in-sites">
          <div className="nav-btn-1">
            <span className="view-more">View More</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default VariousSites;
