import React, { useContext, useEffect, useState } from "react";
import "../../stylesheet/dashboard/Profile.css";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { fetchreq } from "../../Helper/fetch";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditing2, setIsEditing2] = useState(false);
  const { user, isLogin, setUser } = useContext(MyContext);
  const nav = useNavigate();
  const [ad, setAd] = useState(null);

  const [userData, setUserData] = useState(user);

  const handleEditClick = async () => {
    if (isEditing2) {
      // console.log(userData);
      const res = await fetchreq("POST", "ChangeAddress", { user: userData });
      res ? setUser(userData) : alert("Address not changed");
      setIsEditing2(false);
    } else {
      setIsEditing2(true);
    }
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
  const loadAddress = async () => {
    const dt = await fetchreq("GET", `Warehouse/${user?.Cid}`, {});
    dt ? setAd(dt?.result) : setAd([]);
  };
  useEffect(() => {
    if (!isLogin) {
      nav("/");
    } else {
      loadAddress();
    }
  }, []);
  // Function to render a card with an image, input or value, and a backdrop-blur effect
  function renderCard(imageSrc, inputType, value) {
    return (
      <div className="ml-10 p-4 sm:ml-5 sm:mr-10 backdrop-blur-md flex items-center bg-opacity-40 bg-gradient-to-r rounded-lg from-[#000000] via-[#333333] to-[#000000]">
        <img src={`/${imageSrc}`} alt={inputType} className="w-10 h-10" />
        {isEditing ? (
          <input
            type="text"
            value={value}
            onChange={(e) =>
              setUserData({ ...userData, [inputType]: e.target.value })
            }
            className="text-primary-light items-center bg-transparent border-none"
          />
        ) : (
          <span className="detail-value text-primary-light">{value}</span>
        )}
      </div>
    );
  }
  // Function to render the wallet card with an image and wallet amount
  function renderWalletCard(imageSrc, walletAmount) {
    return (
      <div className="mr-10 p-4 gap-5 sm:ml-5 backdrop-blur-md flex items-center bg-opacity-40 bg-gradient-to-r rounded-lg from-[#000000] via-[#333333] to-[#000000]">
        <img src={`/${imageSrc}`} alt="wallet" className="w-10 h-10" />
        <span id="lime" className="ml-2">
          ₹{walletAmount}
        </span>
      </div>
    );
  }

  return (
    <div id="dash-pro-item" className="article-container">
      <div className="flex justify-center sm:justify-start">
        <div className="  w-[95%] h-auto sm:w-[100%] bg-gradient-to-r sm:rounded-none from-[#262626] via-[#333333] to-[#404040] sm:mt-0">
          <h1 className="text-primary-light p-4 ml-10 sm:ml-0">
            Dashboard OverView
          </h1>
          <div className="ml-10 p-4 text-6xl font-sans uppercase text-primary-light sm:text-3xl sm:ml-4 sm:p-0">
            Hello {userData?.Name} 👋
          </div>
          <div className="flex justify-between sm:flex-col">
            <div className="flex mt-5 sm:flex-col sm:gap-5">
              {renderCard("id.png", "email", userData?.email)}
              {renderCard("call.png", "phoneNo", userData?.phoneNo)}
            </div>
            <div className="mt-5">
              {renderWalletCard("wallet.png", user?.Wallete)}
            </div>
          </div>
          <div className="p-4 ml-10 mt-10 mb-10 rounded-xl w-[94%] sm:w-[80%] sm:p-2 sm:mr-10 sm:mt-5 sm:ml-5 backdrop-blur-md bg-gradient-to-r from-[#00000080] to-[#00000040] flex justify-between">
            <div>
              <h1 className=" text-sm text-primary-light">
                Your Virtual address
              </h1>

              {ad &&
                ad.length != 0 &&
                ad.map((a) => {
                  return (
                    <div className="ml-3 sm:ml-0">
                      <div className="detail-item mt-7 sm:mt-3">
                        {isEditing ? (
                          <input
                            type="text"
                            value={userData?.Address}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                Address: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <h1 className="capitalize text-primary-light text-3xl sm:text-2xl">
                            {a?.Name}
                          </h1>
                        )}
                      </div>
                      <div className="mt-5 flex gap-5 sm:ml-3 sm:gap-2">
                        <img
                          src="/country.png"
                          alt="country"
                          className="h-8 w-8"
                        />
                        {isEditing ? (
                          <input
                            type="text"
                            value={userData?.pincode}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                pincode: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <span className="detail-value capitalize font-bold text-primary-light">
                            {a?.Country}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center mt-4 sm:flex-col sm:items-start">
                        <div className="detail-item">
                          <div className="flex items-center">
                            <img src="/map.png" alt="map" className="h-8 w-8" />
                            {isEditing ? (
                              <input
                                type="text"
                                value={userData?.Address}
                                onChange={(e) =>
                                  setUserData({
                                    ...userData,
                                    Address: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <span className="detail-value text-primary-light">
                                {a?.Address} ,
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="detail-item sm:ml-6">
                          {isEditing ? (
                            <input
                              type="text"
                              value={userData?.Address2}
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  Address2: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <span className="detail-value  text-primary-light">
                              {a?.Address2}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="ml-8">
                        {isEditing ? (
                          <input
                            type="text"
                            value={userData?.Landmark}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                Landmark: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <span className="detail-value text-primary-light">
                            {a?.Landmark}
                          </span>
                        )}
                        <span className="text-primary-light">,</span>
                      </div>
                      <div className="flex sm:flex-col">
                        <div className="ml-8">
                          {isEditing ? (
                            <input
                              type="text"
                              value={userData?.City}
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  City: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <span className="detail-value text-primary-light">
                              {a?.City} ,
                            </span>
                          )}
                        </div>
                        <div className="detail-item sm:ml-3">
                          {isEditing ? (
                            <input
                              type="text"
                              value={userData?.State}
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  State: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <span className="detail-value sm:ml-2 text-primary-light">
                              {a?.State}
                            </span>
                          )}
                          <span className="text-primary-light">,</span>
                        </div>

                        <div className="sm:ml-8">
                          {isEditing ? (
                            <input
                              type="text"
                              value={userData?.pincode}
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  pincode: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <span className="ml-2 text-primary-light">
                              {a?.pincode}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-8 sm:mb-8">
                        <button
                          className="p-3 rounded-lg ml-[15px] bg-primary-light hover:bg-yellow hover:text-primary-light"
                          onClick={() => handleCopyClick(a)}
                        >
                          Copy Virtual Address
                        </button>
                      </div>
                    </div>
                  );
                })}
              {ad && ad.length == 0 && <p>No Data found</p>}
              {!ad && <p>Loading...</p>}
            </div>
            <div>
              <img
                src="/mapp.jpg"
                alt="map"
                className="h-[20rem] w-[30rem] rounded-xl lg:hidden"
              />
              {user.Address && user.Address != "" ? (
                <div style={{ color: "white" }} className="flex flex-col">
                  <p className="text-xl mt-2">Your Physical Address</p>
                  {isEditing2 ? (
                    <input
                      style={{ color: "black", padding: "4px" }}
                      type="text"
                      value={userData?.Address}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          Address: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p>Address: {user.Address}</p>
                  )}
                  {isEditing2 ? (
                    <input
                      style={{ color: "black", padding: "4px" }}
                      type="text"
                      value={userData?.Address2}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          Address2: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p>Address2: {user.Address2}</p>
                  )}
                  {isEditing2 ? (
                    <input
                      style={{ color: "black", padding: "4px" }}
                      type="text"
                      value={userData?.Landmark}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          Landmark: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p>LandMark: {user.Landmark}</p>
                  )}
                  {isEditing2 ? (
                    <input
                      style={{ color: "black", padding: "4px" }}
                      type="text"
                      value={userData?.City}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          City: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p>City: {user.City}</p>
                  )}
                  {isEditing2 ? (
                    <input
                      style={{ color: "black", padding: "4px" }}
                      type="text"
                      value={userData?.State}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          State: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p>State: {user.State}</p>
                  )}
                  {isEditing2 ? (
                    <input
                      style={{ color: "black", padding: "4px" }}
                      type="text"
                      value={userData?.Country}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          Country: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p>Country: {user.Country}</p>
                  )}
                  <button className="btn btn-b" onClick={handleEditClick}>
                    {isEditing2 ? "Submit" : "Change Address"}
                  </button>
                </div>
              ) : (
                <button onClick={handleEditClick} className="btn btn-b">
                  Add Address
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
