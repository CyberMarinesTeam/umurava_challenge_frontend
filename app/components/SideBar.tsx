import React from "react";
import { GoHome } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { IoHeadsetOutline } from "react-icons/io5";

import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="w-[272px] bg-[#2b71F0] text-white px-2 h-[1300px">
      <div className="flex flex-col justify-between ">
        <img
          src="/umuravaLogo2.webp"
          alt="User"
          draggable={false}
          className="w-[51px] h-[35px] mt-[20px] ml-[30px] rounded-3"
        />
        <div className="mb-[473px] mt-[30px]">
          <ul>
            <li className="mb-[2px] p-4  flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm">
              <GoHome className="text-[20px]" />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-[2px] p-4 text-[14px]   flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm">
              <IoDocumentTextOutline className="text-[20px]" />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/challenges"
              >
                Challenges
              </Link>
            </li>
            <li className="mb-[2px] p-4  flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm">
              <IoPersonAddOutline className="text-[20px]" />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/community"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-[10px] mt-[10px]">
          <ul>
            <li className="mb-[2px] p-4  flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm">
              <IoSettingsOutline className="text-[20px]" />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/dashboard"
              >
                Settings{" "}
              </Link>
            </li>
            <li className="mb-[2px] p-4 text-[14px]   flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm">
              <IoHeadsetOutline className="text-[20px]" />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/challenges"
              >
                Help Center
              </Link>
            </li>
            <li className="mb-[2px] p-4  flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm">
              <IoGiftOutline className="text-[20px]" />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/community"
              >
                Refer family & friends
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex px-[12px] pr-[10px] items-center py-[8px] mt-4 gap-1 w-[272px] h-[80px]">
          <div className=" h-[40px] flex gap-[12px] mr-[24px]">
            <img
              src="/profile2.webp"
              alt="profileImage"
              className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
            />

            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-normal leading-5">Hilaire, PM</p>
              <p className="text-[14px] font-normal leading-5">
                hilaire@gmail.com
              </p>
            </div>
          </div>
          <FiLogOut className="h-[20px] w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
