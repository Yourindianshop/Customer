import React, { useState } from 'react'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
function Paypal({afterpayment,amount}) {
    const [orderId,setOrderId]=useState("");
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    const onApprove =async (data,actions)=>{
        return actions.order.capture().then(function (details){
            const {payer}=details;
            setSuccess(true);
            afterpayment();
        })
    }
    const createOrder=(data,actions)=>{
        setError(false);
        return actions.order.create({
            purchase_units:[{
                    description:'Book',
                    amount: {
                        currency_code: 'USD',
                        value: parseInt(amount)
                    },
            }],
            application_context:{
                shipping_preference:"NO_SHIPPING"
            }
        }).then((orderID)=>{
            setOrderId(orderID);
            return orderID
        })
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
                'client-id':"ASMQ8cIBYPm5-ZaxGZhFpodBXIF0n2PBlfyO8mlmGZxoiH0ejWvXGHuZJ3YMH48nocz-2f28DoMhk-ze"
            }}
        >
            {success && <h1>Payment mad successfully</h1>}
            {error && <h1>Some Error occurs</h1>}
            {!success && <PayPalButtons style={{layout:"vertical"}} createOrder={createOrder} onApprove={onApprove} onError={onError}/>}
        </PayPalScriptProvider>
    </div>
  )
}

export default Paypal