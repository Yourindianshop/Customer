import React, { useContext, useEffect } from "react";
import "../stylesheet/Warehouse.css";
import Tilt from "react-parallax-tilt";
import { MyContext } from "../App";
import { fetchreq } from "../Helper/fetch";
import { useNavigate } from "react-router-dom";
const Warehouse = ({warehouse}) => {
  const {planId,user,setWh}=useContext(MyContext);
  const nav = useNavigate();

  const handleSelect = async ()=>{
    setWh({Name:warehouse.Name,Wid:warehouse.Wid});
    setTimeout(() => {
        nav("/warehousedata")
    }, 500);
  }
  return (
    <div className="warehouse-card">
      {/* <div className="wh-img-ol">
          <img src={a.image} alt={warehouse.Name} className="warehouse-image" />
        </div> */}
      <div className="w-data">
        <h3 className="warehouse-name">{warehouse.Name}</h3>
        <p className="warehouse-details">
          <strong>WarehouseId:</strong> {warehouse.Wid}
          <br />
          <strong>Address:</strong> {warehouse.Address}
          <br />
          <strong>Strit:</strong> {warehouse.Address2}
          <br />
          <strong>Landmark:</strong> {warehouse.Landmark}
          <br />
          <strong>City:</strong> {warehouse.City}
          <br />
          <strong>Pincode:</strong> {warehouse.pincode}
          <br />
          <strong>State:</strong> {warehouse.State}
          <br />
          <strong>Country:</strong> {warehouse.Country}
          <br />
          <strong>Capacity:</strong> {warehouse.Capacity}
          <br />
        </p>
      </div>
      <button className="btn btn-b" onClick={handleSelect}>
        Manage
      </button>
    </div>
  );
};

export default Warehouse;
