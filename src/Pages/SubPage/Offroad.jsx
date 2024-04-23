import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";
import Served from "../../components/Served/Served.jsx";
function Offroad() {
  const [heroImage, setHeroImage] = useState("/assets/Offroad.webp");
  const [carData, setCarData] = useState({
    brand: "Jeep",
    model: "Cherokee",
    year: "2019",
    owner: "John Doe",
    fuel: "Gasoline",
    speed: "180",
  });

  const handleImageClick = async (newImage, carModel) => {
    try {
      const respond = await fetch(
        `https://car-rental-backend-eight.vercel.app/api/v1/car?category=Hyper&model=${carModel}`
      );
      if (!respond.ok) {
        throw new Error("Failed to fetch cars");
      }
      const Cars = await respond.json();
      console.log("OffRoad cars: ", Cars);
      setHeroImage(newImage);
      setCarData({
        brand: Cars[0].manufacturer,
        model: Cars[0].model,
        year: Cars[0].year,
        owner: Cars[0].owner,
        fuel: Cars[0].fuelType,
        speed: Cars[0].speed,
      });
    } catch (error) {
      console.log("Error Fetching hyper Car", error);
    }
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
            brand={carData.brand}
            model={carData.model}
            year={carData.year}
            owner={carData.owner}
            fuel={carData.fuel}
            speed={carData.speed}
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
          ImgLink={"/assets/Offroad.webp"}
          onClick={() => handleImageClick("/assets/Offroad.webp", "Cherokee")}
          model={"J-Cherokee"}
        />
        <MultiCard
          ImgLink={"/assets/J2.webp"}
          onClick={() => handleImageClick("/assets/J2.webp", "Wrangler")}
          model={"J-Wrangler"}
        />
        <MultiCard
          ImgLink={"/assets/J3.webp"}
          onClick={() => handleImageClick("/assets/J3.webp", "Hilux")}
          model={"T-Hilux"}
        />
        <MultiCard
          ImgLink={"/assets/J4.webp"}
          onClick={() => handleImageClick("/assets/J4.webp", "Prado 150")}
          model={"T-Prado 150"}
        />
        <MultiCard
          ImgLink={"/assets/J5.webp"}
          onClick={() => handleImageClick("/assets/J5.webp", "Hilux Vigo")}
          model={"T-Hilux Vigo"}
        />
        <MultiCard
          ImgLink={"/assets/J6.webp"}
          onClick={() => handleImageClick("/assets/J6.webp", "Grand Cherokee")}
          model={"J-Grand Cheroke"}
        />
        <MultiCard
          ImgLink={"/assets/J7.webp"}
          onClick={() => handleImageClick("/assets/J7.webp", "F-150")}
          model={"F-F150"}
        />
        <MultiCard
          ImgLink={"/assets/J8.webp"}
          onClick={() => handleImageClick("/assets/J8.webp", "Willys")}
          model={"J-Willys"}
        />
        <MultiCard
          ImgLink={"/assets/J9.webp"}
          onClick={() => handleImageClick("/assets/J9.webp", "Niva")}
          model={"L-Niva"}
        />
        <MultiCard
          ImgLink={"/assets/J10.webp"}
          onClick={() => handleImageClick("/assets/J10.webp", "Prado")}
          model={"T-Prado"}
        />
      </div>
    </>
  );
}

export default Offroad;
