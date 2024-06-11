import { useState } from "react";

const Dropdown = () => {
  const [selected, setSelected] = useState("All Time");

  const options = [
    "All Time",
    "Financial Year",
    "Yearly",
    "Quarterly",
    "Monthly",
    "Weekly",
    "Custom Date",
  ];

  return (
    <div className="relative inline-block text-left">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
