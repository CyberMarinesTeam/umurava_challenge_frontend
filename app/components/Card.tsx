import { FaChevronDown } from "react-icons/fa6";
import { RxFileText } from "react-icons/rx";
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
const Card = ({width}) => {
  return (
    <div className={`relative bg-white rounded-lg border-[1.5px] border-[#E4E7EC] px-6  py-12 h-[150px] w-[${width}]` }>
       <div className="w-[500px]">
       <p className="absolute top-2 right-2 flex items-center gap-1  h-[17px] font-normal text-[12px] leading-[18px] text-[#98A2B3]">last 20 days <FaChevronDown /></p>
        <div className="flex items-center justify-between  ">
         <button title="." className="bg-blue-200 rounded-full w-[47px] h-[47px] flex items-center justify-center "><RxFileText color="blue"/></button>
          <div className="flex flex-col gap-1 w-[429px]">
          <p className="text-[#25272B] text-[12px] font-normal">Total Challenge </p>
          <p className="font-semibold text-blue-950 flex gap-4 ">29, 405 <span className="text-[#2B71F0] flex bg-[#E7F6EC] rounded-xl px-2  leading-[17px] items-center gap-0"><FaLongArrowAltUp color="#2B71F0"/><span className="text-[8px]">15%</span></span></p>
          </div>
      </div>
       </div>
    </div>
  )
}

export default Card
