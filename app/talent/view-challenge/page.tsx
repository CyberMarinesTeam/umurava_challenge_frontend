import React from "react";

const ViewChallenge = () => {
  return (
    <div>
      <div className="flex bg-white flex-row px-[32px] h-[60px] items-center border-b gap-32">
        <div className="flex flex-row gap-3">
          <div className="h-[24px] w-[24px] border border-black border-opacity-10 rounded-md"></div>
          <div>Go Back</div>
        </div>
        <div>
          <p>
            Challenges & Hackathons /{" "}
            <span className="text-blue-600">
              Design a Dashboard for SokoFund
            </span>
          </p>
        </div>
      </div>
      <div className="bg-[#F9FAFB] flex h-full w-full"></div>
    </div>
  );
};

export default ViewChallenge;
