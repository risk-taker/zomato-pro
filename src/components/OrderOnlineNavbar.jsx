import React from "react";
import Dropdown from "./homePageComponent/Dropdown";

const OrderOnlineNavbar = () => {
  return (
    <div className="flex items-center justify-between pt-2 mx-auto xl:w-3/5 md:w-full">
      <div className="flex items-center">
        <h1 className="mr-6 text-3xl italic font-black">zomato</h1>
        <Dropdown />
      </div>
      <div className="flex font-light text-slate-500">
        <button className="mr-6">Log in</button>
        <button className="ml-3">Sign up</button>
      </div>
    </div>
  );
};

export default OrderOnlineNavbar;
