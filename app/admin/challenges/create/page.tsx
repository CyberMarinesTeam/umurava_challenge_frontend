"use client";
import { useCreateChallengeMutation } from "@/lib/redux/slices/challengeSlice";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { VscArrowSmallLeft } from "react-icons/vsc";

const Page: React.FC = () => {
  const [createChallenge] = useCreateChallengeMutation();
  const [challengeTitle, setChallengeTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [duration, setDuration] = useState("");
  const [moneyPrize, setMoneyPrize] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [projectRequirements, setProjectRequirements] = useState<string[]>([
    "",
  ]);
  const [productDesign, setProductDesign] = useState<string[]>([""]);
  const [deliverables, setDeliverables] = useState<string[]>([""]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      challengeTitle,
      deadline,
      duration,
      moneyPrize,
      contactEmail,
      projectRequirements,
      productDesign,
      deliverables,
    });
  };

  const addField = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter((prev) => [...prev, ""]);
  };

  const removeField = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="excluded flex flex-col space-y-[30px] pb-[40px] items-center">
      <div className="excluded flex  flex-row w-full  border-y-[1.5px] items-center  border-[#E4E7EC] space-x-[20px] bg-white justify-start px-[20px] h-[62px]">
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
          <span className="text-[#2B71F0]">Create New Challenge</span>
        </h2>
      </div>
      <div className="excluded bg-white  border-[#E4E7EC] border-[1.5px] shadow-sm rounded-[10px] w-[624px] items-center  px-8 pt-6 pb-8 flex flex-col">
        <h2 className="text-[24px] font-semibold mb-2">Create New Challenge</h2>
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
              className="appearance-none placeholder:text-[14px]   border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={challengeTitle}
              placeholder="Enter Title"
              onChange={(e) => setChallengeTitle(e.target.value)}
            />
          </div>
          <div className="excluded mb-4 space-x-[10px] flex flex-col md:flex-row md:items-center">
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
                className="appearance-none placeholder:text-[14px] text-[14px]   border-[0.5px] border-[#E4E7EC] rounded w-[279px] p-[16px] text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
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
                className="appearance-none placeholder:text-[14px]   border-[0.5px] border-[#E4E7EC] rounded w-[279px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="appearance-none placeholder:text-[14px]  border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="appearance-none placeholder:text-[14px]  border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>

          <div className="excluded mb-4">
            <label
              htmlFor="projectBrief"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Project Brief
            </label>
            <textarea
              id="projectBrief"
              className="appearance-none placeholder:text-[14px]  h-[114px] border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              maxLength={50}
              placeholder="Enter text here ..."
            />
          </div>
          {[projectRequirements, productDesign, deliverables].map(
            (field, fieldIndex) => (
              <div key={fieldIndex} className="excluded mb-4">
                <label className="block text-[#475367] text-[14px] mb-2">
                  {fieldIndex === 0
                    ? "Project Requirements"
                    : fieldIndex === 1
                    ? "Product Design"
                    : "Deliverables"}
                </label>
                {field.map((value, index) => (
                  <div key={index} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      className="border-[0.5px] border-[#E4E7EC] rounded w-[500px] p-[16px] text-gray-700"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...field];
                        newValues[index] = e.target.value;
                        fieldIndex === 0
                          ? setProjectRequirements(newValues)
                          : fieldIndex === 1
                          ? setProductDesign(newValues)
                          : setDeliverables(newValues);
                      }}
                    />
                    <span
                      type="button"
                      onClick={() =>
                        removeField(
                          index,
                          fieldIndex === 0
                            ? setProjectRequirements
                            : fieldIndex === 1
                            ? setProductDesign
                            : setDeliverables
                        )
                      }
                    >
                      <MdDelete className="text-[30px] cursor-pointer text-red-400" />
                    </span>
                  </div>
                ))}
                <span
                  type="button"
                  onClick={() =>
                    addField(
                      fieldIndex === 0
                        ? setProjectRequirements
                        : fieldIndex === 1
                        ? setProductDesign
                        : setDeliverables
                    )
                  }
                >
                  <IoMdAddCircleOutline className="text-[30px] cursor-pointer text-blue-500" />
                </span>
              </div>
            )
          )}

          <div className="excluded flex flex-row space-x-[20px] items-center justify-between">
            <button className="w-[220px] h-[56px] rounded-[5px] text-[16px] text-[#2b71f0]  grid place-items-center border-[#2b71f0] border-[1.5px]">
              Cancel
            </button>
            <button className="bg-[#2B71f0] w-[324px]  h-[56px]  text-[16px] rounded-[5px] font-semibold text-white">
              Create Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
