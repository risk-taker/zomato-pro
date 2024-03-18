import Filter from "@/components/Filter";
import Restaurants from "@/components/deliveryComponents/Restaurants";
import Food from "@/components/deliveryComponents/food";
import TrendingDiningRestaurants from "@/components/orderOnlinePageComponents/TrendingDiningRestaurants";
import React from "react";

const page = () => {
  return (
    <div>
      <Filter />
      <div className="h-[18rem] bg-gray-50 mt-6">
        <div className="container pt-8 mx-auto xl:w-3/5 md:w-full">
          <div className="text-2xl font-medium">
            Inspiration for your first order
          </div>
          {/* <h1 className="font-medium test-4xl">Inspiration for your first order</h1> */}
          <div className="grid grid-cols-6 mt-4">
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
          </div>
        </div>
      </div>
      <div className="h-[16rem]  mt-6">
        <div className="container pt-1 mx-auto xl:w-3/5 md:w-full">
          <div className="text-2xl font-medium">Top brands for you</div>
          {/* <h1 className="font-medium test-4xl">Inspiration for your first order</h1> */}
          <div className="grid grid-cols-6 mt-4">
            <Restaurants />
            <Restaurants />
            <Restaurants />
            <Restaurants />
            <Restaurants />
            <Restaurants />
          </div>
        </div>
      </div>
      <h1 className="container mx-auto mt-6 text-2xl font-medium xl:w-3/5 md:w-full">
        Delivery Restaurants in Postal Park, Mithapur, Patna
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
    </div>
  );
};

export default page;
