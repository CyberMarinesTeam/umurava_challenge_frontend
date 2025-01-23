import React from "react";
import { RiTelegram2Line } from "react-icons/ri";
const Modal = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col p-14 w-[450px] justify-center gap-4 bg-white rounded-xl">
      <div className="flex w-full justify-center">
        <div className="h-[135px] w-[135px] bg-[#D0E0FC] flex justify-center items-center rounded-full overflow-hidden text-[#2B71F0]">
          <RiTelegram2Line className="h-20 w-20" />
        </div>
      </div>
      <div className="flex gap-4 flex-col justify-center w-full items-center">
        <p className="text-xl font-bold text-center">
          Join our Whatsapp community
        </p>
        <p className="text-center">
          Get notified on the latest projects and hackathon
        </p>
      </div>
      <div className="flex w-full justify-center">
        <button className="w-[135px] py-2 bg-[#2B71F0] rounded-lg text-white">
          Join
        </button>
      </div>
    </div>
  );
};

export default Modal;
