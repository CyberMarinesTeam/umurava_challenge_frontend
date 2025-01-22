import React from "react";
import SideBar from "@/app/components/SideBar";
import Header from "@/app/components/Header";
import ChallengeCard from "@/app/components/ChallengeCard";
import Card from "@/app/components/Card";
import { FaChevronRight } from "react-icons/fa6";
const Page = () => {
  return (
    <div className="flex bg-slate-50 mb-12 ">
      {/* Sidebar */}
      <SideBar />

      <div className="flex-1">
        {/* Header */}
        <Header />

        <div className="px-12 py-4">
          <div className=" h-[56px] flex flex-col gap-[4px] mb-12 mt-10">
            <h1 className="font-semibold text-[24px] leading-[28px]">
              Welcome back, Hilaire
            </h1>
            <p className="text-[16px] leading-[23px] font-normal text-[#475367]">
              Bulld work exprience through skills Challenges
            </p>
          </div>
          <div className="relative h-[316px] ">
            {/* Cards */}
            <div className="grid grid-cols-2  gap-4">
              <Card width={540}/>
              <Card width={540}/>
            </div>
            <div className="grid grid-cols-3 mt-4 gap-4">
              <Card width={354}/>
              <Card width={354}/>
              <Card width={354}/>
            </div>
          </div>
         <div className="h-[530px] mt-12 ">
         <div className="flex items-center justify-between mb-4 ]">
            <h1 className="text-[18px] leading-[26px] font-semibold text-[#101928]">Recent Challenges</h1>
            <button className="text-[#2B71F0] font-normal flex text-[8px] items-center gap-2  h-[14px] ">
              see All <FaChevronRight />
            </button>
          </div>
          {/* Main body */}
          <div className="gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between ">
            {/* Challenge Cards */}
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            {/* Add more ChallengeCard components as needed */}
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
