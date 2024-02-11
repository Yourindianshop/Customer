import Navbar from "./Navbar";
import Footer from "../../components/Footer";
import "./Homie.css";
import Call from "../../components/Call";

import TestimonialsGrid from "./Testimonials";
import FeaturedWebsite from "../../components/FeaturedWebsite";
import VariousSites from "../../components/VariousSites";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ComputerIcon from "@mui/icons-material/Computer";
<<<<<<< HEAD
import Slider from "../../components/Slider";
=======
import { Link } from "react-router-dom";
>>>>>>> 591ca983e7eed860bcfebe38643863c2e1da7b62

const Homie = () => {
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
  return (
    <div>
      <div>
        <Navbar />
        <Slider slides={slides} />

        <div className="services">
          <div className="right-side">
            <div className="serv-heading">
              <h1 className="serv-head">
                {" "}
                Services <span className="serv-head-2">we offer</span>{" "}
              </h1>
              <div className="linee"></div>
            </div>
            {/* <div className="right-truck">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M1.875 18.75H26.25L28.125 22.5H3.75L1.875 18.75ZM4.375 26.25H28.75L30.625 30H6.25L4.375 26.25ZM45 46.25C47.075 46.25 48.75 44.575 48.75 42.5C48.75 40.425 47.075 38.75 45 38.75C42.925 38.75 41.25 40.425 41.25 42.5C41.25 44.575 42.925 46.25 45 46.25ZM48.75 23.75H42.5V30H53.65L48.75 23.75ZM20 46.25C22.075 46.25 23.75 44.575 23.75 42.5C23.75 40.425 22.075 38.75 20 38.75C17.925 38.75 16.25 40.425 16.25 42.5C16.25 44.575 17.925 46.25 20 46.25ZM50 20L57.5 30V42.5H52.5C52.5 46.65 49.15 50 45 50C40.85 50 37.5 46.65 37.5 42.5H27.5C27.5 46.65 24.125 50 20 50C15.85 50 12.5 46.65 12.5 42.5H7.5V33.75H12.5V37.5H14.4C15.775 35.975 17.775 35 20 35C22.225 35 24.225 35.975 25.6 37.5H37.5V15H7.5C7.5 12.225 9.725 10 12.5 10H42.5V20H50Z"
                  fill="#F67366"
                />
              </svg>
            </div> */}
          </div>
          <div className="services-container">
            <Link to={"/disp-plan"} className="service-item">
              <div className="service-item-circle">
                {/* SVG for Plans We Offer */}
                <img src="/planss.png" alt="" />
              </div>
              <h1 className="service-item-heading">Plans We Offer</h1>
              <span className="service-item-span">
                We provide a variety of plans tailored to your requirements,
                spanning from basic to premium, guaranteeing affordability,
                flexibility, and high-quality service
              </span>
            </Link>

            <div className="service-item">
              <div className="service-item-circle">
                {/* SVG for International Courier */}
                <img src="/delivery-man.png" alt="" />
              </div>
              <h1 className="service-item-heading">International Courier</h1>
              <span className="service-item-span">
                We provide an efficient, dependable, and cost-effective
                international courier service from India, ensuring a hassle-free
                experience
              </span>
            </div>

            <div className="service-item">
              <div className="service-item-circle">
                {/* SVG for Indian Shop Cart */}
                <img src="/shopping.png" alt="" />
              </div>
              <h1 className="service-item-heading">Indian Shop Cart</h1>
              <span className="service-item-span">
                Explore top Indian brands and enjoy international delivery
                services directly from India.
              </span>
            </div>

            <div className="service-item">
              <div className="service-item-circle">
                {/* SVG for Assisted Purchase */}
                <img src="/procurement.png" alt="" />
              </div>
              <h1 className="service-item-heading">Assisted Purchase</h1>
              <span className="service-item-span">
                We provide assistance for your personalised needs while shopping
                through Your Indian Shop
              </span>
            </div>
          </div>

          <div className="nav-btnn">
            <a href="/service">
              <div className="nav-btn-2">View more</div>
            </a>
          </div>
        </div>

        <div className="tititiiti">
          <div className="testimoinals-head">
            <h1>
              Explore <span>Our Business</span>
            </h1>
            <h4>
              Uncover Limitless Opportunities: Navigate YourIndianShop's
              Business Solutions Today!
            </h4>
          </div>
          <div className="custom-beautiful-card-container">
            <div className="custom-beautiful-card">
              <div className="custom-card-left">
                <EngineeringOutlinedIcon
                  style={{ height: "50px", width: "100px" }}
                />
              </div>
              <div className="custom-card-right">
                <div className="custom-card-title">White Labeling</div>
                <div className="custom-card-text">
                  White labeling is when a company rebrands and sells a product
                  or service originally created by another company under its own
                  name.
                </div>

                <div className="nav-btn">
                  <a href="/white-labeling">
                    <div className="nav-btn-2">Click Here</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="custom-beautiful-card">
              <div className="custom-card-left">
                <ComputerIcon style={{ height: "50px", width: "100px" }} />
              </div>
              <div className="custom-card-right">
                <div className="custom-card-title">Wholesaler Plan</div>
                <div className="custom-card-text">
                  When you buy bulk items with us, Our commitment to providing
                  cost-effective solutions ensures that you get the most value
                  for your investment.
                </div>
                <div className="nav-btn">
                  <a href="/wholesaler">
                    <div className="nav-btn-2">Click Here</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="testimoinals-head">
            <h1>
              Various <span>Indian Sites</span>
            </h1>
            <h4>Ship Your products from a variety of Indian sites</h4>
          </div>
          <VariousSites />
        </div>
        <div className="featured-website">
          <FeaturedWebsite />
        </div>
        <div className="works">
          <div className="work-head">
            <div className="works-heading">
              <h1 className="serv-head">
                {" "}
                How <span className="serv-head-2">we Work</span>{" "}
              </h1>
              <div className="linee"></div>
            </div>
          </div>
          <div></div>
          <div>{/* <Slide /> */}</div>
          <div className="works-content">
            <div className="works-text-1">
              <div className="works-inside">
                <div className="works-number">1</div>
                <h1 className="works-heading">SIGN UP</h1>
              </div>
              <span className="works-text">
                WE PROVIDE A FREE INDIAN VIRTUAL ADDRESS. SIMPLY SIGN UP AND GET
                STARTED TODAY.
              </span>
            </div>
            <img src="/connect.svg" alt="connect" />
          </div>
          <div className="line1">
            <img src="/line1.svg" className="line1-img" alt="" />
          </div>
          <div className="works-content">
            <img src="/store.svg" alt="connect" />
            <div className="works-text-1">
              <div className="works-inside">
                <div className="works-number">2</div>
                <h1 className="works-heading">SHOP </h1>
              </div>
              <span className="works-text">
                BROWSE & SHOP FROM TOP INDIAN E-COMMERCE STORES & BRANDS.
              </span>
            </div>
          </div>
          <div className="line1">
            <img src="/line2.svg" className="line1-img" alt="" />
          </div>
          <div className="works-content">
            <div className="works-text-1">
              <div className="works-inside">
                <div className="works-number">3</div>
                <h1 className="works-heading">Ship</h1>
              </div>
              <span className="works-text">
                SHIP YOUR CONSOLIDATED PARCELS TO YOUR GLOBAL ADDRESS.
              </span>
            </div>
            <img src="/ship.svg" alt="logo" />
          </div>
          <div className="line1">
            <img src="/line1.svg" className="line1-img" alt="" />
          </div>
          <div className="works-content">
            <img src="/store.svg" alt="connect" />
            <div className="works-text-1">
              <div className="works-inside">
                <div className="works-number">4</div>
                <h1 className="works-heading">RECEIVE </h1>
              </div>
              <span className="works-text">
                GET IT AT YOUR ADDRESS WITHIN 3-6 DAYS FROM INDIA.
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="testimoinals-head">
            <h1>
              Shipping <span>Calculator</span>
            </h1>
            <h4>Ship Your products from a variety of Indian sites</h4>
          </div>
          <div className="calculator-section">
            <div className="calcu-mid-head">
              <p className="calculator-text">
                Introducing our user-friendly Shipping Calculator—an essential
                tool for seamless shipping experiences at YourIndianShop.
                Designed with your convenience in mind, our calculator provides
                instant and transparent shipping estimates tailored to your
                specific needs. Whether you're a business shipping products or
                an individual sending a gift, this tool ensures you have all the
                information you need at your fingertips. Enjoy the benefits of
                accurate real-time estimates, transparent pricing, and
                customizable shipping options. Make informed decisions and take
                control of your shipping journey with our hassle-free Shipping
                Calculator.
                <div className="nav-btn mt-5">
                  <a href="/calc">
                    <div className="nav-btn-2">Calculate Now</div>
                  </a>
                </div>
              </p>
              <img className="calculator-image" src="/calc.png" alt="no" />
            </div>
          </div>
        </div>

        <div className="testimonials">
          <div className="testimoinals-head">
            <h1>
              Loved by <span>Thousands of users</span>{" "}
            </h1>
            <h4>
              Don't take it from us – here's what our users have to say about
              YIS
            </h4>
          </div>
          <TestimonialsGrid />
        </div>
        <Footer />
      </div>

      <Call />
    </div>
  );
};

export default Homie;
