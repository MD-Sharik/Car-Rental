import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";
import Served from "../../components/Served/Served.jsx";

function Sports() {
  const [heroImage, setHeroImage] = useState(
    "public/assets/Sp-Aston Martin.webp"
  );

  const handleImageClick = (newImage) => {
    setHeroImage(newImage);
  };

  return (
    <>
      <div className="py-8 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-32 sm:mt-10">
        <div>
          <BackBtn Page={"Sports"} />
        </div>
      </div>
      <Served num={"1k"} rate={4.8} rent={"$4k~$6k"} />
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
          ImgLink={"public/assets/Sp-Aston Martin.webp"}
          onClick={handleImageClick}
          model={"AM-Vanquish"}
        />
        <MultiCard
          ImgLink={"public/assets/Sp-Audi R8.webp"}
          onClick={handleImageClick}
          model={"A-R8"}
        />
        <MultiCard
          ImgLink={"public/assets/Sp-BMW M3.webp"}
          onClick={handleImageClick}
          model={"B-M4"}
        />
        <MultiCard
          ImgLink={"public/assets/Sp-Lexus Lc.webp"}
          onClick={handleImageClick}
          model={"L-LC"}
        />
        <MultiCard
          ImgLink={"public/assets/Sp-Bmw M5.webp"}
          onClick={handleImageClick}
          model={"B-M5"}
        />
        <MultiCard
          ImgLink={"public/assets/Sp-Ford Mustang.webp"}
          onClick={handleImageClick}
          model={"F-Mustang"}
        />
        <MultiCard
          ImgLink={"public/assets/Sp-Jaguar F15.webp"}
          onClick={handleImageClick}
          model={"F-F15"}
        />
        <MultiCard
          ImgLink={"public/assets/Sp-Nissan Z.webp"}
          onClick={handleImageClick}
          model={"N-370Z"}
        />
        <MultiCard
          ImgLink={"public/assets/Sp-Porsche Caymen.webp"}
          onClick={handleImageClick}
          model={"P-Caymen"}
        />
        <MultiCard
          ImgLink={"public/assets/Sp-Subaru.webp"}
          onClick={handleImageClick}
          model={"S-WRX"}
        />
      </div>
    </>
  );
}

export default Sports;
