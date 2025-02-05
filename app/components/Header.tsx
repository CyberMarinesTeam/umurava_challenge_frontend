"use client";

import { useEffect, useState } from "react";
import { IoFilterOutline, IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setSearchQuery } from "@/lib/redux/slices/searchSlice";

const SOCKET_SERVER_URL = "ws://localhost:4000";
const Header = () => {
  const [notifications, setNotifications] = useState<
    { message: string; isRead: boolean }[]
  >([]);
  const [notificationShow, setNotificationShow] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("title");
  const socket = io(SOCKET_SERVER_URL, { transports: ["websocket"] });

  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("notification", (message) => {
      setNotifications((prev) => [...prev, { message, isRead: false }]);
      setUnreadCount((prev) => prev + 1);
    });

    socket.on("broadcast-message", (message) => {
      setNotifications((prev) => [...prev, { message, isRead: false }]);
      setUnreadCount((prev) => prev + 1);
    });

    socket.on("notification-read", () => {
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery({query:e.target.value, filterText:selectedFilter}));
  };

  return (
    <div className="flex relative z-20 items-center justify-between p-4 bg-white border-[#E4E7EC]">
      {/* Search Bar */}
      <div className="flex items-center gap-4 bg-gray-100 rounded-md w-[60%] ml-8 px-4 py-2 relative">
        <IoSearchSharp className="text-gray-500" />
        <input
          type="text"
          placeholder="Search.."
          className="text-gray-600 focus:outline-none bg-gray-100 w-full"
          onChange={handleSearchChange}
        />
        
        {/* Filter Button */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <IoFilterOutline className="text-gray-400" />
            <p className="text-[14px] text-gray-400">{selectedFilter}</p>
          </div>
          
          {/* Filter Dropdown */}
          {filterOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md border p-2">
              {["title", "skills", "seniority_level", "status", "category", "contactEmail", "moneyPrize", "Requirements" ].map((filter) => (
                <p
                  key={filter}
                  className="p-2 cursor-pointer hover:bg-gray-100 text-sm"
                  onClick={() => {
                    setSelectedFilter(filter);
                    setFilterOpen(false);
                  }}
                >
                  {filter}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 relative">
        <div className="relative">
          <span
            className="w-[40px] h-[40px] rounded-full grid place-items-center bg-gray-200 cursor-pointer relative"
            onClick={() => setNotificationShow(!notificationShow)}
          >
            <IoMdNotificationsOutline className="text-gray-600 text-xl" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </span>

          {notificationShow && (
            <div className="absolute top-12 right-0 w-[400px] bg-white shadow border rounded-lg p-4">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-gray-800 font-semibold">Notifications</h3>
                <button
                  className="text-gray-500 text-sm"
                  onClick={() => setNotificationShow(false)}
                >
                  Close
                </button>
              </div>
              {notifications.length > 0 ? (
                notifications.map((notif, index) => (
                  <div key={index} className="mt-4 p-2 border-b">
                    <p className={`text-sm ${notif.isRead ? "text-gray-500" : "text-black font-semibold"}`}>
                      {notif.message}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 mt-4">No notifications</p>
              )}
            </div>
          )}
        </div>
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
