import React, { useDebugValue, useEffect, useState } from "react";
import Product from "../../components/Product";
import "../../stylesheet/dashboard/Shop.css";
import { Link } from "react-router-dom";
import { fetchreq } from "../../Helper/fetch";
import { Key } from "@mui/icons-material";
const Shop = () => {
  const ar = [1, 2, 3, 4];
  const pr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
  const [products,setProducts]=useState([]);
  const url = process.env.REACT_APP_URL;
  const getProduct = async ()=>{
    const dt = await fetchreq("GET","Products",{});
    setProducts(dt.result);
  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div id="shop-sec">
      <div id="the-gym">
        <div id="l-title">
          <div className="plan-page-title">
            <span id="wt">Available&nbsp;</span>
            <span id="org">Products</span>
          </div>
          <div>
            <Link
              to="/dashboard/assisted-purchase"
              className="btn btn-o-1"
              style={{ float: "right" }}
            >
              Assisted Purchase Request
            </Link>
          </div>
        </div>
      </div>

      <div id="displayProducts">
        {products.map((p, e) => {
          const photo = (p.Images)

          return (<div key={p.Pid}>
            <Product
              // proImg={`./imgs/btt${e}.webp`}
              proImg={`${url}/${photo[0]}`}
              proName={p.Name}
              proPrice={` ₹${p.Price}`}
              product = {p}
            />
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
