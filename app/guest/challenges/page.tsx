import ChallengeCard from "@/app/components/ChallengeCard";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import React from "react";
import { VscArrowSmallLeft } from "react-icons/vsc";

const page = () => {
  return (
    <main className="">
      <NavBar />
      <main className="bg-[#f9fafb]">
        <div className="flex  flex-row items-center space-x-[20px] justify-start px-[100px] pt-[30px]">
          <span className="border-[#E4E7EC] border-[1px] p-[3px] rounded-[5px] bg-white">
            <VscArrowSmallLeft className="text-[21px]" />
          </span>
          <h2 className="text-[#667185]">Go Back</h2>
          <h2 className="flex flex-row items-center justify-center space-x-[4px]">
            <span className="text-[#667185]">/</span>
            <span className="text-[#2B71F0]">Challenges & Hackathons</span>
          </h2>
        </div>
        <div className="grid grid-cols-4 py-[50px] gap-[20px] px-[100px] place-items-center">
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
        </div>
      </main>
      <Footer />
    </main>
  );
};

export default page;
