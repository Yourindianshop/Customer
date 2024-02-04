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
    <div className="navbar sm:border-b-2 sm:border-gray">
      <div className="container sm:p-4">
        <a href="/">
          <h2 className="headdddd cursor-pointer ">YOUR INDIAN SHOP</h2>
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
              <h5 className="nav-linkss">{link.label}</h5>
            </Link>
          ))}
          <div className="nav-btn sm:flex-col">
            <Link to="/signup">
              <div className="nav-btn-1">Create Account</div>
            </Link>
            <Link to="/signIn">
              <div className="nav-btn-2">Login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
