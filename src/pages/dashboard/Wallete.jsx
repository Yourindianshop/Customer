import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { fetchreq, getDate } from "../../Helper/fetch";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./Wallet.css";

function Wallete() {
  const nav = useNavigate();
  const backend = process.env.REACT_APP_BACKEND;
  const clientId = process.env.REACT_APP_PAYPAL_CLIENTID;
  const currency2 = process.env.REACT_APP_PAYPAL_CURENCY;
  const clinetSec = process.env.REACT_APP_PAYPAL_CLIENTSEC;
  const environment = "sandbox";
  const endpoint_url = "https://api-m.sandbox.paypal.com";
  const intent = "capture";
  const paypal_sdk_url = "https://www.paypal.com/sdk/js";
  const { isLogin, user, setUser, isFromPlan, setIsFromPlan } =
    useContext(MyContext);
  const [transaction, setTransaction] = useState(null);
  const [isClick, setIsclick] = useState(false);
  const [isClick2, setIsclick2] = useState(false);
  const [payment, setPayment] = useState(false);
  const [amount, setAmount] = useState(0);

  const loadTransaction = async () => {
    const dt = await fetchreq("GET", `transaction/${user?.Cid}?pg=1`, {});
    dt ? setTransaction(dt.result) : setTransaction([]);
  };
  const handlesubmit = async (e) => {
    if (amount <= 0) {
      alert("invalid amount");
    } else {
      const body = {
        Cid: user.Cid,
        amount: amount,
        note: "added by you",
      };
      const dt = await fetchreq("POST", "transaction", body);
      if (dt) {
        await fetchreq("GET", `updateWallate/${user?.Cid}`, {});
        let us = user;
        us.Wallete = parseInt(user.Wallete) + parseInt(amount);
        setUser(us);
        loadTransaction();
      } else {
        alert("something went wrong");
      }
      setPayment(false);
      setIsclick(false);
      setIsclick2(false);
      setAmount(0);
      alert("Transaction Successfully");
      if (isFromPlan) {
        setIsFromPlan(false);
        nav("/select-warehouse");
      }
    }
  };
  const handlesubmit2 = async (e) => {
    e.preventDefault();
    const curamount = parseInt(user?.Wallete);
    if (amount <= 0 || amount > curamount) {
      alert("invalid Amount");
    } else {
      const body = {
        Cid: user.Cid,
        amount: 0 - parseInt(amount),
        note: "Withdraw by you",
      };
      const dt = await fetchreq("POST", "transaction", body);
      if (dt) {
        await fetchreq("GET", `updateWallate/${user?.Cid}`, {});
        let us = user;
        us.Wallete = parseInt(user.Wallete) - parseInt(amount);
        setUser(us);
        loadTransaction();
      } else {
        alert("something went wrong");
      }
      setIsclick(false);
      setIsclick2(false);
      setAmount(0);
    }
  };
  const showpaymentButton = (e) => {
    e.preventDefault();
    if (amount > 0) {
      setPayment(true);
    } else {
      setPayment(false);
    }
  };
  const [orderId, setOrderId] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const onApprove = async (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      handlesubmit();
    });
  };
  const createOrder = (data, actions) => {
    setError(false);
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Book",
            amount: {
              currency_code: "USD",
              value: parseInt(amount),
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderId(orderID);
        return orderID;
      });
  };
  const onError = (data, actions) => {
    setError(true);
    console.log(data);
  };
  // const onApprove2 = async (data, actions) => {
  //   let order_id = data.orderID;
  //   console.log("orderId in onApprove", order_id);
  //   return await fetch(`${backend}/complete_order`, {
  //     method: "post",
  //     headers: { "Content-Type": "application/json; charset=utf-8" },
  //     body: JSON.stringify({
  //       intent: intent,
  //       order_id: order_id,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((order_details) => {
  //       console.log(order_details); //https://developer.paypal.com/docs/api/orders/v2/#orders_capture!c=201&path=create_time&t=response
  //       let intent_object =
  //         intent === "authorize" ? "authorizations" : "captures";
  //       console.log("intent Object in onApprove", intent_object);
  //       setSuccess(true);
  //       handlesubmit();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // async function get_access_token() {
  //   console.log("generate token");
  //   const auth = `${clientId}:${clinetSec}`;
  //   const data = "grant_type=client_credentials";
  //   return fetch(endpoint_url + "/v1/oauth2/token", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Authorization: `Basic ${Buffer.from(auth).toString("base64")}`,
  //     },
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       return json.access_token;
  //     });
  // }

  // const createOrder2 = async (data, actions) => {
  //   alert("creating Order...");
  //   return await fetch(`${backend}/create_order`, {
  //     method: "post",
  //     headers: { "Content-Type": "application/json; charset=utf-8" },
  //     body: JSON.stringify({ intent: intent }),
  //   })
  //     .then((response) => response.json())
  //     .then((order) => {
  //       alert(order.id);
  //       return order.id;
  //     });
  // };



  // RAZORPAY
  const rclientId = process.env.REACT_APP_CLIENTID;
  const currency = "INR";
  const reciept = "YIS31";

  const paymenthandler = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${backend}/getRazorpayOrder/${amount * 100}/${currency}/${reciept}`,
      { method: "GET" }
    );
    const { order } = await res.json();
    // console.log(order);
    var options = {
      key: rclientId, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "Your Indian Shop",
      description: "Test Transaction",
      image: "https://yourindianshop.com",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        // this is after payment accors
        // console.log(response);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)

        const validateRes = await fetch(
          `${backend}/order/validate/${response.razorpay_order_id}/${response.razorpay_payment_id}/${response.razorpay_signature}`,
          {
            method: "GET",
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
        alert("Transaction Successfully done");
        setIsclick(false);
        setAmount(0);
        setPayment(false);
        setSuccess(true);
        handlesubmit();
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
      // alert('Error');
    });
    rzp1.open();
    e.preventDefault();
  };

  useEffect(() => {
    if (!isLogin) {
      nav("/");
    } else {
      loadTransaction();
      if (isFromPlan) {
        setIsclick(true);
        setIsclick2(false);
        setAmount(isFromPlan - user?.Wallete);
        setPayment(true);
      }
    }
  }, []);

  return (
    <div id="par-ct" className="wallet-container">
      <div id="l-title" className="no-mar">
        <div className="plan-page-title">
          <span id="org">Wallet</span>
          <span id="wt">Balance:</span>
          <span id="wt">₹{user?.Wallete}</span>
        </div>
        <div>
          {isClick && (
            <form className="pay-cd">
              <button
                className="btn-r"
                onClick={() => {
                  setIsclick(false);
                  setAmount(0);
                  setPayment(false);
                }}
              >
                X
              </button>
              <h1>Add Money To Your Wallet</h1>
              {!payment && (
                <input
                  style={{
                    color: "#000",
                    borderRadius: "8px",
                    borderBottom: "0 !important",
                  }}
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    console.log(amount);
                  }}
                  type="number"
                  placeholder="Enter Amount to Add"
                />
              )}
              {!payment && (
                <button onClick={showpaymentButton} className="btn btn-o-1">
                  Pay to Wallet
                </button>
              )}

              {payment && (
                <div className="credit-card">
                  <button
                    onClick={paymenthandler}
                    style={{
                      width: "100%",
                      margin: "10px 0",
                      backgroundColor: "#3399cc",
                      color: "white",
                      padding: "12px",
                      borderRadius: "4px",
                    }}
                  >
                    Razorpay
                  </button>
                  <PayPalScriptProvider
                    options={{
                      "client-id": clientId,
                      currency: currency2,
                    }}
                  >
                    {success && <h1>Payment mad successfully</h1>}
                    {error && <h1>Some Error Occurs</h1>}
                    {!success && (
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                      />
                    )}
                  </PayPalScriptProvider>
                </div>
              )}
            </form>
          )}
          {isClick2 && (
            <form onSubmit={handlesubmit2} className="pay-cd">
              <button
                onClick={() => {
                  setIsclick2(false);
                }}
              >
                X
              </button>
              <h1>Transfer to Bank</h1>
              <input
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                type="number"
                placeholder="Enter Amount to Add"
              />
              <button type="submit" className="btn btn-o-1">
                Transfer to Bank
              </button>
            </form>
          )}
          <button
            onClick={() => {
              setSuccess(false);
              setIsclick(true);
              setIsclick2(false);
            }}
            className="btn btn-o-1"
          >
            Add Money To Wallet
          </button>
        </div>
      </div>
      <br />
      {/* <button onClick={()=>{setIsclick(false);setIsclick2(true)}} className='btn btn-b'>Transfer to Bank</button> */}

      <table className="table-auto w-full">
        <thead className="bg-gray-200">
          <tr>
            <th scope="col" className="text-primary">
              Tid
            </th>
            <th scope="col" className="text-primary">
              Note
            </th>
            <th scope="col" className="text-primary">
              Amount
            </th>
            <th scope="col" className="text-primary">
              Date
            </th>
            <th scope="col" className="text-primary">
              Mode
            </th>
          </tr>
        </thead>
        <tbody>
          {transaction && transaction.length !== 0 ? (
            transaction.map((t) => {
              const dt = getDate(t.time);
              const mode = t.Status === 0 ? "Wallet" : "Manual";
              return (
                <tr key={t.Tid} className="border-b">
                  <td data-label="Account">{t.Tid}</td>
                  <td data-label="Note">{t.note}</td>
                  <td data-label="Amount">{t.amount}</td>
                  <td data-label="Date">{dt}</td>
                  <td data-label="Mode">{mode}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5" className="py-4 text-center">
                {transaction && transaction.length === 0
                  ? "No data found"
                  : "Loading..."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Wallete;
