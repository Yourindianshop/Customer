import React, { useContext, useEffect, useState } from "react";
import PlanCard from "../../components/Plans";
import {fetchreq} from "../../Helper/fetch"
import { MyContext } from "../../App";
import "../Plans/PI.css";
import Navbar from "../home/Navbar";
import Footer from "../../components/Footer";

const PlanPage = ({inBill}) => {
  const [plans,setPlans]=useState([]);
  const {isLogin,setIsFromPlan}=useContext(MyContext);

  const loadplans = async ()=>{
    const pl = await fetchreq("GET","plans",{});
    pl? setPlans(pl.result): setPlans([]);
  }
  useEffect(()=>{
    loadplans();
    setIsFromPlan(false);
  },[])
  return (
    <div>
      <Navbar/>
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
      <div  style={{marginTop:"-10px"}} className="container-plan">
        {plans.length !=0 && plans.map((plan, index) => {
          const hide = inBill && plan.Price==0;
          return !hide && <PlanCard
            state={isLogin?(inBill?2:true):false}
            key={index}
            plan={plan}
          />
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default PlanPage;