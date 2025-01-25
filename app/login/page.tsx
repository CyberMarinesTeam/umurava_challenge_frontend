"use client";
import React, { useState } from "react";

const Page = () => {
  const [current, setCurrent] = useState("signin");
  return (
    <div className="flex flex-row items-center justify-center w-full pt-[50px]">
      {current === "signin" && (
        <div className="bg-white  p-8 rounded-lg shadow-md w-[500px]">
          <div className="flex flex-row mb-4">
            <button className="text-[#2B71F0] flex-1 font-bold pt-[10px] border-t-[1.5px] border-[#2B71F0]">
              Sign In
            </button>
            <button
              className="text-gray-500 pt-[10px] flex-1"
              onClick={() => {
                setCurrent("register");
              }}
            >
              Create Account
            </button>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="mugishapascal2008@gmail.com"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="flex items-center mt-1">
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute right-3 text-gray-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.792a11.954 11.954 0 0116.04 0M4.35 15.65a11.956 11.956 0 0115.3 0m-1.15-7.95a11.955 11.955 0 01.85 4.15m-8-4.25a12.093 12.093 0 00-8.54 4.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#2B71F0] hover:bg-[#2B71F0] text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B71F0]"
              >
                Sign in
              </button>
            </div>
            <div className="text-center">
              <a href="#" className="text-sm text-[#2B71F0] hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      )}
      {current === "register" && (
        <div className="bg-white p-8 rounded-lg shadow-md  w-[500px]">
          <div className="flex flex-row mb-4">
            <button
              className="text-gray-500 pt-[10px] flex-1"
              onClick={() => {
                setCurrent("signin");
              }}
            >
              Sign In
            </button>
            <button className="text-[#2B71F0] flex-1 font-bold pt-[10px] border-t-[1.5px] border-[#2B71F0]">
              Create Account
            </button>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Join as:
              </label>
              <select
                id="role"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B71F0]"
              >
                <option>Select talent or client</option>
                <option>Talent</option>
                <option>Client</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="Enter your First name"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B71F0]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your Last name"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B71F0]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B71F0]"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="flex items-center mt-1">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B71F0]"
                />
                <button
                  type="button"
                  className="absolute right-3 text-gray-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.792a11.954 11.954 0 0116.04 0M4.35 15.65a11.956 11.956 0 0115.3 0m-1.15-7.95a11.955 11.955 0 01.85 4.15m-8-4.25a12.093 12.093 0 00-8.54 4.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#2B71F0] hover:bg-[#2B71F0] text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B71F0]"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Page;
