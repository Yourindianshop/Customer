import React from "react";
import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "../../constants/index";
import "./Plan.css";

const Plan = () => {
  return (
    <>
      <div className="bg-gray-900 max-width padding-container text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="text-center md:text-left max-w-md">
            <a href="/" className="mb-6 inline-block">
              <img src="/logo.svg" alt="logo" width={74} height={29} />
            </a>
            <p className="text-gray-300">
              Someone will visit a website because they are interested in the
              content available on the website.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-8 xl:gap-16">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="text-gray-300">
                  {columns.links.map((link) => (
                    <li key={link}>
                      <a href="/" className="hover:text-blue-400">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className="text-gray-300">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li key={link.label} className="flex items-center gap-4">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="text-blue-400">{link.value}</p>
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
                      className="hover:text-blue-400 bg-white text-white"
                    >
                      <img
                        src={link}
                        alt="logo"
                        width={24}
                        height={24}
                        className=" bg-white text-white"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8" />

        <p className="text-center text-gray-300 mt-8">
          2023 Pratik | All rights reserved
        </p>
      </div>
    </>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-lg text-white ">{title}</h4>
      {children}
    </div>
  );
};

export default Plan;
