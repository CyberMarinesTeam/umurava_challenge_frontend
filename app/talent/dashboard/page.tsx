"use client";

import React, { useEffect } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import StatusCard from "../components/StatusCard";
import { FaAngleRight } from "react-icons/fa6";
import ChallengeCard2 from "@/app/components/ChallengeCard2";

import { useSelector } from "react-redux";
// import { clearCredentials } from "@/lib/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/redux/store";
import { useGetChallengesQuery } from "@/lib/redux/slices/challengeSlice";
const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter()

    // ✅ Redirect inside useEffect (AFTER rendering)
    useEffect(() => {
      if (!user) {
        router.push("/login");
      }
      console.log(user)
    }, [user, router]); 

  const {data} = useGetChallengesQuery();
 
  console.log("data is found => ", data);

  return (
    <div className="p-[36px] excluded gap-[16px] bg-[#F9FAFB]">
      <div className="flex flex-row excluded justify-between">
        <div className="excluded">
          <p className="text-2xl font-bold">Welcome back {user?.username},</p>
          <p>Build work experience through skill challenges</p>
        </div>
        <div className="excluded">
          <button className="py-[10px] flex h-[55px] flex-row items-center gap-2 px-[18px] bg-[#2B71F0] text-white rounded-lg">
            <MdOutlineRemoveRedEye className="w-[24px] h-[24px]" />
            View Profile
          </button>
        </div>
      </div>
      <div className="py-[16px] excluded flex w-full items-center">
        <div className="flex excluded gap-[20px] w-full flex-row">
          <StatusCard label="Completed Challenges" number={5} />
          <StatusCard label="Completed Challenges" number={5} />
          <StatusCard label="Completed Challenges" number={5} />
        </div>
      </div>
      <div className="w-full excluded flex justify-between">
        <div className="excluded">
          <p className="font-bold">Recent Challenges</p>
        </div>
        <div className="text-blue-600 excluded flex flex-row items-center gap-2">
          <p>See All</p>
          <FaAngleRight />
        </div>
      </div>
      <div className="flex excluded flex-row gap-[20px]">
      {data?.map((challenge) => (
        <ChallengeCard2 key={challenge._id} challenge={challenge} />
      ))}
      </div>
    </div>
  );
};

export default Dashboard;
