import { useEffect, useState } from "react";
import { fetchreq } from "../../Helper/fetch";
import PlanCompTable from "../../components/PlanCompTab";
import "./DispPl.css";
import Marquee from "react-fast-marquee";

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
    <div className="plan-bg">
      <div className="marquee">
        <Marquee speed={150}>
          Save Upto 80% on International Shipping • Exciting Discounts on
          Premium Plans • Get Your Virtual Indian Address
        </Marquee>
      </div>
      {/* <Link to={"/signup"}>
        <img src={"/plans/plan.png"} width={1700} alt="no"></img>
      </Link> */}
      <div>
        <h1 className="plan-h">
          Our <span style={{ color: "var(--blue)" }}>Plans</span>
        </h1>
      </div>
      <div id="dp-pl">
        <PlanCompTable />
        <div className="plan000">
          <img className="plan01" src="/home/plan01.png" />
        </div>
        <div className="plan00">
          <img className="plan02" src="/home/plan02.png" />
        </div>
        {/* <div id="plan-cards">
          {plans.length != 0 &&
            plans.map((plan, index) => (
              <PlanCard state={false} key={index} plan={plan} />
            ))}
        </div> */}
      </div>{" "}
    </div>
  );
};

export default DispPl;
