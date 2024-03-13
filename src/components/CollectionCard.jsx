import React from "react";

const CollectionCard = () => {
  return (
    <div className="relative mt-7 ">
      <img
        src="/dining-image.png"
        alt="dining-image"
        className="h-[300px] w-[270px] rounded-md bg-yellow-200 bg-opacity-20"
      />
      <div className="absolute bottom-0 left-0 p-3 text-white">
        <h1>5 Ultimate Vegetarian Restaurant</h1>
        <h1 className="text-xs">5 places {">"}</h1>
      </div>
    </div>
  );
};

export default CollectionCard;
