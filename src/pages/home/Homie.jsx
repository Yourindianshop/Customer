import Navbar from "./Navbar";
import Footer from "../../components/Footer";
import "./Homie.css";
import { TextField } from "@mui/material";

const Homie = () => {
  return (
    <div>
      <div className="navb">
        <Navbar />
        <div className="main">
          <div className="heading">
            <h1 className="main-heading">
              quick & reliable{" "}
              <span className="text-org">warehousing and logistics</span>{" "}
              solution.
            </h1>
            <h2>
              ShipUp delivers an unparalleled customer service through dedicated
              customer teams, engaged people working in an agile culture, and a
              global footprint
            </h2>
            <div className="heading-bottom">
              <div className="nav-btn-2">Join Now</div>
              <div className="vdo">
                <div className="play-vdo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.78896 5.95001H14.3919C17.153 5.95001 19.0808 7.85271 19.0808 10.5795V18.4206C19.0808 21.1473 17.153 23.05 14.3919 23.05H7.78896C5.02786 23.05 3.1001 21.1473 3.1001 18.4206V10.5795C3.1001 7.85271 5.02786 5.95001 7.78896 5.95001ZM23.5722 8.66205C24.0726 8.40743 24.6598 8.43405 25.1374 8.73497C25.6151 9.03472 25.9001 9.55554 25.9001 10.125V18.8758C25.9001 19.4463 25.6151 19.966 25.1374 20.2657C24.8764 20.4289 24.5845 20.5123 24.2904 20.5123C24.0453 20.5123 23.8002 20.4544 23.571 20.3375L21.8827 19.4857C21.258 19.1686 20.8704 18.532 20.8704 17.8249V11.1747C20.8704 10.4664 21.258 9.82983 21.8827 9.51503L23.5722 8.66205Z"
                      fill="#2C2D5B"
                    />
                  </svg>
                </div>
                Play Demo
              </div>
            </div>
          </div>
          <div>
            <img className="logo" src="/main.svg" alt="logo" />
          </div>
        </div>
        <div className="calci">
          <div className="calculator">
            <div className="text-field">
              <TextField
                className="nor-feild"
                id="outlined"
                type="number"
                label="Length (cm) "
                placeholder="Optional"
              />
              <TextField
                className="nor-feild"
                id="outlined"
                type="number"
                label="Width (cm) "
                placeholder="Optional"
              />
              <TextField
                className="nor-feild"
                id="outlined"
                type="number"
                label="Height (cm) "
                placeholder="Optional"
              />
              <div className="nav-btn-2">Calculate</div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="right-side">
            <div className="serv-heading">
              <h1 className="serv-head">
                {" "}
                Services <span className="serv-head-2">we offer</span>{" "}
              </h1>
              <div className="linee"></div>
            </div>
            <div className="right-truck">
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
            </div>
          </div>
          <div className="services-container">
            <div className="services-item">
              <div className="service-item-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M4.00033 24H28.0003V26.6667H4.00033V24ZM28.679 11.3693C28.4992 10.8292 28.1121 10.3826 27.603 10.1278C27.0939 9.87302 26.5045 9.83088 25.9643 10.0107L20.0003 12L9.33366 8L6.66699 9.33333L14.667 14.6667L9.33366 17.3333L4.00033 14.6667L2.66699 16L8.00033 21.3333L27.3963 14.06C27.9167 13.8646 28.3411 13.4751 28.5803 12.9734C28.8195 12.4716 28.8549 11.8966 28.679 11.3693Z"
                    fill="#2C2D5B"
                  />
                </svg>
              </div>
              <h1 className="service-item-heading">International Courier</h1>
              <span className="service-item-span">
                WE OFFER A HASSLE FREE, RELIABLE AND LOW-COST COURIER SERVICE
                FROM INDIA INTERNATIONALLY.
              </span>
            </div>
            <div className="services-item">
              <div className="service-item-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M4.00033 24H28.0003V26.6667H4.00033V24ZM28.679 11.3693C28.4992 10.8292 28.1121 10.3826 27.603 10.1278C27.0939 9.87302 26.5045 9.83088 25.9643 10.0107L20.0003 12L9.33366 8L6.66699 9.33333L14.667 14.6667L9.33366 17.3333L4.00033 14.6667L2.66699 16L8.00033 21.3333L27.3963 14.06C27.9167 13.8646 28.3411 13.4751 28.5803 12.9734C28.8195 12.4716 28.8549 11.8966 28.679 11.3693Z"
                    fill="#2C2D5B"
                  />
                </svg>
              </div>
              <h1 className="service-item-heading">Indian Shop Cart</h1>
              <span className="service-item-span">
                SHOP FROM THE BEST OF INDIA’S BRANDS, AND GET THEM DELIVERED
                FROM INDIA INTERNATIONALLY.
              </span>
            </div>
            <div className="services-item">
              <div className="service-item-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M4.00033 24H28.0003V26.6667H4.00033V24ZM28.679 11.3693C28.4992 10.8292 28.1121 10.3826 27.603 10.1278C27.0939 9.87302 26.5045 9.83088 25.9643 10.0107L20.0003 12L9.33366 8L6.66699 9.33333L14.667 14.6667L9.33366 17.3333L4.00033 14.6667L2.66699 16L8.00033 21.3333L27.3963 14.06C27.9167 13.8646 28.3411 13.4751 28.5803 12.9734C28.8195 12.4716 28.8549 11.8966 28.679 11.3693Z"
                    fill="#2C2D5B"
                  />
                </svg>
              </div>
              <h1 className="service-item-heading">ASSISTED PURCHASE</h1>
              <span className="service-item-span">
                WE OFFER A HASSLE FREE, RELIABLE AND LOW-COST COURIER SERVICE
                FROM INDIA INTERNATIONALLY.
              </span>
            </div>
          </div>
          <div className="nav-btnn">
            <div className="nav-btn-1">Login</div>
            <div className="nav-btn-2">Sign In</div>
          </div>
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
          <div className="works-content">
            <div className="works-text-1">
              <div className="works-inside">
                <div className="works-number">1</div>
                <h1 className="works-heading">connect</h1>
              </div>
              <span className="works-text">
                You’re currently running your store on Shopify, WooCommerce, or
                any other platform. As a first step, you’ll connect your store
                with our platform.
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
                <h1 className="works-heading">Store</h1>
              </div>
              <span className="works-text">
                Then, you can send us your inventory and the fun begins. We’ll
                choose a delivery day together so your fulfilment is not
                interrupted.
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
                You’re currently running your store on Shopify, WooCommerce, or
                any other platform. As a first step, you’ll connect your store
                with our platform.
              </span>
            </div>
            <img src="/ship.svg" alt="logo" />
          </div>
        </div>
        <Footer />
      </div>

      <div className="ellipse"></div>
      <div className="truck">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M1 10H14L15 12H2L1 10ZM2.33333 14H15.3333L16.3333 16H3.33333L2.33333 14ZM24 24.6667C25.1067 24.6667 26 23.7734 26 22.6667C26 21.56 25.1067 20.6667 24 20.6667C22.8933 20.6667 22 21.56 22 22.6667C22 23.7734 22.8933 24.6667 24 24.6667ZM26 12.6667H22.6667V16H28.6133L26 12.6667ZM10.6667 24.6667C11.7733 24.6667 12.6667 23.7734 12.6667 22.6667C12.6667 21.56 11.7733 20.6667 10.6667 20.6667C9.56 20.6667 8.66667 21.56 8.66667 22.6667C8.66667 23.7734 9.56 24.6667 10.6667 24.6667ZM26.6667 10.6667L30.6667 16V22.6667H28C28 24.88 26.2133 26.6667 24 26.6667C21.7867 26.6667 20 24.88 20 22.6667H14.6667C14.6667 24.88 12.8667 26.6667 10.6667 26.6667C8.45333 26.6667 6.66667 24.88 6.66667 22.6667H4V18H6.66667V20H7.68C8.41333 19.1867 9.48 18.6667 10.6667 18.6667C11.8533 18.6667 12.92 19.1867 13.6533 20H20V8.00004H4C4 6.52004 5.18667 5.33337 6.66667 5.33337H22.6667V10.6667H26.6667Z"
            fill="#2C2D5B"
          />
        </svg>
      </div>
    </div>
  );
};

export default Homie;
