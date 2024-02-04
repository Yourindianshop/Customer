import "./PI.css";
import Navbar from "../home/Navbar";
import Footer from "../../components/Footer";
import React, { useContext, useEffect, useState } from "react";
// import "../stylesheet/Plans.css";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { fetchreq, walletTransaction } from "../../Helper/fetch";
// import "./PlanCompTab.css";
import { Link } from "react-router-dom";

const Pl = ({ plan, state }) => {
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
    <div>
      <Navbar />
      <div className="relative">
        <div className="testimoinals-head">
          <h1>
            Affordable <span>Pricing</span>
            <br />
          </h1>
          <h4>
            Explore exclusive, personalized offers for a premium shopping
            experience with unbeatable savings.
          </h4>
        </div>

        <div className="container-plan">
          <div className="plan1">
            <div className="pl2">
              <h2 className="plan-heading">Free</h2>
              <span className="plan-subheading">
                For startups & side projects
              </span>
              <h3 className="plan-price">₹0</h3>
              {/* <h5 className="plan-subheading">Per year</h5> */}
              <h2 className="plan-heighlight">Upto 25 days of free storage</h2>
            </div>
            <ul className="plan-ul">
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Set Up your free local business hub
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Get free real time tracking
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Assisted purchase is Actual Charges + Other Charges
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Semiliquid/Liquids are charged 10% (EXCLUSIVE OF ALL OTHER
                  CHARGES)
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  Shipment is 399/shipping
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  Package return cost is ₹50 PER ITEM
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  Warehouse pickup is for ₹400
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  You can ship upto 5 Address
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  Personal shops get 7% item value (Exclusive Of All Charges)
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  First 3 photos are free (DETAILED PHOTO SERVICE UPTO 10, ₹400)
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  Scanned documents is for ₹80/Page
                </h3>
              </li>
            </ul>

            {state && (
              <div id="pc-bot">
                <div className="choose-plan">
                  {isLogin ? (
                    <button
                      className="btnn text-[#000]"
                      onClick={state === true ? choseplan : upgradeplan}
                    >
                      {ispro
                        ? "Processing..."
                        : state === true
                        ? "Choose Plan"
                        : "Upgrade Plan"}
                    </button>
                  ) : (
                    <Link to={"/SignIn"} className="text-[#000]">
                      <p className="text-[#000]">Buy Now</p>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="plan1">
            <div className="pl2">
              <h2 className="plan-heading">Half Yearly</h2>
              <span className="plan-subheading">
                For larger teams with increased usage
              </span>
              <h3 className="plan-price">₹2499</h3>
              {/* <h5 className="plan-subheading">Per year</h5> */}
              <h2 className="plan-heighlight">Upto 30 days of free storage</h2>
            </div>
            <ul className="plan-ul">
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Set Up your free local business hub
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Get free real time tracking
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Assisted purchase is Actual Charges + Other Charges
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Semiliquid/Liquids are charged 10% (EXCLUSIVE OF ALL OTHER
                  CHARGES)
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Shipment is free
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Package return cost is free
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Warehouse pickup is free
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  You can ship infinite Address
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  Personal shops get 6% item value (Exclusive Of All Charges)
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  First 3 photos are free (DETAILED PHOTO SERVICE UPTO 10, ₹300)
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/minus.png" alt="" className="h-5 w-5" />
                  Scanned documents is for ₹60/Page
                </h3>
              </li>
            </ul>
            <div className="pl2">
              <div className="nav-btnn">
                <a href="/signIn">
                  <div className="nav-btn-2">Buy Now</div>
                </a>
              </div>
            </div>
          </div>
          <div className="plan1">
            <div className="pl2">
              <h2 className="plan-heading">Yearly</h2>
              <span className="plan-subheading">
                For businesses with custom needs
              </span>
              <h3 className="plan-price">₹4499</h3>
              {/* <h5 className="plan-subheading">Per year</h5> */}
              <h2 className="plan-heighlight">Upto 40 days of free storage</h2>
            </div>
            <ul className="plan-ul">
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Set Up your free local business hub
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Get free real time tracking
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Assisted purchase is Actual Charges + Other Charges
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Semiliquid/Liquids are charged 10% (EXCLUSIVE OF ALL OTHER
                  CHARGES)
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Shipment is free
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Package return cost is free
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Warehouse pickup is free
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  You can ship infinite Address
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Personal shops get 5% item value (Exclusive Of All Charges)
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  First 3 photos are free (DETAILED PHOTO SERVICE UPTO 10, ₹250)
                </h3>
              </li>
              <li>
                <h3 className="plan-li">
                  <img src="/check.png" alt="" className="h-5 w-5" />
                  Scanned documents is for ₹40/Page
                </h3>
              </li>
            </ul>
            <div className="pl2">
              <div className="nav-btnn">
                <a href="/signIn">
                  <div className="nav-btn-2">Buy Now</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pl;
