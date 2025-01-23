import { FaSearch } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi2";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-[64px] w-full px-[36px] bg-[#FFFFFF] border border-b flex justify-center gap-10">
      <div className="flex items-center w-full justify-center py-[12px]">
        <div className="flex w-full items-center gap-[40px] justify-between">
          <div className="w-2/3 relative text-[#475367]">
            <FaSearch className="absolute top-3 left-3"/>
            <input
              type="search"
              placeholder="Search"
              className="w-full h-[40px] rounded-lg bg-[#f0f2f5] px-[12px] pl-[40px] outline-none py-[10px]"
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
