import React from "react";
import SingleCard from "../SingleCard/SingleCard";

function CatPrev() {
  return (
    <div className=" px-2 sm:max-w-[96rem] gap-6 flex-1 m-auto flex flex-wrap justify-between mt-16 sm:px-[8rem] lg:justify-center ">
      <SingleCard
        to={"hyper"}
        Title={"Hyper"}
        w={250}
        h={250}
        ImgLink="./src/assets/Hyper.png"
      />
      <SingleCard
        to={"/sports"}
        Title={"Sports"}
        ImgLink="./src/assets/Sports.png"
      />
      <SingleCard
        to={"/standard"}
        Title={"Standard"}
        ImgLink="./src/assets/Standard.png"
      />
      <SingleCard
        to={"/offroad"}
        Title={"OffRoad"}
        ImgLink="./src/assets/Offroad.png"
      />
      <SingleCard to={"/ev"} Title={"EV"} ImgLink="./src/assets/EV.png" />
      <SingleCard
        to={"/customize"}
        Title={"Modified"}
        ImgLink="./src/assets/Customize.png"
      />
    </div>
  );
}

export default CatPrev;
