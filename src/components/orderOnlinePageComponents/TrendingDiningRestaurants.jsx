import React from "react";

const TrendingDiningRestaurants = () => {
  return (
    <div className="p-4 rounded-md hover:shadow-xl">
      <div>
        <img
          src="/order-online/downtown-cafe.png"
          alt="downtown-cafe"
          className="w-[290px] h-[220px] object-cover rounded-2xl"
        />
      </div>
      <div className="flex items-center justify-between w-[290px] mt-2">
        <div className="">
          <h1 className="font-medium text-md">The Downtown Cafe</h1>
          <h1 className="text-xs text-gray-400 ">
            North Indian, Biryani,
             Chin...<br /> Kankarbagh, patna
          </h1>
        </div>
        <div className="grid gap-y-1">
          <div className="flex items-center justify-center  bg-green-700 ml-[3.5rem] rounded-md">
            <h1 className="text-xs text-white py-[2px] font-medium ml-1">4.3</h1>
            {/* rating icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-2 h-2 text-white ml-1 mr-1"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="flex justify-end text-sm font-light">₹1,000 for two</div>
          <div className="flex justify-end text-xs">1.7 km</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDiningRestaurants;
