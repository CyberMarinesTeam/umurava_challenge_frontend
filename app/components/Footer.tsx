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
    <footer className="h-[490px] w-full bg-[#001A40] text-white pt-[30px] px-[100px] flex flex-col ">
      <div className="flex flex-row justify-between border-gray-500 pb-[20px] border-b-[1px]">
        <img
          src="/footerImage.webp"
          alt="footerImage"
          className="w-auto h-[80px] "
        />
        <div className="flex flex-row items-center space-x-[7px] justify-center">
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
      <main className="grid grid-cols-3 mt-[30px] border-gray-500 pb-[30px] border-b-[1px]">
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

        <div className="flex flex-col space-y-[13px]">
          <h2 className="font-bold text-[24px]">Quick Links</h2>
          <p className="text-[16px] text-[#BCBdc0]">Home</p>
          <p className="text-[16px] text-[#BCBdc0]">Program</p>
          <p className="text-[16px] text-[#BCBdc0]">About</p>
          <p className="text-[16px] text-[#BCBdc0]">Contact Us</p>
        </div>
        <div className="rounded-lg">
          <h2 className="text-2xl font-bold text-left mb-6">
            Join our newsletter to keep up to date with us!
          </h2>

          <div className="flex relative">
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
      <div className="flex flex-row items-center text-[16px] justify-between mt-[60px] w-full">
        <h2 className="flex flex-row items-center justify-center space-x-[7px]">
          <span>Copyright</span> <LuCopyright />{" "}
          <span>All Rights Reserved SawaPay 2024.</span>
        </h2>
        <h2>Privacy Policy | Terms and Conditions</h2>
      </div>
    </footer>
  );
};

export default Footer;
