import React, { useContext, useEffect, useState } from "react";
import PlanCard from "../../components/Plans";
import {fetchreq} from "../../Helper/fetch"
import { MyContext } from "../../App";

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
      <center>
      <h1 className="plan-h">Our <span style={{color: "var(--blue)"}}>Plans</span></h1>
      </center>
      <div id="plan-cards">
        {plans.length !=0 && plans.map((plan, index) => {
          const hide = inBill && plan.Price==0;
          return !hide && <PlanCard
            state={isLogin?(inBill?2:true):false}
            key={index}
            plan={plan}
          />
        })}
      </div>
    </div>
  );
};

export default PlanPage;
