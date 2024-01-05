import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../stylesheet/dashboard/Calc.css";
import Tilt from "react-parallax-tilt";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { fetchreq } from "../Helper/fetch";
import { TransitionProps } from "@mui/material/transitions";
import { Link } from "react-router-dom";
import axios from "axios";

const Calc = () => {
  const [weight, setWeight] = useState(null);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [isDimentsion, setIsDimentsion] = useState(true);
  const [price, setPrice] = useState(0);
  const [cp, setCp] = useState(-1);
  const url = process.env.REACT_APP_URL;
  const [ctr, setCtr] = useState([]);
  const [totalPrices, setTotalPrices] = useState({});

  const [shippingData, setShippingData] = useState();

  // Function to fetch shipping data from the backend
  const header = process.env.REACT_APP_API_CODE;
  const ship = async () => {
    let response = await fetchreq("GET", "getAllShippers", {});
    if (response) {
      setShippingData(response.shippings);
      // console.log(response.shippings);
    }
  };

  const calculatePrice = () => {
    if (cp == -1) {
      alert("please Select Coutry...");
    } else if (weight == "" || length == "" || width == "" || height == "") {
      if (weight != "") {
        setIsDimentsion(false);
        calculatePrice2();
      } else {
        alert("fill all the fields...");
      }
    } else {
      setIsDimentsion(true);
      const weightValue = parseFloat(weight);
      const lengthValue = parseFloat(length);
      const widthValue = parseFloat(width);
      const heightValue = parseFloat(height);
      const adminGivenPrice = 10;
      const volumetricWeight = (lengthValue * widthValue * heightValue) / 5000;
      const calculatedPrice = Math.max(weightValue, volumetricWeight) * cp;
      setPrice(calculatedPrice);
      handleClickOpen();
    }
  };

  const calculateDiscountedPrice = (price) => {
    const discountPercentage = 10;
    const discountAmount = (discountPercentage / 100) * price;
    return price - discountAmount;
  };

  const calculateIndividualPrice = (shipping) => {
    const weightValue = parseFloat(weight);
    const volumetricWeight = (length * width * height) / 5000;
    const weightBasedPrice = weightValue * cp;
    const volumetricWeightBasedPrice =
      Math.max(weightValue, volumetricWeight) * cp;

    const finalPrice =
      weightValue > volumetricWeight
        ? weightBasedPrice
        : volumetricWeightBasedPrice;
    const discountedPrice = calculateDiscountedPrice(finalPrice);

    return { finalPrice, discountedPrice };
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsDimentsion(true);
  };
  const fetchContrys = async () => {
    const dt = await fetchreq("GET", "getCounty", {});
    dt ? setCtr(dt.result) : setCtr([]);
    console.log(dt);
  };

  const calculatePrice2 = () => {
    if (cp == -1) {
      alert("Please select Country...");
    } else if (!weight) {
      alert("Please fill Weight...");
    } else {
      const weightValue = parseFloat(weight);

      // Find the selected service provider based on ID
      const selectedProvider = shippingData.find(
        (provider) => provider.ID === parseInt(cp)
      );

      if (selectedProvider) {
        // Calculate the price for the selected service provider
        const calculatedPrice = weightValue * selectedProvider.PRICE;
        setPrice(calculatedPrice);
        handleClickOpen();
      } else {
        const weight = weightValue * cp;
        setPrice(weight);
        handleClickOpen();
      }
    }
  };

  const calculatePrices = () => {
    const volumetricWeight = (length * width * height) / 5000;

    const partnerPrices = {};

    shippingData.forEach((partner) => {
      let finalPrice;
      if (weight > volumetricWeight) {
        // If weight is greater than volumetric weight, use weight * partner's price
        finalPrice = weight * partner.price;
      } else {
        // Otherwise, use volumetric weight * partner's price
        finalPrice = volumetricWeight * partner.price;
      }

      // Calculate the discounted price (10% off the original price)
      const discountedPrice = finalPrice * 0.9;

      partnerPrices[partner.name] = {
        originalPrice: finalPrice,
        discountedPrice: discountedPrice,
      };
    });

    setTotalPrices(partnerPrices); // Update the total prices state
  };

  const volumetriweight = (height * width * length) / 5000;

  console.log(volumetriweight);

  function isFirstGreater(volumetriweight, weight) {
    return volumetriweight > weight ? 1 : 0;
  }

  useEffect(() => {
    fetchContrys();
    ship();
  }, []);
  return (
    <>
      <div id="dash-calc">
        <div className="t-title">
          <span id="blue"> Basic</span>
          <span id="org"> Shipment</span>
          <span id="org"> Cost</span>
          <span id="blue"> Calculator</span>
        </div>
        <div className="cal-box mt-[-3rem]">
          <div className="sh-top">
            <div
              className="sh-l"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                // variant="outlined"
                className="btn btn-b btn-pg"
                onClick={isDimentsion ? calculatePrice : calculatePrice2}
              >
                Calculate Now
              </Button>
              {/* <div className="btn btn-b" onClick={calculatePrice}>
              Calculate Now
            </div> */}
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    className="nor-feild"
                    id="outlined-required"
                    label="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </Box>
              <h1>Weight *</h1> <br />
              <br />
              {
                <div className="sh-r">
                  <h1>Dimensions</h1>
                  <div className="dim">
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "20ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          className="nor-feild"
                          id="outlined"
                          type="number"
                          label="Length (cm) "
                          placeholder="Optional"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                        />
                        <TextField
                          className="nor-feild"
                          id="outlined"
                          type="number"
                          label="Width (cm) "
                          placeholder="Optional"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                        />
                        <TextField
                          className="nor-feild"
                          id="outlined"
                          type="number"
                          label="Height (cm) "
                          placeholder="Optional"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </div>
                    </Box>
                  </div>
                </div>
              }
              <div className="fl-bx">
                <select
                  onChange={(e) => {
                    setCp(e.target.value);
                  }}
                >
                  <option value="-1" selected>
                    Choose Packet Type
                  </option>
                  <option value="1">Non Document</option>
                  <option value="2">Document</option>
                </select>

                <select
                  name=""
                  id=""
                  required
                  value={cp}
                  onChange={(e) => {
                    setCp(e.target.value);
                  }}
                >
                  <option value="-1" selected autoSave="true">
                    Choose Country
                  </option>
                  {ctr.map((c) => {
                    return <option value={c.Price}>{c.Name}</option>;
                  })}
                </select>
              </div>
              {false && (
                <div className="sh-m">
                  <Tilt tiltMaxAngleX="20" tiltMaxAngleY="20">
                    <img src={`/imgs/cur.png`} alt="" />
                  </Tilt>
                </div>
              )}
              {
                <>
                  <br />
                  <br />
                </>
              }
              {/* <button onClick={(e)=>{setIsDimentsion(!isDimentsion)}} className="btn btn-b">{!isDimentsion?"Basic Calculator":"Calculate Based On Weight Only?"}</button> */}
              {/* <h1>Calculate Your Shiping Cost</h1> */}
              <h1>Where should we be shipping the package to?</h1>
              <br />
              <h1>
                Find the perfect &nbsp;
                <span id="cl-bl">
                  plan for your needs, discover how we can help you save,
                </span>
                &nbsp; or calculate your shipping costs
              </h1>
            </div>
          </div>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="Estimated Price:"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" style={{ color: "#3498db" }}>
              Shipping Prices
            </DialogTitle>
            <DialogContent>
              {isDimentsion || weight ? (
                <DialogContentText id="">
                  <div className="flex justify-center items-center">
                    <div className="modal" style={{ padding: "2rem" }}>
                      <div className="modal-content">
                        <h1 style={{ color: "#ffffff" }}>
                          Shipping Weight: {weight} kg
                        </h1>
                        <h2 style={{ color: "#ffffff" }}>Partner Prices:</h2>
                        <table className="styled-table">
                          {/* ... (rest of the code remains unchanged) */}
                        </table>
                      </div>
                    </div>
                  </div>
                </DialogContentText>
              ) : (
                <DialogContentText id="alert-dialog-description">
                  The estimated price is based on Product weight ({weight}kgs).
                </DialogContentText>
              )}

              {isDimentsion && (
                <DialogContentText id="alert-dialog-description">
                  The volumetric weight is {(height * width * length) / 5000}.
                </DialogContentText>
              )}

              <DialogContentText id="alert-dialog-description">
                <p>
                  <strong>Shipping Charges:</strong> Shipment charges are
                  calculated according to the higher of actual or volumetric
                  weight per piece. The price shown above is to ship your parcel
                  from our warehouse in India to your destination address.
                </p>
                {/* ... (rest of the additional information) */}
              </DialogContentText>
            </DialogContent>
            <DialogActions
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#3498db", marginRight: "1rem" }}>
                Like our price?
              </span>
              <Button
                style={{
                  background: "#3498db",
                  borderRadius: "10px",
                  color: "#ffffff",
                }}
                autoFocus
              >
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Sign Up Now
                </Link>
              </Button>
              <Button
                onClick={handleClose}
                style={{ color: "#3498db" }}
                autoFocus
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>

      {/* CALCULATOR IS ABOVE BELOVE IS DESCRIPTION */}
      <div style={{ background: "white" }}>
        <div id="pl-kd-sec">
          <div className="kd-l">
            <h1>Check our plans for International shipping</h1>
            <p>
              Choose From Our 3 Exciting Plans to Save Upto 80% On International
              Shipping
            </p>
            <Link to="/disp-plan">
              {" "}
              <div className="btn btn-o">Check Now</div>
            </Link>
          </div>
          <div className="kd-r">
            <div className="map-cal">
              <img
                src="/home/food_delivery.gif"
                width={550}
                height={200}
                alt="no"
              />
            </div>
          </div>
        </div>
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

export default Calc;
// <div className="sh-bot">
//   <div className="price">
//     <strong>
//       Estimated Price:
//       <span className="price-value">${price.toFixed(2)}</span>
//     </strong>
//     {showPopup && (
//       <div className="popup" onClick={closePopup}>
//         <p>The estimated price is based on your inputs:</p>
//         {/* <ul>
//           <li>Weight (kg): {weight}</li>
//           <li>Length (cm) Optional: {length}</li>
//           <li>Width (cm) Optional: {width}</li>
//           <li>Height (cm) Optional: {height}</li>
//           <li>Price ($): {price.toFixed(2)}</li>
//         </ul> */}
//         <h1>Price ($): {price.toFixed(2)}</h1>
//         <button className="btn btn-r">Close</button>
//       </div>
//     )}
//   </div>
// </div>;
