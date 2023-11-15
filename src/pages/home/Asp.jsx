import React, { useState, useEffect } from 'react';
import "../../stylesheet/Asp.css";
import Fade from 'react-reveal/Fade';
import { Link, useLocation } from "react-router-dom";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import "./Asp.css";
import Marquee from "react-fast-marquee";

const Asp = () => {

  const { pathname } = useLocation(); 
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
 
  useEffect(() => {
    window.scrollTo(10, 0);
  }, [pathname]);

  useEffect(() => {
    // Add a scroll event listener to check when the component is in the viewport
    const handleScroll = () => {
      const element = document.getElementById('scroll-fade');
      const element2 = document.getElementById('scroll-fade2');
      const element3 = document.getElementById('scroll-fade3');
if( window.innerWidth > 1340) {

  
  if (element) {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight;
    setIsVisible(isVisible);
  }
  if (element2) {
    const rect = element2.getBoundingClientRect();
    const isVisible2 = window.innerHeight ;
    setIsVisible2(isVisible2);
  }
  if (element3) {
    const rect = element3.getBoundingClientRect();
    const isVisible3 = window.innerHeight;
    setIsVisible3(isVisible3);
  } 

} else {
  if (element) {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight;
    window.removeEventListener('scroll', handleScroll);
    setIsVisible(isVisible);
  }
  if (element2) {
    const rect = element2.getBoundingClientRect();
    const isVisible2 = window.innerHeight;
    window.removeEventListener('scroll', handleScroll);
    setIsVisible2(isVisible2);
  }
  if (element3) {
    const rect = element3.getBoundingClientRect();
    const isVisible3 =  window.innerHeight;
    window.removeEventListener('scroll', handleScroll);
    setIsVisible3(isVisible3);
  }
}
};

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });





  return (
    <div id="wlb-cont">
    <div  className="marquee">
    <Marquee speed={150}>
        Save Upto 80% on International Shipping • Exciting Discounts on Premium Plans • Get Your Virtual Indian Address
    </Marquee>
    </div>
      <div id="scroll-fade">
        <Fade bottom when={isVisible}>
      <div id="wl-sec-1" className="ngp">
        <div className="ws-l ml2">
          <div className="ws-title">Assisted Purchase Plan</div>
          <p>
            In the Assisted purchase section of the system, there will be
            multiple products already added by the admin. If a specific product
            required by the customer is not present in the assisted purchase
            section, the customer will have the provision to request the admin
            to add that product to the assisted purchase section.
          </p>
          <div className="btn btn-b">Explore</div>
        </div>
        <div className="ws-r mll">
          <img src="./imgs/ML.png" alt="" />
        </div>
      </div>
      </Fade>
      </div>

      <div id="scroll-fade2">
        <Fade bottom when={isVisible2}>
      <div id="wl-sec-2" className="asp-step">
        <div className="asp-grid">
          <div className="asp-c">
            <div className="npm">1</div>{" "}
            <span>
              <p>Sign Up and Select plan </p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                suscipit neque fuga, eos unde esse harum nam eius debitis
                corporis rerum labore ex impedit velit!
              </small>
            </span>
          </div>
          <div className="asp-c">
            <div className="npm">2</div>{" "}
            <span>
              <p>fill out the form for purchase </p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                suscipit neque fuga, eos unde esse harum nam eius debitis
                corporis rerum labore ex impedit velit!
              </small>
            </span>
          </div>
          <div className="asp-c">
            <div className="npm">3</div>{" "}
            <span>
              <p>team yis will help you with your required item</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                suscipit neque fuga, eos unde esse harum nam eius debitis
                corporis rerum labore ex impedit velit!
              </small>
            </span>
          </div>
        </div>
        <div className="gottcha">
          <h1>______________</h1>
          <h1>Don't worry we got you !!!</h1>
          <img src="./imgs/ML2.jpg" alt="" />
        </div>
      </div>
    </Fade>
    </div>


    
    <div className='assistant'>
      <h1 className='assistant-h'>Recent Assisted Purchase</h1>
        <div class="client-sliderr">
              <div class="client-slide-trackk">
                <div class="client-slide">
                  <img className='assistant-img' src="/assisted/001.png"></img>
                  <div>
                  <p>Men Suit</p>
                  </div>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/002.png"></img>
                  <p>T-shirt</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/003.png"></img>
                  <p>Shoes</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div className="client-slide">
                <img className='assistant-img' src="/assisted/004.png"></img>
                  <p>Table</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/005.png"></img>
                  <p>Ladies Bag</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/006.png"></img>
                  <p>Life Jacket</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/007.png"></img>
                  <p>Men Jacket</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/008.png"></img>
                  <p>Nehru Jacket</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/009.png"></img>
                  <p>Chair</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/010.png"></img>
                  <p>Mat</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/011.png"></img>
                  <p>Swimming Ring</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/012.png"></img>
                  <p>Jeans</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
                <div class="client-slide">
                <img className='assistant-img' src="/assisted/013.png"></img>
                  <p>Girl Dress</p>
                  <button className='btn-shop'> Shop Now</button>
                </div>
              </div>
        </div>
    </div>
   


    <div id="scroll-fade3">
        <Fade bottom when={isVisible3}>
      <div id="pl-kd-sec" className="nmar">
        <div className="kd-l">
          <h1 className="plan-h">Our <span style={{color: "var(--blue)"}}>Plans</span></h1>
          <h1>every great brand is like a great story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ratione perspiciatis repellendus totam reiciendis qui in ullam a
            corrupti. Architecto quam, aliquam neque obcaecati ipsum sit aperiam
            ex tenetur perferendis.
          </p>
          <Link to="/disp-plan">
            {" "}
            <div className="btn btn-o">Free Trial</div>
          </Link>
        </div>
        <div className="kd-r">
          <div className="kd-pl">
            <b>Half yearly</b>
            <big>₹2499</big>
            <div className="futrsss">
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> consolidation
              </span>
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> storage - 30 days
              </span>
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> photos - 3
              </span>
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> unlimited address
              </span>
              {/* <span> <CheckCircleOutlineOutlinedIcon id="ck-cr" /> </span> */}
            </div>
            <Link to="/disp-plan">
              {" "}
              <div className="btn btn-o">buy now</div>
            </Link>
          </div>
          <div className="kd-pl">
            <b>yearly</b>
            <big>₹4499</big>
            <div className="futrsss">
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> photos - 3
              </span>
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> consolidation
              </span>
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> virtual address
              </span>
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> pickup - free
              </span>
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> free return
              </span>
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> real time tracking
              </span>
              <span>
                {" "}
                <CheckCircleOutlineOutlinedIcon id="ck-cr" /> and many more{" "}
              </span>
            </div>
            <Link to="/disp-plan">
              {" "}
              <div className="btn btn-o">buy now</div>
            </Link>
          </div>
        </div>
      </div>
      </Fade>
      </div>
    </div>
  );
};

export default Asp;
