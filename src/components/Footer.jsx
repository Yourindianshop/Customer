import { Link } from "react-router-dom";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants";

const Footer = () => {
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
          {/* {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
              <ul className="text-[#CBD5E0]">
                {columns.links.map((link) => (
                  <li key={link}>
                    <a href="/" className="hover:text-[#63B3ED]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))} */}
          <ul>
            <li>
              <Link to="/about">About us</Link><br />
              {/* <Link to="">Our Teams</Link><br /> */}
              {/* <Link to="">Features</Link><br /> */}
              <Link to="/termsandconditions">Terms and Conditions</Link><br />
              <Link to="/privacypolicy">Privacy Policy</Link><br />
              <Link to="/">Contact Us</Link><br />
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/ProhabitedItems">Prohibited Items </Link><br />
              {/* <Link to="">Feedback</Link><br /> */}
              <Link to="">FAQ</Link><br />
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

      <p className="text-center text-[#CBD5E0] mt-8">
        2023 | Created and Managed by Metawebtx
      </p>
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
