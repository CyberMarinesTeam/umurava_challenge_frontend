import React, { useState } from "react";

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState("This Day");

  const handleSelectionChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    try {
      const response = await fetch(`/api/filter?range=${selectedValue}`);
      const data = await response.json();
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  return (
    <div className="flex z-50 flex-row gap-2 items-center relative">
      <select value={selectedOption} onChange={handleSelectionChange}>
        <option value="This Day">This Day</option>
        <option value="This Week">This Week</option>
        <option value="Last 30 Days">Last 30 Days</option>
        <option value="Last 3 Months">Last 3 Months</option>
      </select>
    </div>
  );
};

export default DropDown;