"use client";
import React, { Fragment, useEffect, useState } from "react";
// import Header from "@/app/components/Header";
// import SideBar from "@/app/components/SideBar";
// import ChallengeCard from "@/app/components/ChallengeCard";
// import { RxFileText } from "react-icons/rx";
// import ChallengeCard2 from "@/app/components/ChallengeCard2";
// import { MdOutlineNavigateNext } from "react-icons/md";
// import { GrFormPrevious } from "react-icons/gr";
import { useGetChallengesQuery } from "@/lib/redux/slices/challengeSlice";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import ChallengeCard2 from "@/app/components/ChallengeCard2";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Challenges = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const {data} = useGetChallengesQuery();


  if(data) {
    console.log("data=> " ,data)
  }

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const [CurrentPage, setCurrent] = useState(1);
  
 
  const totalNumberElements = 6;
  const lastIndex = CurrentPage * totalNumberElements;
  const firstIndex = lastIndex - totalNumberElements;
  const paginatedchallenges = data?.slice(firstIndex, lastIndex);
  const totalNumberPages = Math.ceil(data?.length / totalNumberElements);
  const handleNext = () => {
    if (CurrentPage < totalNumberPages) {
      setCurrent(CurrentPage + 1);
    }
  };
  const handleNumberClick = (pageNumber: number) => {
    setCurrent(pageNumber);
  };
  const handlePrevious = () => {
    if (CurrentPage > 1) {
      setCurrent(CurrentPage - 1);
    }
  };


  return (
    <main className="px-8">
      <div className="mb-[50px]">
        {" "}
        <h1 className="text-[24px] font-bold mt-[40px]">Challenges</h1>
        <p className="text-[14px] text-[#667185]">
          Join Challenges or Hackathon to valuable work experience
        </p>
      </div>
      <div className="flex border-b-[0.5px] border-gray-200 justify-between mb-4">
        <div className="flex justify-between items-center w-full h-[76px]">
          <div className="flex gap-4">
            <button className="bg-gray-100 hover:bg-blue-200 border-[1.5px] hover:border-slate-50 border-[#E4E7EC] py-3 flex gap-[3px] transition-all ease-in-out duration-150 items-center justify-center px-[15px] rounded-[6px] group">
              <IoDocumentTextOutline className="text-[15px] group-hover:text-[#2B71F0] text-[#344054]" />

              <p className="text-[13px] group-hover:text-[#101928] text-[#344054]">
                All Challenges
              </p>
              <div className="bg-gray-300 group-hover:bg-[#2B71F0] px-[13px] rounded-full">
                <span className="text-[#344054] group-hover:text-white text-[12px] p-[0px]">
                  0
                </span>
              </div>
            </button>
            <button className="bg-gray-100 hover:bg-blue-200 border-[1.5px] hover:border-slate-50 border-[#E4E7EC] py-3 flex  gap-[3px] transition-all ease-in-out duration-150 items-center justify-center px-[15px] rounded-[6px] group">
              <IoDocumentTextOutline className="text-[15px] group-hover:text-[#2B71F0] text-[#344054]" />

              <p className="text-[13px] group-hover:text-[#101928] text-[#344054]">
                Completed Challenges
              </p>
              <div className="bg-gray-300 group-hover:bg-[#2B71F0] px-[13px] rounded-full">
                <span className="text-[#344054] group-hover:text-white text-[12px] p-[0px]">
                  0
                </span>
              </div>
            </button>
            <button className="bg-gray-100 hover:bg-blue-200 border-[1.5px] hover:border-slate-50 border-[#E4E7EC] py-3 flex  gap-[3px] transition-all ease-in-out duration-150 items-center justify-center px-[15px] rounded-[6px] group">
              <IoDocumentTextOutline className="text-[15px] group-hover:text-[#2B71F0] text-[#344054]" />

              <p className="text-[13px] group-hover:text-[#101928] text-[#344054]">
                Open Challenges
              </p>
              <div className="bg-gray-300 group-hover:bg-[#2B71F0] px-[13px] rounded-full">
                <span className="text-[#344054] group-hover:text-white text-[12px] p-[0px]">
                  0
                </span>
              </div>
            </button>
            <button className="bg-gray-100 hover:bg-blue-200 border-[1.5px] hover:border-slate-50 border-[#E4E7EC] py-3 flex  gap-[3px] transition-all ease-in-out duration-150 items-center justify-center px-[15px] rounded-[6px] group">
              <IoDocumentTextOutline className="text-[15px] group-hover:text-[#2B71F0] text-[#344054]" />

              <p className="text-[13px] group-hover:text-[#101928] text-[#344054]">
                Ongoing Challenges
              </p>
              <div className="bg-gray-300 group-hover:bg-[#2B71F0] px-[13px] rounded-full">
                <span className="text-[#344054] group-hover:text-white text-[12px] p-[0px]">
                  0
                </span>
              </div>
            </button>
          </div>
          <Link
            href={"challenges/create"}
            className="bg-[#2B71F0] text-white  px-[18px] py-[16px] rounded"
          >
            <p className="text-[12px]">+ Create New Challenge</p>
          </Link>
        </div>
      </div>
      <div className="excluded grid pb-[40px] border-t-[0.5px] border-gray-200 pt-[7px] place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedchallenges?.map((challenge, index) => (
          <ChallengeCard2 key={challenge._id} challenge={challenge} />
        ))}
      </div>
      <div className="flex px-[40px] pr-[100px] flex-row ml-[30px] mb-[70px]  w-full space-x-[10px] font-bold text-white justify-between max-md:ml-[70px] items-center text-[10px]">
        <button
          className="text-[#98A2B3] bg-white w-[95px] text-[14px] h-[36px] px-[12px] grid place-items-center  border-gray-300 shadow-sm hover:bg-[#2B71F0] hover:text-white transition-all ease-in-out duration-300 rounded-[5px]"
          onClick={handlePrevious}
        >
          Previous
        </button>
        {/* <div className="flex flex-row space-x-[10px] items-center justify-center"> */}
        {/* {Array.from(
            { length: totalNumberPages },
            (_, index) => index + 1
          ).map((PageNumber) => (
            <button
              key={PageNumber}
              onClick={() => {
                handleNumberClick(PageNumber);
              }}
              className={`w-[30px] h-[30px] rounded-full max-sm:text-[7px] ${
                CurrentPage === PageNumber
                  ? "bg-[#2B71F0]"
                  : "bg-[#2B71F0] opacity-50"
              }`}
            >
              {PageNumber}
            </button>
          ))} */}
        {/* </div> */}
        <button
          onClick={handleNext}
          className="text-[#98A2B3] w-[95px] bg-white text-[14px] h-[36px] px-[12px] grid place-items-center  border-gray-300 shadow-sm hover:bg-[#2B71F0] hover:text-white transition-all ease-in-out duration-300 rounded-[5px]"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Challenges;
