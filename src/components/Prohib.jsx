import React from "react";
import Footer from "./Footer";
import Navbar from "../pages/home/Navbar";

const Prohib = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="testimoinals-head">
          <h1>
            PROHIBITED ITEMS <span>BY YOURINDIANSHOP </span>
          </h1>
          <h4>
            YourIndianShop cannot facilitate the shipment of certain prohibited
            and non-approved restricted items on behalf of its customers. It is
            crucial to be aware of the following restrictions and guidelines
            when using our shipping services:
          </h4>
        </div>
        <div className="p-4">
          <h1 className="">GENERAL PROHIBITIONS:</h1>
          <ul className="ml-5 sm:ml-0">
            <li>⚫ Adult Material</li>
            <li>
              ⚫ Agriculture Products (e.g., ginger, garlic paste, or whole)
            </li>
            <li>⚫ Air Conditioner/Purifier</li>
            <li>⚫ Alcoholic Beverages</li>
            <li>⚫ Animal Products</li>
            <li>⚫ Animal Supplement</li>
            <li>⚫ Antiques</li>
            <li>⚫ Bakery Items</li>
            <li>⚫ Batteries (propane, butane, hydrogen, helium)</li>
            <li>⚫ Battery Shells</li>
            <li>
              ⚫ Beverages requiring refrigeration or other environmental
              control
            </li>
            <li>⚫ Bubble Gum (Singapore)</li>
            <li>⚫ Bulbs</li>
            <li>⚫ Candles</li>
            <li>⚫ Charcoal (powder, cream, etc.)</li>
            <li>⚫ Cigarette/E-Cigarette</li>
            <li>⚫ Coffee</li>
            <li>⚫ Coins (silver/gold)</li>
            <li>⚫ Currency Notes</li>
            <li>⚫ Dal (lentil)</li>
            <li>⚫ Damaged/Broken/Used Phones of any kind</li>
            <li>⚫ Debit/Credit Card</li>
            <li>⚫ Driving Licence</li>
            <li>⚫ Drone Cameras</li>
            <li>⚫ DSLR Camera (without lens we can ship)</li>
            <li>⚫ Dyes (hair, textile, etc.)</li>
            <li>⚫ Ghee</li>
            <li>⚫ Gold, Silver, and Gold/Silver Plated Products</li>
            <li>⚫ Government-issued Documents</li>
            <li>⚫ Hand Sanitizers</li>
            <li>⚫ Hard Disk Containing Data</li>
            <li>⚫ Herbs</li>
            <li>⚫ High-Value Gadgets</li>
            <li>⚫ Hing (Asafoetida)</li>
            <li>⚫ Honey</li>
            <li>⚫ Hookah Flavours</li>
            <li>⚫ Hoverboard</li>
            <li>⚫ Human and Animal Remains, Ashes</li>
            <li>⚫ Incense Sticks</li>
            <li>⚫ Insulin</li>
            <li>⚫ Laptop/Desktops</li>
            <li>⚫ Lasers</li>
            <li>⚫ Lithium Batteries</li>
            <li>⚫ Live Organs or Human Remains</li>
            <li>⚫ Lottery Tickets, Gambling Devices</li>
            <li>⚫ Magnets</li>
            <li>⚫ Matchbox</li>
            <li>⚫ Mattress</li>
            <li>⚫ Meat of Wild Animals</li>
            <li>⚫ Medical Samples</li>
            <li>⚫ Meltable Chocolates</li>
            <li>⚫ Millets</li>
            <li>
              ⚫ Money, Fake/Dummy/Collectable Cash, Payment Cards, Traveler
              Cheques
            </li>
            <li>⚫ Mosquito Repellent</li>
            <li>⚫ Mustard</li>
            <li>⚫ N95 & 4 Ply, 8 Ply Face Masks</li>
            <li>
              ⚫ Organic Food (any items which have names as organic can't be
              shipped)
            </li>
            <li>⚫ Paints</li>
            <li>⚫ Passports, IDs, Stamps, Gift Cards</li>
            <li>⚫ Peacock Feathers (any bird)</li>
            <li>⚫ Pepper & Salt</li>
            <li>⚫ Perfumes</li>
            <li>⚫ Perishable Foods</li>
            <li>⚫ Pickle</li>
            <li>
              ⚫ Plants & Seeds (need phytosanitary certificates for seeds)
            </li>
            <li>⚫ Pornography</li>
            <li>⚫ Power Bank</li>
            <li>⚫ Radar Detectors</li>
            <li>⚫ Rice</li>
            <li>⚫ Sambac & Tuberose</li>
            <li>⚫ Sandalwood & Red Sandal</li>
            <li>⚫ Sealant</li>
            <li>⚫ Speakers</li>
            <li>⚫ Spectacles & Lenses</li>
            <li>⚫ Steel Coating</li>
            <li>⚫ Television</li>
            <li>⚫ Tonner & Ink</li>
            <li>
              ⚫ Toy Weapons, Paint Ball Guns and BB Guns, Antique Weapons,
              Knives and Swords, Fake Grenades, Items that could be used as
              weapons, etc
            </li>
            <li>⚫ Turmeric</li>
            <li>⚫ Vape Liquid</li>
            <li>⚫ Vibhuti & Kumkum</li>
            <li>⚫ Walkie Talkie</li>
          </ul>
          <h1 className="mt-5">IMPORTANT NOTES:</h1>
          <ul>
            <li>
              • THE SHIPMENT OF SOME ITEMS MAY VARY DEPENDING ON THE DESTINATION
              COUNTRY, AS IT IS SPECIFIC TO THE CUSTOMS REGULATIONS OF THAT
              COUNTRY.
            </li>
            <li>
              • CUSTOMERS SHIPPING TO CHINA, BANGLADESH, SOUTH AFRICA, MEXICO,
              BRAZIL, JAPAN, TAIWAN, AFRICAN COUNTRIES MAY NEED TO HIRE A BROKER
              TO CLEAR CUSTOMS.
            </li>
            <li>• WE DO NOT SHIP TO PAKISTAN, MYANMAR, IRAN, IRAQ & TURKEY.</li>
            <li>
              • FOR ANY UNCERTAINTIES, PLEASE CONTACT OUR CUSTOMER SUPPORT TEAM
              BEFORE PLACING AN ORDER, AS CERTAIN SELLERS/E-COMMERCE PLATFORMS
              MAY NOT ACCEPT PRODUCT RETURNS.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prohib;
