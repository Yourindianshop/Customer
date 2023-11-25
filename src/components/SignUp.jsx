import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheet/SignIn.css";
import "../stylesheet/SignUp.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import { fetchreq } from "../Helper/fetch";
import emailjs from "@emailjs/browser";
import axios from "axios";

import { Google, WhatsApp } from "@mui/icons-material";
const SignUp = () => {
  const nav = useNavigate();
  const [otp, setOtp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [mobile, setMobile] = useState("");
  const [submit, setSubmit] = useState("Continue");
  const [Address, setAddress] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [State, setState] = useState("");
  const [inputOTP, setInputOTP] = useState("");
  const [code, setCode] = useState(null);
  const [fetchcontries,setFetchcountries]=useState([]);
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    if (password != password2) {
      alert("password not Matched...");
      return;
    } else if (name != "" && email != "" && password != "" && mobile != "") {
      setSubmit("Sending Verification  Mail...");
      let tempcode = Math.round(1000000 * Math.random()).toString();
      const dt = await fetchreq("POST", "sendMail", {
        email,
        subject: "Verification Mail",
        html: `<p>Your Verification Code is ${tempcode}</p>`,
      });
      if (dt) {
        setSubmit("Submit Otp");
        setCode(tempcode);
        setOtp(2);
        alert("email is send to Your Email");
      } else {
        alert("Something Went Wrong...");
        setSubmit("Continue");
      }
    } else {
      alert("please Fill all Details");
    }
  };

  const [isbusiness,setIsBusiness]=useState(false);
  const submitOTP = () => {
    if (code == inputOTP) {
      isbusiness?handlesubmitBC():handlesubmit();
    } else {
      alert("invalid code...");
    }
  };
  const handlesubmit = async () => {
    // e.preventDefault();
    console.log("first")
    if (submit === "Creating...") {
      return;
    }
    setSubmit("Creating...");
    const body = {
      Name: name,
      email,
      phoneNo: mobile,
      password,
      Address: "AG",
      Address2: "Near Bus Stop",
      Landmark:"Zudio",
      City: "Rajkot",
      Contry: "india",
      State: "Gujarat",
      pincode: "361245",
    };
    const allKeysAreNotNull = Object.keys(body).every(
      (key) => body[key] !== null && body[key] !== ""
    );
    if (allKeysAreNotNull && otp) {
      const res = await fetchreq("POST", "addUser", body);
      if (res) {
        alert("SignUp Successfully");
        nav("/SignIn");
      } else {
        alert("Email Already used");
      }
    } else {
      alert("please Fill all details");
    }
    setSubmit("Continue");
  };
  const handlesubmitBC = async ()=>{
    // email,password, name,phone
    console.log("second");
    if (submit === "Creating...") {
      return;
    }
    setSubmit("Creating...");
    const body = {
      name,
      email,
      phone: mobile,
      password: password
    };
    const allKeysAreNotNull = Object.keys(body).every(
      (key) => body[key] !== null && body[key] !== ""
    );
    if (allKeysAreNotNull && otp) {
      const res = await fetchreq("POST", "addBusinessCustomer", body);
      if (res) {
        alert("SignUp Successfully");
        nav("/SignIn");
      } else {
        alert("Email Already used");
      }
    } else {
      alert("please Fill all details");
    }
    setSubmit("Continue");
  }
  const getContries = async ()=>{

    const options = { 
      method: 'GET',
      url: 'https://referential.p.rapidapi.com/v1/country',
      params: {
        fields: 'currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code',
        limit: '250'
      },
      headers: {
        'X-RapidAPI-Key': '1395e9ebccmsh783c01060d65695p1923dajsnb41982eb4bc4',
        'X-RapidAPI-Host': 'referential.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setFetchcountries(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  const getContryCode = async (cname)=>{
    const options = {
      method: 'GET',
      url: 'https://metropolis-api-phone.p.rapidapi.com/iso',
      params: {country: cname},
      headers: {
        'X-RapidAPI-Key': '1395e9ebccmsh783c01060d65695p1923dajsnb41982eb4bc4',
        'X-RapidAPI-Host': 'metropolis-api-phone.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      if(response.status==404){
        return false;
      }else{
        const countryCallingCode = response?.data["country-calling-code"];
        return countryCallingCode;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  useEffect(()=>{
    getContries();
    // getContryCode("india");
  },[])
  return (
    <div id="mcd">
      <section id="SpSignIn" className="spUp">
        <div className="left">
          <div className="data" id="dataverify">
            <header>
              <span id="dg">YourIndianShop</span>
            </header>
            <h2>It only takes a minute to SignUp.</h2>
            {!otp && otp !== 2 && (
              <form onSubmit={sendEmail}>
                {" "}
                <h3>Type</h3>
                <div className="acc-type">
                  <button
                    className={`btn ${isbusiness ? "" : "btn btn-b"}`}
                    onClick={() => {
                      setIsBusiness(false);
                    }}
                  >
                    Personal
                  </button>
                  <button
                    className={`btn ${!isbusiness ? "" : "btn btn-b"}`}
                    onClick={() => {
                      setIsBusiness(true);
                    }}
                  >
                    Business
                  </button>
                </div>
                <h3>Firstname & Lastname</h3>
                <input
                  minLength={2}
                  required
                  type="text"
                  placeholder="Enter your first and last name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <h3>Email</h3>
                <input
                  required
                  maxLength={45}
                  minLength={4}
                  type="email"
                  placeholder="abcd123@xyz.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <h3>Password</h3>
                <input
                  maxLength={25}
                  minLength={4}
                  required
                  type="password"
                  placeholder="●●●●●●●●●●●"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <h3>Confirm Password</h3>
                <input
                  maxLength={25}
                  minLength={4}
                  required
                  type="password"
                  placeholder="●●●●●●●●●●●"
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                />
                <h3>Contry</h3>
                <select >
                  <option value="-1">Select Country</option>
                  {fetchcontries.map((e)=><option>  {e.key} - {e.value}</option>)}
                </select>
                <h3>Mobile No</h3>
                <input
                  required
                  maxLength={10}
                  minLength={10}
                  type="tel"
                  placeholder="Enter Your number"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
                <button type="submit" className="btn btn-blk">
                  {submit}
                </button>
              </form>
            )}
            {otp == 2 && (
              <div>
                <input
                  type="number"
                  value={inputOTP}
                  onChange={(e) => {
                    setInputOTP(e.target.value);
                  }}
                  placeholder="Enter OTP here"
                />
                <button onClick={submitOTP} className="btn btn-blk">
                  {submit}
                </button>
              </div>
            )}
          </div>
          {/* {fetchcontries.map((e)=>{
                return <div>
                  <p>{e.value}</p>
                </div>
              })} */}
          <div id="verify">
            <form
              style={{ display: "none" }}
              // style={{ display: otp == true ? "block" : "none" }}
              onSubmit={handlesubmit}
            >
              <h3>Address Line 1</h3>
              <input
                required
                type="text"
                placeholder="Enter Address Line 1"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <h3>Address Line 2</h3>
              <input
                required
                type="text"
                placeholder="Enter Address Line 2"
                value={Address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
              <h3>State</h3>
              <input
                required
                type="text"
                placeholder="Enter State"
                value={State}
                onChange={(e) => setState(e.target.value)}
              />
              <h3>Landmark</h3>
              <input
                required
                type="text"
                placeholder="Enter Landmark"
                value={Landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
              <h3>City</h3>
              <input
                required
                type="text"
                placeholder="Enter City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
              <h3>Country</h3>
              <input
                required
                type="text"
                placeholder="Enter Country"
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <h3>Pincode</h3>
              <input
                required
                type="text"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <button type="submit" className="btn btn-b">
                Create Account
              </button>
              
            </form>
          </div>
          <p className="last-p">
            Already have an account?
            <Link className="gray" to="/signIn">
              Sign In
            </Link>
          </p>
          {/* <img src="./imgs/sup.png" alt="" /> */}
        </div>
        <div className="right">
          <img className="img1" src="/signup-img/indian.jpg" alt="no"></img>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
