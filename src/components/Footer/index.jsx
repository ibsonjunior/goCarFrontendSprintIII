import React from "react";

import Facebook from "../../assets/facebook.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";

import "./style.css";

import {
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
} from "phosphor-react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_copyrights">©2022 GoCar</div>
        <div className="footer_social_media">
          <div>
            {/* <FacebookLogo size={36} /> */}
            <img src={Facebook} alt="" />
          </div>
          <div>
            {/* <LinkedinLogo size={36} /> */}
            <img src={LinkedIn} alt="" />
          </div>
          <div>
            {/* <TwitterLogo size={36} /> */}
            <img src={Twitter} alt="" />
          </div>
          <div>
            <a href="https://www.instagram.com/rent.gocar/">
              {/* <InstagramLogo size={36} /> */}
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;