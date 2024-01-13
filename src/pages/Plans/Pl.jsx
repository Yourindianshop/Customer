import "./PI.css";
import { useState } from "react";
import SaleComponent from "./SalesComponent";
import HalfYearly from "./HalfYearly";
import Yearly from "./Yearly";
import { GoDotFill } from "react-icons/go";
import Navbar from "../home/Navbar";
import Footer from "../../components/Footer";

const Pl = () => {
  const [activeLink, setActiveLink] = useState("Trial Plan");

  const Properties_Links = [
    { href: "", key: "home", label: "Trial Plan" },
    { href: "", key: "about", label: "Half Yearly" },
    { href: "", key: "services", label: "Yearly Plan" },
  ];

  const handleLinkClick = (event, label) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
    setActiveLink(label);
  };
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="container1">
          <h1 className="colorss sm:text-xl">Compare plans</h1>
          <span className="items sm:text-sm sm:text-center sm:ml-0 ">
            Pick the right plan for you
          </span>
        </div>

        <div className="max-container justify-between px-10 lg:px-20 3xl:px-0 flex gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row sm:hidden">
          <div className="flex-1 text-start border-2 h-full p-6 flex flex-col rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900">Trial Plan</h1>
            <h2 className="text-lg text-start text-gray-700 mt-3">
              Complete access to all our Security features
            </h2>
            <a href="/SignIn">
              <button className="btn mt-5"> Buy Now</button>
            </a>
            <div className="bg-[#F5F5F5] p-4 mt-3 rounded-lg">
              <span className="">What it includes What it includes</span>
            </div>
            <div className="">
              {/* <h3 className="text-center">Include special offers such as</h3> */}
              <ul className="mt-8 gap-2">
                <li className="flex text-lg items-center text-center">
                  <GoDotFill />
                  This plan is completely free
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  399/shipping
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Storage is free for first 25 days
                </li>
                <li className="flex text-sm items-center text-center">
                  (After 25 Days ₹75 Per Item Per Day)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  First 3 photos are free
                </li>
                <li className="flex text-sm  items-center text-center">
                  (DETAILED PHOTO SERVICE UPTO 10, ₹400)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Package return cost is ₹50 PER ITEM
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Warehouse pickup is for ₹400
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Scanned documents is for ₹80/Page
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  You can ship upto 5 Address
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Semiliquid/Liquids are charged 10%
                </li>
                <li className="flex text-sm   items-center text-center">
                  (EXCLUSIVE OF ALL OTHER CHARGES)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Get free real time tracking
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  personal shops get 7% item value
                </li>
                <li className="flex text-sm   items-center text-center">
                  (Exclusive Of All Charges)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Set Up your free local business hub
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Assisted purchase is
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  Actual Charges + Other Charges
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 text-start border-2 h-full p-6 flex flex-col rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900">Half Yearly</h1>
            <h2 className="text-lg text-start text-gray-700 mt-3">
              Complete security module & starter Community features
            </h2>
            <a href="/SignIn">
              <button className="btn btn-o mt-5"> Buy Now</button>
            </a>
            <div className="bg-[#F5F5F5] p-4 mt-3 rounded-lg">
              <span className="">What it includes What it includes</span>
            </div>
            <div className="">
              {/* <h3 className="text-center">Include special offers such as</h3> */}
              <ul className="mt-8 gap-2">
                <li className="flex text-lg items-center text-center">
                  <GoDotFill />
                  This plan is for ₹2499
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Shipment is free
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Storage is free for first 30 days
                </li>
                <li className="flex text-sm items-center text-center">
                  (After 25 Days ₹75 Per Item Per Day)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  First 3 photos are free
                </li>
                <li className="flex text-sm  items-center text-center">
                  (DETAILED PHOTO SERVICE UPTO 10, ₹250)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Package return cost is free
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Warehouse pickup is free
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Scanned documents is for ₹40/Page
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  You can ship infinite Address
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Semiliquid/Liquids are charged 10%
                </li>
                <li className="flex text-sm   items-center text-center">
                  (EXCLUSIVE OF ALL OTHER CHARGES)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Get free real time tracking
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  personal shops get 5% item value
                </li>
                <li className="flex text-sm   items-center text-center">
                  (Exclusive Of All Charges)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Set Up your free local business hub
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Assisted purchase is
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  Actual Charges + Other Charges
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 text-start border-2 h-full p-6 flex flex-col rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900">Yearly Plan</h1>
            <h2 className="text-lg text-start text-gray-700 mt-3">
              The complete suite of MyGate <br /> features
            </h2>
            <a href="/SignIn">
              <button className="btn mt-5"> Buy Now</button>
            </a>
            <div className="bg-[#F5F5F5] p-4 mt-3 rounded-lg">
              <span className="">What it includes What it includes</span>
            </div>
            <div className="">
              {/* <h3 className="text-center">Include special offers such as</h3> */}
              <ul className="mt-8 gap-2">
                <li className="flex text-lg items-center text-center">
                  <GoDotFill />
                  This plan is for ₹4499
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Shipment is free
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Storage is free for first 40 days
                </li>
                <li className="flex text-sm items-center text-center">
                  (After 25 Days ₹75 Per Item Per Day)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  First 3 photos are free
                </li>
                <li className="flex text-sm  items-center text-center">
                  (DETAILED PHOTO SERVICE UPTO 10, ₹400)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Package return cost is free
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Warehouse pickup is free
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Scanned documents is for ₹40/Page
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  You can ship infinite Address
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Semiliquid/Liquids are charged 10%
                </li>
                <li className="flex text-sm   items-center text-center">
                  (EXCLUSIVE OF ALL OTHER CHARGES)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Get free real time tracking
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  personal shops get 5% item value
                </li>
                <li className="flex text-sm   items-center text-center">
                  (Exclusive Of All Charges)
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Set Up your free local business hub
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  <GoDotFill />
                  Assisted purchase is
                </li>
                <li className="flex text-lg mt-2 items-center text-center">
                  Actual Charges + Other Charges
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-2 ">
          <div className="hidden sm:block lg:hidden mt-5 p-2 rounded-lg bg-[#dadada] ">
            <div className="hidden lg:flex h-full gap-5 text-pink justify-center">
              {Properties_Links.map((link) => (
                <div
                  key={link.key}
                  href={link.href}
                  onClick={(event) => handleLinkClick(event, link.label)}
                  className={` cursor-pointer rounded-lg p-2 pb-1.5 transition-all  ${
                    activeLink === link.label
                      ? "font-bold bg-blue text-primary-light"
                      : "text-primary"
                  }`}
                >
                  {link.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {activeLink === "Trial Plan" && window.innerWidth <= 768 && (
        <SaleComponent />
      )}
      {activeLink === "Half Yearly" && <HalfYearly />}
      {activeLink === "Yearly Plan" && <Yearly />}
      <Footer />
    </div>
  );
};

export default Pl;
