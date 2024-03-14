import React from "react";

const LocalitiesCard = () => {
  return (
    <div className="">
      <div className="h-[4.5rem] w-[21rem] flex justify-between border items-center rounded-md px-4 shadow hover:shadow-lg">
        <div>
          <h1 className="text-lg">Fraser Road Area</h1>
          <h1 className="mt-1 text-sm font-light">123 places</h1>
        </div>
        <div>
          {/* chevron right */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LocalitiesCard;
