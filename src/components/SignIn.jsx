import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheet/SignIn.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useEffect } from "react";
import { fetchreq, uploadImageAws, jwtauth } from "../Helper/fetch";
import { MyContext } from "../App";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, provider } from "../firebase";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Foot from "./Foot";

const SignIn = () => {
  const { user, setUser, setIsLogin, setIsBLogin, setWh, setWd, isFromPlan } =
    useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setSignin] = useState("Sign In");
  const [isfp, setIsfp] = useState(false);
  const [fpp, setFpp] = useState(false);
  const nav = useNavigate();
  const [check, setCheck] = useState(false);
  const [isbusiness, setIsBusiness] = useState(false);
  const loginwithGoogle = async (email, name) => {
    const dt = await fetchreq("POST", "googleLogin", { name, email });
    if (dt) {
      const dt3 = await fetchreq("GET", `getCustomerbyEmail/${email}`, {});
      setIsLogin(true);
      const out = dt3.result;
      const users = out[0];
      const { token } = dt3.det;
      window.localStorage.setItem("token", JSON.stringify(token));
      setUser(users);
      if (isFromPlan || users.Status == 0) {
        nav("/plan");
      } else {
        nav("/dashboard");
      }
    } else {
      const dt3 = await fetchreq("GET", `getCustomerbyEmail/${email}`, {});
      // console.log(dt3);
      if (dt3 && dt3.result.length > 0) {
        setIsLogin(true);
        const out = dt3.result;
        const users = out[0];
        const { token } = dt3.det;
        window.localStorage.setItem("token", JSON.stringify(token));
        setUser(users);
        if (isFromPlan || users.Status == 0) {
          nav("/plan");
        } else {
          nav("/dashboard");
        }
      } else {
        alert("User Already Exists");
      }
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (signin == "Just A Sec...") {
      return;
    }
    setSignin("Just A Sec...");
    const out = await fetchreq(
      "POST",
      isbusiness ? "loginBusinessCustomer" : "loginUser",
      { email, password }
    );
    if (out) {
      const users = out.user;
      setUser(users);
      if (isbusiness) {
        setIsBLogin(true);
        nav("/WhiteLabeling");
      } else {
        window.localStorage.setItem("token", JSON.stringify(out.token));
        setIsLogin(true);
        if (isFromPlan || users.Status == 0) {
          nav("/plan");
        } else {
          nav("/dashboard");
        }
      }
    } else {
      alert("Invalid Credentials...");
    }
    setSignin("Sign In");
  };
  const forgotpass = async (e) => {
    e.preventDefault();
    setFpp(true);
    const dt = await fetchreq(
      "GET",
      `${isbusiness ? "forgotPassBC" : "forgotPass"}/${email}`,
      {}
    );
    if (dt) {
      if (dt.msg == "ok") {
        alert(" Password Is Sended To your Mail...");
        setIsfp(false);
      } else {
        alert("No User Exists");
      }
    } else {
      alert("Server Error...");
    }
    setFpp(false);
  };
  useEffect(() => {
    window.localStorage.clear();
    setUser(null);
    setIsLogin(false);
    setWh(null);
    setWd(null);
  }, []);
  return (
    <div id="mcd">
      <section id="SpSignIn">
        <div className="left ">
          <div className="data">
            <h2>YourIndianShop</h2>
            {!isfp ? (
              <div>
                <h1>Sign In</h1>
                {/* <h3>Type</h3>
                  <div className="acc-type" >
                   <button className={`btn ${isbusiness?"":"btn btn-b"}`} onClick={()=>{setIsBusiness(false)}}>Personal</button>
                   <button className={`btn ${!isbusiness?"":"btn btn-b"}`} onClick={()=>{setIsBusiness(true)}}>Business</button>
                  </div> */}
                <form className="form-s" onSubmit={handlesubmit}>
                  <h3>Email</h3>
                  <input
                    required
                    maxLength={50}
                    minLength={4}
                    type="email"
                    placeholder="abcd123@xyz.com"
                    value={email}
                    onChange={(d) => {
                      setEmail(d.target.value);
                    }}
                  />
                  <h3>Password</h3>
                  <input
                    required
                    maxLength={30}
                    minLength={4}
                    type={check ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(d) => {
                      setPassword(d.target.value);
                    }}
                  />
                  {password.length >= 4 && (
                    <div
                      style={{
                        display: "flex",
                        textAlign: "left",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          checked={check}
                          onClick={() => {
                            setCheck(!check);
                          }}
                          style={{ width: "20px" }}
                        />
                      </div>
                      <div>
                        <span>Show Password</span>
                      </div>
                    </div>
                  )}
                  <button type="submit" className="btn-signin bg-primary">
                    {signin}
                  </button>

                  {/* <center>
                    <div id="other-s-in">
                    <FacebookRoundedIcon />
                    <button onClick={() => {
                      signInWithPopup(auth, provider)
                        .then((result) => {
                          // The signed-in user info.
                          const user = result.user;
                      
                          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                          const credential = FacebookAuthProvider.credentialFromResult(result);
                          const accessToken = credential.accessToken;
                          
                          // IdP data available using getAdditionalUserInfo(result)
                          // ...
                        })
                        .catch((error) => {
                          // Handle Errors here.
                          const errorCode = error.code;
                          const errorMessage = error.message;
                          // The email of the user's account used.
                          const email = error.customData.email;
                          // The AuthCredential type that was used.
                          const credential = FacebookAuthProvider.credentialFromError(error);
                          
                          // ...
                        });
                      }}>
                      Sign up with facebook
                      </button>
                      </div>
                    </center> */}
                </form>
                {!isbusiness && (
                  <center>
                    <div id="other-s-in">
                      <GoogleIcon />
                      <button
                        onClick={async () => {
                          await signInWithPopup(auth, provider)
                            .then(async (result) => {
                              const credential =
                                GoogleAuthProvider.credentialFromResult(result);
                              const token = credential.accessToken;
                              const user = result.user;
                              const name = user.displayName;
                              const email = user.email;
                              const profileUrl = user.profileUrl;
                              const emailAuth = user.emailVerified;
                              if (emailAuth) {
                                await loginwithGoogle(email, name);
                              } else {
                                alert("email is Not Verified...");
                              }
                            })
                            .catch((error) => {
                              const errorCode = error.code;
                              const errorMessage = error.message;
                              const email = error.customData.email;
                              const credential =
                                GoogleAuthProvider.credentialFromError(error);
                              // ...
                            });
                        }}
                      >
                        Sign up with google
                      </button>
                    </div>
                  </center>
                )}
                <div className="last-p">
                  <br />
                  <p className="last-p">
                    Don't remember your password?
                    <Link
                      onClick={() => {
                        setIsfp(true);
                      }}
                      className="gray"
                    >
                      Forget Password
                    </Link>
                  </p>
                  <p className="last-p">
                    Don't have an account?
                    <Link to={"/signup"} className="gray">
                      Create Account
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h2>
                  Forgot Password for{" "}
                  {isbusiness ? "Business Account" : "Customer"}
                </h2>
                <form onSubmit={forgotpass}>
                  <h3>Email</h3>
                  <input
                    required
                    maxLength={50}
                    minLength={4}
                    type="email"
                    placeholder="abcd123@xyz.com"
                    value={email}
                    onChange={(d) => {
                      setEmail(d.target.value);
                    }}
                  />
                  <button disabled={fpp} type="submit" className="btn btn-blk">
                    {!fpp ? "Send Email" : "Sending Mail..."}
                  </button>
                </form>
                <br />
                <br />
                <br />
                <p>
                  <Link
                    onClick={() => {
                      setIsfp(false);
                    }}
                    className="gray"
                  >
                    Back to Login?
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="right">
          <img className="img1" src="/signup-img/img-2.jpg" alt="no"></img>
        </div>
      </section>
      {/* <Foot /> */}
    </div>
  );
};

export default SignIn;
