import React from "react";

const Restaurants = () => {
  return (
    <>
      <div className="flex flex-col items-center mx-auto">
        <img
          src="/order-online/lapinoz.png"
          alt="pizza"
          className="h-[140px] w-auto rounded-full"
        />
        <h1 className="mt-1 text-sm ">La Pino'z Pizza</h1>
        <h1 className="text-xs font-light">35 min</h1>
      </div>
    </>
  );
};

export default Restaurants;
