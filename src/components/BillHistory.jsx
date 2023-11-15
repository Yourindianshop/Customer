import React, { useEffect, useState } from 'react'
import { fetchreq, getDate } from '../Helper/fetch';

function BillHistory({Bid}) {
    const [bilHistory,setBidHistory]=useState(null);
    const loadBidHistory = async ()=>{
        const dt = await fetchreq("GET",`getPaymentHistory/${Bid}`,{});
        dt?setBidHistory(dt.result):setBidHistory([]);
    }
    useEffect(()=>{
        loadBidHistory();
    },[])
  return (
    <div>
      <h3>Billing Histroy</h3>
      {bilHistory ? bilHistory.map((b)=>{
        return <div>
            <p>PaymentId: {b.Pid}</p>
            <p>amountPaid: {b.amount}</p>
            <p>Paidtime: {getDate(b.time)}</p>
        </div>
      }): <p>Loading...</p> }
      {bilHistory &&  bilHistory.legth==0 && <p>No data found</p> }
    </div>
  )
}

export default BillHistory
