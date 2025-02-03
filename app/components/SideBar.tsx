"use client";
import React, { useEffect, useState } from "react";
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
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "@/lib/redux/slices/authSlice";
import { RootState } from "@/lib/redux/store";

const SideBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const currentPath = usePathname();

  const isActive = (path: string) => currentPath === path;

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    router.push("/login");
    dispatch(clearCredentials());
    setShowLogoutModal(false);
  };

  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div className="w-[272px] bg-[#2b71F0] text-white px-2 h-[1400px]">
      <div className="flex flex-col justify-between">
        <img
          src="/umuravaLogo2.webp"
          alt="User"
          draggable={false}
          className="w-[51px] h-[35px] mt-[20px] ml-[30px] rounded-3"
        />
        <div className="mb-[473px] mt-[30px]">
          <ul>
            <Link
              href="/admin/dashboard"
              className={`mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm ${
                isActive("/admin/dashboard") ? "bg-white text-blue-600" : ""
              }`}
            >
              <GoHome className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Dashboard
              </span>
            </Link>
            <Link
              href="/admin/challenges"
              className={`mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm ${
                isActive("/admin/challenges") ? "bg-white text-blue-600" : ""
              }`}
            >
              <IoDocumentTextOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Challenges
              </span>
            </Link>
            <Link
              href="/admin/community"
              className={`mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm ${
                isActive("/admin/community") ? "bg-white text-blue-600" : ""
              }`}
            >
              <IoPersonAddOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Community
              </span>
            </Link>
          </ul>
        </div>
        <div className="mb-[10px] mt-[10px]">
          <ul>
            <Link
              href="/admin/dashboard"
              className="mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm"
            >
              <IoSettingsOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Settings
              </span>
            </Link>
            <Link
              href="/admin/challenges"
              className="mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm"
            >
              <IoHeadsetOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Help Center
              </span>
            </Link>
            <Link
              href="/admin/community"
              className="mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm"
            >
              <IoGiftOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Refer family & friends
              </span>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col justify-between px-[28px] pr-[10px] items-center py-[8px] mt-4 gap-1 w-[98%] h-auto">
          <div className="h-[40px] flex gap-[12px] mr-[24px] flex-wrap">
            <img
              src="/profile2.webp"
              alt="profileImage"
              className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
            />
            <div className="flex flex-col gap-1 w-[80%]">
              <p className="text-[14px] font-normal leading-5">
                {user?.username}, PM
              </p>
              <p className="text-[14px] font-normal leading-5 w-[80%]">
                {user?.email}
              </p>
            </div>
          </div>
          <FiLogOut
            className="h-[20px] w-[20px] cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 px-[10px] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <p className="font-medium text-[14px]">
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

export default SideBar;
