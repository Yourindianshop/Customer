import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import "./Mq.css";
import Home from "./pages/home/Home";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shipment from "./pages/dashboard/Shipment";
import Shop from "./pages/dashboard/Shop";
import WarehouseData from "./pages/dashboard/WarehouseData";
import Coupon from "./pages/dashboard/Coupon";
import IndianSites from "./pages/dashboard/IndianSites";
import Calc from "./components/Calc";
import AssistedPurchase from "./pages/dashboard/AssistedPurchase";
import ProductAcceptanceForm from "./pages/dashboard/ProductAcceptanceForm";
import Profile from "./pages/dashboard/Profile";
import ProhibitedItems from "./pages/dashboard/ProhibitedItems";
import Plans from "./components/Plans";
import PlanPage from "./pages/Plan/PlanPage";
import SelectWareHouse from "./pages/dashboard/SelectWareHouse";
import SingleProduct from "./components/SingleProduct";
import Locker from "./pages/dashboard/Locker";
import PAR from "./pages/dashboard/PAR";
import DispachRequest from "./components/DispachRequest";
import Wallete from "./pages/dashboard/Wallete";
import Paypal from "./components/Paypal";
import YourAssistedReq from "./components/YourAssistedReq";
import ReturnRequests from "./pages/dashboard/ReturnRequests";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import DispPl from "./pages/home/DispPl";
import About from "./pages/home/About";
import Service from "./pages/home/Service";
import Offer from "./pages/home/Offer";
import InSites from "./pages/home/InSites";
import Billing from "./pages/dashboard/Billing";
import ComingSoon from "./components/ComingSoon";
import { House } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Nav from "./components/Nav";
import Reviews from "./pages/dashboard/Reviews";
import WhtLbl from "./pages/home/WhtLbl";
import Wsaller from "./pages/home/Wsaller";
import Asp from "./pages/home/Asp";
import WhiteLabelingRequest from "./pages/dashboard/WhiteLabeling";
import WhiteLabeling from "./components/WhiteLabeling";
import Marquee from "react-fast-marquee";
import Slider from "./components/Slider";
import Plan from "./pages/home/Plan";
import Pl from "./pages/Plans/Pl";
import Razorpay from "./components/Razorpay";
export const MyContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [planId, setPlanId] = useState(null);
  const [wh, setWh] = useState(null);
  const [wd, setWd] = useState(null);
  const [did, setDid] = useState(null);
  const [muldis, setMuldis] = useState(null);
  const [isBLogin, setIsBLogin] = useState(false);
  const [applyCoupen, setApplyCoupen] = useState(null); // 1 means redirect from warehouse
  const [saveWarehouse, setSaveWarehouse] = useState(null); // use for coupen
  const [isFromPlan, setIsFromPlan] = useState(false);

  return (
    <div>
      <MyContext.Provider
        value={{
          isLogin,
          setIsLogin,
          user,
          setUser,
          planId,
          setPlanId,
          wh,
          setWh,
          wd,
          setWd,
          did,
          setDid,
          muldis,
          setMuldis,
          isBLogin,
          setIsBLogin,
          applyCoupen,
          setApplyCoupen,
          saveWarehouse,
          setSaveWarehouse,
          isFromPlan,
          setIsFromPlan,
        }}
      >
        <Router>
          <Routes>
            <>
              <Route path="/" element={<Home />} />
            </>
            <Route
              path="/signUp"
              element={
                <>
                  <Link to="/" className="btn-house">
                    <IconButton>
                      <House />
                    </IconButton>
                  </Link>
                  <SignUp />
                </>
              }
            />
            <Route
              path="/signIn"
              element={
                <>
                  <Link to="/" className="btn-house">
                    <IconButton>
                      <House />
                    </IconButton>
                  </Link>
                  <SignIn />
                </>
              }
            />
            <Route path="/plan" element={<PlanPage isBill={false} />} />
            <Route path="/select-warehouse" element={<SelectWareHouse />} />
            <Route path="/razorpay" element={<Razorpay amount={100} currency={"INR"} reciept={"YIS_Tb"}/>} />
            <Route
              path="/dashboard/"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Marquee style={{ background: "black", color: "white" }}>
                        Save Upto 80% on International Shipping • Exciting
                        Discounts on Premium Plans • Get Your Virtual Indian
                        Address
                      </Marquee>
                      <Dashboard />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/Walete"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Wallete />
                    </main>
                  </div>
                </div>
              }
            />
            <Route
              path="/Billing"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Billing />
                    </main>
                  </div>
                </div>
              }
            />
            <Route
              path="/Customer-Review"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Reviews />
                    </main>
                  </div>
                </div>
              }
            />
            <Route
              path="/ReturnRequests"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <ReturnRequests />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/PAR"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <PAR />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/DispachRequests"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <DispachRequest />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/shipment"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Shipment />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/warehousedata"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <WarehouseData />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/locker"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Locker />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/shop"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Shop />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/single-product"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <SingleProduct />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/WhiteLabelingRequest"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <WhiteLabelingRequest />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/assisted-purchase"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <AssistedPurchase WhiteLabeling={false} />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/YourAssistedReq"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <YourAssistedReq />
                    </main>
                  </div>{" "}
                </div>
              }
            />

            <Route
              path="/dashboard/product-acceptance"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <ProductAcceptanceForm />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/coupon"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Coupon />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/sites"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <IndianSites />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/prohibited-items"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <ProhibitedItems />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/WhiteLabeling"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <WhiteLabeling />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Profile />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/ship"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Shipment />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/dashboard/calc"
              element={
                <div>
                  <div id="app" className="row">
                    <Sidebar />
                    <main>
                      <Calc />
                    </main>
                  </div>{" "}
                </div>
              }
            />
            <Route
              path="/calc"
              element={
                <div id="oooo">
                  <main>
                    <Nav />
                    <br />
                    <Calc />
                  </main>
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <main>
                  {" "}
                  <About />
                </main>
              }
            />
            <Route
              path="/service"
              element={
                <main>
                  {" "}
                  <Link to="/" className="btn-house">
                    <div className="btn-div">
                      <House />
                    </div>
                  </Link>
                  <Service />
                </main>
              }
            />
            <Route
              path="/offers"
              element={
                <main>
                  {" "}
                  <Offer />
                </main>
              }
            />
            <Route
              path="/in-sites"
              element={
                <div id="oooo">
                  <Nav />
                  <main>
                    {" "}
                    <InSites />
                  </main>
                </div>
              }
            />
            <Route
              path="/white-labeling"
              element={
                <div id="oooo">
                  <Nav />
                  <main>
                    <WhtLbl />
                  </main>
                </div>
              }
            />
            <Route
              path="/wholesaler"
              element={
                <div id="oooo">
                  <Nav />
                  <main>
                    <Wsaller />
                  </main>
                </div>
              }
            />
            <Route
              path="/assisted-purchase"
              element={
                <div id="oooo">
                  <Nav />
                  <main>
                    <Asp />
                  </main>
                </div>
              }
            />
            <Route
              path="/disp-plan"
              element={
                <div id="oooo">
                  <Nav />
                  <main>
                    {" "}
                    <Pl />
                    {/* <PlanPage inBill={false} /> */}
                  </main>
                </div>
              }
            />
            <Route path="/planss" element={<Plan />} />
            <Route
              path="/coming-soon"
              element={
                <>
                  <Link to="/" className="btn-house">
                    <IconButton>
                      <House />
                    </IconButton>
                  </Link>
                  <ComingSoon />
                </>
              }
            />
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
  );
};

export default App;
