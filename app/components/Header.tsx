"use client";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const SOCKET_SERVER_URL = "ws://localhost:4000"; // Change to your backend URL

const Header = () => {
  const [notifications, setNotifications] = useState<{ message: string; isRead: boolean }[]>([]);
  const [notificationShow, setNotificationShow] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const socket = io(SOCKET_SERVER_URL, { transports: ["websocket"] });

  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    console.log(user)
    // Connect to WebSocket server
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    // Listen for incoming notifications
    socket.on("notification", (message) => {
      console.log("received message", message)
      setNotifications((prev) => [...prev, { message, isRead: false }]);
      setUnreadCount((prev) => prev + 1);
    });

    // Handle notifications marked as read
    socket.on("notification-read", () => {
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, isRead: true }))
      );
      setUnreadCount(0);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Mark notifications as read when opened
  const handleNotificationClick = () => {
    console.log("clicked");
    setNotificationShow(!notificationShow);
    if (!notificationShow && unreadCount > 0) {
      socket.emit("read"); // Notify backend to mark as read
      setUnreadCount(0);
    }
  };

  return (
    <div className="flex relative z-20 items-center justify-between p-4 bg-white border-[#E4E7EC]">
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
        <div className="relative">
          <span
            className="w-[40px] h-[40px] rounded-full grid place-items-center bg-gray-200 cursor-pointer relative"
            onClick={handleNotificationClick}
          >
            <IoMdNotificationsOutline className="text-gray-600 text-xl" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </span>

          {/* Notification Dropdown */}
          {notificationShow && (
            <div className="absolute dashDiv z-10 top-12 h-[400px] overflow-y-auto right-0 w-[400px] bg-white shadow border-[1.5px] border-[#E4E7EC] rounded-lg p-4">
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
