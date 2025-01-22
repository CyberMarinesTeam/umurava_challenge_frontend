import { IoSearchSharp } from "react-icons/io5";
const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white text-white">
      <div className="flex items-center gap-4 bg-[#F5F5F5] rounded-[12px]  w-[60%] ml-8 px-4 py-2">
        <IoSearchSharp color="black" />
        <input
          type="text"
          placeholder="Search.."
          className="border-[1.5px] bg-[#F5F5F5]  border-none w-full "
        />
      </div>
      <div className="flex items-center">
        <img src="/profile2.webp" alt="User" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
