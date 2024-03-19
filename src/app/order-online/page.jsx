"use client";
import Filter from "@/components/Filter";
import LoginAndDeliveryButton from "@/components/LoginAndDeliveryButton";
import OrderOnlineNavbar from "@/components/OrderOnlineNavbar";
import Collection from "@/components/homePageComponent/Collection";
import Banner from "@/components/orderOnlinePageComponents/Banner";
import TrendingDiningRestaurants from "@/components/orderOnlinePageComponents/TrendingDiningRestaurants";
import Image from "next/image";
import { useState } from "react";
import React from "react";

const orderOnline = () => {
  return (
    <>
      <LoginAndDeliveryButton />
      <div className="container mx-auto mt-8 xl:w-3/5 md:w-full">
        <hr className="h-[2px] bg-slate-200 mt-4" />
      </div>
      <Collection orderOnline={"mt-[3rem]"} />
      <Filter />
      <Banner />
      <h1 className="container mx-auto mt-6 text-2xl font-normal xl:w-3/5 md:w-full">
        Trending dining restaurants in Postal Park, Mithapur, Patna
      </h1>
      <div className="container mx-auto mt-6 xl:w-3/5 md:w-full">
        <div className="grid justify-between grid-cols-3 mb-8 ml-8">
          <TrendingDiningRestaurants />
          <TrendingDiningRestaurants />
          <TrendingDiningRestaurants />
          <TrendingDiningRestaurants />
          <TrendingDiningRestaurants />
          <TrendingDiningRestaurants />
        </div>
      </div>
    </>
  );
};

export default orderOnline;
