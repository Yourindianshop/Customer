import React, { useContext } from "react";
import "../stylesheet/dashboard/Product.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
const Curiors = ({wd,selectProduct,isselect}) => {
  const {setWd}=useContext(MyContext);
  const url = process.env.REACT_APP_URL;
  console.log(wd)
  const pt = wd?.photos;
  const nav= useNavigate();
  const openproduct=()=>{
    setWd(wd);
    setTimeout(() => {
        nav('/dashboard/single-product'); 
    }, 500);
  }
  return (
    <div id="prod">
      <div className="proTop">
        <img src={`${url}/${pt[0]}`} alt="" />
      </div>
      <div id="proData">
        <div className="proName">Name: {wd.productName}</div>
        <div>ProductId: {wd.Did}</div>
        <div className="pro-description">Desc: {wd.Description}</div>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={openproduct} className="atc">
          Details
        </button>
        {wd?.status == 0 && (
          <button
            onClick={() => {
              selectProduct(wd.Did);
            }}
            className="atc"
          >
            {isselect ? "UnSelect" : "Select"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Curiors;
