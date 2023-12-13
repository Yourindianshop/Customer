import React, { useEffect, useState } from "react";
import "../../stylesheet/Home.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ComputerIcon from "@mui/icons-material/Computer";
// import Tilt from "react-parallax-tilt";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import SellIcon from "@mui/icons-material/Sell";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
// import CalculateIcon from "@mui/icons-material/Calculate";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
// import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
// import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Fade from "react-reveal/Fade";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/modules";
import CalculateIcon from "@mui/icons-material/Calculate";
import CallMadeIcon from "@mui/icons-material/CallMade";

// import Calc from "../../components/Calc";
import {
  // Calculate,
  FlightTakeoff,
  Instagram,
  Star,
  StarBorder,
  StarHalf,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import PopAd from "../../components/PopAd";
import { fetchreq } from "../../Helper/fetch";
import Marquee from "react-fast-marquee";
import { auth } from "../../firebase";
import Slider from "../../components/Slider";

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const loadlandingPhoto = async () => {
    const dt = await fetchreq("GET", "landingpagePhotos", {});
    dt ? setPhotos(JSON.parse(dt.result[0].Details)) : setPhotos([]);
    // console.log("hi",dt.result[0]?.Details);
  };
  const url = process.env.REACT_APP_URL;
  const temp = ["./imgs/sd1.png", "./imgs/sd2.png", "/home/home.png"];
  const [review, setReview] = useState(null);
  const getReview = async () => {
    const dt = await fetchreq("GET", "Review", {});
    dt ? setReview(dt.result) : setReview([]);
  };
  useEffect(() => {
    loadlandingPhoto();
    getReview();
  }, []);
  const [value, setValue] = useState(
    window.innerWidth < 900
      ? 1
      : window.innerWidth >= 900 && window.innerWidth <= 1300
      ? 2
      : 3
  );
  const handelsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Iterate through form data and log each field's name and value
    const arr = [];
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
      arr.push(value);
    });
    // name: adgtafasf
    // email: ads@iau.o
    // subject: asjdkfjafjajf
    // message: 45487547578445
    const dt = await fetchreq("POST", "sendMail", {
      email: "connect.qubit@gmail.com",
      subject: arr[2],
      html: `<h3>Name: ${arr[0]} \n\n email: ${arr[1]} \n </h3><p>Message: ${arr[3]}</p>`,
    });
    if (dt) {
      alert("Submit Successfully...");
    }
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the windowWidth state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the src for the img element based on the windowWidth
  // const imgSrc = windowWidth <= 600 ? "/imgs/hm-bg-2.jpg" : "/imgs/hm-bg.png";
  const imgSrc = windowWidth <= 600 ? "/imgs/nw-sct.jpg" : "/home/trial.png";

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newValue;

      if (width < 900) {
        newValue = 1;
      } else if (width >= 900 && width <= 1300) {
        newValue = 2;
      } else {
        newValue = 4;
      }

      setValue(newValue);
    };

    // Listen for the window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check when the component is in the viewport
    const handleScroll = () => {
      const element2 = document.getElementById("scroll-fade2");
      const element3 = document.getElementById("scroll-fade3");
      const element4 = document.getElementById("scroll-fade4");
      const element5 = document.getElementById("scroll-fade5");
      const element6 = document.getElementById("scroll-fade6");
      const element7 = document.getElementById("scroll-fade7");
      const element8 = document.getElementById("scroll-fade8");
      const element9 = document.getElementById("scroll-fade9");
      const element10 = document.getElementById("scroll-fade10");
      const element11 = document.getElementById("scroll-fade11");
      if (window.innerWidth > 1340) {
        if (element2) {
          const rect = element2.getBoundingClientRect();
          const isVisible2 = rect.top <= window.innerHeight;
          setIsVisible2(isVisible2);
          console.log(isVisible2);
        }
        if (element3) {
          const rect = element3.getBoundingClientRect();
          const isVisible3 = rect.y;
          setIsVisible3(isVisible3);
        }
        if (element4) {
          const rect = element4.getBoundingClientRect();
          const isVisible4 = rect.y;
          setIsVisible4(isVisible4);
        }
        if (element5) {
          const rect = element4.getBoundingClientRect();
          const isVisible5 = rect.y;
          setIsVisible4(isVisible4);
        }
        if (element6) {
          const rect = element4.getBoundingClientRect();
          const isVisible6 = rect.y;
          setIsVisible4(isVisible4);
        }
        if (element7) {
          const rect = element4.getBoundingClientRect();
          const isVisible7 = rect.y;
          setIsVisible4(isVisible4);
        }
        if (element8) {
          const rect = element4.getBoundingClientRect();
          const isVisible8 = rect.y;
          setIsVisible4(isVisible4);
        }
      } else {
        if (element2) {
          const rect = element2.getBoundingClientRect();
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
        if (element4) {
          const rect = element4.getBoundingClientRect();
          const isVisible4 = window.innerHeight;
          window.removeEventListener("scroll", handleScroll);
          setIsVisible4(isVisible4);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slides = [
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1702356944/bg_wwhkvb.jpg",
      title: "neet",
    },
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1699781867/Great_Deals_on_-_1_obbtyj.png",
      title: "fraud",
    },
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1699781877/Great_Deals_on_-_3_r3ji2u.png",
      title: "neet",
    },
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1699781872/Great_Deals_on_-_2_t15w3k.png",
      title: "neet",
    },
  ];

  const testimonialsData = [
    {
      name: "Rishav Jaiswal",
      stars: 4.5,
      organization: "CLIENT OF COMPANY",
      message:
        "I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
    },
    {
      name: "Rishav Jaiswal",
      stars: 4.5,
      organization: "CLIENT OF COMPANY",
      message:
        "I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
    },
    {
      name: "Rishav Jaiswal",
      stars: 4.5,
      organization: "CLIENT OF COMPANY",
      message:
        "I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
    },
    {
      name: "Rishav Jaiswal",
      stars: 4.5,
      organization: "CLIENT OF COMPANY",
      message:
        "I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
    },
    {
      name: "Rishav Jaiswal",
      stars: 4.5,
      organization: "CLIENT OF COMPANY",
      message:
        "I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
    },
    // Add more data for other testimonials
  ];

  return (
    <>
      <div id="Site">
        <header>
          <Nav />
        </header>
        <PopAd />
        <div className="marquee2">
          <Marquee speed={150}>
            Save Upto 80% on International Shipping • Exciting Discounts on
            Premium Plans • Get Your Virtual Indian Address
          </Marquee>
        </div>
        <Slider slides={slides} />
        {/* <div id="homesec" className="hero-cont">
          <div class="swiper hmmm">
            <div class="swiper-wrapper">
              <Link
                to="/SignUp"
                class="swiper-slide"
                style={{
                  marginTop: `${windowWidth <= 600 ? "150px" : "100px"}`,
                }}
              >
                <img src={imgSrc} alt="" />
              </Link>
              <div class="swiper-slide">
                <img src={"/banner/banner.png"} alt="no"></img>
              </div>
              <div class="swiper-slide">
                <img src={"/banner/banner2.png"} alt="no"></img>
              </div>
            </div>
          </div>{" "}
        </div> */}
        {/* <SwiperSlide>
                <HomeSlide bgimg="./imgs/sd1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <HomeSlide bgimg="./imgs/sd3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <HomeSlide bgimg="./imgs/sd2.png" />
              </SwiperSlide> */}

        <div id="sec-section">
          <div id="sec-head">
            <div className="t-title" id="dg">
              HOW
              <span id="bul"> IT </span>
              WORKS
            </div>
          </div>
          <div id="steps">
            <div className="s-cd">
              {/* <div className="pin">
                <img src="./imgs/pin.png" alt="" />
              </div> */}
              <div id="sdsc-ol">
                {" "}
                <img src="/home/signup-i.png" alt="" />
              </div>
              {/* <div className="st">RECEIVE WITHIN 7 / 8 WORKING DAYS</div> */}
              <div className="st-phone">01</div>
              <div className="st">SIGN UP</div>
              <div className="st-2">
                {" "}
                WE PROVIDE FREE INDIAN VIRTUAL ADDRESS. SIGN UP & GET STARTED
                TODAY.
              </div>
            </div>
            <div className="s-cd">
              {/* <div className="pin">
               <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
              </div> */}
              <div id="sdsc-ol">
                {" "}
                <img
                  // src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/08/sr-menu-1-1-64cb708d894d5.webp"
                  src="/home/shop-i.png"
                  alt=""
                />
              </div>
              {/* <div className="st">SHOP FROM INDIAN SITES</div> */}
              <div className="st-phone">02</div>
              <div className="st">Shop</div>
              <div className="st-2">
                BROWSE & SHOP FROM TOP INDIAN E-COMMERCE STORES & BRANDS.
              </div>{" "}
            </div>
            <div className="s-cd">
              {/* <div className="pin">
               <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
              </div> */}
              <div id="sdsc-ol">
                {" "}
                <img
                  // src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/shipping-rv-2.webp"
                  src="/home/delivery-i.png"
                  alt=""
                />
              </div>
              {/* <div className="st">SHIP PARCELS TO YOUR WAREHOUSE</div> */}
              <div className="st-phone">03</div>
              <div className="st">Ship</div>
              <div className="st-2">
                SHIP YOUR CONSOLIDATED PARCELS TO YOUR GLOBAL ADDRESS.
              </div>{" "}
            </div>{" "}
            <div className="s-cd">
              {/* <div className="pin">
               <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
              </div> */}
              <div id="sdsc-ol">
                <img src="/home/service-i.png" alt="" />
              </div>{" "}
              {/* <div className="st">SIGN-UP TO GET VIRTUAL ADDRESS</div> */}
              <div className="st-phone">04</div>
              <div className="st">RECEIVE</div>
              <div className="st-2">
                GET YOUR PARCEL AT YOUR ADDRESS WITHIN 3-6 DAYS FROM INDIA.
              </div>{" "}
            </div>
          </div>

          <br />
          <br />
          <br />
          <center>
            <Link to="/in-sites" className="btn btn-og">
              Explore More
            </Link>
          </center>
        </div>

        <div id="scroll-fade4" style={{ marginTop: "5vh" }}>
          <div id="sec-head">
            <div className="t-title" id="dg">
              SERVICES
              <span id="bul"> WE </span>
              OFFER
            </div>
          </div>
          <Fade bottom when={isVisible3}>
            <div className="section-m">
              {/* <div id="service-we-offer">
                <div className="ser-head">
                  <center className="sh1">
                    <h1 id="dg">
                      Services We
                      <span id="org" style={{ color: "var(--blue)" }}>
                        {" "}
                        Offer
                      </span>
                    </h1>
                    <img
                      className="service-img"
                      src="./imgs/nw-sct.jpg"
                      alt="no"
                    ></img>
                  </center>
                </div>
              </div> */}

              <div id="lnl">
                <div className="ps">
                  <div className="ps-l">
                    <SellIcon />
                  </div>
                  <div className="ps-r">
                    <div className="st">Plans We Offer</div>
                    <div className="s-txt">
                      WE OFFER A RANGE OF PLANS TO SUIT YOUR NEEDS, FROM BASIC
                      TO PREMIUM, ENSURING AFFORDABILITY, FLEXIBILITY AND
                      QUALITY SERVICE.
                    </div>
                    <div className="rm " id="org">
                      <Link to="/disp-plan" rel="noopener noreferrer">
                        View Plans
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="ps">
                  <div className="ps-l">
                    <FlightTakeoff />
                  </div>
                  <div className="ps-r">
                    <div className="st wt">International Courier</div>
                    <div className="s-txt">
                      WE OFFER A HASSLE FREE, RELIABLE AND LOW-COST COURIER
                      SERVICE FROM INDIA INTERNATIONALLY.{" "}
                    </div>
                    <Link to="/coming-soon" rel="noopener noreferrer">
                      <div className="rm " id="org">
                        View More
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="ps">
                  <div className="ps-l">
                    <ShoppingCartOutlinedIcon />
                  </div>
                  <div className="ps-r">
                    <div className="st">Indian Shop Cart</div>
                    <div className="s-txt">
                      SHOP FROM THE BEST OF INDIA’S BRANDS, AND GET THEM
                      DELIVERED FROM INDIA INTERNATIONALLY.
                    </div>
                    <Link to="/in-sites" rel="noopener noreferrer">
                      <div className="rm " id="org">
                        View Sites
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="ps">
                  <div className="ps-l">
                    <ComputerIcon />
                  </div>
                  <div className="ps-r">
                    <div className="st wt">ASSISTED PURCHASE</div>
                    <div className="s-txt">
                      WE OFFER A HASSLE FREE, RELIABLE AND LOW-COST COURIER
                      SERVICE FROM INDIA INTERNATIONALLY.{" "}
                    </div>
                    <Link to="/assisted-purchase" rel="noopener noreferrer">
                      <div className="rm " id="org">
                        View More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div id="scroll-fade5">
          <Fade bottom when={isVisible3}>
            <div className="t-title" style={{ marginBottom: "20px" }}>
              <span className="sites">
                Various
                <span id="bul" style={{ padding: "0 15px" }}>
                  {" "}
                  Indian{" "}
                </span>
                Sites
              </span>
            </div>
            <section id="Site" className="bkl">
              <div id="indianshopcart" style={{ padding: "10vh 0px" }}>
                <div class="client-slider">
                  <div class="client-slide-track">
                    <div class="client-slide">
                      <img src="./comp/1.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/2.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/3.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/4.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/5.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/6.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/7.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/8.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/9.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/10.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/11.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/12.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/13.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/14.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/15.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/16.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="client-slider cl-cd-2">
                  <div class="client-slide-track">
                    <div class="client-slide">
                      <img src="./comp/1.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/2.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/3.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/4.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/5.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/6.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/7.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/8.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/9.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/10.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/11.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/12.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/13.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/14.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/15.png" alt="" />
                    </div>
                    <div class="client-slide">
                      <img src="./comp/16.png" alt="" />
                    </div>
                  </div>
                </div>

                <br />

                <center>
                  <Link to="/in-sites" className="btn btn-w">
                    Shop Now
                  </Link>
                </center>
                <br />
              </div>
            </section>
          </Fade>
        </div>

        {/* <div className="festival">
         <Link to="/in-sites">
           <img src="/banner/banner4.png" alt="no"></img>
         </Link>
       </div> */}

        <div id="scroll-fade3">
          <Fade bottom when={isVisible3}>
            <div style={{ marginTop: "4rem" }} className="ser-head">
              <center className="sh1">
                <h1 id="dg">
                  <span>Explore Our Business</span>
                  <span id="org" style={{ color: "var(--blue)" }}>
                    {" "}
                    Services
                  </span>
                </h1>
              </center>
            </div>
            <br />
            <div id="service" className="ser-sec-2">
              <div className="ser-cards">
                {/* <div
                  className="ps"
                  style={{ flexDirection: "column", height: "fit-content" }}
                >
                  <div className="ps-l">
                    <EngineeringOutlinedIcon
                      style={{ height: "50px", width: "100px" }}
                    />
                  </div>

                  <div className="ps-r">
                    <div className="st ss">White Labeling</div>
                    <div className="st-2">
                      <p className="st-p">
                        White labeling is when a company rebrands and sells a
                        product or service originally created by another company
                        under its own name.
                      </p>
                    </div>{" "}
                    <div style={{ display: "flex", margin: "auto" }}>
                      <Link to="/white-labeling" className="btn btn-db">
                        {" "}
                        Click Here
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="ps"
                  style={{ flexDirection: "column", height: "fit-content" }}
                >
                  <div className="ps-l">
                    <ComputerIcon style={{ height: "50px", width: "100px" }} />
                  </div>
                  <div className="ps-r">
                    <div
                      style={{
                        fontWeight: "600",
                        marginBottom: "1rem",
                        fontSize: "1.25rem",
                      }}
                    >
                      Wholesaler Plan
                    </div>
                    <div className="st-2">
                      <p className="st-p">
                        When you buy bulk items with us, Our commitment to
                        providing cost-effective solutions ensures that you get
                        the most value for your investment.
                      </p>
                    </div>{" "}
                    <div style={{ display: "flex", margin: "auto" }}>
                      <Link to="/wholesaler" className="btn btn-db">
                        {" "}
                        Click Here
                      </Link>
                    </div>
                  </div>
                </div> */}
                <div id="lnl">
                  <div className="ps">
                    <div className="ps-l">
                      <EngineeringOutlinedIcon
                        style={{ height: "50px", width: "100px" }}
                      />
                    </div>
                    <div className="ps-r">
                      <div className="st">White Labeling</div>
                      <div className="s-txt">
                        White labeling is when a company rebrands and sells a
                        product or service originally created by another company
                        under its own name.
                      </div>
                      <div className="rm " id="org">
                        <Link to="/white-labeling" rel="noopener noreferrer">
                          Click Here
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="ps">
                    <div className="ps-l">
                      <ComputerIcon
                        style={{ height: "50px", width: "100px" }}
                      />
                    </div>
                    <div className="ps-r">
                      <div className="st wt">Wholesaler Plan</div>
                      <div className="s-txt">
                        When you buy bulk items with us, Our commitment to
                        providing cost-effective solutions ensures that you get
                        the most value for your investment.{" "}
                      </div>
                      <Link to="/wholesaler" rel="noopener noreferrer">
                        <div className="rm " id="org">
                          Click Here
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="sc">
                  <span>
                    <div id="org">
                      <EngineeringOutlinedIcon />
                    </div>
                    <div className="t-title">Business Plan</div>
                  </span>
                  <p>
                    Sea cargo dispatches in excess of 5,500 holders per day to
                    ports all around the globe, making us a top forwarder.
                  </p>
                  <ul>
                    <li>Less-than-container Load</li>
                    <li>Full Container Load</li>
                    <li>Inter-modal Solutions</li>
                  </ul>
                  <Link to="/coming-soon" className="btn btn-db">
                    {" "}
                    Comming Soon
                  </Link>
                </div> */}
                {/* <div className="pin">
               <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
              </div> */}
                {/* <div className="st">SHOP FROM INDIAN SITES</div> */}

                {/* <div className="s-cd">
                  <div id="sdsc-ol">
                    {" "}
                    <EngineeringOutlinedIcon style={{height: "50px", width: "100px"}} />
                  </div>
                  <div className="st ss">White Labeling</div>
                  <div className="st-2">
                  <p className="st-p">
                    Sea cargo dispatches in excess of 5,500 holders per day to
                    ports all around the globe, making us a top forwarder.
                  </p>
                  <ul style={{display: "flex",flexDirection: "column"  , alignItems: "left"}}>
                    <li><div className="line" />Less-than-container Load</li>
                    <li><div className="line" />Full Container Load</li>
                    <li><div className="line" />Inter-modal Solutions</li>
                  </ul>
                  </div>{" "}
                  <div style={{display: "flex", margin: "0 30%"}}>

                  <Link to="/white-labeling" className="btn btn-db">
                    {" "}
                    Click Here
                  </Link>
                  </div>
                </div> */}

                {/* <div className="pin">
               <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
              </div> */}
                {/* <div className="st">SHOP FROM INDIAN SITES</div> */}
                {/* <div className="s-cd">
                  <div id="sdsc-ol">
                    {" "}
                    <ComputerIcon style={{height: "50px", width: "100px"}} />
                  </div>
                  <div className="st ss">Wholesaler Plan</div>
                  <div className="st-2">
                  <p className="st-p">
                    Sea cargo dispatches in excess of 5,500 holders per day to
                    ports all around the globe, making us a top forwarder.
                  </p>
                  <ul style={{display: "flex",flexDirection: "column"  , alignItems: "left"}}>
                    <li><div className="line" />Less-than-container Load</li>
                    <li><div className="line" />Full Container Load</li>
                    <li><div className="line" />Inter-modal Solutions</li>
                  </ul>
                  </div>{" "}
                  <div style={{display: "flex", margin: "0 30%"}}>

                  <Link to="/wholesaler" className="btn btn-db">
                    {" "}
                    Click Here
                  </Link>
                  </div>
                </div> */}

                {/* <div className="sc">
                  <span>
                    <div id="org">
                      <ComputerIcon />
                    </div>
                    <div className="t-title">Assisted Purchase</div>
                  </span>
                  <p>
                    Sea cargo dispatches in excess of 5,500 holders per day to
                    ports all around the globe, making us a top forwarder.
                  </p>
                  <ul>
                    <li>Less-than-container Load</li>
                    <li>Full Container Load</li>
                    <li>Inter-modal Solutions</li>
                  </ul>
                  <Link to="/assisted-purchase" className="btn btn-db">
                    {" "}
                    Assisted Purchase
                  </Link>
                </div> */}

                {/* <div className="sc">
                  <span>
                    <div id="org">
                      <ComputerIcon />
                    </div>
                    <div className="t-title">Wholesaler Plan</div>
                  </span>
                  <p>
                    Sea cargo dispatches in excess of 5,500 holders per day to
                    ports all around the globe, making us a top forwarder.
                  </p>
                  <ul>
                    <li>Less-than-container Load</li>
                    <li>Full Container Load</li>
                    <li>Inter-modal Solutions</li>
                  </ul>
                  <Link to="/wholesaler" className="btn btn-db">
                    {" "}
                    Wholesaler
                  </Link>
                </div> */}
              </div>
            </div>
          </Fade>
        </div>

        {/* <div className="calculator">
         <Link to="/calc">
           <img src="/banner/cal.png" height={300} alt="no"></img>
         </Link>
       </div> */}
        <br />
        <div id="scroll-fade8">
          <Fade bottom when={isVisible3}>
            <div className="cal-banner">
              <section id="cal">
                <div className="cal-head">
                  <div className="ps-l b ps-vs  ">
                    <div className=" ">
                      <CalculateIcon />
                    </div>
                    <div className="t-title">Shipping Rate Calculators </div>
                  </div>
                  <Link to="/calc" rel="noopener noreferrer">
                    <div className="btn btn-o">Calculate Now</div>
                  </Link>
                </div>
              </section>
            </div>
          </Fade>
        </div>

        <div id="scroll-fade9">
          <Fade bottom when={isVisible3}>
            <div id="pl-kd-sec">
              <div className="kd-l">
                <h1>every great brand is like a great story</h1>
                <p>
                  Choose From Our 3 Exciting Plans to Save Upto 80% On
                  International Shipping
                </p>
                <Link to="/disp-plan">
                  {" "}
                  <div className="btn btn-o">Free Trial</div>
                </Link>
              </div>
              <div className="kd-r">
                <div className="map">
                  <img src="/home/giff.gif" alt="no" />
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div
          className="cal-banner"
          style={{ marginBottom: "6rem", padding: "30px" }}
        >
          <div id="scroll-fade6">
            <Fade bottom when={isVisible3}>
              <div id="fest-offer">
                <div className="pp">
                  <div className=" ps-fo">
                    <div className="ps-l ps-vs">
                      <ShoppingCartOutlinedIcon />
                      <div className="t-title">View Offers</div>
                    </div>
                    <div className="ps-r">
                      <Link to="/offers">
                        <div className="btn btn-o">Click here</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div id="scroll-fade10">
          <Fade bottom when={isVisible3}>
            <div id="feed-l">
              <center className="fd-title" id="dg">
                What People Say About Our{" "}
                <span style={{ color: "var(--blue)" }}>Company</span>
              </center>
            </div>
            <section id="feed">
              <div id="feed-r" style={{ paddingTop: "3rem" }}>
                <Swiper
                  slidesPerView={value} // Set to 3 to fit three reviews on one page
                  spaceBetween={5} // Adjust as needed
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  {testimonialsData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-card">
                        <div className="testimonial-info">
                          <div className="name">{testimonial.name}</div>
                          <div className="stars">
                            {[...Array(Math.floor(testimonial.stars))].map(
                              (_, i) => (
                                <Star key={i} />
                              )
                            )}
                            {testimonial.stars % 1 !== 0 && <StarHalf />}
                            {[...Array(5 - Math.ceil(testimonial.stars))].map(
                              (_, i) => (
                                <StarBorder key={i} />
                              )
                            )}
                          </div>
                          <div className="msg-title">"Great Work"</div>
                          <div className="organization">
                            {testimonial.organization}
                          </div>
                          <div className="msg-desc">{testimonial.message}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          </Fade>
        </div>
        <div id="scroll-fade10">
          <Fade bottom when={isVisible3}>
            <div id="feed-l">
              <center className="fd-title" id="dg">
                Video <span style={{ color: "var(--blue)" }}>Testimonials</span>
              </center>
            </div>
            <section id="feed">
              <div
                id="feed-r "
                className="flex justify-between gap-16 sm:gap-8 sm:flex-col"
                style={{ paddingTop: "3rem" }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/w_eEnbApH0A?si=mEbllzhrP_Mr6bqc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="sm:h-[15rem] sm:w-[19rem] sm:ml-1"
                ></iframe>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Z4DaDwzgD6w?si=AbMA03yKQXGqVxYq"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="sm:h-[15rem] sm:w-[19rem] "
                ></iframe>
              </div>
              <div
                id="feed-r "
                style={{ paddingTop: "3rem" }}
                className="flex justify-between gap-16 sm:gap-8 mb-10 sm:flex-col"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/wjcEh_w_qdI?si=uKZ-Vsj0ks5a7gnp"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="sm:h-[15rem] sm:w-[19rem] sm:ml-1"
                ></iframe>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/M7vXOK_ZKY0?si=8G7a1e9NzQqqfo8R"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="sm:h-[15rem] sm:w-[19rem] sm:mb-10"
                ></iframe>
              </div>
            </section>
          </Fade>
        </div>

        <div id="scroll-fade11" className="fff-in">
          <Fade bottom when={isVisible3}>
            <div className="fr-title">
              <div className="t-titlee">Recognition </div>
            </div>

            <div className="rcc">
              <div className="ftr-im">
                <img className="mbm" src="./ftrd/1.png" alt="" />
              </div>
              <div className="ftr-im">
                <img className="mbm" src="./ftrd/3.png" alt="" />
              </div>
              <div className="ftr-im">
                <img className="mbm" src="./ftrd/4.png" alt="" />
              </div>

              <div className="ftr-im">
                <img className="mbm" src="./ftrd/5.png" alt="" />
              </div>
              <div className="ftr-im">
                <img className="mbm" src="./ftrd/6.png" alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* <div id="contact-sec">
        <div id="con-head">
          <h1 id="dg">YOUR INDIAN SHOP</h1>
          <div className="s-media">
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <YouTubeIcon />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
          </div>{" "}
        </div>
        <div className="con-body">
          <div className="con-l">
            <h1 id="dg">Reach Us </h1>
            <i>Please fill out the form below to send us an email.</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 id="dg">
            </h2>{" "}
            <div
              className="con-ftr"
              // style={{ justifySelf: "flex-end !important" }}
            >
              <Link to="/signUp">
                <div className="btn btn-db">SIGN UP</div>
              </Link>
              <Link to="/offers">
                <div className="btn btn-db">OFFERS</div>
              </Link>
              <Link to="/dis-plan">
                <div className="btn btn-db">PLANS</div>
              </Link>
            </div>
          </div>
          <form className="col-r" onSubmit={handelsubmit}>
            <input
              required
              name="name"
              minLength={4}
              maxLength={50}
              type="text"
              className="soneri"
              placeholder="NAME"
            />
            <input
              required
              name="email"
              minLength={4}
              maxLength={50}
              type="email"
              placeholder="E-mail"
            />
            <input
              required
              name="subject"
              minLength={4}
              maxLength={30}
              type="text"
              className="soneri"
              placeholder="SUBJECT"
            />
            <textarea
              minLength={10}
              maxLength={500}
              required
              name="message"
              placeholder="MESSAGE"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit" className="btn btn-gd">
              Submit
            </button>
          </form>
        </div>
      </div> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default Home;
