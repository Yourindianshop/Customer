import React, { useContext, useEffect, useState } from "react";
import "../stylesheet/Plans.css";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import { fetchreq, walletTransaction } from "../Helper/fetch";
import { Link } from "react-router-dom";
const Plans = ({ plan, state }) => {
  const { setPlanId, isLogin, user, wh, setUser } = useContext(MyContext);
  const nav = useNavigate();
  const [ispro, setIspro] = useState(false);
  const choseplan = () => {
    const given = {
      Pid: plan.Pid,
      duration: plan.duration,
      Price: plan.Price,
      storage: plan.storage
    }
    if(user?.Wallete>=plan?.Price){
      setPlanId(given);
      setTimeout(() => {
        nav("/select-warehouse");
      }, 1000);
    } else {
      alert(
        "You have not Sufficient Amount to buy plan Add Balace to the Wallete..."
      );
      nav("/Walete");
    }
  };
  const upgradeplan = async () => {
    if (!ispro) {
      setIspro(true);
      const dt = await walletTransaction(
        plan.Price,
        wh?.Wid,
        `Upgrade plan in ${wh?.Name} `,
        user,
        setUser,
        nav
      );
      if (dt) {
        const res = await fetchreq("POST", "upgradePlan", { plan, tid: 13 });
        if (res) {
          alert("upgrade sussfully");
          nav("/warehousedata");
        } else {
          alert("Something Went Wrong...");
        }
      } else {
        alert("Payment Canceled");
      }
      setIspro(false);
    }
  };
  const planDetails = [
    
  ];
  // console.log(plan);
  useEffect(() => {
    if (!isLogin && state) {
      nav("/");
    }
  }, []);
  return (
    <div id="pl-ol">
      <div className="plan-card">
        <div id="pc-top">
          <center className="plan-price">
            ₹{plan.Price}
            {/* <small> .00</small> */}
          </center>
          <div className="plan-duretion">{plan.Name}</div>

          {/* <div className="plan-duretion"></div> */}
        </div>
        {state == 0 && (
          <Link to="/signUp" className="btn btn-o">
            Buy Now
          </Link>
        )}
        <div style={{marginTop: "4rem"}}>
          <ul style={{ padding: "25px"}}>
            
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>CONSOLIDATION</span> ₹{plan.consolidation}</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>STORAGE </span>25 DAYS (after 25 days ₹{plan.storage} per item per day)</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>PHOTO</span> {plan.photo} PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹{plan.photoPrice})</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>PACKAGE RETURN</span> ₹{plan.package_ret} PER ITEM</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Warehouse Pickup </span>₹{plan.warehouse_pic}</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Scanned Copies of Documents</span> ₹{plan.scane_copy}</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Shipping Address upto</span> {plan.shippingAddress}</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Semiliquid/Liquid Clearance Charge</span> {plan.liquidCharge}% (EXCLUSIVE OF ALL OTHER CHARGES)</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Real-time Tracking</span> {plan.detail}</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Personal Shopper </span>{plan.personalShopper}% of item value (exclusive of all charges)</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Indian Virtual Shipping Address & Personal Locker</span> {plan.detail}</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Receive Parcels</span> {plan.detail}</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Set Up a Local Hub for Your Business </span>{plan.detail}</li>
              <li style={{borderBottom: "1px solid grey",padding: "10px"}}><span style={{color: "rgb(81, 3, 159)"}}>Assisted Purchase</span> Actual charges + other charges</li> 
          
          </ul>
        </div>
        
        
        {state && (
          <div id="pc-bot">
            <div className="choose-plan">
              {isLogin?<button
                className="btnn"
                onClick={state == true ? choseplan : upgradeplan}
              >
                {ispro
                  ? "Processing..."
                  : state == true
                  ? "Choose Plan"
                  : "Upgrade Plan"}
              </button>: <Link to={"/SignIn"}>Buy Now</Link> }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;
