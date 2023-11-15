import React, { useCallback, useContext, useEffect } from 'react'
import { MyContext } from '../App'
import { useNavigate } from 'react-router-dom';
import AssistedPurchase from '../pages/dashboard/AssistedPurchase';

function WhiteLabeling() {
  const {isBLogin}=useContext(MyContext);
  const nav = useNavigate()
  useEffect(()=>{
    if(!isBLogin){
      nav("/");
    }
  },[])
  return (
    <div>
      <AssistedPurchase WhiteLabeling={true}/>
    </div>
  )
}

export default WhiteLabeling
