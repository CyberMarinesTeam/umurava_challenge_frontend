// "use client";
// import { DM_Sans } from "next/font/google";
// import Link from "next/link";
// import React, { useState } from "react";

// const dm_sans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["300", "100", "400", "700", "900"],
// });

// const NavBar = () => {
//   const [currentUser, setCurrentUser] = useState("guest"); // Change this value to "admin" or "talent" for testing

//   const navItems = {
//     admin: [
//       { label: "Dashboard", path: "/admin/dashboard" },
//       { label: "Create Challenge", path: "/admin/create-challenge" },
//       { label: "Participants", path: "/admin/participants" },
//       { label: "Settings", path: "/admin/settings" },
//     ],
//     talent: [
//       { label: "Dashboard", path: "/talent/dashboard" },
//       { label: "Challenges", path: "/talent/challenges" },
//       { label: "Community", path: "/talent/community" },
//       { label: "Settings", path: "/talent/settings" },
//     ],
//     guest: [
//       { label: "Home", path: "/" },
//       { label: "Challenge & Hackathons", path: "/guest/challenges" },
//       { label: "For Learning Institutions", path: "/guest/community" },
//       { label: "About Us", path: "/guest/about" },
//       { label: "Contact Us", path: "/guest/contact" },
//     ],
//   };

//   const currentNavItems = navItems.guest;

//   return (
//     <nav
//       className={`h-[96px] ${dm_sans.className} border-b-[1px] items-center justify-center flex flex-row space-x-[100px]`}
//     >
//       <img
//         src="/umuravaLogo.webp"
//         draggable="false"
//         alt="umurava logo"
//         className="max-[640px]:hidden w-[125px]"
//       />
//       <ul className="sm:text-sm flex flex-row text-gray-700 space-x-[40px]">
//         {currentNavItems.map((item, index) => (
//           <li key={index}>
//             <Link
//               href={`${item.path}`}
//               className="max-[640px]:hidden hover:text-[#2B71f0]"
//             >
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       {currentUser === "guest" ? (
//         <button className="bg-[#041738] p-[14px] text-white text-[14px] rounded-[10px]">
//           Join the Program
//         </button>
//       ) : (
//         <button
//           onClick={() => setCurrentUser("guest")}
//           className="bg-red-500 p-[14px] text-white text-[14px] rounded-[10px]"
//         >
//           Logout
//         </button>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
"use client";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "100", "400", "700", "900"],
});

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState("guest"); // Change this value to "admin" or "talent" for testing

  const navItems = {
    admin: [
      { label: "Dashboard", path: "/admin/dashboard" },
      { label: "Create Challenge", path: "/admin/create-challenge" },
      { label: "Participants", path: "/admin/participants" },
      { label: "Settings", path: "/admin/settings" },
    ],
    talent: [
      { label: "Dashboard", path: "/talent/dashboard" },
      { label: "Challenges", path: "/talent/challenges" },
      { label: "Community", path: "/talent/community" },
      { label: "Settings", path: "/talent/settings" },
    ],
    guest: [
      { label: "Home", path: "/" },
      { label: "Challenge & Hackathons", path: "/guest/challenges" },
      { label: "For Learning Institutions", path: "/guest/community" },
      { label: "About Us", path: "/guest/about" },
      { label: "Contact Us", path: "/guest/contact" },
    ],
  };

  const currentNavItems = navItems[currentUser];

  return (
    <nav
      className={`h-[96px] ${dm_sans.className} border-b-[1px] items-center justify-center flex flex-row max-md:justify-between max-md:px-[20px] space-x-[100px]`}
    >
      {/* <div className=" mx-auto px-4 sm:px-6 lg:px-2 h-[80px] flex items-center justify-between"> */}
      {/* Logo */}
      {/* <div className="flex items-center"> */}
      <img
        src="/umuravaLogo.webp"
        draggable="false"
        alt="umurava logo"
        className="max-[640px] w-[125px]"
      />
      {/* </div> */}

      {/* Desktop Navigation */}
      <ul className="hidden sm:text-sm md:flex flex-row text-gray-700 space-x-[40px]">
        {currentNavItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className="max-[640px]:hidden hover:text-[#2B71f0]"

              // className="hover:text-blue-600 transition duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle Menu"
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          {showMenu ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      {/* Join or Logout Button */}
      {currentUser === "guest" ? (
        // <button className="hidden md:block bg-[#041738] text-white px-4 py-2 rounded-lg hover:bg-[#041738] transition duration-300">
        //   Join the Program
        // </button>
        <button className="bg-[#041738] hidden md:block p-[14px] text-white text-[14px] rounded-[10px]">
          Join the Program
        </button>
      ) : (
        <button
          onClick={() => setCurrentUser("guest")}
          className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      )}
      {/* </div> */}

      {/* Mobile Navigation */}
      {showMenu && (
        <div className="md:hidden z-50 bg-white flex flex-col space-y-4 items-center pt-[20px] justify-between shadow-md absolute top-[100px] left-0 right-0">
          <ul className="flex flex-col space-y-4 text-gray-700">
            {currentNavItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="hover:text-blue-600 transition duration-300"
                  onClick={() => setShowMenu(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {currentUser === "guest" ? (
            <button className="bg-[#041738] p-[14px] rounded-b-[5px] w-full text-white text-[14px]">
              Join the Program
            </button>
          ) : (
            <button
              onClick={() => setCurrentUser("guest")}
              className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
