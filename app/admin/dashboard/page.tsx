"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { useGetChallengesQuery } from "@/lib/redux/slices/challengeSlice";
import ChallengeCard2 from "@/app/components/ChallengeCard2";
import Card from "@/app/components/Card";
import Card2 from "@/app/components/Card2";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const { data } = useGetChallengesQuery();

  useEffect(() => {
    if (user?.roles.toString()!=="admin") {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div className="excludedDashBoard px-12 py-4 z-1">
      <div className="excludedDashBoard h-[56px] flex flex-col gap-[4px] mb-12 mt-[10px]">
        <h1 className="font-semibold text-[24px] leading-[28px]">
          Welcome back, {user?.username}
        </h1>
        <p className="text-[16px] leading-[23px] font-normal text-[#475367]">
          Build Work Experience through Skills Challenges
        </p>
      </div>

      <div className="excludedDashBoard relative h-[316px]">
        <div className="grid grid-cols-2 gap-4">
          <Card width={540} description="Total Challenges" />
          <Card2  width={540}  description="Total Participants"   number={231} percentage={15} />
        </div>
        <div className="excludedDashBoard grid grid-cols-3 mt-4 gap-4">
          <Card width={540} description="Completed Challenges" />
          <Card width={540} description="Open Challenges" />
          <Card width={540} description="Ongoing Challenges" />
        </div>
      </div>

      <div className="excludedDashBoard h-[530px] mt-[50px]">
        <div className="excludedDashBoard flex items-center justify-between mb-4">
          <h1 className="text-[18px] leading-[26px] font-semibold text-[#101928]">
            Recent Challenges
          </h1>
          {/* <button className="cursor-pointer" > */}
          <Link href="/admin/challenges" className="z-50">
          <button className="text-[#2B71F0] text-[13px] font-normal flex items-center gap-2 h-[14px]"><span>See all </span> <FaChevronRight /></button>
            
          </Link>
          {/* </button> */}
        </div>

        <div className="excludedDashBoard gap-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data && data.length > 0 ? (
            data?.slice(0, 3).map((challenge) => (
              <ChallengeCard2 key={challenge._id} challenge={challenge} />
            ))
          ) : (
            <div>
              <h1>No Challenges Found yet</h1>
            </div>

          ) }
        </div>
      </div>
    </div>
  );
};

export default Page;
