import React, { useContext, useEffect, useState } from "react";
import "../../stylesheet/dashboard/ProductAcceptanceForm.css"; // Import your CSS file for styling
import { fetchreq, uploadImage, uploadImageAws, walletTransaction } from "../../Helper/fetch";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function ProductAcceptanceForm() {
  // State variables to store form data
  const { user, wh, isLogin, setUser } = useContext(MyContext);
  const [pland, setPland] = useState(null);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [name, setName] = useState(null);
  const [des, setDes] = useState(null);
  const [file, setFile] = useState(null);
  const [run, setRun] = useState(false);
  const nav = useNavigate();

  // Handle form submissions
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!run && termsAgreed && name.length > 1 && file) {
      const sizekb = file.size / 1024;
      // console.log("file size:",sizekb," KB");
      if(sizekb>1000){
        alert("file size must be less than 1 MB");
        setFile(null);
      }else{
        setRun(true);
        if (
          await walletTransaction(
            pland?.consolidation,
            wh?.Wid,
            "Product Acceptance Request",
            user,
            setUser,
            nav
          )
        ) {
          const url = await uploadImageAws(file.name, file);
          if(url){
            const body = {
              cid: user.Cid,
              wid: wh.Wid,
              proof: url,
              name: name,
              desc: des,
            };
            const dt = await fetchreq("POST", "makePAR", body);
            dt ? nav("/PAR") : alert("something went wrong");
            if (dt) {
              alert("Request Made Successfully... ");
              nav("/PAR");
            } else {
              alert("something went wrong");
            }
          }else{
            alert("File Not uploaded...")
          }
        }
      }
    } else if (run) {
      alert("Please Wait");
    } else {
      alert("please fill all the details");
    }
    setRun(false);
  };
  const loadPlanDetails = async () => {
    const dt = await fetchreq("GET", `getPlan/${user?.Cid}/${wh?.Wid}`, {});
    dt ? setPland(dt.result[0]) : setPland(null);
  };
  useEffect(() => {
    if (!isLogin) {
      nav("/");
    } else {
      loadPlanDetails();
    }
  }, []);
  return (
    <>
      <div id="dash-pa" className="product-acceptance-form">
        <div id="l-title" className="no-mar">
          <div className="plan-page-title">
            <span id="org">Product </span>
            <span id="wt">Acceptance </span>
            <span id="lime">Request</span>
          </div>
          <Link className="btn btn-o-1" to="/PAR">
            Your Products Acceptance Request
          </Link>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          {/* Product Details */}
          <div className="form-group">
            <input
              required
              type="text"
              placeholder="Product Name"
              maxLength={30}
              minLength={2}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <textarea
              required
              placeholder="Product Description"
              minLength={10}
              maxLength={500}
              value={des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
            />
          </div>

          <div className="form-group bw">
            <label htmlFor="photo">Proof</label>
            <input
              required
              name="photo"
              type="file"
              accept="image/*"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>

          {/* Terms and Conditions */}
          <div className="form-group bw">
            <label>
              <input
                required
                type="checkbox"
                checked={termsAgreed}
                onChange={() => setTermsAgreed(!termsAgreed)}
              />
              &nbsp; I agree to the Terms and Conditions
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button disabled={!pland} className="btn btn-b" type="submit">
              {pland ? (
                !run ? (
                  pland?.consolidation == 0 ? (
                    "Submit Request"
                  ) : (
                    `Submit Request and Pay ₹${pland?.consolidation}`
                  )
                ) : (
                  <p>Please Wait</p>
                )
              ) : (
                <p>Loading...</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductAcceptanceForm;
