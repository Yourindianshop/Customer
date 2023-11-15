import React, { useContext, useEffect, useState } from 'react'
import { fetchreq, getDate } from '../../Helper/fetch';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
const { DateTime } = require("luxon");

function PAR() {
  const imgurl = process.env.REACT_APP_URL;
  const [par, setPar] = useState(null);
  const { user, wh, isLogin } = useContext(MyContext);
  const nav = useNavigate();
  const getReq = async () => {
    const dt = await fetchreq("GET", `getPAR/${user?.Cid}/${wh?.Wid}`, {});
    dt ? setPar(dt.result) : setPar([]);
  };
  useEffect(() => {
    if (isLogin) {
      getReq();
    } else {
      nav("/");
    }
  }, []);
  return (
    <div id="par-ct">
      <div id="l-title" className="no-mar">
        <div className="plan-page-title">
          <span id="org">Your Past</span>
          <span id="wt"> PARs in</span>

          <span id="lime">{wh?.Name}</span>
        </div>
        <div>
          <div>
            <Link className="btn btn-o-1" to="/dashboard/product-acceptance">
              Add New PAR
            </Link>
          </div>
        </div>
      </div>

      <br />
      <table className="par-table par-req-tb">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {par &&
            par.length !== 0 &&
            par.map((r) => {
              const fdt = getDate(r.time);

              return (
                <tr className="rr" key={r.Rid}>
                  <td>{r.productName}</td>
                  <td className="ds-tb">{r.Description}</td>
                  <td>{r.Verify === 0 ? "Not Verify" : "Verify"}</td>
                  <td>{fdt}</td>
                </tr>
              );
            })}
          {par && par.length === 0 && (
            <tr>
              <td colSpan="4">No data found</td>
            </tr>
          )}
          {!par && (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>

      <div id="par-cards-box">
        {par &&
          par.length != 0 &&
          par.map((r) => {
            const fdt = getDate(r.time);

            return (
              <div key={r.Rid}>
                {/* <div className="wh-img-ol">
                  <img
                    src={`${imgurl}/${r.proof}`}
                    alt="Image"
                    className="warehouse-image"
                  />
                </div> */}
                <div className="par-da">
                  <p>
                    {" "}
                    <span id="org">Name:</span>
                    {r.productName}
                  </p>
                  <p>
                    {" "}
                    <span id="org">Desc:</span>
                    {r.Description}
                  </p>
                  <p>
                    {" "}
                    <span id="org">Status:</span>
                    {r.Verify == 0 ? "Not Verify" : "Verify"}
                  </p>
                  <p>
                    {" "}
                    <span id="org">Date:</span>
                    {fdt}
                  </p>
                </div>
              </div>
            );
          })}
        {par && par.length == 0 && <p>No data found</p>}
        {!par && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default PAR