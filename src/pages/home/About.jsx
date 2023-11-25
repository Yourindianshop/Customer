import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "../../stylesheet/About.css";
import Nav from "../../components/Nav";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PgTitle from "../../components/PgTitle";
import { Link } from "react-router-dom";

import ComputerIcon from "@mui/icons-material/Computer";
const About = () => {
  return (
    <>
      <div id="Site" className="sttt">
        <header>
          <Nav />
        </header>

        <div className="about-s" style={{ width: "100%" }}>
          <img className="img-about" src="/home/about-img.png" />
        </div>
        <h1 className="abt-l">#YourHassleFreeShoppingFromIndia</h1>
        <div className="div-1">
          <div className="div-2">
            <h1 className="head-1">
              <span style={{ color: "var(--blue)" }}>Effortlessly </span> Shop
              and Ship from India !!
            </h1>
            <p>
              ARE YOU AN INDIAN LIVING ABROAD OR SOMEONE WITH A KEEN INTEREST IN
              THE VIBRANT, DIVERSE, AND CULTURALLY RICH OFFERINGS OF INDIA? DO
              YOU OFTEN FIND YOURSELF WISHING YOU COULD SHOP FROM YOUR FAVOURITE
              INDIAN ONLINE STORES BUT FACE THE CHALLENGE OF THEM NOT SHIPPING
              TO YOUR INTERNATIONAL ADDRESS? LOOK NO FURTHER! YOURINDIANSHOP IS
              HERE TO BRIDGE THE GAP AND MAKE YOUR SHOPPING DREAMS FROM INDIA A
              REALITY.
            </p>
            <p style={{ marginTop: "5rem" }}></p>
            <div>
              <Link to="/signIn" className="about-button">Click here</Link>
            </div>
          </div>
          <div className="div-3">
            <img src="/home/delivery.gif" />
          </div>
        </div>
        <div style={{ marginTop: "4rem" }}>
          <h1 className="head-2">
            How It
            <span id="org" style={{ color: "var(--blue)" }}>
              {" "}
              Works
            </span>
          </h1>
        </div>
        <div className="works">
          <div className=" work-box" style={{ width: "350px" }}>
            {/* <div className="pin">
                <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
                </div> */}
            <div id="sdsc-ol">
              {" "}
              <img
                src="/home/about-1.png"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            {/* <div className="st">SHOP FROM INDIAN SITES</div> */}
            <div className="st ss">
              GET YOUR OWN INDIAN ADDRESS - ABSOLUTELY FREE!
            </div>
            <div className="st-2">
              <p className="st-p">
                Get your Indian virtual address with Yourindianshop and enjoy
                international shopping perks
              </p>
            </div>{" "}
          </div>

          <div className=" work-box" style={{ width: "350px" }}>
            {/* <div className="pin">
                <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
                </div> */}
            <div id="sdsc-ol">
              {" "}
              <img
                src="/home/about-2.png"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            {/* <div className="st">SHOP FROM INDIAN SITES</div> */}
            <div className="st ss">SHOP FROM INDIAN STORES</div>
            <div className="st-2">
              <p className="st-p">
                Get your Indian address from Yourindianshop, shop from favorite
                Indian online stores, and send purchases to our warehouse for
                hassle-free cost effective international shopping.
              </p>
            </div>{" "}
          </div>
          <div className=" work-box" style={{ width: "350px" }}>
            {/* <div className="pin">
                <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
                </div> */}
            <div id="sdsc-ol">
              {" "}
              <img
                src="/home/about-3.jpeg"
                style={{ height: "150px", width: "150px" }}
              />
            </div>
            {/* <div className="st">SHOP FROM INDIAN SITES</div> */}
            <div className="st ss">
              RECEIVE PACKAGES - WE'VE GOT YOU COVERED!
            </div>
            <div className="st-2">
              <p className="st-p">
                Yourindianshop guarantees a smooth and stress-free shopping
                experience. We receive your packages in your dedicated locker,
                share product images for inspection, and offer cost-saving
                consolidation, prioritizing your satisfaction.
              </p>
            </div>{" "}
          </div>
          <div className=" work-box" style={{ width: "350px" }}>
            {/* <div className="pin">
                <div id='sdsc-ol'></div> <img src="./imgs/pin.png" alt="" />
                </div> */}
            <div id="sdsc-ol">
              {" "}
              <img
                src="/home/about-4.png"
                style={{ height: "150px", width: "150px" }}
              />
            </div>
            {/* <div className="st">SHOP FROM INDIAN SITES</div> */}
            <div className="st ss">UNBOX YOUR PACKAGE - IT'S TIME TO SHIP!</div>
            <div className="st-2">
              <p className="st-p">
                The final step of your shopping journey is unboxing and
                preparing your package for its journey to your doorstep.
                Yourindianshop ensures quick, efficient, and secure delivery
                within 3-6 days worldwide.
              </p>
            </div>{" "}
          </div>
        </div>

        {/* <div id="abt-sec">
        <div className="abt-l">
          <h1>About Us</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            recusandae eum quidem laboriosam laudantium omnis blanditiis iusto,
            perferendis error alias obcaecati molestias velit beatae unde
            suscipit neque nobis harum dolor illum quaerat nulla quo
            necessitatibus.
          </p>
          <p>
            Alias obcaecati molestias velit beatae unde suscipit neque nobis
            harum dolor illum quaerat nulla quo necessitatibus.
          </p>
          <Link to="/signUp">
            <div className="btn btn-og">Join Now</div>
          </Link>
        </div>
        <div className="abt-r">
          <img src="./imgs/sd3.png" alt="" />
        </div>
      </div> */}

        {/* <PgTitle
        pageName="About Us"
        tabName="ABOUT"
        bgImg="./imgs/home1-section-4.jpg"
      /> */}
        {/* <div id="vidd">
        <iframe
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/YB67y0NepPs?si=cbSsgf37_Oirg198&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          autoPlay
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}
      </div>
      <div className="footer">
        <div className="footer-img">
          <div className="footer-text">
            So Start Your YIS Journey With Us Now !!
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
