import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto mt-8 xl:w-3/5 md:w-full">
      <img
        src="/order-online/50-percent-off-banner.png"
        alt="banner"
        className="w-auto h-[252px]"
      />
    </div>
  );
};

export default Banner;
