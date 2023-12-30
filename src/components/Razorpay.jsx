
import React from 'react'

function Razorpay({amount,currency,reciept}) {
  const backend = process.env.REACT_APP_BACKEND;
  const clientId = process.env.REACT_APP_CLIENTID;
  const paymenthandler = async (e)=>{
    const res = await fetch(`${backend}/getRazorpayOrder/${amount}/${currency}/${reciept}`,{method:'GET'});
    const {order}= await res.json();
    console.log(order);
    var options = {
      "key": clientId, // Enter the Key ID generated from the Dashboard
      "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": order.currency,
      "name": "Your Indian Shop",
      "description": "Test Transaction",
      "image": "https://yourindianshop.com",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler":async function (response){
         // this is after payment accors
        console.log(response);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)

        const validateRes = await fetch(`${backend}/order/validate/${response.razorpay_order_id}/${response.razorpay_payment_id}/${response.razorpay_signature}`,{
            method: "GET",
        }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
        alert('ok2')
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
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
  }
  return (
    <div>
      <button onClick={paymenthandler} style={{width:'100%',margin:'10px 0',backgroundColor:"#3399cc",color:'white',padding:'12px',borderRadius:'4px'}}>Pay with Razorpay</button>
    </div>
  )
}

export default Razorpay;