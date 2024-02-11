import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Tilt from "react-parallax-tilt";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { fetchreq } from "../../Helper/fetch";
import { Link } from "react-router-dom";

import "./Calci.css";

const Calci = () => {
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
    if (cp === -1) {
      alert("please Select Coutry...");
    } else if (
      weight === "" ||
      length === "" ||
      width === "" ||
      height === ""
    ) {
      if (weight !== "") {
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
    if (cp === -1) {
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
      <div className="testimoinals-head sm:mt-12">
        <h1>
          Shipping <span>Calculator</span>
        </h1>
        <h4>Ship Your products from a variety of Indian sites</h4>
      </div>
      <div className="cal-box ">
        <div className="sh-top">
          <div className="sh-l">
            <div className="sh-r">
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
                      label="Length (cm)"
                      placeholder="Optional"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                    />
                    <TextField
                      className="nor-feild"
                      id="outlined"
                      type="number"
                      label="Width (cm)"
                      placeholder="Optional"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                    <TextField
                      className="nor-feild"
                      id="outlined"
                      type="number"
                      label="Height (cm)"
                      placeholder="Optional"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </Box>
              </div>
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
              <button
                className="nav-btn-2"
                onClick={isDimentsion ? calculatePrice : calculatePrice2}
              >
                Calculate Now
              </button>
            </div>

            {false && (
              <div className="sh-m">
                <Tilt tiltMaxAngleX="20" tiltMaxAngleY="20">
                  <img src={`/imgs/cur.png`} alt="" />
                </Tilt>
              </div>
            )}
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
          <DialogTitle id="alert-dialog-title" className="dialog-title">
            Shipping Prices
          </DialogTitle>
          <DialogContent>
            {isDimentsion || weight ? (
              <DialogContentText id="">
                <div className="flex justify-center items-center">
                  <div className="modal" style={{ padding: "2rem" }}>
                    <div className="modal-content">
                      <h3 style={{ color: "#000" }}>
                        Shipping Weight: {weight} kg
                      </h3>
                      <h2 style={{ color: "#ffffff" }}>Partner Prices:</h2>
                      <table className="styled-table">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Shipper</th>
                            <th>Standard Price</th>
                            <th>YIS Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {shippingData?.map((shipping, index) => (
                            <tr key={shipping.id}>
                              <td>{shipping.ID}</td>
                              <td>{shipping.NAME}</td>
                              <td>
                                {isFirstGreater(volumetriweight, weight)
                                  ? (
                                      (volumetriweight * shipping.PRICE) /
                                      50
                                    ).toFixed(2)
                                  : ((weight * shipping.PRICE) / 500).toFixed(
                                      2
                                    )}
                              </td>
                              <td>
                                {isFirstGreater(volumetriweight, weight)
                                  ? (
                                      (volumetriweight * shipping.PRICE * 0.9) /
                                      50
                                    ).toFixed(2)
                                  : (
                                      (weight * shipping.PRICE * 0.9) /
                                      500
                                    ).toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
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
          <DialogActions className="dialog-actions">
            <span className="like-our-price">Like our price?</span>
            <Button className="signup-button" autoFocus>
              <Link to="/signup" className="signup-link">
                Sign Up Now
              </Link>
            </Button>
            <Button onClick={handleClose} className="close-button" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Calci;
