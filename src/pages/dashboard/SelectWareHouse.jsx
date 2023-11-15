import React, { useContext, useEffect, useState } from "react";
import Warehouse from "../../components/Warehouse";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { fetchreq } from "../../Helper/fetch";

const SelectWareHouse = () => {
  const [warehouse,setWareHouses]=useState(null);
  const {planId,user,isLogin}=useContext(MyContext);
  const nav = useNavigate();

  const getWarehose = async ()=>{
    const dt = await fetchreq('GET',`selectWarehouse/${user.Cid}`,{});
    dt?setWareHouses(dt.result):setWareHouses([]);
  }
  useEffect(()=>{
    if(isLogin){
      if(planId==null){
        nav("/plan");
      }else{
        getWarehose();
      }
    }else{
      nav("/")
    }
  },[])
  return (
    <>
      <center>
        <div className="plan-page-title">
          <span id="blue">Choose </span>
          <span id="org">WareHouse</span>
        </div>
      </center>
      <div className="warehouse-container">
        {warehouse && (warehouse.length!=0 ? warehouse.map((warehouse) => (
          <Warehouse
            key={warehouse.Wid}
            warehouse={warehouse}
          />
        )): <h3>No Warehouse Available</h3> )}
        {!warehouse && <img src="./videos/Loading_2.gif"  alt="Loading..."/> }
      </div>
    </>
  );
};

export default SelectWareHouse;
