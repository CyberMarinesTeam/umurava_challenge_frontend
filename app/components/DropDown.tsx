"use client";
import { FaChevronDown } from "react-icons/fa6";
import React, { useState } from "react";

const DropDown = () => {
  const [r, setR] = useState(false);
  return (
    <div className="flex flex-row gap-2 items-center relative" onClick={() => setR(!r)}>
      <div>
        <p>This Day</p>
      </div>
      <div>
        <FaChevronDown />
      </div>
      <div className={`absolute ${ r ? "flex" : "hidden" } bg-[#F9FAFB] rounded-lg top-6 w-32 -right-8 p-1 border border-[#E4E7EC] flex-col`}>
        <div className="px-3 py-1 border border-[#FFFFFF00] hover:border-[#F9FAFB] hover:bg-[#f0f3f5] rounded-lg">
          <p>This Week</p>
        </div>
        <div className="px-3 py-1 border border-[#FFFFFF00] hover:border-[#F9FAFB] hover:bg-[#f0f3f5] rounded-lg">
          <p>Last 30 Days</p>
        </div>
        <div className="px-3 py-1 border border-[#FFFFFF00] hover:border-[#F9FAFB] hover:bg-[#f0f3f5] rounded-lg">
          <p>Last 3 Months</p>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
