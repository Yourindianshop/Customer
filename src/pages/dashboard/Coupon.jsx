import React from "react";
import "../../stylesheet/dashboard/Coupon.css";
const Coupon = () => {
  return (
    <div id="dash-cpn">
      <div className="t-title">
        <span id="blue">Available </span>
        <span id="org">Coupons</span>
      </div>
      <div className="cpn-grid"></div>{" "}
      <div id="of-g">
        <img
          src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/of1.png"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/of2.png"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/of3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Coupon;
