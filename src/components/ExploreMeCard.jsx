import React from "react";

const ExploreMeCard = () => {
  return (
    <div className="flex items-center justify-between h-16 p-4 bg-white border rounded-lg">
      <h1 className="text-lg text-slate-800">Popular cuisines near me</h1>
      {/* chevron down */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default ExploreMeCard;
