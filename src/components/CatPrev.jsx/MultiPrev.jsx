import React from "react";
import MultiCard from "../SingleCard/MultiCard";

function MultiPrev() {
  return (
    <>
      <div className="h-96">
        <div></div>
        <div>
          <img src={""} alt="" />
        </div>
        <div></div>
      </div>
      <div className="flex mx-[8rem]  sm:flex-1 sm:basis-64 md:mx-[2rem] md:basis-64 flex-wrap">
        <MultiCard />
        <MultiCard />
        <MultiCard />
        <MultiCard />
        <MultiCard />
      </div>
    </>
  );
}

export default MultiPrev;
