import React from "react";
import "../stylesheet/dashboard/Product.css";
const Product = (props) => {
  const {product}=props;
  return (
    <div id="prod">
      <div className="proTop">
        <img src={`${props.proImg}`} alt="" />
      </div>
      <div id="proData">
        <div className="proName">{props.proName}</div>
        <div className="proPrice">{props.proPrice}</div>
        <div>{product.Details}</div>
      </div>
      <div onClick={()=>{makeOrder(product)}} className="atc">Buy Now</div>
    </div>
  );
};

export default Product;
