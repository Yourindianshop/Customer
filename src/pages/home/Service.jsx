import React from "react";
import "../../stylesheet/About.css";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PgTitle from "../../components/PgTitle";
import Navbar from "./Navbar";
const Service = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <PgTitle
        pageName="Services We Offers"
        tabName="Service"
        bgImg="./imgs/home1-rev-3.jpg"
      />
      <section id="bl-feature">
        <div className="ftr-cd">
          <div id="org">01</div>
          <div className="t-title">SignUp and register your self</div>
          <p>
            With our worldwide inclusion, strong transportation organization and
            industry driving coordinations experience, our Service and
            Aftermarket Logistics arrangements.
          </p>
          <div className="arw">
            <ArrowRightAltOutlinedIcon />
          </div>
        </div>
        <div className="ftr-cd">
          <div id="org">02</div>
          <div className="t-title">Shop from exclusive Indian site</div>
          <p>
            With our worldwide inclusion, strong transportation organization and
            industry driving coordinations experience, our Service and
            Aftermarket Logistics arrangements.
          </p>
          <div className="arw">
            <ArrowRightAltOutlinedIcon />
          </div>
        </div>
        <div className="ftr-cd">
          <div id="org">03</div>
          <div className="t-title">Choose plan & shop according to it</div>
          <p>
            With our worldwide inclusion, strong transportation organization and
            industry driving coordinations experience, our Service and
            Aftermarket Logistics arrangements.
          </p>
          <div className="arw">
            <ArrowRightAltOutlinedIcon />
          </div>
        </div>
        <div className="ftr-cd">
          <div id="org">04</div>
          <div className="t-title">Get parcel as fast as possible</div>
          <p>
            With our worldwide inclusion, strong transportation organization and
            industry driving coordinations experience, our Service and
            Aftermarket Logistics arrangements.
          </p>
          <div className="arw">
            <ArrowRightAltOutlinedIcon />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
