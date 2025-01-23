import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
interface Rnode {
  children: React.ReactNode;
}
const layout = ({ children }: Rnode) => {
  return (
    <main>
      <div className="flex bg-slate-50 ">
        <SideBar />

        <div className="flex-1">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
