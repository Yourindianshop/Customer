import { FacebookOutlined, Twitter, WhatsApp } from "@mui/icons-material";
import React from "react";

import { Link } from "react-router-dom";
const ComingSoon = () => {
  return (
    <div>
      <div className="wrapper">
        <h1>
          coming soon<span className="dot">.</span>
        </h1>
        <p>
          In meantime , keep shopping from your favourite website via Your Indian Shop !! 
        </p>
        <div className="dot">
          {/* <input type="Email" placeholder="Email Address" /> */}
          <Link to="/signUp">
            <div className="btn btn-og"> Sign Up </div>
          </Link>
        </div>
        <div className="icons">
          <FacebookOutlined />
          <WhatsApp />
          <Twitter />
        </div>
         
      </div>
    </div>
  );
};

export default ComingSoon;
