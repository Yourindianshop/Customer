import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "../../constants/index";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="container">
        <a href="/">
          <h2 className="headdddd">YOUR INDIAN SHOP</h2>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="icon" />
          ) : (
            <FaBars className="icon" />
          )}
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link
              to={link.href}
              key={link.key}
              className="nav-link"
              onClick={toggleMenu}
            >
              <h3 className="nav-linkss">{link.label}</h3>
            </Link>
          ))}
          <div className="nav-btn">
            <a href="/signup">
              <div className="nav-btn-1">Login</div>
            </a>
            <a href="/signIn">
              <div className="nav-btn-2">Sign In</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
