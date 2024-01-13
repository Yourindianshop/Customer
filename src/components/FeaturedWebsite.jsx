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
          <img className="card-img" src="/insta.webp" alt="insta" />
          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Instagram</h1>
            </a>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span>
          </div>
        </div>
        {/* Add two more similar cards here */}
        <div className="card">
          <img className="card-img" src="/git.jpg" alt="example2" />
          <div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>GitHub</h1>
            </a>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="/ik.jpg" alt="example3" />
          <div>
            <a
              href="https://example3.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Example 3</h1>
            </a>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img className="card-img" src="/insta.webp" alt="insta" />
          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Instagram</h1>
            </a>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span>
          </div>
        </div>
        {/* Add two more similar cards here */}
        <div className="card">
          <img className="card-img" src="/git.jpg" alt="example2" />
          <div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>GitHub</h1>
            </a>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="/ik.jpg" alt="example3" />
          <div>
            <a
              href="https://example3.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Example 3</h1>
            </a>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, hic.
            </span>
          </div>
        </div>
      </div>
      <div className="nav-btnn">
        <a href="">
          <div className="nav-btn-2">View More</div>
        </a>
      </div>
    </div>
  );
};

export default FeaturedWebsite;
