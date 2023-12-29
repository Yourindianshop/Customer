import React, { useState } from 'react'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
function Paypal({afterpayment,amount}) {
    const [orderId,setOrderId]=useState("");
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    const clientId = process.env.REACT_APP_PAYPAL_CLIENTID;
    const secretId = process.env.REACT_APP_PAYPAL_SECRET;
    const environment = process.env.REACT_APP_PAYPAL_ENV;
    const currency = process.env.REACT_APP_PAYPAL_CURENCY;
    const base = process.env.REACT_APP_PAYPAL_BASE;

    const onApprove =async (data,actions)=>{
        return actions.order.capture().then(function (details){
            const {payer}=details;
            setSuccess(true);
            afterpayment();
        })
    }
    const generateAccessToken = async () => {
        try {
          if (!clientId || !secretId) {
            throw new Error("MISSING_API_CREDENTIALS");
          }
          const auth = Buffer.from(
            clientId + ":" + secretId,
          ).toString("base64");
          const response = await fetch(`${base}/v1/oauth2/token`, {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
              Authorization: `Basic ${auth}`,
            },
          });
          
          const data = await response.json();
          return data.access_token;
        } catch (error) {
          console.error("Failed to generate Access Token:", error);
        }
    };
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
    const createOrder2 = async (data,actions)=>{
        const accessToken = await generateAccessToken();
        const url = `${base}/v2/checkout/orders`;
        const payload = {
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: parseInt(amount),
                },
              },
            ],
        };
        const response = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            method: "POST",
            body: JSON.stringify(payload),
        }); 
        return handleResponse(response);
    }
    const onError = (data,actions)=>{
        setError(true);
        console.log(data);
    }
    
    return (
        // email = sb-dni2e27248921@personal.example.com
        // passworxd = ")P;#l@L5"
    <div>
        <PayPalScriptProvider>
            {success && <h1>Payment mad successfully</h1>}
            {error && <h1>Some Error occurs</h1>}
            {!success && <PayPalButtons 
                style={{layout:"vertical"}} 
                createOrder={createOrder2} 
                onApprove={onApprove} 
                onError={onError}/>}
        </PayPalScriptProvider>
    </div>
  )
}

export default Paypal