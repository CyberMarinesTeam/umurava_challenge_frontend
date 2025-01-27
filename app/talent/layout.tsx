"use client";
import React, { useState } from "react";
import Header from "@/app/talent/components/Header";
import TalentSideBar from "@/app/talent/components/TalentSideBar";
import Modal from "./components/Modal";

interface RNode {
  children: React.ReactNode;
}
const TalentLayout = ({ children }: RNode) => {
  const [isOpened, setIsOpened] = useState(false);
  const launchModal = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="w-full excluded flex flex-row">
      <div className="excluded">
        <TalentSideBar toggleModal={launchModal} />
      </div>
      <div className="flex excluded flex-col w-full">
        <Header />
        <div className="excluded relative">
          {children}
          {isOpened && <Modal />}
        </div>
      </div>
    </div>
  );
};

export default TalentLayout;
