import React from "react";
import "./PlanCompTab.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
const PlanCompTab = () => {


  return (
    <>
      <div className="plan">
      <div className="plan-container">
              {" "}
              <div className="row-ctr" style={{gap: "15px"}}>
                <div className="ph-hdr">
                  <big>Trial Plan</big>
                  <strong>Free</strong>
                </div>
                
                <div className="phone-table-row">
                    <span style={{fontWeight: "700"}}>CONSOLIDATION </span>
                  <span className="feature">
                   ₹399/SHIPMENT</span>
                </div>
                <div className="phone-table-row">
                    <span style={{fontWeight: "700"}}>STORAGE </span>
                  <span className="feature">
                    25 DAYS (After 25 Days ₹75 Per Item Per Day)
                  </span>
                </div>
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}>PHOTO </span>
                  <span className="feature">
                     3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹400)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PACKAGE RETURN </span>
                  <span className="feature"> ₹50 PER ITEM</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Warehouse Pickup </span>
                  <span className="feature"> ₹400</span>
                </div>
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}>Scanned Copies Of Documents </span>
                  <span className="feature">
                     ₹80 Per Page
                  </span>
                </div>
                <div className="phone-table-row">
               
                <span style={{fontWeight: "700"}}>Shipping Address </span>  <span className="feature">   Upto 5</span>
                </div>
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}> Semiliquid/Liquid Clearance Charge </span>
                  <span className="feature">
                    10% (EXCLUSIVE OF ALL
                    OTHER CHARGES)
                  </span>
                </div>
                <div className="phone-table-row">
                    <span style={{fontWeight: "700"}}>Real-Time Tracking </span> 
                  <span className="feature">
                  Free </span>
                </div>
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}> Personal Shopper </span>
                  <span className="feature">
                    7% Of Item Value (Exclusive Of All
                    Charges)
                  </span>
                </div>
                {/* <div className="phone-table-row">
                  <span className="feature">
                    Indian Virtual Shipping Address & Personal Locker : FREE
                  </span>
                </div>
                <div className="phone-table-row">
                  <span className="feature">Receive Parcels : FREE</span>
                </div> */}
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}>Set Up A Local Hub For Your Business </span>
                  <span className="feature">
                     FREE
                  </span>
                </div>
                <div className="phone-table-row">
                    <span style={{fontWeight: "700"}}>Assisted Purchase</span> 
                  <span className="feature">
                    Actual Charges + Other Charges
                  </span>
                </div>
                <Link to={"/SignIn"} className="btn btn-b">Buy Now</Link>
              </div>
            </div>


            <div className="plan-container">
              <div className="row-ctr" style={{gap: "15px"}}>
                {" "}
                <div className="ph-hdr">
                  <big>Half Yearly</big>
                  <strong>₹2499</strong>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>CONSOLIDATION  </span> 
                  <span className="feature">Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>STORAGE </span> 
                  <span className="feature">
                     30 DAYS (After 30 Days ₹75 Per Item Per Day)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PHOTO</span> 
                  <span className="feature">
                      3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PACKAGE RETURN  </span> 
                  <span className="feature">Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Warehouse Pickup </span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Scanned Copies Of Documents</span> 
                  <span className="feature">
                      40 Per Page
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Shipping Address</span> 
                  <span className="feature">  Unlimited</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Semiliquid/Liquid Clearance Charge</span> 
                  <span className="feature">
                      10% (EXCLUSIVE OF ALL
                    OTHER CHARGES)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Real-Time Tracking </span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Personal Shopper</span> 
                  <span className="feature">
                      5% Of Item Value (Exclusive Of All
                    Charges)
                  </span>
                </div>
                {/* <div className="phone-table-row">
                  <span className="feature">
                    Indian Virtual Shipping Address & Personal Locker : FREE
                  </span>
                </div>
                <div className="phone-table-row">
                  <span className="feature">Receive Parcels : FREE</span>
                </div> */}
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Set Up A Local Hub For Your Business</span> 
                  <span className="feature">
                      FREE
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Assisted Purchase</span> 
                  <span className="feature">
                      Actual Charges + Other Charges
                  </span>
                </div>{" "}
                <Link to={"/SignIn"} className="btn btn-b">Buy Now</Link>
              </div>
            </div>


            <div className="plan-container">
              <div className="row-ctr" style={{gap: "15px"}}>
                {" "}
                <div className="ph-hdr">
                  <big>Yearly Plan</big>
                  <strong>₹4499</strong>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>CONSOLIDATION</span> 
                  <span className="feature">Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}> STORAGE </span>  
                  <span className="feature">
                   40 Days (After 40 Days ₹75 Per Item Per Day)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PHOTO </span> 
                  <span className="feature">
                    3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PACKAGE RETURN</span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Warehouse Pickup</span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Scanned Copies Of Documents</span> 
                  <span className="feature">
                     40 Per Page
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Shipping Address</span> 
                  <span className="feature"> Unlimited</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Semiliquid/Liquid Clearance Charge</span> 
                  <span className="feature">
                      10% (EXCLUSIVE OF ALL
                    OTHER CHARGES)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Real-Time Tracking</span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}> Personal Shopper</span> 
                  <span className="feature">
                    5% Of Item Value (Exclusive Of All
                    Charges)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Indian Virtual Shipping Address & Personal Locker  </span> 
                  <span className="feature">
                    FREE
                  </span>
                </div>
                {/* <div className="phone-table-row">
                  <span className="feature">Receive Parcels: FREE</span>
                </div>
                <div className="phone-table-row">
                  <span className="feature">
                    Set Up A Local Hub For Your Business : FREE
                  </span>
                </div> */}
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Assisted Purchase</span> 
                  <span className="feature">
                     Actual Charges + Other Charges
                  </span>
                </div>{" "}
                <Link to={"/SignIn"} className="btn btn-b">Buy Now</Link>
              </div>
            </div>

      </div>
      <div className="phone-table-container">
        <Swiper
          id="mt-ls"
          // spaceBetween={120}
          slidesPerView={1}
          navigation={true}
          modules={([Navigation], [Autoplay])}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
          // loop={true}
        >
          <SwiperSlide>
            {" "}
            <div className="phone-table">
              {" "}
              <div className="row-ctr" style={{gap: "15px"}}>
                <div className="ph-hdr">
                  <big>Trial Plan</big>
                  <strong>Free</strong>
                </div>
                
                <div className="phone-table-row">
                    <span style={{fontWeight: "700"}}>CONSOLIDATION </span>
                  <span className="feature">
                   ₹399/SHIPMENT</span>
                </div>
                <div className="phone-table-row">
                    <span style={{fontWeight: "700"}}>STORAGE </span>
                  <span className="feature">
                    25 DAYS (After 25 Days ₹75 Per Item Per Day)
                  </span>
                </div>
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}>PHOTO </span>
                  <span className="feature">
                     3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹400)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PACKAGE RETURN </span>
                  <span className="feature"> ₹50 PER ITEM</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Warehouse Pickup </span>
                  <span className="feature"> ₹400</span>
                </div>
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}>Scanned Copies Of Documents </span>
                  <span className="feature">
                     ₹80 Per Page
                  </span>
                </div>
                <div className="phone-table-row">
               
                <span style={{fontWeight: "700"}}>Shipping Address </span>  <span className="feature">   Upto 5</span>
                </div>
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}> Semiliquid/Liquid Clearance Charge </span>
                  <span className="feature">
                    10% (EXCLUSIVE OF ALL
                    OTHER CHARGES)
                  </span>
                </div>
                <div className="phone-table-row">
                    <span style={{fontWeight: "700"}}>Real-Time Tracking </span> 
                  <span className="feature">
                  Free </span>
                </div>
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}> Personal Shopper </span>
                  <span className="feature">
                    7% Of Item Value (Exclusive Of All
                    Charges)
                  </span>
                </div>
                {/* <div className="phone-table-row">
                  <span className="feature">
                    Indian Virtual Shipping Address & Personal Locker : FREE
                  </span>
                </div>
                <div className="phone-table-row">
                  <span className="feature">Receive Parcels : FREE</span>
                </div> */}
                <div className="phone-table-row">
                  <span style={{fontWeight: "700"}}>Set Up A Local Hub For Your Business </span>
                  <span className="feature">
                     FREE
                  </span>
                </div>
                <div className="phone-table-row">
                    <span style={{fontWeight: "700"}}>Assisted Purchase</span> 
                  <span className="feature">
                    Actual Charges + Other Charges
                  </span>
                </div>
                <Link to={"/SignIn"} className="btn btn-b">Buy Now</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="phone-table">
            <div className="row-ctr" style={{gap: "15px"}}>
                {" "}
                <div className="ph-hdr">
                  <big>Half Yearly</big>
                  <strong>₹2499</strong>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>CONSOLIDATION  </span> 
                  <span className="feature">Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>STORAGE </span> 
                  <span className="feature">
                     30 DAYS (After 30 Days ₹75 Per Item Per Day)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PHOTO</span> 
                  <span className="feature">
                      3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PACKAGE RETURN  </span> 
                  <span className="feature">Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Warehouse Pickup </span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Scanned Copies Of Documents</span> 
                  <span className="feature">
                      40 Per Page
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Shipping Address</span> 
                  <span className="feature">  Unlimited</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Semiliquid/Liquid Clearance Charge</span> 
                  <span className="feature">
                      10% (EXCLUSIVE OF ALL
                    OTHER CHARGES)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Real-Time Tracking </span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Personal Shopper</span> 
                  <span className="feature">
                      5% Of Item Value (Exclusive Of All
                    Charges)
                  </span>
                </div>
                {/* <div className="phone-table-row">
                  <span className="feature">
                    Indian Virtual Shipping Address & Personal Locker : FREE
                  </span>
                </div>
                <div className="phone-table-row">
                  <span className="feature">Receive Parcels : FREE</span>
                </div> */}
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Set Up A Local Hub For Your Business</span> 
                  <span className="feature">
                      FREE
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Assisted Purchase</span> 
                  <span className="feature">
                      Actual Charges + Other Charges
                  </span>
                </div>{" "}
                <Link to={"/SignIn"} className="btn btn-b">Buy Now</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="phone-table">
            <div className="row-ctr" style={{gap: "15px"}} >
                {" "}
                <div className="ph-hdr">
                  <big>Yearly Plan</big>
                  <strong>₹4499</strong>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>CONSOLIDATION</span> 
                  <span className="feature">Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}> STORAGE </span>  
                  <span className="feature">
                   40 Days (After 40 Days ₹75 Per Item Per Day)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PHOTO </span> 
                  <span className="feature">
                    3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>PACKAGE RETURN</span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Warehouse Pickup</span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Scanned Copies Of Documents</span> 
                  <span className="feature">
                     40 Per Page
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Shipping Address</span> 
                  <span className="feature"> Unlimited</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Semiliquid/Liquid Clearance Charge</span> 
                  <span className="feature">
                      10% (EXCLUSIVE OF ALL
                    OTHER CHARGES)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Real-Time Tracking</span> 
                  <span className="feature"> Free</span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}> Personal Shopper</span> 
                  <span className="feature">
                    5% Of Item Value (Exclusive Of All
                    Charges)
                  </span>
                </div>
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Indian Virtual Shipping Address & Personal Locker  </span> 
                  <span className="feature">
                    FREE
                  </span>
                </div>
                {/* <div className="phone-table-row">
                  <span className="feature">Receive Parcels: FREE</span>
                </div>
                <div className="phone-table-row">
                  <span className="feature">
                    Set Up A Local Hub For Your Business : FREE
                  </span>
                </div> */}
                <div className="phone-table-row">
                <span style={{fontWeight: "700"}}>Assisted Purchase</span> 
                  <span className="feature">
                     Actual Charges + Other Charges
                  </span>
                </div>{" "}
                <Link to={"/SignIn"} className="btn btn-b">Buy Now</Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PlanCompTab;