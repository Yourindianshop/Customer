// FeaturedWebsite.jsx
import React from "react";
import "./Feature.css";

const FeaturedWebsite = () => {
  return (
    <div className="features">
      <div className="featuress">
        <div className="works-heading">
          <h1 className="serv-head">
            Our <span className="serv-head-2">Featured Websites</span>
          </h1>
          <div className="linee"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img className="card-img" src="/beyoung.jpg" alt="insta" />
          <div>
            <a
              href="https://www.beyoung.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>beyoung</h1>
            </a>
            {/* <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span> */}
          </div>
        </div>
        {/* Add two more similar cards here */}
        <div className="card">
          <img className="card-img" src="/gallery.jpg" alt="example2" />
          <div>
            <a
              href="https://www.thegallerystore.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>thegallerystore</h1>
            </a>
            {/* <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span> */}
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="/kw.png" alt="example3" />
          <div>
            <a
              href="https://www.kolkataweb.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>kolkataweb</h1>
            </a>
            {/* <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span> */}
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img className="card-img" src="/insta.webp" alt="insta" />
          <div>
            <a
              href="https://youngtrendz.in/?gad_source=1&gclid=Cj0KCQiA5fetBhC9ARIsAP1UMgGU-8pHuP-ZJPzYLr5jgJaaq5OJqr1L5fXWwQudKjkitvT6gSflJUAaAuHjEALw_wcB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>youngtrendz</h1>
            </a>
            {/* <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span> */}
          </div>
        </div>
        {/* Add two more similar cards here */}
        <div className="card">
          <img className="card-img" src="/git.jpg" alt="example2" />
          <div>
            <a
              href="https://lbb.in/kolkata/best-bakeries-kolkata/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>lbb</h1>
            </a>
            {/* <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span> */}
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="/ik.jpg" alt="example3" />
          <div>
            <a
              href="https://www.baazarkolkata.com/ladies-wear.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>baazarkolkata</h1>
            </a>
            {/* <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWebsite;
