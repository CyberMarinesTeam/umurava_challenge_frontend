import React from "react";

interface SmallStatusCardProps {
  icon: React.JSX.Element;
  text: string;
  count: number;
}
const SmallStatusCard = ({icon, text, count}: SmallStatusCardProps) => {
  return (
    <div className="flex bg-white flex-row items-center gap-[10px] h-[45px] border active:bg-[#D0E0FC] active:border-[#FCD2C2] p-[12px] rounded-md">
      <div className="w-[14px] h-[14px] text-blue-600">{icon}</div>
      <div className="text-sm">{text}</div>
      <div className="px-2 text-white text-sm rounded-full bg-[#2B71F0]">{count}</div>
    </div>
  );
};

export default SmallStatusCard;
