import React, { useContext, useEffect, useState } from "react";
import "../stylesheet/Plans.css";
import "../pages/Plans/PI.css";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import { fetchreq, walletTransaction } from "../Helper/fetch";
import "./PlanCompTab.css";
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
      storage: plan.storage,
    };
    if (user?.Wallete >= plan?.Price) {
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
  const planDetails = [];
  // console.log(plan);
  useEffect(() => {
    if (!isLogin && state) {
      nav("/");
    }
  }, []);
  return (
    <div id="dp-pl">
      <div className="plan">
        <div className="plan1">
          <div id="pc-top">
            <div className="pl2">
              <big className="plan-heading">{plan.Name}</big>
              <strong className="plan-price">₹{plan.Price}</strong>
            </div>
            {/* <div className="plan-duretion"></div> */}
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>CONSOLIDATION </span>
              <span className="feature">₹{plan.consolidation}</span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>STORAGE </span>
              <span className="feature">
                25 DAYS (after 25 days ₹{plan.storage} per item per day)
              </span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>PHOTO </span>
              <span className="feature">
                {plan.photo} PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹
                {plan.photoPrice})
              </span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>PACKAGE RETURN </span>
              <span className="feature"> ₹{plan.package_ret} PER ITEM</span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>Warehouse Pickup </span>
              <span className="feature"> ₹{plan.warehouse_pic}</span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>
                Scanned Copies Of Documents{" "}
              </span>
              <span className="feature">₹{plan.scane_copy}</span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>Shipping Address </span>{" "}
              <span className="feature">{plan.shippingAddress}</span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>
                {" "}
                Semiliquid/Liquid Clearance Charge{" "}
              </span>
              <span className="feature">
                {plan.liquidCharge}% (EXCLUSIVE OF ALL OTHER CHARGES)
              </span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>Real-Time Tracking </span>
              <span className="feature">{plan.detail}</span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}> Personal Shopper </span>
              <span className="feature">
                {plan.personalShopper}% of item value (exclusive of all charges)
              </span>
            </div>
            {/* <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
                  <span className="feature">
                    Indian Virtual Shipping Address & Personal Locker : FREE
                  </span>
                </div>
                <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
                  <span className="feature">Receive Parcels : FREE</span>
                </div> */}
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>
                Set Up A Local Hub For Your Business{" "}
              </span>
              <span className="feature">{plan.detail}</span>
            </div>
            <div className="plan-li"><img src="/check.png" alt="" className="h-5 w-5" />
              <span style={{ fontWeight: "700" }}>Assisted Purchase</span>
              <span className="feature">Actual Charges + Other Charges</span>
            </div>
            {state === 0 && (
              <Link to="/signUp" className="btn btn-b">
                Buy Now
              </Link>
            )}
          </div>

          {state && (
            <div id="pc-bot">
              <div className="choose-plan">
                {isLogin ? (
                  <button
                    className="btn btn-b"
                    onClick={state === true ? choseplan : upgradeplan}
                  >
                    {ispro
                      ? "Processing..."
                      : state === true
                      ? "Choose Plan"
                      : "Upgrade Plan"}
                  </button>
                ) : (
                  <Link className="nav-btnn" to={"/SignIn"}>Buy Now</Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plans;
