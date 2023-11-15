import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { fetchreq, getDate } from "../../Helper/fetch";
function ReturnRequests() {
  const { user, wh, isLogin } = useContext(MyContext);
  const [dr, setDr] = useState(null);
  const nav = useNavigate();
  const loadRequsts = async () => {
    const dt = await fetchreq(
      "GET",
      `getReturnReq/${user?.Cid}/${wh?.Wid}`,
      {}
    );
    dt ? setDr(dt.result) : setDr([]);
  };
  useEffect(() => {
    if (isLogin) {
      loadRequsts();
    } else {
      nav("/");
    }
  }, []);
  return (
    <div id="height-of">
      <div id="l-title" className="no-mar">
        <div className="plan-page-title">
          <span id="org">Your</span>
          <span id="wt">Return</span>
          <span id="lime">Requests</span>
        </div>
        <div>
          <Link className="btn btn-o-1" to="/warehousedata">
            Go Back
          </Link>
        </div>
      </div>
      {dr &&
        dr.length != 0 &&
        dr.map((d) => {
          const time = getDate(d.time);
          return (
            <div
              style={{
                margin: "25px",
                padding: "25px",
                background: "#fff",
                border: "2px solid orange",
              }}
            >
              <p>RquestId: {d.Rid}</p>
              <p>ProductId: {d.Did}</p>
              <p>Time: {time}</p>
              <p>Status: {d.status?"Returned":"Not Returned"}</p>
            </div>
          );
        })}
      {dr && dr.length == 0 && <p>No request found</p>}
      {!dr && <p>Loading...</p>}
    </div>
  );
}

export default ReturnRequests