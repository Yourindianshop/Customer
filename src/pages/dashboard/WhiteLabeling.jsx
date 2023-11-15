import React from "react";
import AssistedPurchaseTable from "../../components/AssistedPurchaseTable";
import { MyContext } from "../../App";
import { useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";


const WhiteLabeling = () => {
  const {isBLogin}=useContext(MyContext);
  const nav = useNavigate();
  useEffect(()=>{
    if(!isBLogin){
      nav("/");
    }
  },[])
  return (
    <div id="dr-cont">
    <div  className="marquee">
    <Marquee speed={150}>
        Save Upto 80% on International Shipping • Exciting Discounts on Premium Plans • Get Your Virtual Indian Address
    </Marquee>
    </div>
      <div id="dash-title">
        <div>
          <span id="blue">Assisted </span>
          <span id="org">Purchase </span>
          <span id="blue">Section </span>
        </div>
      </div>
      <div id="pd">
        <AssistedPurchaseTable iswhiteLabeling={true} />
      </div>
    </div>
  );
};

export default WhiteLabeling;