import React, { useContext, useEffect, useState } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Marquee from "react-fast-marquee";
import Nav from "../../components/Nav";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PgTitle from "../../components/PgTitle";
import { fetchreq, getDate } from "../../Helper/fetch";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
const Offer = () => {
  const [coupens, setCoupens] = useState(null);
  const { applyCoupen, setApplyCoupen } = useContext(MyContext);
  const getOffer = async () => {
    const dt = await fetchreq("GET", "getCouponsForCustomer", {});
    dt ? setCoupens(dt.result) : setCoupens([]);
    console.log(dt);
  };
  const nav = useNavigate();
  const url = process.env.REACT_APP_URL;
  const redirectToCheckOut = async (code) => {
    setApplyCoupen(code);
    setTimeout(() => {
      nav("/select-warehouse");
    }, 500);
  };
  useEffect(() => {
    getOffer();
  }, []);

  const img = [
    "/banner/coupon02.png",
    "/banner/coupon01.png",
    "/banner/coupon0.png",
  ];
  return (
    <div id="Site" className="sttt">
      <header>
        <Nav />
      </header>
      <div className="marquee">
        <Marquee speed={150}>
          Save Upto 80% on International Shipping • Exciting Discounts on
          Premium Plans • Get Your Virtual Indian Address
        </Marquee>
      </div>
      <br />
      <br />
      {/* <PgTitle
        pageName="Get Amazing Offers"
        tabName="Offers"
        bgImg="./imgs/wh2.jpg"
      /> */}
      <div className="bg-primary">
        <div className="t-title">
          <span id="org"> Use </span>
          exclusive
          <span id="org"> code </span>
          for
          <span id="org"> offers</span>
        </div>
        <div id="of-g" style={{ display: "flex" }}>
          {coupens &&
            coupens.map((c, i) => {
              const timestamp = new Date(c.date);
              const currentDate = new Date();
              const timeDifference = timestamp - currentDate;
              const diff = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
              const days = c.days - diff;
              return (
                <div key={c.Cid}>
                  <div className="offers-s">
                    <h1>{c.Name}</h1>
                    <img src={`${url}/${c.img}`} style={{ height: "40vh" }} />
                    {c.isPercentage == 1 ? (
                      <p> Amount: {c.amount}% </p>
                    ) : (
                      <p>Coupen Amount: ₹{c.amount}</p>
                    )}
                    {c.isPercentage == 1 && <p>Get Upto: ₹{c.maxamount}</p>}
                    {<p>Min Amount To Apply Coupen: ₹{c.minamount} </p>}
                    <p style={{ color: "green", fontWeight: "bold" }}>
                      CoupenCode: {c.code}
                    </p>
                    <p>Status: {c.isOn ? "On" : "Off"} </p>
                    <p>Expire In : {days} Days </p>
                    <p>Coupen Add Date: {getDate(c.date)} </p>
                    {applyCoupen == 1 && (
                      <button
                        className="btn btn-b"
                        onClick={() => {
                          redirectToCheckOut(c.code);
                        }}
                      >
                        Apply Coupen
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          {coupens && coupens.length == 0 && <h2>No Coupens found</h2>}
        </div>
      </div>
    </div>
  );
};

export default Offer;
