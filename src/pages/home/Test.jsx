import React from "react";
import Nav from "../../components/Nav";

const Test = () => {
  return (
    <div className="text-black">
      <header>
        <Nav />
      </header>
      <div className="sm:w-[50%]">
        <img
          //   className="img-about sm:mt-10"
          alt="img"
          src="/home/about-img.png"
        />
      </div>
    </div>
  );
};

export default Test;
