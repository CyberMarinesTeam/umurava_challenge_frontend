import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import StatusCard from "../components/StatusCard";
import { FaAngleRight } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import ChallengeCard2 from "@/app/components/ChallengeCard2";
import SmallStatusCard from "../components/SmallStatusCard";
import Modal from "../components/Modal";

const Challenges = () => {
  return (
    <div className="p-[36px] h-full gap-[16px] bg-[#F9FAFB]">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-2xl font-bold">Challenges</p>
          <p>
            Join a challenge or a hackathon to gain more valuable work
            experience
          </p>
        </div>
        <div>
          <button className="py-[10px] flex h-[55px] flex-row items-center gap-2 px-[18px] bg-[#2B71F0] text-white rounded-lg">
            <MdOutlineRemoveRedEye className="w-[24px] h-[24px]" />
            View Profile
          </button>
        </div>
      </div>
      <div className="py-[16px] flex w-full items-center">
        <div className="flex justify-start gap-[10px] border-b pb-5 w-full flex-row">
          <SmallStatusCard
            count={0}
            icon={<FiFileText />}
            text="All Challenges"
          />
          <SmallStatusCard
            count={0}
            icon={<FiFileText />}
            text="Completed Challenge"
          />
          <SmallStatusCard
            count={0}
            icon={<FiFileText />}
            text="Open Challenge"
          />
          <SmallStatusCard
            count={0}
            icon={<FiFileText />}
            text="Ongoing Challenge"
          />
        </div>
      </div>
      <div className="flex flex-row pt-1 gap-[20px]">
        <ChallengeCard2 />
        <ChallengeCard2 />
        <ChallengeCard2 />
      </div>
      <div className="flex flex-row justify-between py-10 px-10">
        <div>
          <button className="px-3 py-2 text-[#98A2B3] bg-white text-sm w-[96px] h-[36px] rounded-md active:bg-[#2B71F0] active:text-white">
            Previous
          </button>
        </div>
        <div>
          <button className="px-3 py-2 text-[#98A2B3] bg-white text-sm w-[96px] h-[36px] rounded-md active:bg-[#2B71F0] active:text-white">
            Next
          </button>
        </div>
      </div>
      <Modal/>
    </div>
  );
};

export default Challenges;
