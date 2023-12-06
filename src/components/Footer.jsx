import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import CancelIcon from "@mui/icons-material/Cancel";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import "./Footer.css"; // Import your CSS file for additional styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-main1">
          <p>Your Indian Shop</p>
          <p>Our shop provides you with the best customer support</p>
        </div>
        <div className="footer-main3">
          <div>FAQ</div>
          <div>Our Policy</div>
          <div>Terms of Service</div>
          <div>Support</div>
          <h1>Our Works</h1>
        </div>
        <div className="contact-column">
          <p>Contact Us</p>
          <span className="social-icons">
            <IconButton style={{ color: "#1877f2" }}>
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton style={{ color: "#e4405f" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton style={{ color: "black" }}>
              <TwitterIcon />
            </IconButton>
          </span>
        </div>
      </div>

      <center>
        Copyright © 2023 &nbsp;&nbsp; Privacy Policy &nbsp;&nbsp; Terms &
        Conditions &nbsp; &nbsp;
      </center>
      <footer className="flex items-center justify-center mb-24">
        <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] flex w-full flex-col gap-14">
          <p className="regular-14 w-full text-center text-gray-30">
            2023 | Created and Managed by Metawebtx
          </p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
