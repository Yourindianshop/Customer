import React, { useContext, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "../stylesheet/Sidebar.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, useNavigate } from "react-router-dom";

import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DoNotDisturbAltOutlinedIcon from "@mui/icons-material/DoNotDisturbAltOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import Groups2Icon from "@mui/icons-material/Groups2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { MyContext } from "../App";
const Sidebar = () => {
  const [isCollapsedSidebar, setisCollapsedSidebar] = useState(false);
  const {setIsLogin}=useContext(MyContext);
  const nav = useNavigate()

  const toggleSidebarCollapseHandler = () => {
    setisCollapsedSidebar((prev) => !prev);
    console.log(isCollapsedSidebar);
  };
  const {isLogin,isBLogin,setIsBLogin}=useContext(MyContext)
  const logOut = async ()=>{
    window.localStorage.clear();
    setIsLogin(false);
    setIsBLogin(false);
    nav("/")
  }
  return (
    <>
      <aside data-collapse={isCollapsedSidebar}>
        <div id="side_nav">
          <header id="side_header" className="row">
            <span className="sidebar_nav_txt">
              <div className="logo">
                <span id="org">Your</span>
                <img src="../imgs/6.png" style={{ width: "40px" }} />
                <span className="">Shop</span>
              </div>
            </span>
            <button
              className="toggle gray toggle_btn"
              onClick={toggleSidebarCollapseHandler}
            >
              <MenuOpenIcon />
            </button>
          </header>
          <div id="nav_links">
            {isLogin && (
              <div id="link">
                <Link to="/dashboard/">
                  <span>
                    <DashboardOutlinedIcon />
                  </span>
                  <b className="sidebar_nav_txt">dashboard</b>
                </Link>
                <Link to="/dashboard/locker">
                  <span>
                    <LockClockOutlinedIcon />
                  </span>
                  <b className="sidebar_nav_txt">locker</b>
                </Link>
                <Link to="/dashboard/shop">
                  <span>
                    <ShoppingCartOutlinedIcon />
                  </span>
                  <b className="sidebar_nav_txt">Assisted Purchase</b>
                </Link>
                <Link to="/in-sites">
                  <span>
                    <StoreMallDirectoryOutlinedIcon />
                  </span>
                  <b className="sidebar_nav_txt">indian shops</b>
                </Link>

                {/* <Link to="/dashboard/assisted-purchase">
                <span>
                  <StickyNote2OutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">Assisted purchase Request</b>
              </Link> */}
                {/* <Link to="/dashboard/coupon">
                <span>
                  <DiscountOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">coupons available</b>
              </Link> */}
                <small className="sidebar_nav_txt">Help</small>
                <Link to="/dashboard/prohibited-items">
                  <span>
                    <DoNotDisturbAltOutlinedIcon />
                  </span>
                  <b className="sidebar_nav_txt">prohibited items</b>
                </Link>
                {/* <Link to="/">
                <span>
                  <BookOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt"> country guide </b>
              </Link> */}
                <Link to="/dashboard/calc">
                  <span>
                    <CalculateOutlinedIcon />
                  </span>
                  <b className="sidebar_nav_txt">shipping calc</b>
                </Link>

                <small className="sidebar_nav_txt">your stuff</small>
                {/* <Link to="/">
                <span>
                  <Groups2Icon />
                </span>
                <b className="sidebar_nav_txt"> refer and earn</b>
              </Link> */}
                <Link to="/dashboard/profile">
                  <span>
                    <AccountCircleIcon />
                  </span>
                  <b className="sidebar_nav_txt"> profile</b>
                </Link>
                <Link to="/Walete">
                  <span>
                    <AccountBalanceWalletIcon />
                  </span>
                  <b className="sidebar_nav_txt"> wallet</b>
                </Link>
                {/* <Link to="/billing">
                <span>
                  <AccountBalanceIcon />
                </span>
                <b className="sidebar_nav_txt"> billing</b>
              </Link> */}
                <Link to="/Customer-Review">
                  <span>
                    <AccountBalanceIcon />
                  </span>
                  <b className="sidebar_nav_txt">Reviews</b>
                </Link>
                <a style={{ cursor: "pointer" }} onClick={logOut}>
                  <span>
                    <LogoutIcon />
                  </span>
                  <b className="sidebar_nav_txt"> LogOut</b>
                </a>
              </div>
            )}
            {isBLogin && (
              <div id="link">
                <Link to="/WhiteLabeling">
                  <span>
                    <DashboardOutlinedIcon />
                  </span>
                  <b className="sidebar_nav_txt">WhiteLabeling</b>
                </Link>
                <Link to="/WhiteLabelingRequest">
                  <span>
                    <DashboardOutlinedIcon />
                  </span>
                  <b className="sidebar_nav_txt">WhiteLabeling Requests</b>
                </Link>
                <a style={{ cursor: "pointer" }} onClick={logOut}>
                  <span>
                    <LogoutIcon />
                  </span>
                  <b className="sidebar_nav_txt"> LogOut</b>
                </a>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
