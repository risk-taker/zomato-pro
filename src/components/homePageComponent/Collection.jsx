import React from "react";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  return (
    <section className="container mx-auto mt-28 xl:w-3/5 md:w-full">
      <h1 className="text-3xl">Collections</h1>
      <div className="flex justify-between">
        <h1 className="mt-0 text-slate-600 sm:w-full">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Patna, based on trends
        </h1>
        <h1 className="text-red-500">All collections in Patna {">"}</h1>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </section>
    // <div>
    //   <h1>hello world</h1>
    // </div>
  );
};

export default Collection;
