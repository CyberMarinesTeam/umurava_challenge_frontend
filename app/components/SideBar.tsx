import React from "react";
import { GoHome } from "react-icons/go";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHeadsetSharp } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
// import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="w-[272px] bg-blue-600 text-white px-2 h-[1300px]">
      <div className="flex flex-col justify-between ">
        <div className="mb-80">
          <ul>
            <li>
              <img
                src="/umuravaBg.webp"
                alt="User"
                className="w-full h-full rounded-3"
              />
            </li>
            <li className="mb-[8px] p-4  flex items-center gap-2 w-[256px] hover:bg-white hover:text-blue-600 h-[44px] rounded-sm">
              <GoHome />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-[8px] p-4  flex items-center gap-2 w-[256px] hover:bg-white hover:text-blue-600 h-[44px] rounded-sm">
              <IoDocumentText />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/challenges"
              >
                Challenges
              </Link>
            </li>
            <li className="mb-[8px] p-4  flex items-center gap-2 w-[256px] hover:bg-white hover:text-blue-600 h-[44px] rounded-sm">
              <MdOutlinePeopleAlt />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/community"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="w-[272px] h-[144px] px-[8px] pb-[12px] flex flex-col gap-[4px]">
            <li className="mb-[8px] p-4  flex items-center gap-2 w-[256px] hover:bg-white hover:text-blue-600 h-[44px] rounded-sm">
              <IoHeadsetSharp />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/helpCenter"
              >
                Help Center
              </Link>
            </li>
            <li className="mb-[8px] p-4  flex items-center gap-2 w-[256px] hover:bg-white hover:text-blue-600 h-[44px] rounded-sm">
              <IoSettingsOutline />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/settings"
              >
                Settings
              </Link>
            </li>

            <li className="mb-[8px] p-4  flex items-center gap-2 w-[256px] hover:bg-white hover:text-blue-600 h-[44px] rounded-sm">
              <GiFamilyHouse />
              <Link
                className="text-[14px] font-normal leading-5"
                href="/admin/referFriend"
              >
                Refer Family & Friends
              </Link>
            </li>
          </ul>

          <div className="flex  items-center py-[8px] mt-4 gap-1 w-[272px] h-[80px]">
            <div className="w-[184px] h-[40px] flex gap-[12px] mr-[24px]">
              <img
                src="/profile2.webp"
                alt="profileImage"
                className="h-8 w-8 rounded-full"
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
    </div>
  );
};

export default SideBar;
