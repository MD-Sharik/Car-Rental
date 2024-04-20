import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";
import Served from "../../components/Served/Served.jsx";

function Customised() {
  const [heroImage, setHeroImage] = useState("public/assets/Customize.webp");

  const handleImageClick = (newImage) => {
    setHeroImage(newImage);
  };

  return (
    <>
      <div className="py-8 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-32 sm:mt-10">
        <div>
          <BackBtn Page={"Modified"} />
        </div>
      </div>
      <Served num={"1.6k"} rate={4.3} rent={"$2k~$6k"} />
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
          ImgLink={"public/assets/Customize.webp"}
          onClick={handleImageClick}
          model={"S-WRX STI"}
        />
        <MultiCard
          ImgLink={"public/assets/C (1).webp"}
          onClick={handleImageClick}
          model={"F-Mustang Panther"}
        />
        <MultiCard
          ImgLink={"public/assets/C (2).webp"}
          onClick={handleImageClick}
          model={"M-Miata Pink"}
        />
        <MultiCard
          ImgLink={"public/assets/C (3).webp"}
          onClick={handleImageClick}
          model={"T-GT86 R"}
        />
        <MultiCard
          ImgLink={"public/assets/C (4).webp"}
          onClick={handleImageClick}
          model={"M-Evolution VIII"}
        />
        <MultiCard
          ImgLink={"public/assets/C (5).webp"}
          onClick={handleImageClick}
          model={"M-Evolution IX "}
        />
        <MultiCard
          ImgLink={"public/assets/C (6).webp"}
          onClick={handleImageClick}
          model={"B-M4 Red Demon"}
        />
        <MultiCard
          ImgLink={"public/assets/C (7).webp"}
          onClick={handleImageClick}
          model={"F-Mustang GT Mantis"}
        />
        <MultiCard
          ImgLink={"public/assets/C (8).webp"}
          onClick={handleImageClick}
          model={"T-Supera MK4"}
        />
        <MultiCard
          ImgLink={"public/assets/C (9).webp"}
          onClick={handleImageClick}
          model={"M-Cooper Black"}
        />
      </div>
    </>
  );
}

export default Customised;
