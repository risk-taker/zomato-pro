"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";

const orderOnline = () => {
  const [isDiningOut, setIsDiningOut] = useState(true);

  function handleDiningOut() {
    setIsDiningOut(!isDiningOut);
  }
  return (
    <div className="container mx-auto mt-8 xl:w-3/5 md:w-full">
      <div className="flex items-center">
        {isDiningOut ? (
          <SelectDiningOrDelivery
            color={"color"}
            method={"dining-out"}
            text={"Dining Out"}
            handleDiningOut={handleDiningOut}
          />
        ) : (
          <SelectDiningOrDelivery
            color="black"
            method={"dining-out"}
            text={"Dining Out"}
            handleDiningOut={handleDiningOut}
          />
        )}
        {!isDiningOut ? (
          <SelectDiningOrDelivery
            color={"color"}
            method={"delivery"}
            text={"Delivery"}
            handleDiningOut={handleDiningOut}
          />
        ) : (
          <SelectDiningOrDelivery
            color={"black"}
            method={"delivery"}
            text={"Delivery"}
            handleDiningOut={handleDiningOut}
          />
        )}
      </div>
        

      
    </div>
  );
};

function SelectDiningOrDelivery({ color, method, handleDiningOut, text }) {
  const className = color == "color" ? "bg-blue-100" : "bg-slate-100";
  return (
    <div className="flex mr-8">
      <Image
        src={`/order-online/${method}-${color}.png`}
        alt="dining-out"
        width={28}
        height={28}
        className={`box-content p-3  rounded-full ${className}`}
      />
      <button className="ml-2 text-lg font-medium" onClick={handleDiningOut}>
        {`${text}`}
      </button>
    </div>
  );
}

export default orderOnline;
