import React from "react";
import "../stylesheet/About.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
const PgTitle = ({ pageName, tabName, bgImg }) => {
  return (
    <div id="ab-sec-title" style={{ backgroundImage: `url(${bgImg})` }}>
      <h1>{pageName}</h1>
      <div>
        <span id="wt">HOME</span>
        <span id="wt">
          <DoubleArrowIcon />
        </span>
        <span id="org">{tabName}</span>
      </div>
    </div>
  );
};

export default PgTitle;
