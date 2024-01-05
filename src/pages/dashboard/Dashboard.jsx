import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "../../stylesheet/dashboard/Dashboard.css";
import "../../stylesheet/dashboard/Dmq.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { MyContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { fetchreq } from "../../Helper/fetch";
import Foot from "../../components/Foot";

const Dashboard = () => {
  const { user, isLogin } = useContext(MyContext);
  const [pktinfo, setPktinfo] = useState(null);
  const nav = useNavigate();
  const loadpkt = async () => {
    const dt = await fetchreq("GET", `getpktinfo/${user?.Cid}`, {});
    dt ? setPktinfo(dt.result[0]) : setPktinfo(null);
  };
  useEffect(() => {
    if (!isLogin) {
      nav("/");
    } else {
      loadpkt();
    }
  }, []);
  return (
    <div id="dash-cont">
      <div id="dash">
        <div className="ds-top">
          <Link to="/dashboard/profile" className="ds-left">
            <small
              style={{
                color: "black",
                fontWeight: "700",
                fontFamily: "var(--font3)",
              }}
            >
              Welcome
            </small>
            <br />
            <h1
              style={{
                color: "black",
                fontWeight: "700",
                fontFamily: "var(--font3)",
              }}
            >
              {user?.Name}
            </h1>
          </Link>
          <div className="ds-right ">
            <Link
              to="/disp-plan"
              className="bg-[#00A1B8] p-3 sm:p-1 rounded-lg  sm:text-sm"
            >
              <span>Upgrade your membership</span>
            </Link>
          </div>
        </div>
        <div id="ds2" style={{ flexWrap: "wrap" }}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div
                  className="ds-c"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="icon-new ico-r">
                    <LocalShippingIcon />
                  </div>
                  <small style={{ marginTop: "1rem" }}>Indian Shop </small>
                  {pktinfo && <big style={{ marginTop: "1rem" }}></big>}
                </div>
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div
                  className="ds-c"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="icon-new ico-r">
                    <LocalShippingIcon />
                  </div>
                  <small style={{ marginTop: "1rem" }}>Wallet Balance</small>
                  {pktinfo && (
                    <big style={{ marginTop: "1rem" }}>₹{user?.Wallete}</big>
                  )}
                </div>
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div
                  className="ds-c"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="icon-new ico-r">
                    <LocalShippingIcon />
                  </div>
                  <small style={{ marginTop: "1rem" }}>Warehouses ID</small>
                  {pktinfo && <big style={{ marginTop: "1rem" }}>1</big>}
                </div>
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div
                  className="ds-c"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="icon-new ico-r">
                    <LocalShippingIcon />
                  </div>
                  <small style={{ marginTop: "1rem" }}>Locker</small>
                  {pktinfo && (
                    <big style={{ marginTop: "1rem" }}>
                      {pktinfo.Locker} packages
                    </big>
                  )}
                </div>
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div
                  className="ds-c"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="icon-new ico-r">
                    <LocalShippingIcon />
                  </div>
                  <small style={{ marginTop: "1rem" }}>Delivered </small>
                  {pktinfo && (
                    <big style={{ marginTop: "1rem" }}>
                      {pktinfo.Dispatched} packages
                    </big>
                  )}
                </div>
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div
                  className="ds-c"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="icon-new ico-r">
                    <LocalShippingIcon />
                  </div>
                  <small style={{ marginTop: "1rem" }}>Shipment </small>
                  {pktinfo && (
                    <big style={{ marginTop: "1rem" }}>
                      {pktinfo.Delivered} packages
                    </big>
                  )}
                </div>
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="ds3">
          
          <div className="work-dia">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/work-dia2.png"
              alt=""
            />
          </div>
        </div> */}
      </div>
      <div id="vAdd"></div>
    </div>
  );
};

export default Dashboard;
