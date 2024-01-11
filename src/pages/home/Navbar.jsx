import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "../../constants/index";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="container">
        <a href="/">
          <h1 className="head">YOUR INDIAN SHOP</h1>
        </a>

        <div className="menu-icon lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="icon" />
          ) : (
            <FaBars className="icon" />
          )}
        </div>

        <div
          className={`nav-links ${
            isMenuOpen ? "active" : ""
          } lg:flex lg:gap-20`}
        >
          {NAV_LINKS.map((link) => (
            <a
              href={link.href}
              key={link.key}
              className="nav-link"
              onClick={toggleMenu}
            >
              <span className="nav-linkss">{link.label}</span>
            </a>
          ))}
          <div className="nav-btn">
            <div className="nav-btn-1">Login</div>
            <div className="nav-btn-2">Sign In</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
