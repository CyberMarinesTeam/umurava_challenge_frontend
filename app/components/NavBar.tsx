import React from "react";

const NavBar = () => {
  return (
    <nav className="h-[96px] border-b-[1px] items-center justify-center flex flex-row space-x-[100px]">
      <img
        src="/umuravaLogo.webp"
        draggable="false"
        alt="umurava logo"
        className="w-[120px]"
      />
      <ul className="flex  flex-row text-[13px] space-x-[40px]">
        <li className="text-[#2B71f0]">Home</li>
        <li>Challenge & Hackathons</li>
        <li>For Educational Institutions</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <button className="bg-[#041738] p-[14px] font-semibold text-white text-[14px] rounded-[10px]">
        Join the Program
      </button>
    </nav>
  );
};

export default NavBar;
