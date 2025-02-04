import { FaSearch } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi2";
import React from "react";
import Image from "next/image";
import { IoFilterOutline, IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="h-[64px] w-full px-[36px] bg-[#FFFFFF] border border-b flex justify-center gap-10">
      <div className="flex items-center w-full justify-center py-[12px]">
        <div className="flex w-full items-center gap-[40px] justify-between">
          <div className="flex items-center flex-row gap-4 bg-gray-100 rounded-md w-[60%] ml-8 px-4 py-2">
            <IoSearchSharp className="text-gray-500" />
            <input
              type="text"
              placeholder="Search.."
              className="text-gray-600 focus:outline-none bg-gray-100 w-full"
            />
       
          </div>
          <div className="flex flex-row h-[40px] gap-[12px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[#f0f2f5] flex justify-center items-center">
              <HiOutlineBell className="w-[20px] h-[20px]" />
            </div>
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <Image
                src={require("../../../public/profile2.webp")}
                alt="Profile Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
