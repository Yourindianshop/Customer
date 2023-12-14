import React from "react";
import "./PI.css";
import { useState } from "react";

const SaleComponent = () => (
  <div className="p-2">
    <div className="text-blue-500 hidden sm:block p-2  rounded-lg">
      <h1 className="text-center text-lg lg:text-4xl text-primary-light bg-red rounded-t-lg">
        Free
      </h1>
      <div className="bg-pink bg-opacity-50 rounded-b-lg">
        <div className="flex gap-10 p-2 justify-between">
          <div>CONSOLIDATION </div>
          <div>₹399/SHIPMENT </div>
        </div>

        <div className="flex gap-10 p-2 justify-between">
          <div>STORAGE </div>
          <div className="ml-14">
            25 DAYS (After 25 Days ₹75 Per Item Per Day){" "}
          </div>
        </div>

        <div className="flex gap-10 p-2 justify-between">
          <div>PHOTO </div>
          <div className="ml-16">
            3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹400){" "}
          </div>
        </div>
        <div className="flex gap-5 p-2 justify-between">
          <div>PACKAGE RETURN </div>
          <div className="">₹50 PER ITEM</div>
        </div>
        <div className="flex gap-5 p-2 justify-between">
          <div>Warehouse Pickup</div>
          <div className="">₹400</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>
            Scanned Copies Of <br /> Documents
          </div>
          <div className="   items-center">₹80 Per Page</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Shipping Address</div>
          <div className="  ml-3 items-center">Upto 5</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Semiliquid/Liquid Clearance Charge</div>
          <div className=" items-center">
            10% (EXCLUSIVE OF ALL OTHER CHARGES)
          </div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Real-Time Tracking</div>
          <div className="ml-5  items-center">Free</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Personal Shopper</div>
          <div className=" mt-[-0.3rem] ml-16 items-center">
            7% Of Item Value (Exclusive Of All Charges)
          </div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Personal Shopper</div>
          <div className=" mt-[-0.3rem] ml-8 items-center">Free</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Assisted Purchase</div>
          <div className=" mt-[-0.3rem] ml-12 items-center">
            Actual Charges + Other Charges
          </div>
        </div>
      </div>

      {/* Add your "For Sale" component content here */}
      <a href="/SignIn" className="flex justify-center items-center">
        <button className="p-4 bg-red mt-3 rounded-lg">Buy Now</button>
      </a>
    </div>
  </div>
);
const HalfYearly = () => (
  <div className="p-2">
    <div className="text-blue-500 hidden sm:block p-2  rounded-lg">
      <h1 className="text-center text-lg lg:text-4xl bg-[#6C0C6C] text-primary-light rounded-t-lg">
        ₹2499
      </h1>
      <div className="bg-[#6C0C6C] bg-opacity-30 rounded-b-lg">
        <div className="flex gap-10 p-2 justify-between">
          <div>CONSOLIDATION </div>
          <div>Free </div>
        </div>

        <div className="flex gap-10 p-2 justify-between">
          <div>STORAGE </div>
          <div className="ml-14">
            30 DAYS (After 30 Days ₹75 Per Item Per Day){" "}
          </div>
        </div>

        <div className="flex gap-10 p-2 justify-between">
          <div>PHOTO </div>
          <div className="ml-16">
            3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250){" "}
          </div>
        </div>
        <div className="flex gap-5 p-2 justify-between">
          <div>PACKAGE RETURN </div>
          <div className="">Free</div>
        </div>
        <div className="flex gap-5 p-2 justify-between">
          <div>Warehouse Pickup</div>
          <div className="">Free</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>
            Scanned Copies Of <br /> Documents
          </div>
          <div className="   items-center">₹40 Per Page</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Shipping Address</div>
          <div className="  ml-3 items-center">Unlimited</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Semiliquid/Liquid Clearance Charge</div>
          <div className=" items-center">
            10% (EXCLUSIVE OF ALL OTHER CHARGES)
          </div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Real-Time Tracking</div>
          <div className="ml-5  items-center">Free</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Personal Shopper</div>
          <div className=" mt-[-0.3rem] ml-16 items-center">
            5% Of Item Value (Exclusive Of All Charges)
          </div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Personal Shopper</div>
          <div className=" mt-[-0.3rem] ml-8 items-center">Free</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Assisted Purchase</div>
          <div className=" mt-[-0.3rem] ml-12 items-center">
            Actual Charges + Other Charges
          </div>
        </div>
      </div>

      {/* Add your "For Sale" component content here */}
      <a href="/SignIn" className="flex justify-center items-center">
        <button className="p-4 bg-[#6C0C6C] mt-3 rounded-lg">Buy Now</button>
      </a>
    </div>
  </div>
);
const Yearly = () => (
  <div className="p-2">
    <div className="text-blue-500 hidden sm:block p-2  rounded-lg">
      <h1 className="text-center text-lg lg:text-4xl bg-[#013C4F] text-primary-light rounded-t-lg">
        ₹4499
      </h1>
      <div className="bg-[#013C4F] bg-opacity-30 rounded-b-lg">
        <div className="flex gap-10 p-2 justify-between">
          <div>CONSOLIDATION </div>
          <div>Free </div>
        </div>

        <div className="flex gap-10 p-2 justify-between">
          <div>STORAGE </div>
          <div className="ml-14">
            40 DAYS (After 30 Days ₹75 Per Item Per Day){" "}
          </div>
        </div>

        <div className="flex gap-10 p-2 justify-between">
          <div>PHOTO </div>
          <div className="ml-16">
            3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250){" "}
          </div>
        </div>
        <div className="flex gap-5 p-2 justify-between">
          <div>PACKAGE RETURN </div>
          <div className="">Free</div>
        </div>
        <div className="flex gap-5 p-2 justify-between">
          <div>Warehouse Pickup</div>
          <div className="">Free</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>
            Scanned Copies Of <br /> Documents
          </div>
          <div className="   items-center">₹40 Per Page</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Shipping Address</div>
          <div className="  ml-3 items-center">Unlimited</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Semiliquid/Liquid Clearance Charge</div>
          <div className=" items-center">
            10% (EXCLUSIVE OF ALL OTHER CHARGES)
          </div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Real-Time Tracking</div>
          <div className="ml-5  items-center">Free</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Personal Shopper</div>
          <div className=" mt-[-0.3rem] ml-16 items-center">
            5% Of Item Value (Exclusive Of All Charges)
          </div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Personal Shopper</div>
          <div className=" mt-[-0.3rem] ml-8 items-center">Free</div>
        </div>
        <div className="flex p-2 justify-between">
          <div>Assisted Purchase</div>
          <div className=" mt-[-0.3rem] ml-12 items-center">
            Actual Charges + Other Charges
          </div>
        </div>
      </div>

      {/* Add your "For Sale" component content here */}
      <a href="/SignIn" className="flex justify-center items-center">
        <button className="p-4 bg-[#013C4F] mt-3 rounded-lg">Buy Now</button>
      </a>
    </div>
  </div>
);

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
      <div className="relative">
        <div className="container1">
          <h1 className="colorss sm:text-xl">Compare plans</h1>
          <span className="items sm:text-sm sm:text-left ml-12">
            Discover our plans and find the one that fits your project&apos;s
            needs.
          </span>
        </div>
        <div className="max-container px-6 lg:px-20 3xl:px-0 flex gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row sm:hidden">
          <div className="">
            <div className=" p-8 rounded-t-xl">
              <h1 className="text-4xl text-primary-light invisible">
                Trial Plan
              </h1>
            </div>
            <div className="p-8 ">
              <h1 className="text-5xl invisible">Free</h1>
              <div className=" gap-10 flex flex-col">
                <h1 className="">CONSOLIDATION</h1>
                <h1 className="">STORAGE</h1>
                <h1 className="mt-8">PHOTO</h1>
                <h1 className="mt-4">PACKAGE RETURN</h1>
                <h1 className="">Warehouse Pickup</h1>
                <h1 className="">Scanned Copies Of Documents</h1>
                <h1 className="mt-[-1.2rem]">Shipping Address</h1>
                <h1 className="">Semiliquid/Liquid Clearance Charge</h1>
                <h1 className="">Real-Time Tracking</h1>
                <h1 className="">Personal Shopper</h1>
                <h1 className="">Set Up A Local Hub For Your Business</h1>
                <h1 className="mt-[-1.2rem]">Assisted Purchase</h1>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-red p-8 rounded-t-xl">
              <h1 className="text-4xl text-primary-light text-center">
                Trial Plan
              </h1>
            </div>
            <div className="p-8 bg-pink bg-opacity-50 rounded-b-xl">
              <h1 className="text-5xl text-center">Free</h1>
              <div className="mt-10 gap-10 flex flex-col">
                <h2>₹399/SHIPMENT</h2>
                <h2>25 DAYS (After 25 Days ₹75 Per Item Per Day)</h2>
                <h2>3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹400)</h2>
                <h2>₹50 PER ITEM</h2>
                <h2>₹400</h2>
                <h2>₹80 Per Page</h2>
                <h2>Upto 5</h2>
                <h2>10% (EXCLUSIVE OF ALL OTHER CHARGES)</h2>
                <h2>Free</h2>
                <h2>7% Of Item Value (Exclusive Of All Charges)</h2>
                <h2>Free</h2>
                <h2>Actual Charges + Other Charges</h2>
              </div>
              <a href="/SignIn" className="flex justify-center items-center">
                <button className="p-4 bg-red mt-3 rounded-lg">Buy Now</button>
              </a>
            </div>
          </div>
          <div className="">
            <div className="bg-[#6C0C6C] p-8 rounded-t-xl">
              <h1 className="text-4xl text-primary-light text-center">
                Half Yearly
              </h1>
            </div>
            <div className="p-8 bg-[#6C0C6C] bg-opacity-30 rounded-b-xl">
              <h1 className="text-5xl text-center">₹2499</h1>
              <div className="mt-10 gap-10 flex flex-col">
                <h2>Free</h2>
                <h2>30 DAYS (After 25 Days ₹75 Per Item Per Day)</h2>
                <h2>3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250)</h2>
                <h2>Free</h2>
                <h2>Free</h2>
                <h2>₹40 Per Page</h2>
                <h2>Unlimited</h2>
                <h2>10% (EXCLUSIVE OF ALL OTHER CHARGES)</h2>
                <h2>Free</h2>
                <h2>5% Of Item Value (Exclusive Of All Charges)</h2>
                <h2>Free</h2>
                <h2>Actual Charges + Other Charges</h2>
              </div>
              <a href="/SignIn" className="flex justify-center items-center">
                <button className="p-4 bg-[#6C0C6C] mt-3 rounded-lg">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
          <div className="">
            <div className="bg-[#013C4F] p-8 rounded-t-xl">
              <h1 className="text-4xl text-primary-light text-center">
                Yearly Plan
              </h1>
            </div>
            <div className="p-8 bg-[#013C4F] bg-opacity-30 rounded-b-xl">
              <h1 className="text-5xl text-center">₹4499</h1>
              <div className="mt-10 gap-10 flex flex-col">
                <h2>Free</h2>
                <h2>40 DAYS (After 25 Days ₹75 Per Item Per Day)</h2>
                <h2>3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250)</h2>
                <h2>Free</h2>
                <h2>Free</h2>
                <h2>₹40 Per Page</h2>
                <h2>Unlimited</h2>
                <h2>10% (EXCLUSIVE OF ALL OTHER CHARGES)</h2>
                <h2>Free</h2>
                <h2>5% Of Item Value (Exclusive Of All Charges)</h2>
                <h2>Free</h2>
                <h2>Actual Charges + Other Charges</h2>
              </div>
              <a href="/SignIn" className="flex justify-center items-center">
                <button className="p-4 bg-[#013C4F]  mt-3 rounded-lg">
                  Buy Now
                </button>
              </a>
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
      {activeLink === "Trial Plan" && <SaleComponent />}
      {activeLink === "Half Yearly" && <HalfYearly />}
      {activeLink === "Yearly Plan" && <Yearly />}
      <div className="footer">
        <div className="footer-img">
          <div className="footer-text">
            So Start Your YIS Journey With Us Now !!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pl;
