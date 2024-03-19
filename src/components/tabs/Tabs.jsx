import Link from "next/link";
import React from "react";

const Tabs = () => {
  const pathName = "/order-online/details";
  return (
    <div className="container mx-auto xl:w-3/5 md:w-full">
      <div className="flex gap-8 my-4">
        <Link href={`${pathName}`}>Order Online</Link>
        <Link href={`${pathName}/order`}>Order Online</Link>
        <Link href={`${pathName}/reviews`}>Reviews</Link>
        <Link href={`${pathName}/photos`}>Photos</Link>
        <Link href={`${pathName}/menu`}>Menu</Link>
        <Link href={`${pathName}/book`}>Book a Table</Link>
      </div>
      <hr />
    </div>
  );
};

export default Tabs;
