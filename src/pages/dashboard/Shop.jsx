import React, { useContext, useDebugValue, useEffect, useState } from "react";
import Product from "../../components/Product";
import "../../stylesheet/dashboard/Shop.css";
import { Link, useNavigate } from "react-router-dom";
import { fetchreq, walletTransaction } from "../../Helper/fetch";
import { Key } from "@mui/icons-material";
import { MyContext } from "../../App";
import { RxCross1 } from "react-icons/rx";
const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser, isLogin, isBLogin, setIsBLogin } =
    useContext(MyContext);
  const [productImg, setProductImg] = useState(null);
  const [singleproduct, setSingleProduct] = useState(null);
  const [isprocess, setIsprocess] = useState(false);
  const ar = [1, 2, 3, 4];
  const pr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_URL;
  const nav = useNavigate();

  const getProduct = async () => {
    const dt = await fetchreq("GET", "Products", {});
    setProducts(dt.result);
  };
  const openProduct = (p) => {
    setProductImg(`${url}/${p.Images[0]}`);
    setSingleProduct(p);
    setIsOpen(true);
  };
  const addtocart = async () => {
    setIsprocess(true);
    const product = singleproduct;
    const res = await fetchreq("POST", "addtocart", {
      Pid: product.Pid,
      Cid: user?.Cid,
      qty: 1,
    });
    if (res) {
      nav("/cart");
    } else {
      alert("Item not added to cart");
    }
    setIsprocess(false);
  };
  const Buynow = async () => {
    setIsprocess(true);
    const op = singleproduct.Price;
    if (await walletTransaction(op, null, "Buy Product", user, setUser, nav)) {
      const res = await fetchreq("POST", `makeOrder`, {
        cid: user?.Cid,
        pid: singleproduct.Pid,
        qtn: 1,
        Oprice: op,
      });
      if (res) {
        alert("Order Placed Successfully");
        nav("/orders");
      } else {
        alert("Order Not placed");
      }
    }
    setIsprocess(false);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div id="shop-sec">
      <div id="the-gym">
        <div id="l-title">
          <div className="plan-page-title">
            <span id="wt">Available&nbsp;</span>
            <span id="org">Products</span>
          </div>

          {isLogin && (
            <div className="flex sm:flex-col gap-4">
              <Link
                to="/dashboard/assisted-purchase"
                className="btn btn-o-1"
                style={{ float: "right" }}
              >
                Assisted Purchase Request
              </Link>
              <Link
                to="/cart"
                className="btn btn-o-1 mr-2"
                style={{ float: "right" }}
              >
                Your Cart
              </Link>
              <Link
                to="/orders"
                className="btn btn-o-1 mr-2"
                style={{ float: "right" }}
              >
                Orders
              </Link>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fixed h-[100dvh] right-0 top-0 bg-primary-light z-50 overflow-y-scroll">
          {/* Close button */}
          <button
            className="fixed mr-2 right-0 top-0"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <RxCross1 />
          </button>

          {/* Product Image */}
          <img
            className="max-h-[50%] max-w-[60%] min-w-[50%]"
            src={productImg}
            alt="Product"
          />

          {/* Product Information */}
          <div className="proName">{singleproduct.Name}</div>
          <div className="proPrice">MRP: ₹{singleproduct.Price}</div>
          <div>{singleproduct.Details}</div>

          {/* Conditional rendering based on login status */}
          {isLogin ? (
            <div>
              {/* Buy Now button */}
              <button className="atc" disabled={isprocess} onClick={Buynow}>
                Buy Now
              </button>

              {/* Add to Cart button */}
              <button
                disabled={isprocess}
                onClick={addtocart}
                className="atc mt-1 mb-10"
              >
                {isprocess ? "Just a second..." : "Add to Cart"}
              </button>
            </div>
          ) : (
            <div>
              {/* Redirect to sign-in for Buy Now */}
              <Link className="atc mb-10" to={"/signIn"}>
                Buy Now
              </Link>

              {/* Redirect to sign-in for Add to Cart */}
              <Link className="atc mb-10" to={"/signIn"}>
                Add to Cart
              </Link>
            </div>
          )}
        </div>
      )}
      <div id="displayProducts">
        {products.map((p, e) => {
          const photo = p.Images;

          return (
            <div key={p.Pid}>
              <Product
                // proImg={`./imgs/btt${e}.webp`}
                proImg={`${url}/${photo[0]}`}
                proName={p.Name}
                proPrice={` ₹${p.Price}`}
                product={p}
                openProduct={openProduct}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
