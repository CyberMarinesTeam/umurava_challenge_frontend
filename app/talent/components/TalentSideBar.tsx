"use client";
import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import {
  IoDocumentTextOutline,
  IoPersonAddOutline,
  IoSettingsOutline,
  IoGiftOutline,
  IoHeadsetOutline,
} from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "@/lib/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/redux/store";

const links = [
  {
    label: "Dashboard",
    icon: <GoHome className="text-[20px]" />,
    path: "/talent/dashboard",
  },
  {
    label: "Challenges",
    icon: <IoDocumentTextOutline className="text-[20px]" />,
    path: "/talent/challenges",
  },
  {
    label: "Community",
    icon: <IoPersonAddOutline className="text-[20px]" />,
    path: "/talent/community",
  },
];

const secondaryLinks = [
  {
    label: "Settings",
    icon: <IoSettingsOutline className="text-[20px]" />,
    path: "/talent/dashboard",
  },
  {
    label: "Help Center",
    icon: <IoHeadsetOutline className="text-[20px]" />,
    path: "/talent/challenges",
  },
  {
    label: "Refer family & friends",
    icon: <IoGiftOutline className="text-[20px]" />,
    path: "/talent/community",
  },
];

const TalentSideBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const currentPath = usePathname();
  const isActive = (path: string) => {
    if (currentPath === path) {
      return true;
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(true); // Show confirmation modal
  };

  const confirmLogout = () => {
    router.push("/login"); // Redirect to login page
    dispatch(clearCredentials()); // Clear user session
    setShowLogoutModal(false); // Close modal
  };

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="w-[272px] bg-[#2b71F0] text-white px-2 h-[1300px]">
      <div className="flex flex-col justify-between">
        <img
          src="/umuravaLogo2.webp"
          alt="User"
          draggable={false}
          className="w-[51px] h-[35px] mt-[20px] ml-[30px] rounded-3"
        />
        <div className="mb-[473px] mt-[30px]">
          <ul>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm ${
                  isActive(link.path) ? "bg-white text-blue-600" : ""
                }`}
              >
                {link.icon}
                <span className="text-[14px] font-normal leading-5">
                  {link.label}
                </span>
              </Link>
            ))}
          </ul>
        </div>
        <div className="mb-[10px] mt-[10px]">
          <ul>
            {secondaryLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm"
              >
                {link.icon}
                <span className="text-[14px] font-normal leading-5">
                  {link.label}
                </span>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex px-[12px] pr-[10px] items-center py-[8px] mt-4 gap-1 w-[272px] h-[80px]">
          <div className="h-[40px] flex gap-[12px] mr-[18px]">
            <img
              src="/profile2.webp"
              alt="profileImage"
              className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="text-[12px] font-normal leading-5">
                {user?.username}, PM
              </p>
              <p className="text-[12px] font-normal leading-5">{user?.email}</p>
            </div>
          </div>
          <FiLogOut
            className="h-[20px] w-[20px] cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 flex px-[10px] items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <p className=" font-medium text-[14px]">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 text-[14px] rounded-md"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 hover:opacity-70 text-[14px] text-white rounded-md"
                onClick={confirmLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentSideBar;
