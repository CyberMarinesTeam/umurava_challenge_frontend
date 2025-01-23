"use client";
import Link from "next/link";
import React, { useState } from "react";
import { VscArrowSmallLeft } from "react-icons/vsc";

interface paramsInt {
  params: {
    id: string;
  };
}
const Page = ({ params }: paramsInt) => {
  const { id } = params;

  const [challengeTitle, setChallengeTitle] = useState(
    "Payroll and HR Management System"
  );
  const [deadline, setDeadline] = useState("24/12/2025");
  const [duration, setDuration] = useState("7 Days");
  const [moneyPrize, setMoneyPrize] = useState("$150");
  const [contactEmail, setContactEmail] = useState("talent@umurava.africa");
  const [projectDescription, setProjectDescription] = useState(
    "User Interface Design for each step Creating wireframes to outline the basic structure and layout of the web and mobile app.Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.Ensuring the web application works seamlessly across web, mobile, and tablet devices.Provide a feedback session for in-development guidance"
  );
  const [projectBrief, setProjectBrief] = useState(
    " A Fintech company is developing a digital financial platform designed for businesses and their workforce in Africa, partnering with Umurava to run a skills challenge for product design. This Fintech Company offers payroll management systems to employers and embedded financial services and products to employees and gig workers across Africa."
  );
  const [projectTasks, setProjectTasks] = useState(
    "User Interface Design for each step Creating wireframes to outline the basic structure and layout of the web and mobile app.Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.Ensuring the web application works seamlessly across web, mobile, and tablet devices.Provide a feedback session for in-development guidance"
  );
  const [fiftyView, setFiftyView] = useState(true);
  const [fivehundredView, setFiveHundredView] = useState(true);
  const [twofiftyView, settwoFiftyView] = useState(true);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      challengeTitle,
      deadline,
      duration,
      moneyPrize,
      contactEmail,
      projectDescription,
      projectBrief,
      projectTasks,
    });
  };
  return (
    <div className="excluded flex flex-col space-y-[30px] pb-[70px] items-center">
      <div className="excluded flex  flex-row w-full  border-y-[1.5px] items-center  border-[#E4E7EC] space-x-[20px] bg-white justify-start px-[20px] h-[62px]">
        <Link
          href={`/admin/challenges/${id}`}
          className="border-[#E4E7EC] border-[1px] p-[3px] rounded-[5px] bg-white"
        >
          <VscArrowSmallLeft className="text-[21px]" />
        </Link>
        <h2 className="text-[#667185] text-[14px]">Go Back</h2>
        <h2 className="flex flex-row items-center justify-center text-[14px] space-x-[4px]">
          <span className="text-[#667185]">Create New Challenge</span>
          <span className="text-[#667185]">/</span>
          <span className="text-[#2B71F0]">Edit the Challenge</span>
        </h2>
      </div>
      <div className="excluded bg-white  border-[#E4E7EC] border-[1.5px] shadow-sm rounded-[10px] w-[624px] items-center  px-8 pt-6 pb-8 flex flex-col">
        <h2 className="text-[24px] font-semibold mb-2">Edit a Challenge</h2>
        <p className="text-[#8C94a6] mb-[30px]">
          Fill out these details to build your broadcast
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="challengeTitle"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Challenge/Hackathaton Title
            </label>
            <input
              type="text"
              id="challengeTitle"
              className="appearance-none text-[14px] placeholder:text-[14px]   border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={challengeTitle}
              placeholder="Enter Title"
              onChange={(e) => setChallengeTitle(e.target.value)}
            />
          </div>
          <div className="excluded mb-4 flex flex-col md:flex-row md:items-center">
            <div className="excluded md:w-1/2 mb-4 md:mb-0">
              <label
                htmlFor="deadline"
                className="block text-[#475367] text-[14px] mb-2"
              >
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                className="appearance-none text-[14px] placeholder:text-[14px]    border-[0.5px] border-[#E4E7EC] rounded w-[279px] p-[16px] text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className="excluded md:w-1/2">
              <label
                htmlFor="duration"
                className="block text-[#475367] text-[14px] mb-2"
              >
                Duration
              </label>
              <input
                type="text"
                id="duration"
                placeholder="Duration"
                className="appearance-none text-[14px] placeholder:text-[14px]   border-[0.5px] border-[#E4E7EC] rounded w-[279px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="moneyPrize"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Money Prize
            </label>
            <input
              type="text"
              id="moneyPrize"
              placeholder="Prize"
              className="appearance-none text-[14px] placeholder:text-[14px]  border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={moneyPrize}
              onChange={(e) => setMoneyPrize(e.target.value)}
            />
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="contactEmail"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Contact Email
            </label>
            <input
              type="email"
              id="contactEmail"
              placeholder="Email"
              className="appearance-none text-[14px] placeholder:text-[14px]  border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="projectDescription"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              placeholder="Enter text here ..."
              className="appearance-none text-[14px] placeholder:text-[14px]  h-[114px] border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={projectDescription}
              onFocus={() => {
                settwoFiftyView(false);
              }}
              onChange={(e) => setProjectDescription(e.target.value)}
              maxLength={250}
            />
            {(twofiftyView || projectDescription === "") && (
              <p className="text-[14px] text-gray-400">
                keep this simple of 250 characters
              </p>
            )}
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="projectBrief"
              className="block text-[#475367]  text-[14px] mb-2"
            >
              Project Brief
            </label>
            <textarea
              id="projectBrief"
              className="appearance-none text-[14px] placeholder:text-[14px]  h-[114px] border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              maxLength={50}
              onFocus={() => {
                setFiftyView(false);
              }}
              placeholder="Enter text here ..."
            />
            {(fiftyView || projectBrief === "") && (
              <p className="text-[14px] text-gray-400">
                keep this simple of 50 characters
              </p>
            )}
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="projectTasks"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Project Description & Tasks
            </label>
            <textarea
              id="projectTasks"
              className="appearance-none text-[14px] h-[114px] placeholder:text-[14px]  border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={projectTasks}
              onChange={(e) => setProjectTasks(e.target.value)}
              maxLength={500}
              onFocus={() => {
                setFiveHundredView(false);
              }}
              placeholder="Enter text here ..."
            />
            {(fivehundredView || projectTasks === "") && (
              <p className="text-[14px] text-gray-400">
                keep this simple of 500 characters
              </p>
            )}
          </div>
          <div className="excluded flex flex-row space-x-[20px] items-center justify-between">
            <button className="w-[220px] h-[56px] rounded-[5px] text-[16px] text-[#2b71f0]  grid place-items-center border-[#2b71f0] border-[1.5px]">
              Cancel
            </button>
            <button className="bg-[#2B71f0] w-[324px]  h-[56px]  text-[16px] rounded-[5px] font-semibold text-white">
              Update Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
