import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Fade from "react-reveal/Fade";
import { Autoplay } from "swiper/modules";
import "../../stylesheet/Wsaller.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../../components/Footer";

const Wsaller = () => {
  const [value, setValue] = useState(
    window.innerWidth < 900
      ? 1
      : window.innerWidth >= 900 && window.innerWidth <= 1300
      ? 2
      : 4
  );

  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check when the component is in the viewport
    const handleScroll = () => {
      const element = document.getElementById("scroll-fade");
      const element2 = document.getElementById("scroll-fade2");
      const element3 = document.getElementById("scroll-fade3");
      if (window.innerWidth > 1340) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight;
          setIsVisible(isVisible);
          console.log(rect);
        }
        if (element2) {
          const rect = element2.getBoundingClientRect();
          const isVisible2 = rect.y > -800;
          setIsVisible2(isVisible2);
        }
        if (element3) {
          const rect = element3.getBoundingClientRect();
          const isVisible3 = rect.y;
          setIsVisible3(isVisible3);
        }
      } else {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight;
          window.removeEventListener("scroll", handleScroll);
          setIsVisible(isVisible);
        }
        if (element2) {
          const rect = element.getBoundingClientRect();
          const isVisible2 = window.innerHeight;
          window.removeEventListener("scroll", handleScroll);
          setIsVisible2(isVisible2);
        }
        if (element3) {
          const rect = element3.getBoundingClientRect();
          const isVisible3 = window.innerHeight;
          window.removeEventListener("scroll", handleScroll);
          setIsVisible3(isVisible3);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    window.scrollTo(10, 0);
  }, [pathname]);

  return (
    <div id="wlb-cont">
      <Navbar />
      <div className="box-out">
        <div className="box">
          <div className="items">
            <div className="item-div">
              <h1 className="head">
                Buy Items in Bulk and
                <br /> Send It To Your <br /> Destination Now !!
              </h1>
              <p className="shop">
                Shop form various Indian sites in Bulk with Ease <br /> only via
                Your Indian Shop
              </p>
            </div>
            <div className="btnn">
              <button className="btn-1">
                {" "}
                <img
                  src="/Assisted/customer-service.png"
                  alt="chat"
                  className="chat"
                />
                <span className="word"> Chat US</span>
              </button>
              {/* <Link to="/signIn"> */}
              <button className="btn">
                {/* <img src="/Assisted/download.png" alt="chat" className="chat" /> */}
                <span className="word">Sign Up</span>
              </button>
              {/* </Link> */}
            </div>
          </div>
          <div className="circle">
            <img src="/home/ship.jpg" alt="ship" className="ship" />
          </div>
        </div>
      </div>

      <div className="t-title" style={{ marginBottom: "5rem" }} id="dg">
        HOW
        <span id="bul"> THIS </span>
        WORKS
      </div>
      <div id="steps">
        <div className="s-cd-p">
          {/* <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div> */}
          <div id="sdsc-ol">
            {" "}
            <img src="/ftrd/whole-01.jpeg" alt="" width={140} />
          </div>
          {/* <div className="st">RECEIVE WITHIN 7 / 8 WORKING DAYS</div> */}

          <div className="st-2">
            {" "}
            MAIL US YOUR NEED AND WE'LL RRVERT YOU BACK WITH THE BEST SOLUTION
          </div>
        </div>
        <div className="s-cd-p">
          {/* <div className="pin">
               <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
              </div> */}
          <div id="sdsc-ol">
            {" "}
            <img
              // src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/08/sr-menu-1-1-64cb708d894d5.webp"
              src="/home/white1.png"
              alt=""
              width={190}
            />
          </div>
          {/* <div className="st">SHOP FROM INDIAN SITES</div> */}
          <div className="st-2" style={{ marginTop: "rem" }}>
            OUR EXPERT TEAM WILL HELP YOU IN CREATING YOUR PERSONALIZE BRAND
          </div>{" "}
        </div>
        <div className="s-cd-p">
          {/* <div className="pin">
               <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
              </div> */}
          <div id="sdsc-ol-p">
            {" "}
            <img
              // src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/shipping-rv-2.webp"
              src="/home/white2.png"
              alt=""
              width={120}
            />
          </div>
          {/* <div className="st">SHIP PARCELS TO YOUR WAREHOUSE</div> */}
          <div className="st-2">
            YOUR BRAND IS MARKET READY TO GRAB CUSTOMER'S ATTENTION
          </div>{" "}
        </div>{" "}
      </div>

      <div id="wl-sec-3">
        <div className="ws-l">
          <div className="ws-title">Order in bulk now !!!</div>

          <Link to={"/signIn"} className="btn btn-b">
            Contact us
          </Link>
        </div>
        <div className="ws-r">
          <img src="./imgs/wh-sec-3.jpg" alt="" />
        </div>
      </div>

      <div id="feed-l">
        <center className="fd-title" id="dg">
          What People Say About{" "}
          <span style={{ color: "var(--blue)" }}>Wholesaler's Plan</span>
        </center>
      </div>
      <section id="feed">
        <div id="feed-r" style={{ paddingTop: "3rem" }}>
          <Swiper
            id="fd-scr"
            // spaceBetween={120}
            slidesPerView={value}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
            // loop={true}
          >
            <SwiperSlide>
              <div className="fd-cd">
                <div className="feed-info">
                  <div id="hd-fd">
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        width: "fit-content",
                        margin: "auto",
                      }}
                    >
                      Rishav Jaiswal
                    </div>
                    <div className="sitara">
                      <StarBorder />
                      <StarHalf />
                      <Star />
                      <Star />
                      <Star />
                    </div>{" "}
                    <div className="msg-title">"Great Work"</div>
                    <div id="org">CLIENT OF COMPANY</div>
                    <div className="msg-desc">
                      I work in project management and joined Unicoach because I
                      get great courses for less. The instructors are fantastic,
                      interesting, and helpful. I plan to use for a long time!
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fd-cd">
                <div className="feed-info">
                  <div id="hd-fd">
                    {" "}
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        width: "fit-content",
                        margin: "auto",
                      }}
                    >
                      Saurav Singh
                    </div>
                    <div className="sitara">
                      <StarBorder />
                      <StarHalf />
                      <Star />
                      <Star />
                      <Star />
                    </div>{" "}
                    <div className="msg-title">"Great Work"</div>
                    <div id="org">CLIENT OF COMPANY</div>
                    <div className="msg-desc">
                      I work in project management and joined Unicoach because I
                      get great courses for less. The instructors are fantastic,
                      interesting, and helpful. I plan to use for a long time!
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fd-cd">
                <div className="feed-info">
                  <div id="hd-fd">
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        width: "fit-content",
                        margin: "auto",
                      }}
                    >
                      Aman Kumar
                    </div>
                    <div className="sitara">
                      <StarBorder />
                      <StarHalf />
                      <Star />
                      <Star />
                      <Star />
                    </div>{" "}
                    <div className="msg-title">"Great Work"</div>
                    <div id="org">CLIENT OF COMPANY</div>
                    <div className="msg-desc">
                      I work in project management and joined Unicoach because I
                      get great courses for less. The instructors are fantastic,
                      interesting, and helpful. I plan to use for a long time!
                    </div>
                  </div>
                </div>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fd-cd">
                <div className="feed-info">
                  <div id="hd-fd">
                    {" "}
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        width: "fit-content",
                        margin: "auto",
                      }}
                    >
                      Lilly Singh
                    </div>
                    <div className="sitara">
                      <StarBorder />
                      <StarHalf />
                      <Star />
                      <Star />
                      <Star />
                    </div>{" "}
                    <div className="msg-title">"Great Work"</div>
                    <div id="org">CLIENT OF COMPANY</div>
                    <div className="msg-desc">
                      I work in project management and joined Unicoach because I
                      get great courses for less. The instructors are fantastic,
                      interesting, and helpful. I plan to use for a long time!
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fd-cd">
                <div className="feed-info">
                  <div id="hd-fd">
                    {" "}
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        width: "fit-content",
                        margin: "auto",
                      }}
                    >
                      Happy Singh
                    </div>
                    <div className="sitara">
                      <StarBorder />
                      <StarHalf />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                    <div className="msg-title">"Great Work"</div>
                    <div id="org">CLIENT OF COMPANY</div>
                    <div className="msg-desc">
                      I work in project management and joined Unicoach because I
                      get great courses for less. The instructors are fantastic,
                      interesting, and helpful. I plan to use for a long time!
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fd-cd">
                <div className="feed-info">
                  <div id="hd-fd">
                    {" "}
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        width: "fit-content",
                        margin: "auto",
                      }}
                    >
                      Guldeep
                    </div>
                    <div className="sitara">
                      <StarBorder />
                      <StarHalf />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                    <div className="msg-title">"Great Work"</div>
                    <div id="org">CLIENT OF COMPANY</div>
                    <div className="msg-desc">
                      I work in project management and joined Unicoach because I
                      get great courses for less. The instructors are fantastic,
                      interesting, and helpful. I plan to use for a long time!
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fd-cd">
                <div className="feed-info">
                  <div id="hd-fd">
                    {" "}
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        width: "fit-content",
                        margin: "auto",
                      }}
                    >
                      Sanaya
                    </div>
                    <div className="sitara">
                      <StarBorder />
                      <StarHalf />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                    <div className="msg-title">"Great Work"</div>
                    <div id="org">CLIENT OF COMPANY</div>
                    <div className="msg-desc">
                      I work in project management and joined Unicoach because I
                      get great courses for less. The instructors are fantastic,
                      interesting, and helpful. I plan to use for a long time!
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </SwiperSlide>

            {/* <div className="feed-info">
                        <div id="hd-fd">
                          <div id="blue" className="btn btn-b">
                            {r.Name}
                          </div>
                          {/* <div className="msg-title">"Great Work"</div> */}
            {/* <div id="org">CLIENT OF COMPANY</div>
                          <div className="msg-desc">{r.Review}</div>
                          <div className="sitara">
                            {Array(r.Star)
                              .fill(null)
                              .map((a) => {
                                return <Star />;
                              })}
                          </div>{" "}
                        </div>{" "}
                      </div> */}
          </Swiper>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Wsaller;

// import React, { useEffect, useState } from "react";
// import Fade from 'react-reveal/Fade';
// import "../../stylesheet/Wsaller.css";
// import { Link, useLocation } from "react-router-dom";
// import Marquee from "react-fast-marquee";

// const Wsaller = () => {

//   const [isVisible, setIsVisible] = useState(false);
//   const [isVisible2, setIsVisible2] = useState(false);
//   const [isVisible3, setIsVisible3] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(10, 0);
//   }, [pathname]);

//   useEffect(() => {
//     // Add a scroll event listener to check when the component is in the viewport
//     const handleScroll = () => {
//       const element = document.getElementById('scroll-fade');
//       const element2 = document.getElementById('scroll-fade2');
//       const element3 = document.getElementById('scroll-fade3');
// if( window.innerWidth > 1340) {

//   if (element) {
//     const rect = element.getBoundingClientRect();
//     const isVisible = rect.top <= window.innerHeight;
//     setIsVisible(isVisible);
//   }
//   if (element2) {
//     const rect = element2.getBoundingClientRect();
//     const isVisible2 = rect.top <= window.innerHeight;
//     setIsVisible2(isVisible2);
//   }
//   if (element3) {
//     const rect = element3.getBoundingClientRect();
//     const isVisible3 = rect.y;
//     setIsVisible3(isVisible3);
//   }

// } else {
//   if (element) {
//     const rect = element.getBoundingClientRect();
//     const isVisible = rect.top < window.innerHeight;
//     window.removeEventListener('scroll', handleScroll);
//     setIsVisible(isVisible);
//   }
//   if (element2) {
//     const rect = element2.getBoundingClientRect();
//     const isVisible2 = window.innerHeight;
//     window.removeEventListener('scroll', handleScroll);
//     setIsVisible2(isVisible2);
//   }
//   if (element3) {
//     const rect = element3.getBoundingClientRect();
//     const isVisible3 =  window.innerHeight;
//     window.removeEventListener('scroll', handleScroll);
//     setIsVisible3(isVisible3);
//   }
// }
// };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   });

//   return (
//     <div id="wlb-cont">
//   <div  className="marquee">
//     <Marquee speed={150}>
//         Save Upto 80% on International Shipping • Exciting Discounts on Premium Plans • Get Your Virtual Indian Address
//     </Marquee>
//     </div>

//       <div id="wl-sec-1">
//         <div className="ws-l">
//           <div className="ws-title">
//             Our
//             <br />
//             Wholesaler
//             <br />
//             Plans !!!
//           </div>

//           <div className="btn btn-b">Explore</div>
//           <div className="ar-1">
//             <img src="./imgs/wsl-a.jpg" alt="" />
//           </div>
//         </div>
//         <div className="ws-r">
//           <img src="./imgs/wsl1.jpg" alt="" />
//         </div>
//       </div>

// <div id="scroll-fade2">
//         <Fade bottom when={isVisible3}>
//       <div id="wl-sec-2">
//         <h1>How we create your brand</h1>
//         <div className="hwcb-grid">
//           <div className="hwcb">
//             <img src="./imgs/whc-1.jpg" alt="" />
//             <p>
//               MAIL US YOUR NEED AND WE'LL RRVERT YOU BACK WITH THE BEST SOLUTION
//             </p>
//           </div>
//           <div className="hwcb">
//             <img src="./imgs/whc-2.jpg" alt="" />
//             <p>
//               OUR EXPERT TEAM WILL HELP YOU IN CREATING YOUR PERSONALIZE BRAND
//             </p>
//           </div>
//           <div className="hwcb">
//             <img src="./imgs/whc-3.jpg" alt="" />
//             <p>YOUR BRAND IS MARKET READY TO GRAB CUSTOMER'S ATTENTION </p>
//           </div>
//         </div>
//       </div>
//       </Fade>
//       </div>

//       <div id="scroll-fade3">
//       <Fade bottom when={isVisible3}>
//       <div id="wl-sec-3">
//         <div className="ws-l">
//           <div className="wsl-title">
//             Lets
//             <br />
//             Collaborate!!!
//           </div>
//           <div className="ar-1 ar-2">
//             <img src="./imgs/wsl-a2.jpg" alt="" />
//           </div>
//           <div className="wsl-qr">
//             <img src="./imgs/wqr.jpg" alt="" />
//             <big>Scan Our Whatsapp QR</big>
//           </div>
//         </div>
//         <div className="ws-r">
//           <img src="./imgs/wsl2.jpg" alt="" />
//         </div>
//       </div>
//       </Fade>
//       </div>
//     </div>
//   );
// };

// export default Wsaller;
