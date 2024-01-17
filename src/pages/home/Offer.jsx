import React, { useContext, useEffect, useState } from "react";
import { fetchreq, getDate } from "../../Helper/fetch";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Offer.css";
import Footer from "../../components/Footer";

const Offer = () => {
  const [coupens, setCoupens] = useState(null);
  const { applyCoupen, setApplyCoupen } = useContext(MyContext);
  const nav = useNavigate();
  const url = process.env.REACT_APP_URL;

  const getOffer = async () => {
    const dt = await fetchreq("GET", "getCouponsForCustomer", {});
    dt ? setCoupens(dt.result) : setCoupens([]);
    console.log(dt);
  };

  const redirectToCheckOut = async (code) => {
    setApplyCoupen(code);
    setTimeout(() => {
      nav("/select-warehouse");
    }, 500);
  };

  useEffect(() => {
    getOffer();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-primary">
        <div className="title">
          <span className="org"> Use </span>
          exclusive
          <span className="org"> code </span>
          for
          <span className="org"> offers</span>
        </div>
        <div className="offers-container">
          {coupens &&
            coupens.map((c) => {
              const timestamp = new Date(c.date);
              const currentDate = new Date();
              const timeDifference = timestamp - currentDate;
              const diff = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
              const days = c.days - diff;

              return (
                <div key={c.Cid} className="offer-item">
                  <h1>{c.Name}</h1>
                  <img src={`${url}/${c.img}`} alt={c.Name} />
                  <p>
                    {c.isPercentage === 1
                      ? `Amount: ${c.amount}%`
                      : `Coupon Amount: ₹${c.amount}`}
                  </p>
                  {c.isPercentage === 1 && <p>Get Upto: ₹{c.maxamount}</p>}
                  <p>Min Amount To Apply Coupon: ₹{c.minamount} </p>
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Coupon Code: {c.code}
                  </p>
                  <p>Status: {c.isOn ? "On" : "Off"} </p>
                  <p>Expire In: {days} Days </p>
                  <p>Coupon Add Date: {getDate(c.date)} </p>
                  {applyCoupen === 1 && (
                    <button
                      className="btn btn-apply"
                      onClick={() => {
                        redirectToCheckOut(c.code);
                      }}
                    >
                      Apply Coupon
                    </button>
                  )}
                </div>
              );
            })}
          {coupens && coupens.length === 0 && <h2>No Coupons found</h2>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Offer;
