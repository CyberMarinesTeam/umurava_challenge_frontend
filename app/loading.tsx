"use client";
import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <HashLoader size={80} color="#2B71F0"/>
    </div>
  );
};

export default Loading;
