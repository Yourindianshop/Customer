import React, { useContext, useState } from "react";
import "../stylesheet/dashboard/Product.css";
import { MyContext } from "../App";
import { Link } from "react-router-dom";
const Product = (props) => {
  const {product,openProduct}=props;
  const { isLogin, isBLogin, setIsBLogin } = useContext(MyContext);
  
  return (
    <div id="prod">
      <div className="proTop">
        <img onClick={()=>{openProduct(product)}}  src={`${props.proImg}`} alt="" />
      </div>
      <div id="proData">
        <div className="proName">{props.proName}</div>
        <div className="proPrice">{props.proPrice}</div>
        <div>{product.Details}</div>
      </div>
      {isLogin && <div onClick={()=>{openProduct(product)}} className="atc">Buy Now</div> }
      {!isLogin && <Link to="/signIn" className="atc">Buy Now</Link> }
    </div>
  );
};

export default Product;
