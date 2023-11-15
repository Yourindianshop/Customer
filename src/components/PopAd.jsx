import React, { useState, useEffect } from "react";
import "./PopAd.css";
import { IconButton } from "@mui/material";
import {
  AttachEmailRounded,
  LiveHelpOutlined,
  Mail,
  WhatsApp,
} from "@mui/icons-material";
import Tilt from "react-parallax-tilt";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const PopAd = () => {
  const adsData = [
    {
      title: "Get Discounts",
      description: "Hurry! Limited-time discounts available.",
      link: "/offers",
    },
    {
      title: "Buy Plans",
      description: "Check out our latest plans and offers.",
      link: "/disp-plan",
    },
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showConPop, setShowConPop] = useState(false); // Add this state

  useEffect(() => {
    const adDisplayDuration = 30000; // 5 seconds
    const adTransitionDuration = 3000; // 3 seconds

    const adTimeout = setTimeout(
      () => {
        setShowPopup(true);

        const displayTimeout = setTimeout(() => {
          setShowPopup(false);
        }, adDisplayDuration);

        const nextIndex = (currentAdIndex + 1) % adsData.length;
        setCurrentAdIndex(nextIndex);

        return () => {
          clearTimeout(displayTimeout);
        };
      },
      currentAdIndex === 0 ? 0 : adDisplayDuration + adTransitionDuration
    );

    return () => {
      clearTimeout(adTimeout);
    };
  }, [currentAdIndex, adsData.length]);

  const handleClosePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  const handleViewMore = () => {
    // Redirect to the ad's link when "View More" is clicked
    window.location.href = adsData[currentAdIndex].link;
  };

  const toggleConPopVisibility = () => {
    // Toggle the visibility of #con-pop
    setShowConPop(!showConPop);
  };

  return (
    <div>
      <div id="fq-bt" onClick={toggleConPopVisibility}>
        <MessageOutlinedIcon />
      </div>

      {showConPop && (
        <div id="con-pop">
          <div className="cp-hd">
            <div className="lg">YOUR INDIAN SHOP</div>
            <div className="cls" onClick={toggleConPopVisibility}>
              x
            </div>
          </div>
          <div className="cp-bd">
            <div className="cp-hd-title">
              <h1>Hi👋</h1>
              <h1>HOW CAN WE HELP?</h1>
            </div>
            <div className="khokha">
              <div className="khokhu">
                <div className="kh-l">
                  <strong>Contact Us</strong>
                  <small>We are here to help !</small>
                </div>
                <div className="kh-r">
                  <div className="qr-img">
                    <img src="./imgs/wqr.jpg" alt="" />
                  </div>
                  {/* <AlternateEmailOutlinedIcon /> */}
                </div>
              </div>
              {/* <div className="khokhu">
                <div className="kh-l">
                  <strong>FAQ?</strong>
                  <small>Your questions answers !</small>
                </div>
                <div className="kh-r">
                  <LiveHelpOutlined />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}

      {/* The rest of your component */}
    </div>
  );
};

export default PopAd;
