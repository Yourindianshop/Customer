import React, { useContext, useEffect, useState } from 'react'
import {
    // Calculate,
    FlightTakeoff,
    Instagram,
    Star,
    StarBorder,
    StarHalf,
    Twitter,
  } from "@mui/icons-material";
import { MyContext } from '../../App';
import { fetchreq } from '../../Helper/fetch';
import { useNavigate } from 'react-router-dom';

function Reviews() {
    const star = [1,2,3,4,5];
    const [curStar,setCurStar]=useState(0);
    const [review,setReview]=useState(null);
    const {user,isLogin}=useContext(MyContext);
    const nav = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const cid = user.Cid;
        const obj = {Review:review,Star:curStar,Cid:cid}
        const dt = await fetchreq("post","addReview",obj);
        if(dt){alert("Review Send Successfully"); nav("/dashboard")}else{ alert("something Went wrong")}
    }
    useEffect(()=>{
        if(!isLogin){
            nav('/')
        }
    },[])
  return (
    <div>
      <h1 >Review Section</h1>
      <form onSubmit={handleSubmit}  style={{height:'60dvh',display:'flex',flexDirection:'column',gap:'10px',justifyContent:'center',alignItems:'center'}}>
        <label>Give Us Review</label>
        <textarea value={review} onChange={(e)=>setReview(e.target.value)} placeholder='Enter Your Review Here' required minLength={10}  />
        <label>Give Rating</label>
        <div style={{display:'flex'}}>
            {star.map((s)=>{
                return ( <div onClick={()=>{
                    setCurStar(s);
                }}>
                     {curStar<s ? <StarBorder/> : <Star/>}
                </div> )
            })}
        </div>
        { curStar!=0 &&  <button type='submit' className='btn btn-b'>Submit</button>}
      </form>
    </div>
  )
}

export default Reviews
