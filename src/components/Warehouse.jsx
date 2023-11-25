import React, { useContext, useEffect, useState } from "react";
import "../stylesheet/Warehouse.css";
import { MyContext } from "../App";

import { fetchreq, walletTransaction } from "../Helper/fetch";
import { Link, useNavigate } from "react-router-dom";
import Offer from "../pages/home/Offer";
const Warehouse = ({ warehouse }) => {
  const { planId, user, setUser,applyCoupen,setApplyCoupen,setSaveWarehouse,saveWarehouse } = useContext(MyContext);
  const nav = useNavigate();
  const [ispayment,setIspayment]=useState(false);
  const [final,setFinal]= useState(planId.Price);
  const [cc,setCc]=useState(null);
  const [ca,setCa]=useState(false);
  const handleSelect = async () => {
    if (
      await walletTransaction(
        final,
        warehouse.Wid,
        "buy Plan",
        user,
        setUser,
        nav
      )
    ) {
      const body = {
        cid: user.Cid,
        pid: planId.Pid,
        wid: warehouse.Wid,
        paid: planId.Price,
        renew: planId.duration == 0 ? -1 : planId.duration,
        fs: planId.storage,
      };
      console.log("free stor", planId.storage);
      console.log(planId);
      const dt = await fetchreq("POST", "buyplan", body);
      if (dt) {
        if (user.Status == 0) {
          await fetchreq("GET", `upadateUserStatus/${user.Cid}/1`, {});
        }
        nav("/dashboard");
      } else {
        alert("something went wrong");
      }
    }
  };
  const directselect = async ()=>{
    const body = {
      cid: user.Cid,
      pid: planId.Pid,
      wid: warehouse.Wid,
      paid: planId.Price,
      renew: planId.duration == 0 ? -1 : planId.duration,
      fs: planId.storage,
    };
    console.log("free stor", planId.storage);
    console.log(planId);
    const dt = await fetchreq("POST", "buyplan", body);
    if (dt) {
      if (user.Status == 0) {
        await fetchreq("GET", `upadateUserStatus/${user.Cid}/1`, {});
      }
      nav("/dashboard/locker");
    } else {
      alert("something went wrong");
    }
  }
  const handleSelectfirst = async ()=>{
    const price = planId.Price;
    setIspayment(true);
    setSaveWarehouse(warehouse);
  }
  const applyCoupen2 = async ()=>{
    const code = applyCoupen?applyCoupen:cc;
    if(!code || code?.length<4){
      alert("invalid Coupen Code");
      return;
    }else{
      const dt = await fetchreq("GET",`CoupenByCode/${code}`,{});
      if(dt && dt.result.length!=0){
        const coupen = dt.result[0];
        let curamt = final;
        const disamt = coupen.amount;
        const minamount = coupen.minamount;
        const maxamount = coupen.maxamount;
        if(coupen.isPercentage==1){
          const discoundableamt= curamt*disamt/100;
          if(maxamount<=discoundableamt){
            curamt=curamt-maxamount;
          }else{
            curamt= curamt-discoundableamt;
          }
        }else{
          if(curamt>=minamount){
            curamt=curamt-disamt;
          }
        }
        curamt= Math.round(curamt)
        setFinal(curamt);
        setCa(true)
        setSaveWarehouse(null);
        setApplyCoupen(null);
      }else{
        alert("invalid Coupen");
      }
    }
  }
  const openAvailableCoupens = async ()=>{
    setApplyCoupen(1);
    setTimeout(() => {
      nav("/offers");
    }, 500);
  }
  useEffect(()=>{
    if(applyCoupen && applyCoupen !=1 && saveWarehouse){
      setIspayment(true);
      setSaveWarehouse(saveWarehouse);
      setCc(applyCoupen);
      applyCoupen2();
    }
  },[]);
  return (
    <>
      <div className="warehouse-card">
        {/* <div className="wh-img-ol">
          <img src={a.image} alt={warehouse.Name} className="warehouse-image" />
        </div> */}
        <div className="w-data">
          <h3 className="warehouse-name">{warehouse.Name}</h3>
          <p className="warehouse-details">
            <strong>Address:</strong> {warehouse.Address}
            <br />
            <strong>Strit:</strong> {warehouse.Address2}
            <br />
            <strong>Landmark:</strong> {warehouse.Landmark}
            <br />
            <strong>City:</strong> {warehouse.City}
            <br />
            <strong>Pincode:</strong> {warehouse.pincode}
            <br />
            <strong>State:</strong> {warehouse.State}
            <br />
            <strong>Country:</strong> {warehouse.Country}
            <br />
            <strong>Capacity:</strong> {warehouse.Capacity}
            <br />
            <button className="btn btn-b" onClick={final<=0?directselect:handleSelectfirst}>
              Select{" "}
              {planId.Price != 0 && `And Pay from Wallet ₹${planId.Price}`}
            </button>
          </p>
        </div>
      </div>
      {ispayment && (
        <div key={1}
          style={{
            zIndex: "10",
            position: "absolute",
            borderRadius: "8px",
            margin: "auto",
            height: "70vh",
            width: "80vh",
            padding: "100px",
            backgroundColor: "white",
            border: "1px solid black",
          }}
        >
          <h1>Payment Portal</h1>
          <p>Payment Amount: ₹{planId.Price}</p>
          <p style={{ marginBottom: "1rem" }}>
            WareHouse: {warehouse.Name}
          </p>
          {!ca && final != 0 && (
            <div className="coupon-input">
              <button onClick={openAvailableCoupens} className="btn btn-o" >Availabel Coupens</button>
              <input
                value={cc}
                onChange={(e) => setCc(e.target.value)}
                type="text"
                placeholder="Enter Coupen Code"
              />
              <button className="btn-g btn" onClick={applyCoupen2}>
                Apply Coupon
              </button>
            </div>
          )}
          <p
            style={{
              fontWeight: "bold",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            final Payment amount : ₹{final}
          </p>
          <h2 style={{color:'red'}}>Note: This amount will Deduct From Your Wallet</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1rem 0",
            }}
          >
            <button className="btn btn-r" onClick={handleSelect}>
              {final <= 0 ? "Proceed To Select" : "Proceed to Payment"}
            </button>
              <button
                className="btn-r btn"
                onClick={() => nav("/plan")}
              >
                Cancel Transaction
              </button>
          </div>
        </div>
      )}
    </>

  );
};

export default Warehouse;
