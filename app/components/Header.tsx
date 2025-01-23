import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white text-white">
      <div className="flex items-center gap-4 bg-[#F5F5F5] rounded-[5px]  w-[60%] ml-8 px-4 py-2">
        <IoSearchSharp color="black" />
        <input
          type="text"
          placeholder="Search.."
          className="border-[1.5px] text-gray-400 focus:outline-none bg-[#F5F5F5]  border-none w-full "
        />
      </div>
      <div className="flex items-center flex-row space-x-[10px]">
        <span className="w-[40px] h-[40px] rounded-full grid place-items-center bg-[#F0F2F5]">
          <IoMdNotificationsOutline className="text-[#344054] text-[20px]" />
        </span>
        <img
          src="/profile2.webp"
          alt="User"
          className="w-[40px] h-[40px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
