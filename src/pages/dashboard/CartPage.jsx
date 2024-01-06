import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { fetchreq, getDate, walletTransaction} from "../../Helper/fetch";

const CartPage = ({iscart}) => {
  const {user,setUser, isLogin, isBLogin, setIsBLogin } = useContext(MyContext);
  const [total,setTotal]=useState(0);
  const url = process.env.REACT_APP_URL;
  const nav = useNavigate();
  const [cartItems, setCartItems] = useState(null);
  const getCart = async ()=>{
    const res = await fetchreq("GET",`getCart/${user?.Cid}`,{});
    if(res){
      setCartItems(res.result);
      setTotalPrice(res.result);
    }else{
      setCartItems([]);
    }
  }
  const setTotalPrice = async (result)=>{
    let totalPrice = 0;
    const ci = result || cartItems;
    ci.map((i)=>{
      totalPrice += i.Price*i.qty;
    })
    setTotal(totalPrice);
  }

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };
  const removeItemFromcart =async (cartid)=>{
    if(window.confirm("Are you want to remove this Item?")){
      const res = await fetchreq("GET",`removeFromCart/${cartid}`,{});
      if(res){
        setCartItems([]);
        getCart();
      }else{
        alert('Item Not removed');
      }
    }
  }
  const handleBuyNow =async () => {
    // Implement your buy now logic
    if(await walletTransaction(total,null,"Order Product From Cart",user,setUser,nav)){
      let allItems = cartItems;
      const res = await fetchreq("POST","orderCart",{itemArr:allItems,Cid: user?.Cid});
      // alert("Buy Now clicked!");
      if(res){
        nav("/orders");
      }else{
        alert("error");
      }
    }
  };

  const handleIncreaseQuantity = async (itemId) => {
    if(cartItems[itemId].qty<10){
      let temp = cartItems;
      temp[itemId].qty += 1;
      setTotal(total+temp[itemId].Price);
      setCartItems(temp); 
      await fetchreq("GET",`updateCartqty/${temp[itemId].cartid}/${temp[itemId].qty}`,{});
    }
  };
  const handleDecreaseQuantity =async (itemId) => {
    if(cartItems[itemId].qty>1){
      let temp = cartItems;
      temp[itemId].qty -= 1;
      setTotal(total-temp[itemId].Price);
      setCartItems(temp);
      await fetchreq("GET",`updateCartqty/${temp[itemId].cartid}/${temp[itemId].qty}`,{});
    }
  };
  const getOrders = async ()=>{
    const res = await fetchreq("GET",`getOrders/${user?.Cid}`,{});
    if(res){
      setCartItems(res.result);
      setTotalPrice(res.result);
    }else{
      setCartItems([]);
    }
  }
  useEffect(()=>{
    if(isLogin){
      iscart ? getCart(): getOrders();
      // getCart();
    }else{
      nav("/");
    }
  },[])
  return (
    <div  className="overflow-y-scroll h-[100dvh] cart-page bg-[#E2E8F0] p-8 rounded-md">
      <div className="flex gap-2">
        <Link className="atc" to={"/dashboard/shop"}>Go to Shop</Link>
        <Link className="atc" to={iscart?"/orders":"/cart"}>Go to {iscart?"Orders":"Cart"}</Link>
      </div>
      <h1 className="text-3xl font-bold mb-6" style={{ color: "#4F46E5" }}>
        Your {iscart?"Cart":"Orders"}
      </h1>
      {cartItems && cartItems.map((item,index) => { 
        return (
        <div
          key={item.cartid}
          className="cart-item bg-primary-light rounded-md p-4 mb-4 flex items-center"
        >
          <img
            src={`${url}/${item.Images[0]}`}
            alt={item.Name}
            className="item-image w-24 h-24 object-cover rounded-md"
          />
          <div className="item-details ml-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.Name}</h3>
            <p className="text-gray mb-2">Quantity: {item.qty}</p>
            {iscart ? <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDecreaseQuantity(index)}
                className="quantity-btn rounded-lg px-8 py-2"
                style={{ backgroundColor: "#4F46E5", color: "#FFFFFF" }}
              >
                -
              </button>
              <button
                onClick={() => handleIncreaseQuantity(index)}
                className="quantity-btn rounded-lg px-8 py-2"
                style={{ backgroundColor: "#4F46E5", color: "#FFFFFF" }}
              >
                +
              </button>
            </div>: <p>{item.Details}</p> }
            <p className="text-gray-600 mt-2">Price: ₹{item.Price}  {item.qty>1 && `total: ₹${item.Price*item.qty}`}</p>
          </div>
          <div className="w-[60%] flex justify-end">
            {iscart ?<button onClick={()=>{removeItemFromcart(item.cartid)}} className="quantity-btn rounded-lg px-8 py-2" style={{ backgroundColor: "red", color: "#FFFFFF" }} >Remove Item</button>:
            <p>{getDate(item?.time) }</p>
            }
          </div>
        </div>
      )})}

      {iscart && <div className="cart-total bg-primary-light rounded-md p-4 mt-6 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Total Price: ₹ {total}
        </h3>
        <button
          onClick={handleBuyNow}
          className="buy-now-btn px-8 py-2 rounded-lg"
          style={{ backgroundColor: "#4F46E5", color: "#FFFFFF" }}
        >
          Buy Now
        </button>
      </div>}
    </div>
  );
};

export default CartPage;
