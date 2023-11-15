import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../App';
import { fetchreq, getDate } from '../../Helper/fetch';
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'

function Wallete() {
    const nav = useNavigate();
    const clientId = "ASMQ8cIBYPm5-ZaxGZhFpodBXIF0n2PBlfyO8mlmGZxoiH0ejWvXGHuZJ3YMH48nocz-2f28DoMhk-ze"
    const {isLogin,user,setUser}=useContext(MyContext)
    const [transaction,setTransaction]=useState(null);
    const [isClick,setIsclick]=useState(false);
    const [isClick2,setIsclick2]=useState(false);
    const [payment,setPayment]=useState(false);
    const [amount,setAmount]=useState(0);
    const loadTransaction = async ()=>{
        const dt = await fetchreq("GET",`transaction/${user?.Cid}?pg=1`,{});
        dt?setTransaction(dt.result):setTransaction([]);
    }
    const handlesubmit = async (e)=>{
        if(amount <=0){
            alert("invalid amount");
        }else{
            const body = {
                Cid : user.Cid,
                amount: amount,
                note: "added by you"
            }
            const dt = await fetchreq("POST","transaction",body);
            if(dt){
                await fetchreq("GET",`updateWallate/${user?.Cid}`,{})
                let us = user;
                us.Wallete = parseInt(user.Wallete)+parseInt(amount);
                setUser(us);
                loadTransaction();
            }else{
                alert("something went wrong")
            }
            setIsclick(false);
            setIsclick2(false);
            setAmount(0)
            alert("Transaction Successfully")
        }
    }
    const handlesubmit2 =async (e)=>{
        e.preventDefault()
        const curamount = parseInt(user?.Wallete);
        if(amount<=0 || amount>curamount){
            alert("invalid Amount");
        }else{
            const body = {
                Cid : user.Cid,
                amount: 0-parseInt(amount),
                note: "Withdraw by you"
            }
            const dt = await fetchreq("POST","transaction",body);
            if(dt){
                await fetchreq("GET",`updateWallate/${user?.Cid}`,{})
                let us = user;
                us.Wallete = parseInt(user.Wallete)-parseInt(amount);
                setUser(us);
                loadTransaction();
            }else{
                alert("something went wrong")
            }
            setIsclick(false);
            setIsclick2(false);
            setAmount(0)
        }
    }
    const showpaymentButton = (e)=>{
        e.preventDefault();
        if(amount>0){
            setPayment(true);
        }else{
            setPayment(false);
        }
    }
    const [orderId,setOrderId]=useState("");
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    const onApprove =async (data,actions)=>{
        return actions.order.capture().then(function (details){
            const {payer}=details;
            setSuccess(true)
            handlesubmit();
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
    useEffect(()=>{
        if(!isLogin){
            nav("/")
        }else{
            loadTransaction()
        }
    },[])
    
  return (
    <div id="par-ct">
      <div id="l-title" className="no-mar">
        <div className="plan-page-title">
          <span id="org">Wallet</span>
          <span id="wt">Balance:</span>
          <span id="lime">₹{user?.Wallete}</span>
        </div>
        <div>
          {isClick && (
            <form className="pay-cd">
              <button
                className="btn-r"
                onClick={() => {
                  setIsclick(false);
                }}
              >
                X
              </button>
              <h1>Add Money To Your Wallet</h1>
              <input
                style={{color: "#000", borderRadius: "8px", borderBottom: "0 !important"}}
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  console.log(amount);
                }}
                type="number"
                placeholder="Enter Amount to Add"
              />
              <button onClick={showpaymentButton} className="btn btn-o-1">
                Pay to Wallet
              </button>

              {payment && (
                <div className='credit-card'>

                <PayPalScriptProvider
                  options={{
                    "client-id": clientId,
                  }}
                  >
                  {success && <h1>Payment mad successfully</h1>}
                  {error && <h1>Some Error occurs</h1>}
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
      <table className="par-table">
        <thead>
          <tr>
            <th>Tid</th>
            <th>Note</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {transaction &&
            transaction.length !== 0 &&
            transaction.map((t) => {
              const dt = getDate(t.time);
              const mode = t.Status === 0 ? "Wallet" : "Manual";
              return (
                <tr key={t.Tid}>
                  <td>{t.Tid}</td>
                  <td>{t.note}</td>
                  <td>{t.amount}</td>
                  <td>{dt}</td>
                  <td>{mode}</td>
                </tr>
              );
            })}
          {transaction && transaction.length === 0 && (
            <tr>
              <td colSpan="5">No data found</td>
            </tr>
          )}
          {!transaction && (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Wallete