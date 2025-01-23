import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoFilterOutline, IoSearchSharp } from "react-icons/io5";
import { RxFileText } from "react-icons/rx";
import { VscArrowSmallLeft } from "react-icons/vsc";
interface paramsInt {
  params: {
    id: string;
  };
}
const Page = async ({ params }: paramsInt) => {
  const { id } = await params;
  await console.log(id);

  return (
    <div className="excluded">
      <div className="excluded flex  flex-row w-full  border-y-[1.5px] items-center  border-[#E4E7EC]  bg-white justify-start px-[20px] h-[62px]">
        <div className="excluded flex  flex-row w-full   items-center   space-x-[20px]  justify-start ">
          <Link
            href={"/admin/challenges"}
            className="border-[#E4E7EC] border-[1px] p-[3px] rounded-[5px] bg-white"
          >
            <VscArrowSmallLeft className="text-[21px]" />
          </Link>
          <h2 className="text-[#667185] text-[14px]">Go Back</h2>
          <h2 className="flex flex-row items-center justify-center text-[14px] space-x-[4px]">
            <span className="text-[#667185]">Create New Challenge</span>
            <span className="text-[#667185]">/</span>
            <span className="text-[#2B71F0]">
              Design a Dashboard for Sokofund
            </span>
          </h2>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center gap-[7px] bg-white rounded-[5px] ml-8 px-4 py-2">
            <IoSearchSharp className="text-gray-400" />
            <input
              type="text"
              placeholder="Search.."
              className="border-[1.5px] text-gray-400 placeholder:text-[14px] text-[14px] focus:outline-none bg-white  border-none w-full "
            />
          </div>{" "}
          <div className="flex flex-row space-x-[10px] items-center justify-center">
            <IoFilterOutline className="text-gray-400 text-" />
            <p className="text-[14px] text-gray-400">Filter</p>
          </div>
        </div>
      </div>
      <main className="flex flex-row space-x-[30px] px-[30px] py-[30px]">
        <div className="excluded border-[#E4E7EC] text-black w-[612px] border-[1.5px] shadow-sm rounded-[12px] flex flex-col items-center space-y-[30px] py-[32px] px-[24px] bg-white">
          <img
            src="/umuravaBg.webp"
            className="w-[612px] h-[296px] rounded-[6px]"
            alt="photo"
          />

          <div className="excluded flex flex-col w-[545px] space-y-[20px] text-left ">
            <h2 className="text-[20px] text-black font-semibold">
              Project Brief: Payroll and HR Management System
            </h2>
            <p className="text-[14px]">
              A Fintech company is developing a digital financial platform
              designed for businesses and their workforce in Africa, partnering
              with Umurava to run a skills challenge for product design. This
              Fintech Company offers payroll management systems to employers and
              embedded financial services and products to employees and gig
              workers across Africa.
            </p>
            <div className="excluded flex flex-col w-[545px] space-y-[20px] text-left ">
              <h2 className="text-[20px] text-black font-semibold">Tasks</h2>
              <h2 className="text-[20px] text-black font-semibold">
                Product Requirements
              </h2>
              <ul className="text-[14px] list-disc ml-[15px] flex flex-col space-y-[10px]">
                <li>UX research to understand Project Requirements</li>
                <li>Understanding User Needs</li>
                <li>Understanding Business Goals</li>
                <li>Determine interaction between users</li>
                <li>Requirements Catalog</li>
              </ul>
              <h2 className="text-[20px] text-black font-semibold">
                Product Design
              </h2>
              <ul className="text-[14px] list-disc ml-[15px] flex flex-col space-y-[10px]">
                <li>User Interface Design for each step</li>
                <li>
                  Creating wireframes to outline the basic structure and layout
                  of the web and mobile app.
                </li>
                <li>
                  Designing visually appealing and user-friendly interfaces for
                  the web and mobile apps focusing on usability and user
                  experience.
                </li>
                <li>
                  Ensuring the web application works seamlessly across web,
                  mobile, and tablet devices.
                </li>
                <li>Provide a feedback session for in-development guidance</li>
              </ul>
              <h2 className="text-[20px] text-black font-semibold">
                Deliverables
              </h2>
              <ul className="text-[14px] list-disc ml-[15px] flex flex-col space-y-[10px]">
                <li>Requirements Catalog and User Interaction Diagram</li>
                <li>User Interface Mockups</li>
                <li>Payroll and HR System Design Completed</li>
              </ul>
              <h2 className="text-[20px] text-black font-semibold">
                Deliverables
              </h2>
              <ul className="text-[14px] list-disc ml-[15px] flex flex-col space-y-[10px]">
                <li>
                  The Product Designer will provide all documents and
                  deliverables to the client before the review meetings
                </li>
              </ul>
              <h2 className="text-[20px] text-black font-semibold">NOTE</h2>
              <ul className="text-[14px] list-disc ml-[15px] flex flex-col space-y-[10px]">
                <li>
                  Find Product Requirements Summary and Features Description for
                  Saway Pay{" "}
                  <span className="text-[#2B71F0] underline"> HERE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="excluded grid grid-cols-1 gap-y-[30px] w-[401px]">
          <div className="excluded border-[#E4E7EC]  border-[1.5px] shadow-sm rounded-[12px] py-[23px] px-[24px] bg-white">
            <div className="flex flex-col space-y-[15px]">
              <h2 className="text-[20px] text-black font-semibold">
                Key Instructions:
              </h2>
              <p>
                You are free to schedule the clarification call with the team
                via this email:{" "}
                <span className="text-[#2B71F0] underline"> HERE</span>
              </p>
            </div>
            <div>
              <div className="flex flex-row space-x-[30px] items-center justify-center mt-[70px]    ">
                <button
                  title="."
                  className="bg-blue-200 rounded-full w-[47px] h-[47px]  grid place-items-center "
                >
                  <RxFileText className="text-[#2B71F0] text-[23px]" />
                </button>
                <div className="flex flex-col flex-1 gap-1 ">
                  <p className="text-[#25272B] text-[14px] font-normal">
                    description
                  </p>
                  <p className="font-semibold text-blue-950 flex gap-4 ">
                    number
                    <span className="text-[#2B71F0] space-x-[3px] flex bg-[#E7F6EC] rounded-xl px-2  leading-[17px] items-center flex-row gap-0">
                      <FaArrowUpLong
                        color="#2B71F0"
                        className="font-bold text-[10px]"
                      />
                      <span className="text-[12px] font-bold">15%</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="excluded border-[#E4E7EC]  border-[1.5px] shadow-sm rounded-[12px] py-[32px] px-[24px] bg-white"></div>
        </div>
      </main>
    </div>
  );
};

export default Page;
