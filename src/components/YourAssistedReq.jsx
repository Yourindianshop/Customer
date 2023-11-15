import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App'
import { useNavigate } from 'react-router-dom';
import { fetchreq } from '../Helper/fetch';

function YourAssistedReq() {
    const {isLogin,user}=useContext(MyContext);
    const [apr,setApr]=useState([]);
    const url = process.env.REACT_APP_URL;
    const nav = useNavigate();
    const loadReq = async ()=>{
        const dt = await fetchreq("GET",`getAPR/${user?.Cid}`,{});
        dt?setApr(dt.result):setApr(null);
    }
    useEffect(()=>{
        if(isLogin){
            loadReq();
        }else{
            nav("/");
        }
    },[])
  return (
    <div id="as-req">
      {apr.length != 0 &&
        apr.map((a) => {
          return (
            <div key={a.Aid}>
              <img src={`${url}/${a.Images}`} alt="" />
              <p>{a.Name}</p>
              <p>{a.time}</p>
              <p>{a.Brand}</p>
              <p>{a.Description}</p>
              <p>{a.Other}</p>
            </div>
          );
        })}
      {apr == null && <p>No data found</p>}
    </div>
  );
}

export default YourAssistedReq