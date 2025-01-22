import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-[64px] w-full px-[36px] bg-[#FFFFFF] border border-b flex justify-center gap-10">
      <div className="flex items-center w-full justify-center py-[12px]">
        <div className="flex w-full items-center justify-between">
          <div className="w-[640px]">
            <input type="search" placeholder="Search" className="w-full h-[40px] rounded-lg bg-[#f0f2f5] px-16"/>
          </div>
          <div className="flex flex-row h-[40px] gap-[12px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[#f0f2f5]"></div>
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <Image src={require("../../../public/profile2.webp")} alt="Profile Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
