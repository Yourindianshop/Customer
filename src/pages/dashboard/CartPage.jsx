import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Item 1",
      quantity: 2,
      price: 20,
      image: "https://source.unsplash.com/1600x900/?coca-cola",
    },
    {
      id: 2,
      name: "Item 2",
      quantity: 1,
      price: 15,
      image: "https://source.unsplash.com/1600x900/?dominos",
    },
    {
      id: 3,
      name: "Item 3",
      quantity: 3,
      price: 25,
      image: "https://source.unsplash.com/1600x900/?kfc",
    },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const handleBuyNow = () => {
    // Implement your buy now logic
    alert("Buy Now clicked!");
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="cart-page bg-gray-200 p-8 rounded-md">
      <h1 className="text-3xl font-bold mb-6" style={{ color: "#4F46E5" }}>
        Your Cart
      </h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="cart-item bg-primary-light rounded-md p-4 mb-4 flex items-center"
        >
          <img
            src={item.image}
            alt={item.name}
            className="item-image w-16 h-16 object-cover rounded-md"
          />

          <div className="item-details ml-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray mb-2">Quantity: {item.quantity}</p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDecreaseQuantity(item.id)}
                className="quantity-btn rounded-lg px-8 py-2"
                style={{ backgroundColor: "#4F46E5", color: "#FFFFFF" }}
              >
                -
              </button>
              <button
                onClick={() => handleIncreaseQuantity(item.id)}
                className="quantity-btn rounded-lg px-8 py-2"
                style={{ backgroundColor: "#4F46E5", color: "#FFFFFF" }}
              >
                +
              </button>
            </div>
            <p className="text-gray-600 mt-2">Price: ${item.price}</p>
          </div>
        </div>
      ))}

      <div className="cart-total bg-white rounded-md p-4 mt-6 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Total Price: ${getTotalPrice()}
        </h3>
        <button
          onClick={handleBuyNow}
          className="buy-now-btn px-8 py-2 rounded-lg"
          style={{ backgroundColor: "#4F46E5", color: "#FFFFFF" }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
