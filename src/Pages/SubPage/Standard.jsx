import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";
import Served from "../../components/Served/Served.jsx";

function Standard() {
  const [heroImage, setHeroImage] = useState("/assets/ST (1).webp");

  const handleImageClick = (newImage) => {
    setHeroImage(newImage);
  };

  return (
    <>
      <div className="py-8 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-32 sm:mt-10">
        <div>
          <BackBtn Page={"Standard"} />
        </div>
      </div>
      <Served num={"16.5k"} rate={4.7} rent={"$1.2k~$2k"} />
      {/* Hero Image */}
      <div className="h-96 relative w-[18rem] sm:w-[30rem] px-6 md:w-[46rem] lg:w-[64rem] rounded-lg m-auto bg-zinc-100 my-[4rem] flex justify-center ">
        <div className="fixed z-999 top-[5rem] sm:left-[-5rem] sm:absolute sm:top-[-1rem] lg:left-[-1rem] lxg:left-[-5rem] smd:left-[-2rem] md:left-[-2rem]">
          <Stats
            brand={"BMW"}
            model={"x5"}
            year={2016}
            owner={"dave"}
            fuel={"Petrol"}
            speed={220}
          />
        </div>
        <img
          src={heroImage}
          width={650}
          alt="HeroCar"
          className="object-contain"
        />
      </div>
      {/* Hero Image */}

      {/* Image Gallery */}
      <div className="flex flex-wrap mx-[4rem] my-9 justify-center sm:flex-1 sm:basis-64 md:mx-[2rem] md:basis-64 lg:basis-96 lg:mx-[14rem]">
        <MultiCard
          ImgLink={"/assets/ST (1).webp"}
          onClick={handleImageClick}
          model={"F-458"}
        />
        <MultiCard
          ImgLink={"/assets/ST (2).webp"}
          onClick={handleImageClick}
          model={"L-Aventador"}
        />
        <MultiCard
          ImgLink={"/assets/ST (3).webp"}
          onClick={handleImageClick}
          model={"L-Gallardo"}
        />
        <MultiCard
          ImgLink={"/assets/ST (4).webp"}
          onClick={handleImageClick}
          model={"C-Auivo"}
        />
        <MultiCard
          ImgLink={"/assets/ST (5).webp"}
          onClick={handleImageClick}
          model={"B-Veyron"}
        />
        <MultiCard
          ImgLink={"/assets/ST (6).webp"}
          onClick={handleImageClick}
          model={"F-488"}
        />
        <MultiCard
          ImgLink={"/assets/ST (7).webp"}
          onClick={handleImageClick}
          model={"F-F12TDF"}
        />
        <MultiCard
          ImgLink={"/assets/ST (8).webp"}
          onClick={handleImageClick}
          model={"F-812"}
        />
        <MultiCard
          ImgLink={"/assets/ST (9).webp"}
          onClick={handleImageClick}
          model={"P-Huayra"}
        />
        <MultiCard
          ImgLink={"/assets/ST (10).webp"}
          onClick={handleImageClick}
          model={"L-Huracan"}
        />
      </div>
    </>
  );
}

export default Standard;
