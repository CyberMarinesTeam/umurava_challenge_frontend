import React from "react";

const ChallengeCard = () => {
  return (
    <div className="flex flex-col border-[1.5px] items-start pt-[18px] rounded-[10px] w-[350px] h-auto border-[#E4E7EC] ">
      <div className="relative px-2">
        <img
          src="/umuravaBg.webp"
          draggable={false}
          alt="umurava_bg"
          className="w-[313px] object-cover rounded-[10px] h-[200px]"
        />
        <span className="bg-[#0F973D] text-white absolute w-[70px] grid place-items-center h-[28px] rounded-full top-[10px] text-[14px] right-[10px]">
          Open
        </span>
      </div>
      <h2 className="text-[#101928] mt-[30px] mb-4 text-[20px] font-semibold  px-4">
        Design a Dashboard for SokoFund
      </h2>
        <h2 className="text-[#25272B] text-[14px] font-semibold  px-4">
          Skills Needed:
        </h2>
        <div className="flex flex-wrap mt-2 gap-[10px] items-start justify-start mb-4  px-4">
          <button className="text-[#2B71F0] text-[12px] px-[7px] py-[6px] rounded-[12px] border-[#2B71F0] border-[1.5px]">
            UI/UX Design
          </button>
          <button className="text-[#2B71F0] text-[12px] px-[7px] py-[6px] rounded-[12px] border-[#2B71F0] border-[1.5px]">
            User Research
          </button>
          <button className="text-[#2B71F0] text-[12px] px-[7px] py-[6px] rounded-[12px] border-[#2B71F0] border-[1.5px]">
            User Research
          </button>
        </div>
      
      <div className="space-x-[4px] mt-[10px] items-start justify-start  px-4">
        <h2 className="text-[#25272B] text-[14px] font-semibold">
          Seniority Level:
        </h2>
        <h1 className="text-[#475367] text-[14px]">
          Junior, Intermediate, Senior
        </h1>
      </div>
      <div className="flex space-x-[10px] mt-[10px] w-full items-start px-4 flex-row justify-start ">
        <h2 className="text-[#25272B] text-[14px] font-semibold">Timeline:</h2>
        <h1 className="text-[#475367] text-[14px]">15 Days</h1>
      </div>
      <div className="flex-1 w-full justify-center border-t-[1.5px] flex items-center  border-[#E4E7EC] my-[18px]">
        <button className="bg-[#2B71F0] text-[13px] font-semibold text-white h-[40px] text-center mt-2 w-[170px] rounded-[10px]">
          View Challenge
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
