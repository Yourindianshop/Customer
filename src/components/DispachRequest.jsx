import React, { useContext, useEffect, useRef, useState } from 'react'
import { MyContext } from '../App';
import { fetchreq, getDate, walletTransaction } from '../Helper/fetch';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../stylesheet/dashboard/Table.css";
import { useReactToPrint } from "react-to-print";
function DispachRequest() {
  const componentRef = useRef();
  const printDocument = useReactToPrint({
    content: () => componentRef.current,
  });
  const [doc,setDoc]=useState(null);
  // ref={componentRef} 
  const { user, wh, isLogin, setUser } = useContext(MyContext);
  const [dr, setDr] = useState(null);
  const [yrpkt, setYrpkt] = useState(null);
  const [showpkt, setShowpkt] = useState(null);
  const [pid, setPid] = useState(null);
  const [sp, setSp] = useState(null);
  const nav = useNavigate();
  const loadRequsts = async () => {
    const dt = await fetchreq("GET", `getDispachReq/${user.Cid}/${wh.Wid}`, {});
    dt ? setDr(dt.result) : setDr([]);
    const dt2 = await fetchreq("GET", "getSp", {});
    dt2 ? setSp(dt2.result) : setSp([]);
    console.log(dt2)
  };
  const loadpkt = async () => {
    const dt = await fetchreq("GET", `packages/${user.Cid}/${wh.Wid}`, {});
    dt ? setYrpkt(dt.result) : setYrpkt([]);
  };
  const selectSpAndPay = async (pd, s) => {
    const dt = await walletTransaction(
      pd.payment,
      null,
      "Curior Payment",
      user,
      setUser,
      nav
    );
    if (dt) {
      const qry = `addSptoPackets/${pd.Pid}/${s}`;
      console.log(qry);
      const res = await fetchreq("GET", qry, {});
      if (res) {
        alert("Payment Done Successfully...");
        nav("/warehousedata");
      } else {
        alert("something Went Wrong...");
      }
    } else {
      alert("payment Cancled...");
    }
  };
  useEffect(() => {
    if (isLogin) {
      loadRequsts();
    } else {
      nav("/");
    }
  }, []);
  return (
    <div id="height-of" style={{ padding: "0px" }}>
      {!showpkt && (
        <div>
          <div id="l-title" className="no-mar">
            <div className="plan-page-title">
              <span id="org">Your</span>
              <span id="wt">Dispatch</span>
              <span id="lime">Requests</span>
            </div>
            <div>
              <button
                className="btn btn-o-1"
                onClick={() => {
                  setShowpkt(true);
                  loadpkt();
                }}
              >
                Your Packets to Dispatch
              </button>
            </div>
          </div>
          <table className="table-mar table-dis">
            <thead>
              <tr>
                <th>Id</th>
                <th>ProductId</th>
                <th>Name</th>
                <th>Address</th>
                {/* <th>City</th>
                <th>State</th> */}
                <th>Country</th>
                <th>Pincode</th>
                <th>Time</th>
                <th>Email</th>
                <th>PhoneNo</th>
                <th>Delivery Instruction</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dr &&
                dr.length !== 0 &&
                dr.map((d) => {
                  const time = getDate(d.Time);
                  return (
                    <tr className="rr" key={d.Sid}>
                      <td>{d.Sid}</td>
                      <td>{d.Did}</td>
                      <td>{d.Name}</td>
                      <td>
                        {d.Address}, {d.Address2}, {d.City},{d.State}
                      </td>
                      <td>{d.Country}</td>
                      <td>{d.pincode}</td>
                      <td>{time}</td>
                      <td>{d.Email}</td>
                      <td>{d.phoneNo}</td>
                      <td>{d.Dinstruct}</td>
                      <td>{d.Status === 0 ? "Not seen" : d.Status==1? "Dispatched":"In Procedure"}</td>
                    </tr>
                  );
                })}
              {dr && dr.length === 0 && (
                <tr>
                  <td colSpan="14">No data found</td>
                </tr>
              )}
              {!dr && (
                <tr>
                  <td colSpan="14">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
          <div id="dis-req-grid">
            {dr &&
              dr.length != 0 &&
              dr.map((d) => {
                const time = getDate(d.Time);
                return (
                  <div id="drrr">
                    <p>ShipmentId: {d.Sid}</p>
                    <p>ProductId: {d.Did}</p>
                    <p>Name: {d.Name}</p>
                    <p>Address Line1: {d.Address}</p>
                    <p>Address Line2: {d.Address2}</p>
                    <p>City: {d.City}</p>
                    <p>State: {d.State}</p>
                    <p>Country: {d.Country}</p>
                    <p>pincode: {d.pincode}</p>
                    <p>Time: {time}</p>
                    <p>Email: {d.Email}</p>
                    <p>phoneNo: {d.phoneNo}</p>
                    <p>Delivery Instruction: {d.Dinstruct}</p>
                    <p>Status: {d.Status == 0 ? "Not seen" : "Dispached"}</p>
                  </div>
                );
              })}
            {dr && dr.length == 0 && <p>No data found</p>}
            {!dr && <p>Loading...</p>}
          </div>
        </div>
      )}
      {showpkt && (
        <div id="par-ct">
          <div id="l-title" className="no-mar">
            <div className="plan-page-title">
              <span id="org">Your</span>
              <span id="lime">Packets</span>
            </div>
            <div>
              <button
                className="btn btn-o-1"
                onClick={() => {
                  setShowpkt(false);
                }}
              >
                Dispach Request
              </button>
            </div>
          </div>
          <table className="par-table pck-tb">
            <thead>
              <tr>
                <th>PackageId</th>
                <th>Shipment Ids</th>
                <th>Time</th>
                <th>Status</th>
                <th>Dimensions (Cm)</th>
                <th>Weight (Kg)</th>
                <th>Payment</th>
                <th>Courier ProviderId</th>
                <th>Status</th>
                <th>Courier Partner</th>
              </tr>
            </thead>
            <tbody>
              {yrpkt &&
                yrpkt.length !== 0 &&
                yrpkt.map((p) => {
                  return (
                    <tr key={p.Pid}>
                      <td>{p.Pid}</td>
                      <td>{p.Sid}</td>
                      <td>{getDate(p.time)}</td>
                      <td>{p.status === 0 ? "pending" : "Dispatched"}</td>
                      <td>
                        {p.height}*{p.width}*{p.length} CM
                      </td>
                      <td>{p.wight} Kg</td>
                      <td>₹{p.payment}</td>
                      <td>{p.Sp || "N/A"}</td>
                      <td>
                        {p.status
                          ? "Dispatched"
                          : p.Sp
                          ? "Courier Service Selected"
                          : "In procedure..."}
                      </td>
                      {!p.status ? (
                        <td>
                          {!p.status && !p.Sp && pid !== p.Pid && (
                            <button
                              className="btn-o-1 btn"
                              onClick={() => {
                                setPid(pid ? null : p.Pid);
                              }}
                            >
                              {pid ? "Hide " : "Select "}Courier Partner
                            </button>
                          )}
                          {pid === p.Pid && (
                            <>
                              {/* <h3>Select Courier Service and Pay ${p.payment}</h3> */}
                              <select
                                onChange={(e) =>
                                  selectSpAndPay(p, e.target.value)
                                }
                                // value={.Sp}
                              >
                                <option value="">Select Courier Partner</option>
                                {sp &&
                                  sp.map((s) => (
                                    <option key={s.Sp} value={s.Sp}>
                                      {s.Name}
                                    </option>
                                  ))}
                              </select>
                            </>
                          )}{" "}
                          {/* {pid === p.Pid && (
                          <>
                            <h3>Select Courier Service and Pay ${p.payment}</h3>
                            {sp &&
                              sp.map((s) => (
                                <div
                                  key={s.Sp}
                                  onClick={() => selectSpAndPay(p, s)}
                                  className="btn-b"
                                  style={{
                                    border: "2px solid orange",
                                    display: "inline-block",
                                    cursor: "pointer",
                                    marginRight: "20px",
                                  }}
                                >
                                  <img
                                    src={s.logo}
                                    alt={s.Name}
                                    width="100px"
                                  />
                                  <p style={{ textAlign: "center" }}>
                                    {s.Name}
                                  </p>
                                </div>
                              ))}
                          </>
                        )} */}
                        </td>
                      ) : (
                        <td>
                          {" "}
                          <button
                            className="btn btn-b"
                            onClick={() => {
                              setDoc(p);
                              setTimeout(() => {
                                printDocument();
                              }, 500);
                            }}
                          >
                            Print Details
                          </button>{" "}
                        </td>
                      )}
                    </tr>
                  );
                })}
              {yrpkt && yrpkt.length === 0 && (
                <tr>
                  <td colSpan="12">No data found</td>
                </tr>
              )}
              {!yrpkt && (
                <tr>
                  <td colSpan="12">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
          {doc && (
            <div
              ref={componentRef}
              style={{
                padding: "2",
                margin: "30px",
                borderRadius: "8px",
                fontSize: "1.2rem",
                border: "2px solid cyan",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>YourIndianShop</h2> <hr style={{ color: "cyan" }} />
              <br />
              <p>PacketId: {doc?.Pid}</p>
              <p>ShipmentId: {doc?.Sid}</p>
              <p>Time: {getDate(doc?.time)}</p>
              <p>Time: {getDate(doc?.time)}</p>
              <p>
                Dimensions (Cm): {doc?.height}*{doc?.width}*{doc?.length} CM
              </p>
              <p>Wight: {doc?.wight} Kg</p>
              <p>Payment: ₹{doc?.payment}</p>
              <p>Curior Service Provider: DHL</p>
            </div>
          )}

          {!yrpkt && <h3>Loading...</h3>}
          {yrpkt && yrpkt.length == 0 && <p>No data found</p>}
          {yrpkt &&
            yrpkt.length != 0 &&
            yrpkt.map((p) => {
              return (
                <div key={p.Pid} id="dis-req-grid">
                  <div id="drrr">
                    <p>packageId: {p.Pid}</p>
                    <p>Shipment Ids: {p.Sid}</p>
                    <p>time: {getDate(p.time)}</p>
                    <p>status: {p.status == 0 ? "pending" : "Dispatched"}</p>
                    <p>Hight: {p.height} Cm</p>
                    <p>Width: {p.width} Cm</p>
                    <p>Length: {p.length} Cm</p>
                    <p>Wight: {p.wight} Kg</p>
                    <p>Payment: ${p.payment}</p>
                    {p.Sp && <p>Curiour Service ProviderId: {p.Sp}</p>}
                    <p>
                      Status:{" "}
                      {p.status
                        ? "Dispatched"
                        : p.Sp
                        ? "Curior Service Selected"
                        : "In procedure..."}
                    </p>
                    {!p.status && !p.Sp && pid != p.Pid && (
                      <button
                        className="btn-o btn"
                        onClick={() => {
                          setPid(pid ? null : p.Pid);
                        }}
                      >
                        {pid ? "hide " : "Select "}Curior Service Provider
                      </button>
                    )}

                    <div>
                      {pid === p.Pid && (
                        <>
                          {/* <h3>Select Courier Service and Pay ${p.payment}</h3> */}
                          <select
                            onChange={(e) => selectSpAndPay(p, e.target.value)}
                            // value={.Sp}
                          >
                            <option value="">Select Courier Partner</option>
                            {sp &&
                              sp.map((s) => (
                                <option key={s.Sp} value={s.Sp}>
                                  {s.Name}
                                </option>
                              ))}
                          </select>
                        </>
                      )}{" "}
                      {/* {pid === p.Pid && (
                          <>
                            <h3>Select Courier Service and Pay ${p.payment}</h3>
                            {sp &&
                              sp.map((s) => (
                                <div
                                  key={s.Sp}
                                  onClick={() => selectSpAndPay(p, s)}
                                  className="btn-b"
                                  style={{
                                    border: "2px solid orange",
                                    display: "inline-block",
                                    cursor: "pointer",
                                    marginRight: "20px",
                                  }}
                                >
                                  <img
                                    src={s.logo}
                                    alt={s.Name}
                                    width="100px"
                                  />
                                  <p style={{ textAlign: "center" }}>
                                    {s.Name}
                                  </p>
                                </div>
                              ))}
                          </>
                        )} */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default DispachRequest;