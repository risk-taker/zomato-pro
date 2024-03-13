"use client";
import React from "react";
import Dropdown from "./Dropdown";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center mt-24">
      <div className="items-center">
        <div className="flex justify-center ">
          <h1 className="italic font-bold text-white text-7xl">zomato</h1>
        </div>
        <h3 className="flex justify-center mt-4 text-3xl text-white">
          Discover the best food & drinks in Patna
        </h3>
        <div className="flex justify-center mt-6 ">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
