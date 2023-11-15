import React, { useContext, useEffect, useState } from "react";
import Product from "../../components/Curiours";
import "../../stylesheet/dashboard/Shop.css";
import { Link, useNavigate } from "react-router-dom";
import { fetchreq } from "../../Helper/fetch";
import { MyContext } from "../../App";
import Billing from "./Billing";
const Shop = () => {
  const {user,wh,isLogin,setMuldis}=useContext(MyContext);
  const [wd,setWd]=useState(null);
  const nav = useNavigate();
  const [selectP,setSelectP]=useState([]);
  const [isproc,setIsproc]=useState(false);
  const ar = [1, 2, 3, 4];
  const pr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
  const loadCouriers = async ()=>{
    const dt = await fetchreq("GET",`getWareHouseData/${wh?.Wid}/${user?.Cid}`,{});
    setWd(dt?.result);
  }
  
  const selectProduct = (Did)=>{
    if(selectP.includes(Did)){
      let ind =  selectP.indexOf(Did)
      setSelectP([...selectP.splice(0,ind),...selectP.splice(ind+1,selectP.length)])
    }else{
      setSelectP([...selectP,Did]);
    }
  }
  const dispactchAll= ()=>{
    setIsproc(true);
    // alert(JSON.stringify(selectP));
    setMuldis(selectP);
    setTimeout(() => {
      nav("/dashboard/shipment");
    }, 500);
  }
  const amount  = 52 ;
  
  useEffect(()=>{
    if(isLogin){
      loadCouriers();
      setMuldis(null);
    }else{
      nav("/");
    }
  },[])
  return (
    <div>
      <div id="shop-sec">
        <div id="the-gym">
          <div id="l-title">
            <div className="plan-page-title">
              <span id="org">Your</span> Couriers in{" "}
              <span id="lime">{wh?.Name}</span>
            </div>
            <div>
              <div>
                <Link to="/Billing" className="btn btn-o-1">
                  Pending Bills
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="bal">
          <div
            className="bal-lin"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Link className="btn btn-o-1" to="/dashboard/product-acceptance">
              Add PAR
            </Link>
            <Link className="btn btn-o-1" to="/PAR">
              Product Acceptance Requests
            </Link>
            <Link className="btn btn-o-1" to="/DispachRequests">
              Dispatch Requests
            </Link>
            <Link className="btn btn-o-1" to="/ReturnRequests">
              Return Requests
            </Link>
          </div>
        </div>
        <div id="displayProducts">
          {wd &&
            wd.length != 0 &&
            wd.map((e) => {
              const isselect = selectP.includes(e.Did);
              return (
                <div
                  style={{
                    border: `${
                      selectP.includes(e.Did) ? "3px solid #FF7D44" : "none"
                    }`,
                  }}
                >
                  <Product
                    wd={e}
                    selectProduct={selectProduct}
                    isselect={isselect}
                  />
                </div>
              );
            })}
          {wd && wd.length == 0 && <p>No data found</p>}
          {!wd && <h1>Problem with Loding the Content </h1>}
        </div>
        <center style={{ marginBottom: "35px", position:'fixed',right:'10px',bottom:'10px',zIndex:'100'}}>
          {selectP.length > 1 && (
            <button className="btn btn-og" onClick={dispactchAll}>
              {isproc ? "Proceding..." : "Dispatch all selected"}
            </button>
          )}
        </center>
      </div>
    </div>
  );
};
export default Shop;