import React from "react";
import Header from "@/app/talent/components/Header";
import TalentSideBar from "@/app/talent/components/TalentSideBar";

interface RNode {
  children: React.ReactNode;
}
const TalentLayout = ({ children }: RNode) => {
  return (
    <div className="w-full flex flex-row">
      <div>
        <TalentSideBar />
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TalentLayout;
