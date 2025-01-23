import React from "react";
import Header from "@/app/talent/mycomponents/Header";
import SideBar from "@/app/components/SideBar";

interface RNode {
  children: React.ReactNode;
}
const TalentLayout = ({ children }: RNode) => {
  return (
    <div className="w-full flex flex-row">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TalentLayout;
