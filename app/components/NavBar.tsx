
'use client'
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [currentUser, setCurrentUser] = useState("guest"); // Change this value to "admin" or "talent" for testing

  const navItems = {
    admin: [
      { label: "Dashboard", path: "/admin/dashboard" },
      { label: "Create Challenge", path: "/admin/create-challenge" },
      { label: "Participants", path: "/admin/participants" },
      { label: "Settings", path: "/admin/settings" },
    ],
    talent: [
      { label: "Dashboard", path: "/talent/dashboard" },
      { label: "Challenges", path: "/talent/challenges" },
      { label: "Community", path: "/talent/community" },
      { label: "Settings", path: "/talent/settings" },
    ],
    guest: [
      { label: "Home", path: "/" },
      { label: "Challenge & Hackathons", path: "/guest/challenges" },
      { label: "For Learning Institutions", path: "/guest/community" },
      { label: "About Us", path: "/guest/about" },
      { label: "Contact Us", path: "/guest/contact" },
    ],
  };

  const currentNavItems =  navItems.guest; 

  return (
    <nav className="h-[96px] border-b-[1px] items-center justify-center flex flex-row space-x-[100px]">
  
      <img
        src="/umuravaLogo.webp"
        draggable="false"
        alt="umurava logo"
        className="w-[125px]"
      />

      <ul className="flex flex-row text-[14px] text-gray-700 space-x-[40px]">
        {currentNavItems.map((item, index) => (
          <li key={index}>
            <Link href={`${item.path}`} className="hover:text-[#2B71f0]">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {currentUser === "guest" ? (
        <button className="bg-[#041738] p-[14px] text-white text-[14px] rounded-[10px]">
          Join the Program
        </button>
      ) : (
        <button
          onClick={() => setCurrentUser("guest")}
          className="bg-red-500 p-[14px] text-white text-[14px] rounded-[10px]"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default NavBar;
