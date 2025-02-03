"use client";
import React from "react";
<<<<<<< HEAD
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return <div className="flex justify-center items-center h-screen"></div>;
};

export default Loading;
=======
import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <HashLoader size={80} color="#2B71F0" />
    </div>
  );
};

export default loading;
>>>>>>> refs/remotes/origin/main
