import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";
import Served from "../../components/Served/Served.jsx";
function Offroad() {
  const [heroImage, setHeroImage] = useState("public/assets/Offroad.webp");

  const handleImageClick = (newImage) => {
    setHeroImage(newImage);
  };

  return (
    <>
      <div className="py-8 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-32 sm:mt-10">
        <div>
          <BackBtn Page={"OffRoad"} />
        </div>
      </div>
      <Served num={"1.8k"} rate={4.7} rent={"$2k~$3k"} />
      {/* Hero Image */}
      <div className="h-96 relative w-[18rem] sm:w-[30rem] px-6 md:w-[46rem] lg:w-[64rem] rounded-lg m-auto bg-zinc-100 my-[4rem] flex justify-center">
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
          ImgLink={"public/assets/Offroad.webp"}
          onClick={handleImageClick}
          model={"J-Cherokee"}
        />
        <MultiCard
          ImgLink={"public/assets/J2.webp"}
          onClick={handleImageClick}
          model={"J-Wrangler"}
        />
        <MultiCard
          ImgLink={"public/assets/J3.webp"}
          onClick={handleImageClick}
          model={"T-Hilux"}
        />
        <MultiCard
          ImgLink={"public/assets/J4.webp"}
          onClick={handleImageClick}
          model={"T-Prado 150"}
        />
        <MultiCard
          ImgLink={"public/assets/J5.webp"}
          onClick={handleImageClick}
          model={"T-Hilux Vigo"}
        />
        <MultiCard
          ImgLink={"public/assets/J6.webp"}
          onClick={handleImageClick}
          model={"J-Grand Cheroke"}
        />
        <MultiCard
          ImgLink={"public/assets/J7.webp"}
          onClick={handleImageClick}
          model={"F-F150"}
        />
        <MultiCard
          ImgLink={"public/assets/J8.webp"}
          onClick={handleImageClick}
          model={"J-Willys"}
        />
        <MultiCard
          ImgLink={"public/assets/J9.webp"}
          onClick={handleImageClick}
          model={"L-Niva"}
        />
        <MultiCard
          ImgLink={"public/assets/J10.webp"}
          onClick={handleImageClick}
          model={"T-Prado"}
        />
      </div>
      <div className="bg-red-50 h-24">
        <h2>Hyper</h2>
        <p>We have Served Over 1.5K+ Hyper Cars</p>
      </div>
    </>
  );
}

export default Offroad;
