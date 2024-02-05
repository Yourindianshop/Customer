import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FOOTER_CONTACT_INFO, SOCIALS } from "../constants";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Show the button when user scrolls down, hide it otherwise
      setIsVisible(scrollTop > 100); // You can adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#1a202c] max-width px-6 lg:px-20 3xl:px-0 text-white py-12">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-16">
        <div className=" md:text-left max-w-md">
          <a href="/" className="mb-6 inline-block text-center items-center">
            <h1 className="text-primary-light text-4xl sm:text-2xl font-bold">
              Your Indian Shop
            </h1>
          </a>
          <p className="text-[#CBD5E0] items-start justify-start">
            Our shop provides you with <br /> the best customer support
          </p>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-8 xl:gap-16">
          <ul>
            <li>
              <Link to="/about">About us</Link>
              <br />
              <Link to="/termsandconditions">Terms and Conditions</Link>
              <br />
              <Link to="/privacypolicy">Privacy Policy</Link>
              <br />
              {/* <Link to="/">Contact Us</Link> */}
              <br />
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/ProhabitedItems">Prohibited Items </Link>
              <br />
              <Link to="/faq">FAQ</Link>
              <br />
            </li>
          </ul>
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <ul className="text-[#CBD5E0]">
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <li key={link.label} className="flex items-center gap-4">
                  <p className="whitespace-nowrap">{link.label}:</p>
                  <p className="text-[#63B3ED]">{link.value}</p>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={SOCIALS.title}>
            <ul className="flex gap-4 text-white">
              {SOCIALS.links.map((link) => (
                <li key={link}>
                  <a
                    href="/"
                    className="hover:text-[#63B3ED] bg-white text-white"
                  >
                    <img
                      src={link}
                      alt="logo"
                      width={24}
                      height={24}
                      className="  text-primary-light"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-[#2D3748] mt-8" />

      <p className="text-center text-[#CBD5E0] mt-8">
        Copyright © 2023 Privacy Policy Terms & Conditions
      </p>

      <p className="text-center text--[#63B3ED] mt-8">
        <a
          href="https://metawebtx.com/"
          className="flex justify-center items-center"
        >
          2023 | Created and Managed by Metawebtx{" "}
          <img src="meta.png" alt="meta" className="h-[2rem] w-[2rem]" />
        </a>
      </p>

      {/* Scroll to top button */}
      {isVisible && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <img src="/arrow.png" alt="" className="h-[3rem] w-[3rem]" />
        </button>
      )}
    </div>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-lg text-primary-light ">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
