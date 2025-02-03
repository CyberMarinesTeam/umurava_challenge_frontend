"use client";

import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import SmallStatusCard from "../components/SmallStatusCard";
import ChallengeCard2 from "@/app/components/ChallengeCard2";
import { useGetChallengesQuery } from "@/lib/redux/slices/challengeSlice";

const Challenges = () => {
    const { data } = useGetChallengesQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    
    const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data ? data.slice(startIndex, startIndex + itemsPerPage) : [];

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="excluded p-[36px] h-full gap-[16px] bg-[#F9FAFB]">
            <div className="excluded flex flex-row justify-between">
                <div>
                    <p className="text-2xl font-bold">Challenges</p>
                    <p>Join a challenge or a hackathon to gain more valuable work experience</p>
                </div>
                <button className="py-[10px] flex h-[55px] flex-row items-center gap-2 px-[18px] bg-[#2B71F0] text-white rounded-lg">
                    <MdOutlineRemoveRedEye className="w-[24px] h-[24px]" />
                    View Profile
                </button>
            </div>
            <div className="py-[16px] excluded flex w-full items-center">
                <div className="flex justify-start gap-[10px] border-b pb-5 w-full">
                    <SmallStatusCard count={0} icon={<FiFileText />} text="All Challenges" />
                    <SmallStatusCard count={0} icon={<FiFileText />} text="Completed Challenge" />
                    <SmallStatusCard count={0} icon={<FiFileText />} text="Open Challenge" />
                    <SmallStatusCard count={0} icon={<FiFileText />} text="Ongoing Challenge" />
                </div>
            </div>
            <div className="flex flex-wrap gap-[20px]">
                {paginatedData.map((challenge) => (
                    <ChallengeCard2 key={challenge._id} challenge={challenge} />
                ))}
            </div>
            <div className="flex justify-between py-10 px-10">
                <button 
                    onClick={handlePrevious} 
                    disabled={currentPage === 1} 
                    className={`px-3 py-2 text-sm w-[96px] h-[36px] rounded-md ${currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-white text-[#98A2B3] active:bg-[#2B71F0] active:text-white"}`}>
                    Previous
                </button>
                <button 
                    onClick={handleNext} 
                    disabled={currentPage === totalPages} 
                    className={`px-3 py-2 text-sm w-[96px] h-[36px] rounded-md ${currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-white text-[#98A2B3] active:bg-[#2B71F0] active:text-white"}`}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Challenges;
