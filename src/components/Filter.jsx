import React from "react";

const Filter = () => {
  return (
    <div className="container mx-auto mt-8 xl:w-3/5 md:w-full">
      <div className="flex items-center w-20 px-2 py-1 rounded cursor-pointer text-slate-500 outline outline-1 hover:bg-slate-100">
        {/* filter icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>

        <button className="font-light rounded-[1px]   ml-2">Filter</button>
      </div>
    </div>
  );
};

export default Filter;
