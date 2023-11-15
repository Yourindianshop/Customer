import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import "../../stylesheet/dashboard/AssistedPurchase.css";
import { fetchreq, uploadImageAws } from '../../Helper/fetch';

function AssistedPurchase({WhiteLabeling}) {
  // State variables to store form data
  const { isLogin,user,isBLogin } = useContext(MyContext);
  const nav = useNavigate();

  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [specialDetails, setSpecialDetails] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [county, setCountry] = useState(null);
  const [img ,setImg]=useState(null);
  const [run,setRun]=useState(false);

  // Handle form submissions
  const handleSubmit =async (e) => {
    e.preventDefault();
    if(!run){
      setRun(true);
      const url = await uploadImageAws(img.name,img);
      // const url = "123.jpg";
      const form = {
        cid: WhiteLabeling?user.Bid:user.Cid,
        wid: null,
        Name: productName, // Replace with the actual product name
        Brand: brandName,   // Replace with the actual brand name
        Description: productDescription, // Replace with the actual description
        Other: specialDetails, // Replace with the actual special details
        Images: url,  // Replace with the actual images data or file path
        Country: county,
      };
      // Process and send form data to the server or admin
      // ...
      const dt = await fetchreq("POST",WhiteLabeling?"assistedReqforBC":"assistedReq",{form});
      if(dt){
        alert("Made request Successfully...");
        setProductName('');
        setBrandName('');
        setCountry('');
        setImg('');
        setTermsAgreed(false);
        setSpecialDetails('');
        setProductDescription('');
        !WhiteLabeling ? nav("/YourAssistedReq"): nav("/WhiteLabelingRequest");
      }else{
        alert("Something went wrong...");
      }
      setRun(false);
    }
  };
  const form = useRef();

  useEffect(() => {
    if (!isLogin && !isBLogin) {
      nav('/');
    }
  }, []);


  return (
    <div id="dash-ap" className="assisted-purchase-form">
      <div id="l-title" className="no-mar">
        <div className="plan-page-title">
          <span id="wt">{WhiteLabeling?"White Labeling":"Assisted Purchase"}</span>
          <span id="blue"> Request</span>
        </div>
        {!WhiteLabeling && <div>
          <div>
            <Link className="btn btn-b" to="/YourAssistedReq">
              Your Requsts
            </Link>
          </div>
        </div>}
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            required
            placeholder="Product Name"
            name="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            required
            placeholder="Brand Name"
            name="brand-name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>
        {WhiteLabeling && <div className="form-group">
          <input
            type="text"
            required
            placeholder="Country Name"
            name="Country Name"
            value={county}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>}

        <div className="form-group">
          <textarea
          required
            placeholder="Product Description"
            name="product-description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            required
            placeholder="Other SPL Details"
            name="special-details"
            value={specialDetails}
            onChange={(e) => setSpecialDetails(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="imges">Product Image</label>
          <input
            required
            type="file"
            accept="image/*"
            name="imges"
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />
        </div>

        {/* Terms and Conditions */}
        <div className="form-group">
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
          <button className="btn btn-b" type="submit">
            {run?"Submiting...":"Submit Request"}
          </button>

        </div>
      </form>
    </div>
  );
}
export default AssistedPurchase;