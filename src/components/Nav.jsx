import React, { useContext, useState, useRef, useEffect } from "react";
import "../stylesheet/Nav.css";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
// import CalculateIcon from "@mui/icons-material/Calculate";
import { Link, useNavigate } from "react-router-dom";

import { fetchreq, uploadImageAws, jwtauth } from "../Helper/fetch";
import { MyContext } from "../App";
// import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LinkOff } from "@mui/icons-material";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
const Nav = () => {
  const { user, setUser, isLogin, setIsLogin,setIsBLogin } = useContext(MyContext);
  const nav = useNavigate();
  const [si, setSi] = useState("Log In");
  const othenticate = async () => {
    if (isLogin) {
      nav("/dashboard");
    } else {
      setSi("Log In...");
      const a = await jwtauth();
      if (a) {
        setIsLogin(true);
        const users = a.result[0];
        setUser(users);
        if (users.Status == 0) {
          nav("/plan");
        } else {
          nav("/dashboard");
        }
      } else {
        nav("/signIn");
      }
      setSi("Log In");
    }
  };
  //  const { user, setUser, isLogin, setIsLogin } = useContext(MyContext);
  //  const nav = useNavigate();
  //  const [si, setSi] = useState("Log In");
  const [scrolled, setScrolled] = useState(false); // State to track if user has scrolled
  const [toggle, setToggle] = useState("off");
  const sideNav = useRef();
  const navElement = useRef(null);

  const handleToggle = () => {
    if (toggle === "off") {
      setToggle("on");
      sideNav.current.style.right = "0px";
    } else {
      setToggle("off");
      sideNav.current.style.right = "-300px";
    }
  };
  // const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    // Calculate the scroll position in vh
    const scrollPosition = (window.scrollY / window.innerHeight) * 100;

    // Check if the user has scrolled down to 70vh
    if (scrollPosition >= 75) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define the CSS class based on the 'scrolled' state
  const navClass = scrolled ? "nav-scrolled" : "nav-default";

  return (
    <>
      {" "}
      <div id="side-nav" ref={sideNav}>
        <div className="cl" onClick={handleToggle}>
          <IconButton>
            <CloseIcon className="wt" />
          </IconButton>
        </div>
        <div id="links">
          {/* <Link to="/">Home</Link> */}
          <Link to="/about">About</Link>
          <Link to="/in-sites">Indian Sites</Link>

          <Link to="/disp-plan">Plans</Link>
          <Link to="/calc">Calculator</Link>
          <Link to="/offers">Offers</Link>
          {/* <Link to="/comming-soon">Delivery Partners</Link> */}
        </div>

        <div onClick={othenticate} id="log" className="btn btn-o">
          <a>{isLogin ? "Dashboard" : si}</a>
        </div>
        <br />
        {!isLogin && (
          <Link to="/signUp" id="log" className="btn btn-o">
            Sign Up
          </Link>
        )}
      </div>
      <nav ref={navElement} className={navClass}>
        <div id="logo">
          <div id="dg">
            <Link to="/">YOUR INDIAN SHOP</Link>
          </div>
        </div>
        <div id="links">
          {/* <Link to="/">Home</Link> */}
          <Link to="/about">About</Link>
          <a id="drop-hd">
            Services
            <div className="drop-list">
              <Link to="/offers">Festive Offers </Link>
              <Link to="/coming-soon">Delivery Partners</Link>
            </div>
          </a>{" "}
          <Link to="/disp-plan">Plans</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/calc">Shipping Calculator</Link>
          {/* <Link to="/in-sites">Indian Sites</Link> */}
        </div>
        {/* <div id="smd">
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
        </div> */}
        <a
          href="https://www.youtube.com/watch?v=YB67y0NepPs&t=2s&pp=ygUbZHJvcHNoaXBwaW5nIGFuaW1hdGVkIHZpZGVv"
          target="_blank"
        >
          <IconButton id="yt-ico">
            <YouTubeIcon />
          </IconButton>
        </a>
        <div className="nav-right">
          <div onClick={othenticate} id="log" className="btn btn-og">
            <a>{isLogin ? "Dashboard" : si}</a>
          </div>
          {/* {!isLogin && (
            <Link to="/signUp" id="log" className="btn btn-og">
              <div>Sign Up</div>
            </Link>
          )} */}
        </div>
        <div id="tog" onClick={handleToggle}>
          <IconButton>
            <MenuIcon className="wt" />
          </IconButton>
        </div>
      </nav>
    </>
  );
};

export default Nav;
