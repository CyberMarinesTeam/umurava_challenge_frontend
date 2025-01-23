import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className=" h-auto w-full bg-[#001A40] text-white pt-[30px] sm:px-[100px] px-[40px] flex flex-col sm:gap-[12px] gap-[20px] ">
      <div className="flex flex-row lg:justify-between justify-start lg:gap-[2px] sm:gap-[420px] gap-[20px] border-gray-500 pb-[20px] border-b-[1px]">

        <img
          src="/footerImage.webp"
          alt="footerImage"
          className="w-auto h-[80px] "
        />
        <div className="excluded flex flex-row items-center space-x-[7px] justify-center">
          <span className="w-[40px] h-[40px] rounded-full bg-white grid place-items-center">
            <TiSocialFacebook className="text-[#001A40] text-[25px]" />
          </span>
          <span className="w-[40px] h-[40px] rounded-full bg-white grid place-items-center">
            <AiOutlineGooglePlus className="text-[#001A40] text-[25px]" />
          </span>
          <span className="w-[40px] h-[40px] rounded-full bg-white grid place-items-center">
            <FaLinkedinIn className="text-[#001A40] text-[16px]" />
          </span>
          <span className="w-[40px] h-[40px] rounded-full bg-white grid place-items-center">
            <FaYoutube className="text-[#001A40] text-[19px]" />
          </span>
        </div>
      </div>
      <main className="grid lg:grid-cols-3 md:grid-cols-2 justify-between mt-[30px] border-gray-500 pb-[30px] border-b-[1px] gap-[40px] sm:gap-[20px]">
        <div className="flex flex-col space-y-[13px]">

          <h2 className="font-bold text-[24px]">Our Address</h2>
          <span className="text-[16px] flex flex-row items-center justify-start space-x-[10px]">
            <MdOutlineMail className="text-[23px]" />{" "}
            <p className="text-[#BCBdc0]">career@tickets.com</p>
          </span>
          <span className="text-[16px]  flex flex-row items-center justify-start  space-x-[10px]">
            <MdOutlineLocationOn className="text-[23px]" />{" "}
            <p className="text-[#BCBdc0]">89 KG 14 Ave, Kigali</p>
          </span>
          <span className="text-[16px]  flex flex-row items-center justify-start  space-x-[10px]">
            <MdOutlinePhone className="text-[23px]" />
            <p className="text-[#BCBdc0]">+250 700 0000 000</p>
          </span>
        </div>

        <div className="excluded flex flex-col space-y-[13px]">
          <h2 className="font-bold text-[24px]">Quick Links</h2>
          <p className="text-[16px] text-[#BCBdc0]">Home</p>
          <p className="text-[16px] text-[#BCBdc0]">Program</p>
          <p className="text-[16px] text-[#BCBdc0]">About</p>
          <p className="text-[16px] text-[#BCBdc0]">Contact Us</p>
        </div>
        <div className="excluded rounded-lg">
          <h2 className="text-2xl font-bold text-left mb-6">
            Join our newsletter to keep up to date with us!
          </h2>

          <div className="excluded flex relative">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 h-[76px] rounded-[5px] px-4 text-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-[7px] h-[60px] top-[7px]              bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-300">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[12px] sm:gap-[60px] lg:gap[12px]  sm:items-cennter items-start text-[16px] justify-between mt-[60px] w-full">
        <h2 className="flex flex-row items-center  justify-center space-x-[18px]">
          <span className="flex items-center gap-[12px]">Copyright   <LuCopyright />{" "}</span>
          <span className="w-[40%]">All Rights Reserved SawaPay 2024.</span>

        </h2>
        <h2>Privacy Policy | Terms and Conditions</h2>
      </div>
    </footer>
  );
};

export default Footer;
