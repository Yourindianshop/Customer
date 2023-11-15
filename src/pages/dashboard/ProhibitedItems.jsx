import React from "react";
import "../../stylesheet/dashboard/ProhibitedItems.css";

const ProhibitedItems = () => {
  return (
    <div id="dash-pro-item" className="article-container">
      <header>
        <h1>Prohibited Items for Shipping and Warehouse Services</h1>
      </header>

      <article>
        <div>
          <h2>High-Risk Items:</h2>
          <ul>
            <li>
              <strong>Explosives:</strong> Any form of explosive material,
              including fireworks, ammunition, or pyrotechnic devices, is
              strictly forbidden.
            </li>
            <li>
              <strong>Flammable Liquids:</strong> Substances such as gasoline,
              kerosene, or alcohol pose a significant fire hazard and are
              prohibited.
            </li>
            <li>
              <strong>Hazardous Chemicals:</strong> Any chemicals considered
              hazardous, as defined by relevant regulations, are not allowed.
              This includes radioactive materials, toxic substances, and
              corrosive agents.
            </li>
            <li>
              <strong>Live Animals:</strong> For the safety and welfare of both
              animals and personnel, live animals cannot be stored or shipped
              within our facilities.
            </li>
            <li>
              <strong>Biological Materials:</strong> Biological samples,
              infectious materials, or medical waste are prohibited due to
              health and safety concerns.
            </li>
          </ul>
        </div>

        <div>
          <h2>Illegal or Regulated Items:</h2>
          <ul>
            <li>
              <strong>Illegal Drugs:</strong> The possession, storage, or
              shipment of illegal drugs or substances controlled by law is
              strictly forbidden.
            </li>
            <li>
              <strong>Counterfeit Goods:</strong> Any counterfeit or pirated
              products that infringe upon intellectual property rights are not
              allowed.
            </li>
            <li>
              <strong>Stolen Items:</strong> Goods suspected of being stolen or
              acquired through unlawful means are strictly prohibited.
            </li>
            <li>
              <strong>Firearms and Weapons:</strong> Firearms, ammunition, and
              weapons of any kind are not to be stored or shipped without proper
              authorization.
            </li>
            <li>
              <strong>Endangered Species:</strong> Items made from or related to
              endangered species, including ivory and certain animal products,
              are illegal to possess and are prohibited.
            </li>
          </ul>
        </div>

        <div>
          <h2>Items with Ethical Concerns:</h2>
          <ul>
            <li>
              <strong>Tobacco and Alcohol:</strong> The storage and shipping of
              tobacco and alcohol products may be subject to restrictions or
              additional taxes. Check local laws and regulations.
            </li>
            <li>
              <strong>Adult Content:</strong> Materials of an explicit or adult
              nature may not be stored or shipped, as they can conflict with
              local laws and ethical guidelines.
            </li>
          </ul>
        </div>

        <div>
          <h2>Sensitive or Valuable Items:</h2>
          <ul>
            <li>
              <strong>Currency and Valuables:</strong> Cash, precious metals,
              and valuable gems should not be stored within our facilities due
              to the risk of theft.
            </li>
            <li>
              <strong>Fragile Items:</strong> Extremely delicate items with a
              high risk of damage during handling and storage should be assessed
              on a case-by-case basis.
            </li>
          </ul>
        </div>

        <div>
          <h2>Highly Perishable Items:</h2>
          <ul>
            <li>
              <strong>Fresh Food:</strong> Perishable food items may not be
              stored for extended periods, and their shipment may be subject to
              strict regulations.
            </li>
            <li>
              <strong>Live Plants:</strong> Live plants may not be suitable for
              long-term storage and must adhere to specific regulations if
              shipped.
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ProhibitedItems;
