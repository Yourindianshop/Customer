import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "../../constants/index";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const {  isLogin } = useContext(MyContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar sm:border-b-2 sm:border-gray">
      <div className="container sm:p-4">
        <Link to="/">
          <h2 className="headdddd cursor-pointer ">YOUR INDIAN SHOP</h2>
        </Link>

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
          {!isLogin ? <div className="nav-btn sm:flex-col">
            <Link to="/signup">
              <div className="nav-btn-1">Create Account</div>
            </Link>
            <Link to="/signIn">
              <div className="nav-btn-2">Login</div>
            </Link>
          </div> :
          <div className="nav-btn sm:flex-col">
            <Link to="/dashboard">
              <div className="nav-btn-1">Dashboard</div>
            </Link>
            
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
