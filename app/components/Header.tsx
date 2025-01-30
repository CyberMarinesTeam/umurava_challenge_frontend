"use client";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [notificationShow, setNotificationShow] = useState(false);

  return (
    <div className="flex relative items-center justify-between p-4 bg-white  border-b-[1.5px] border-[#E4E7EC]">
      {/* Search Bar */}
      <div className="flex items-center gap-4 bg-gray-100 rounded-md w-[60%] ml-8 px-4 py-2">
        <IoSearchSharp className="text-gray-500" />
        <input
          type="text"
          placeholder="Search.."
          className="text-gray-600 focus:outline-none bg-gray-100 w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 relative">
        {/* Notification Icon */}
        <div className="">
          <span
            className="w-[40px] h-[40px] rounded-full grid place-items-center bg-gray-200 cursor-pointer"
            onClick={() => setNotificationShow(!notificationShow)}
          >
            <IoMdNotificationsOutline className="text-gray-600 text-xl" />
          </span>
          {/* Notification Modal */}
          {notificationShow && (
            <div className="messageDiv absolute dashDiv z-50 top-12 h-[400px] overflow-y-auto right-0 w-[400px] bg-white shadow border-[1.5px] border-[#E4E7EC] rounded-lg p-4 ">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-gray-800 font-semibold">Notifications</h3>
                <button
                  className="text-gray-500 text-sm"
                  onClick={() => setNotificationShow(false)}
                >
                  Close
                </button>
              </div>
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Image */}
        <img
          src="/profile2.webp"
          alt="User"
          className="w-[40px] h-[40px] object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
