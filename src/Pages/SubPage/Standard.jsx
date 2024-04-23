import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";
import Served from "../../components/Served/Served.jsx";

function Standard() {
  const [heroImage, setHeroImage] = useState("/assets/ST (1).webp");

  const [carData, setCarData] = useState({
    brand: "Mazda",
    model: "Axela",
    year: "2023",
    owner: "Alex Johnson",
    fuel: "Gasoline",
    speed: "190",
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
      console.log("Standard cars: ", Cars);
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
          <BackBtn Page={"Standard"} />
        </div>
      </div>
      <Served num={"16.5k"} rate={4.7} rent={"$1.2k~$2k"} />
      {/* Hero Image */}
      <div className="h-96 relative w-[18rem] sm:w-[30rem] px-6 md:w-[46rem] lg:w-[64rem] rounded-lg m-auto bg-zinc-100 my-[4rem] flex justify-center ">
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
          ImgLink={"/assets/ST (1).webp"}
          onClick={() => handleImageClick("/assets/ST (1).webp", "Axela")}
          model={"M-Axela"}
        />
        <MultiCard
          ImgLink={"/assets/ST (2).webp"}
          onClick={() => handleImageClick("/assets/ST (2).webp", "CLA")}
          model={"M-Benz CLA"}
        />
        <MultiCard
          ImgLink={"/assets/ST (3).webp"}
          onClick={() => handleImageClick("/assets/ST (3).webp", "S Class")}
          model={"M-Benz S Class"}
        />
        <MultiCard
          ImgLink={"/assets/ST (4).webp"}
          onClick={() => handleImageClick("/assets/ST (4).webp", "Octavia")}
          model={"S-Octavia"}
        />
        <MultiCard
          ImgLink={"/assets/ST (5).webp"}
          onClick={() => handleImageClick("/assets/ST (5).webp", "Corolla")}
          model={"T-Corolla"}
        />
        <MultiCard
          ImgLink={"/assets/ST (6).webp"}
          onClick={() => handleImageClick("/assets/ST (6).webp", "Passat")}
          model={"V-Passat"}
        />
        <MultiCard
          ImgLink={"/assets/ST (7).webp"}
          onClick={() => handleImageClick("/assets/ST (7).webp", "RS7")}
          model={"A-RS7"}
        />
        <MultiCard
          ImgLink={"/assets/ST (8).webp"}
          onClick={() => handleImageClick("/assets/ST (8).webp", "Camero")}
          model={"C-Camero"}
        />
        <MultiCard
          ImgLink={"/assets/ST (9).webp"}
          onClick={() => handleImageClick("/assets/ST (9).webp", "Civic")}
          model={"H-Civic"}
        />
        <MultiCard
          ImgLink={"/assets/ST (10).webp"}
          onClick={() => handleImageClick("/assets/ST (10).webp", "Verna")}
          model={"H-Verna"}
        />
      </div>
    </>
  );
}

export default Standard;
