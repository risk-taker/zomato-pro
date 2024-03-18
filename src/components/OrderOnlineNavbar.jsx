"use client";
import React, { useState } from "react";
import Dropdown from "./homePageComponent/Dropdown";
import Image from "next/image";
import Link from "next/link";

const OrderOnlineNavbar = () => {
  const [isDiningOut, setIsDiningOut] = useState(true);

  function handleDiningOut() {
    setIsDiningOut(!isDiningOut);
  }
  return (
    <>
      <div className="flex items-center justify-between pt-2 mx-auto xl:w-3/5 md:w-full">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="mr-6 text-3xl italic font-black">zomato</h1>
          </Link>
          <Dropdown />
        </div>
        <div className="flex font-light text-slate-500">
          <button className="mr-6">Log in</button>
          <button className="ml-3">Sign up</button>
        </div>
      </div>
      <div>
        <div className="container flex items-center mx-auto mt-8 xl:w-3/5 md:w-full">
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
    </>
  );
};

function SelectDiningOrDelivery({ color, method, handleDiningOut, text }) {
  const className = color == "color" ? "bg-blue-100" : "bg-slate-100";
  const url = text === "Delivery" ? "/order-online/delivery" : "/order-online";

  return (
    <div className="flex items-center mr-8">
      <Image
        src={`/order-online/${method}-${color}.png`}
        alt="dining-out"
        width={28}
        height={28}
        className={`box-content p-3  rounded-full ${className}`}
      />
      <Link href={`${url}`}>
        <button onClick={handleDiningOut} className="ml-2 text-lg font-medium">
          {`${text}`}
        </button>
      </Link>
    </div>
  );
}

export default OrderOnlineNavbar;
