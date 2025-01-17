import React from "react";

const NavBar = () => {
  return (
    <nav className="h-[96px] border-b-[1px] items-center justify-center flex">
      <img src="/umuravaLogo.webp" alt="umurava logo" className="w-[100px]" />
      <ul className="flex  flex-row text-[13px]">
        <li>Home</li>
        <li>Challenge & Hackathons</li>
        <li>For Educational Institutions</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <button className="bg-[#041738] text-white text-[14px]">
        Join the Program
      </button>
    </nav>
  );
};

export default NavBar;
