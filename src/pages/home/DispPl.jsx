
import React, { useEffect, useState } from "react";
import { fetchreq } from "../../Helper/fetch";
import "./DispPl.css";

const DispPl = () => {
  const [plans, setPlans] = useState([]);

  const loadplans = async () => {
    const pl = await fetchreq("GET", "plans", {});
    pl ? setPlans(pl.result) : setPlans([]);
  };

  useEffect(() => {
    loadplans();
  }, []);

  return (
    <>
      <div className=" ">
        <div className="container1">
          <h1 className="colorss">Compare plans</h1>
          <span className="items">
            Discover our plans and find the one that fits your project&apos;s
            needs.
          </span>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Starter</th>
                <th>Starter</th>
                <th>Starter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Starter</td>
                <td>Starter</td>
                <td>Starter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DispPl;

