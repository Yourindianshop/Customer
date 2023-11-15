import React, { useContext, useEffect, useState } from "react";
import "../../stylesheet/dashboard/Profile.css";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { fetchreq } from "../../Helper/fetch";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {user,isLogin}=useContext(MyContext);
  const nav = useNavigate();
  const [ad,setAd]=useState(null);
  
  const [userData, setUserData] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Update user data in your database or state management here
  };


  const handleCopyClick = (userData) => {
    const virtualAddress = `${userData?.Name},\n${userData?.Address},\n${userData?.Address2},\n${userData?.Landmark},\n${userData?.City}, ${userData?.State} - ${userData?.pincode},\n${userData?.Country}`;
    // console.log(virtualAddress)
    navigator.clipboard.writeText(virtualAddress);
  };
  const loadAddress = async ()=>{
    const dt = await fetchreq('GET',`Warehouse/${user?.Cid}`,{});
    dt?setAd(dt?.result):setAd([]);
  }
  useEffect(()=>{
    if(!isLogin){
      nav("/");
    }else{
      loadAddress();
    }
  },[])

  return (
    <div className="dashboard-profile">
      <div className="top">
          <img src="/imgs1/man-mask.jpg" height={220} width={200} className="img-profile" />
          <h1 className="name">{userData?.Name}</h1>
      </div>
      <div id="pfl">
        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Id:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData?.email}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Name:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.Name}
                onChange={(e) =>
                  setUserData({ ...userData, Name: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData?.Name}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone Number:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.phoneNo}
                onChange={(e) =>
                  setUserData({ ...userData, phoneNo: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData?.phoneNo}</span>
            )}
          </div>
          
          <h1 style={{paddingLeft: '15px'}}>Your Virtual address</h1>

          { ad && ad.length!=0 && ad.map((a)=>{
            return <>
            <div className="detail-item">
            <span className="detail-label">WareHouse Name:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.Address}
                onChange={(e) =>
                  setUserData({ ...userData, Address: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{a?.Name}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Address Line 1:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.Address}
                onChange={(e) =>
                  setUserData({ ...userData, Address: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{a?.Address}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Address Line 2:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.Address2}
                onChange={(e) =>
                  setUserData({ ...userData, Address2: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{a?.Address2}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Landmark:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.Landmark}
                onChange={(e) =>
                  setUserData({ ...userData, Landmark: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{a?.Landmark}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">City:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.City}
                onChange={(e) =>
                  setUserData({ ...userData, City: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{a?.City}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">State:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.State}
                onChange={(e) =>
                  setUserData({ ...userData, State: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{a?.State}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Pincode:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.pincode}
                onChange={(e) =>
                  setUserData({ ...userData, pincode: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{a?.pincode}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Country:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData?.pincode}
                onChange={(e) =>
                  setUserData({ ...userData, pincode: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{a?.Country}</span>
            )}
          </div>
        <div>
          <button className="copy-button" onClick={()=>handleCopyClick(a)}>
            Copy Virtual Address  
          </button>
          {/* {isEditing ? (
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
          )} */}
        </div>
          </>

          }) 
          }
          {ad && ad.length==0 && <p>No Data found</p> }
          {!ad && <p>Loading...</p> }
        </div>
        
      </div>{" "}
    </div>
  );
};

export default Profile;
