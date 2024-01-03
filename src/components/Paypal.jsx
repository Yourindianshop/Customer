import React, { useState } from 'react'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
function Paypal({afterpayment,amount}) {
    const [orderId,setOrderId]=useState("");
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    const clientId = process.env.REACT_APP_PAYPAL_CLIENTID;
    const currency = process.env.REACT_APP_PAYPAL_CURENCY;
    // const currency = 'USD';
    const backend = process.env.REACT_APP_BACKEND;
    const intent = "capture";
    const paypal_sdk_url = "https://www.paypal.com/sdk/js";

    const onApprove =async (data,actions)=>{
        return actions.order.capture().then(function (details){
            const {payer}=details;
            setSuccess(true);
            afterpayment();
        })
    }
    async function handleResponse(response) {
        try {
          const jsonResponse = await response.json();
          return {
            jsonResponse,
            httpStatusCode: response.status,
          };
        } catch (err) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
    }
    const createOrder=async (data,actions)=>{
        setError(false);
        return actions.order.create({
            purchase_units:[{
                    description:'Book',
                    amount: {
                        currency_code: currency,
                        value: parseInt(amount)
                    },
            }],
            application_context:{
                shipping_preference:"NO_SHIPPING"
            }
        }).then((orderID)=>{
            setOrderId(orderID);
            return orderID;
        })
    }

    const onApprove2 = async (data,actions)=>{
      let order_id = data.orderID;
      console.log("orderId in onApprove",order_id);
      return fetch(`${backend}/complete_order`, {
          method: "post", headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({
              "intent": intent,
              "order_id": order_id
          })
      })
      .then((response) => response.json())
      .then((order_details) => {
          console.log(order_details); //https://developer.paypal.com/docs/api/orders/v2/#orders_capture!c=201&path=create_time&t=response
          let intent_object = intent === "authorize" ? "authorizations" : "captures";
          console.log("intent Object in onApprove",intent_object);
          setSuccess(true);
          afterpayment();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const createOrder2 = async (data,actions)=>{
      console.log("inCreate Order");
      return fetch(`${backend}/create_order`, {
        method: "post", headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ "intent": intent })
    })
    .then((response) => response.json())
    .then((order) => { return order.id; });
    }
    const onError = (data,actions)=>{
        setError(true);
        console.log(data);
    }
    return (
        // email = sb-dni2e27248921@personal.example.com
        // passworxd = ")P;#l@L5"
    <div>
        <PayPalScriptProvider
          options={{
            'clientId':clientId,
            'intent':intent,
            'currency': currency
          }}
        >
            {success && <h1>Payment mad successfully</h1>}
            {error && <h1>Some Error occurs</h1>}
            {!success && <PayPalButtons
                style={{layout:"vertical"}} 
                onClick={()=>{ }}
                createOrder={createOrder2} 
                onApprove={onApprove2} 
                onError={onError}
            />}
        </PayPalScriptProvider>
    </div>
  )
}

export default Paypal