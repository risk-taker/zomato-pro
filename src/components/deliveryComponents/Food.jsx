import React from "react";

const Food = () => {
  return (
    <>
      <div className="flex flex-col items-center mx-auto">
        <img
          src="/order-online/pizza.png"
          alt="pizza"
          className="h-[140px] w-auto rounded-full"
        />
        <h1 className="mt-1 text-lg ">Pizza</h1>
      </div>
    </>
  );
};

export default Food;
