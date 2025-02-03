import { RxFileText } from "react-icons/rx";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import DropDown from "./DropDown";
const Card = ({
  width,
  timeRange,
  description,
  number,
  percentage,
}: {
  width: number;
  timeRange: string;
  description: string;
  number: number;
  percentage: number;
}) => {
  return (
    <div
      className={`relative bg-white rounded-lg border-[1.5px] border-[#E4E7EC] px-6  py-[0px] h-[150px] w-[${width}]`}
    >
      <div className="absolute top-2 right-2 flex items-center gap-1  h-[17px] font-normal text-[12px] leading-[18px] text-[#98A2B3]">
        <DropDown />
      </div>
      <div className="w-full h-full">
        <div className="flex flex-row space-x-[30px] items-center justify-center mt-[70px]    ">
          <button
            title="."
            className="bg-blue-200 rounded-full w-[47px] h-[47px]  grid place-items-center "
          >
            <RxFileText className="text-[#2B71F0] text-[23px]" />
          </button>
          <div className="flex flex-col flex-1 gap-1 ">
            <p className="text-[#25272B] text-[14px] font-normal">
              {description}
            </p>
            <p className="font-semibold text-blue-950 flex gap-4 ">
              {number}
              <span className="text-[#2B71F0] space-x-[3px] flex bg-[#E7F6EC] rounded-xl px-2  leading-[17px] items-center flex-row gap-0">
                <FaArrowUpLong
                  color="#2B71F0"
                  className="font-bold text-[10px]"
                />
                <span className="text-[12px] font-bold">{percentage}%</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
