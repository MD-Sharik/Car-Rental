import React from "react";
import SingleCard from "../SingleCard/SingleCard";

function CatPrev() {
  return (
    <div className=" px-2 gap-6 flex-1 sm:flex-1 m-auto flex flex-wrap justify-evenly sm:basis-[16rem] mt-16 sm:px-[8rem] lg:justify-center ">
      <SingleCard to={"hyper"} Title={"Hyper"} ImgLink="\assets\Hyper.webp" />
      <SingleCard
        to={"/sports"}
        Title={"Sports"}
        ImgLink="\assets\Sports.webp"
      />
      <SingleCard
        to={"/standard"}
        Title={"Standard"}
        ImgLink="\assets\Standard.webp"
      />
      <SingleCard
        to={"/offroad"}
        Title={"OffRoad"}
        ImgLink="\assets\Offroad.webp"
      />
      <SingleCard to={"/ev"} Title={"EV"} ImgLink="\assets\EV.webp" />
      <SingleCard
        to={"/customize"}
        Title={"Modified"}
        ImgLink="\assets\Customize.webp"
      />
    </div>
  );
}

export default CatPrev;
