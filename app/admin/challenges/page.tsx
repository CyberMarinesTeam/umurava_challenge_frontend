import React from "react";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/SideBar";
import ChallengeCard from "@/app/components/ChallengeCard";
import { RxFileText } from "react-icons/rx";

const Challenges = () => {
  return (
    <main className="px-8">
      <div className="mb-4">
        {" "}
        <h1 className="text-[24px] font-bold ">Challenges</h1>
        <p className="text-[4px]">
          Join Challenges or Hackathon to valuable work experience
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex justify-between items-center w-[1292px] h-[76px]">
          <div className="flex gap-4">
            <button className="bg-gray-300 py-3 flex w-[200px] gap-2 items-center justify-center px-2 rounded-[6px]">
              <div>
                <RxFileText className="text-2xl text-gray-500" />
              </div>

              <p className="text-[8px]">All Challenges</p>
              <div>O</div>
            </button>
            <button className="bg-gray-300 w-[268px] flex gap-2 items-center justify-center px-2 rounded-[6px]">
              <div>
                <RxFileText className="text-2xl text-gray-500" />
              </div>

              <p className="text-[14px]">Completed Challenges</p>
              <div>O</div>
            </button>
            <button className="bg-gray-300 w-[240px] flex gap-2 items-center justify-center px-2 rounded-[6px]">
              <div>
                <RxFileText className="text-2xl text-gray-500" />
              </div>

              <p className="text-[14px]">Open Challenges</p>
              <div>O</div>
            </button>
            <button className="bg-gray-300 flex w-[247px] gap-2 items-center justify-center px-2 rounded-[6px]">
              <div>
                <RxFileText className="text-2xl text-gray-500" />
              </div>

              <p className="text-[14px]">Ongoing Challenges</p>
              <div>O</div>
            </button>
          </div>
          <button className="bg-[#2B71F0] text-white  px-[18px] py-[16px] rounded">
            <p className="text-[14px]">+ Create New Challenge</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </main>
  );
};

export default Challenges;
