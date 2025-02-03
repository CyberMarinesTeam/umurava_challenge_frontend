"use client"

import React, { useEffect } from "react";
import SideBar from "@/app/components/SideBar";
import Header from "@/app/components/Header";
import ChallengeCard2 from "@/app/components/ChallengeCard2";
import { useGetChallengesQuery } from "@/lib/redux/slices/challengeSlice";
import Card from "@/app/components/Card";
import { FaChevronRight } from "react-icons/fa6";
import Card2 from "@/app/components/Card2";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
const Page = () => {

  const user = useSelector((state: RootState) => state.auth.user);
 
  const { data} = useGetChallengesQuery();
  return (
    <div className="excludedDashBoard px-12 py-4">
      <div className="excludedDashBoard h-[56px] flex flex-col gap-[4px] mb-12 mt-[10px]">
        <h1 className="font-semibold text-[24px] leading-[28px]">
          Welcome back, {user?.username}
        </h1>
        <p className="text-[16px] leading-[23px] font-normal text-[#475367]">
          Build Work Exprience through Skills Challenges
        </p>
      </div>
      <div className="excludedDashBoard relative h-[316px] ">
        <div className="grid grid-cols-2  gap-4">
          <Card
            width={540}
            timeDescription={"This week"}
            description={"Total Challenges"}
            number={23178}
            percentage={20}
          />
          <Card2
            width={540}
            timeDescription={"This week"}
            description={"Total Participants"}
            number={231}
            percentage={15}
          />
        </div>
        <div className="excludedDashBoard grid grid-cols-3 mt-4 gap-4">
          <Card
            width={540}
            timeDescription={"Last 30 days"}
            description={"Completed Challenges"}
            number={25631}
            percentage={17}
          />
          <Card
            width={540}
            timeDescription={"Last 20 days"}
            description={"Open Challenges"}
            number={56531}
            percentage={16}
          />
          <Card
            width={540}
            timeDescription={"Last 10 days"}
            description={"Ongoing Challenges"}
            number={26631}
            percentage={15}
          />
        </div>
      </div>
      <div className="excludedDashBoard h-[530px] mt-[50px] ">
        <div className="excludedDashBoard flex items-center justify-between mb-4 ]">
          <h1 className="text-[18px] leading-[26px] font-semibold text-[#101928]">
            Recent Challenges
          </h1>
          <button className="text-[#2B71F0] text-[13px] font-normal flex  items-center gap-2  h-[14px] ">
            See all <FaChevronRight />
          </button>
        </div>
        <div className="excludedDashBoard gap-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between ">
        {data?.map((challenge) => (
          <ChallengeCard2 key={challenge._id} challenge={challenge} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
