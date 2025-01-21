import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineGooglePlus } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="h-[520px] w-full bg-[#001A40]  flex flex-col ">
      <div className="flex flex-row justify-between">
        <img
          src="/footerImage.webp"
          alt="footerImage"
          className="w-auto h-[80px] "
        />
      </div>
    </footer>
  );
};

export default Footer;
