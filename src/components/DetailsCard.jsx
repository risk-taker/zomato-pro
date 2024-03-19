"use client";

import React from "react";
import RatingCard from "./RatingCard";

const DetailsCard = () => {
  return (
    <div className="container mx-auto mt-3 xl:w-3/5 md:w-full">
      <div className="grid grid-cols-5 grid-rows-2 h-[368px] overflow-clip gap-3">
        <div className="col-span-3 row-span-2 overflow-hidden">
          <img src="/downtown-cafe/downtown-cafe-a.png" alt="cafe" />
        </div>
        <div>
          <img
            src="/downtown-cafe/downtown-cafe-a.png"
            alt="cafe"
            className=""
          />
        </div>
        <div className="row-span-2">
          <img
            src="/downtown-cafe/downtown-cafe-a.png"
            alt="cafe"
            className="h-full"
          />
        </div>
        <div className="">
          <img src="/downtown-cafe/downtown-cafe-a.png" alt="cafe" />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="mt-3 text-3xl font-normal">The Downtown Cafe</h1>
          <h1 className="mt-2 text-gray-600 ">
            North Indian, Biryani, Chinese, Continental, Cafe <br /> Kankarbagh,
            Patna
          </h1>
          <h1 className="my-2 text-sm">
            <span className="text-orange-400 ">Open now</span> 11am - 12midnight
            (Today)
          </h1>
          <div className="flex gap-3">
            <div className="flex items-center h-8 p-2 text-sm text-gray-700 border border-gray-400 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-red-500 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z"
                  clip-rule="evenodd"
                />
              </svg>
              <button>Direction</button>
            </div>
            <div className="flex items-center h-8 p-2 text-sm text-gray-700 border border-gray-400 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-red-500 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>

              <button>Bookmark</button>
            </div>
            <div className="flex items-center h-8 p-2 text-sm text-gray-700 border border-gray-400 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-red-500 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.207 2.232a.75.75 0 0 0 .025 1.06l4.146 3.958H6.375a5.375 5.375 0 0 0 0 10.75H9.25a.75.75 0 0 0 0-1.5H6.375a3.875 3.875 0 0 1 0-7.75h10.003l-4.146 3.957a.75.75 0 0 0 1.036 1.085l5.5-5.25a.75.75 0 0 0 0-1.085l-5.5-5.25a.75.75 0 0 0-1.06.025Z"
                  clip-rule="evenodd"
                />
              </svg>

              <button>share</button>
            </div>
          </div>
        </div>
        <div className="flex items-start mt-3">
          <div className="flex items-center gap-2">
            <RatingCard />
            <div>
              <h1 className="text-xs font-medium">366</h1>
              <h1 className="text-xs font-light">Dining Ratings</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <RatingCard />
            <div>
              <h1 className="text-xs font-medium">366</h1>
              <h1 className="text-xs font-light">Dining Ratings</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
