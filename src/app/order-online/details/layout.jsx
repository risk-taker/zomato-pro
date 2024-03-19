"use client";
import DetailsCard from "@/components/DetailsCard";
import RatingCard from "@/components/RatingCard";
import Tabs from "@/components/tabs/Tabs";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <DetailsCard />
      <Tabs />
      {children}
    </>
  );
};

export default layout;
