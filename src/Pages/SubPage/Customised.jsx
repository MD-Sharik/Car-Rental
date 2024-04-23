import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";
import Served from "../../components/Served/Served.jsx";

function Customised() {
  const [heroImage, setHeroImage] = useState("/assets/Customize.webp");

  const [carData, setCarData] = useState({
    brand: "Subaru",
    model: "WRX STI",
    year: "2023",
    owner: "Alex Johnson",
    fuel: "Gasoline",
    speed: "195",
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
      console.log("Sports cars: ", Cars);
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
          <BackBtn Page={"Modified"} />
        </div>
      </div>
      <Served num={"1.6k"} rate={4.3} rent={"$2k~$6k"} />
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
          ImgLink={"/assets/Customize.webp"}
          onClick={() => handleImageClick("/assets/Customize.webp", "WRX STI")}
          model={"S-WRX STI"}
        />
        <MultiCard
          ImgLink={"/assets/C (1).webp"}
          onClick={() =>
            handleImageClick("/assets/C (1).webp", "Mustang Panther")
          }
          model={"F-Mustang Panther"}
        />
        <MultiCard
          ImgLink={"/assets/C (2).webp"}
          onClick={() => handleImageClick("/assets/C (2).webp", "Miata Pink")}
          model={"M-Miata Pink"}
        />
        <MultiCard
          ImgLink={"/assets/C (3).webp"}
          onClick={() => handleImageClick("/assets/C (3).webp", "GT86 R")}
          model={"T-GT86 R"}
        />
        <MultiCard
          ImgLink={"/assets/C (4).webp"}
          onClick={() =>
            handleImageClick("/assets/C (4).webp", "Evolution VIII")
          }
          model={"M-Evolution VIII"}
        />
        <MultiCard
          ImgLink={"/assets/C (5).webp"}
          onClick={() => handleImageClick("/assets/C (5).webp", "Evolution IX")}
          model={"M-Evolution IX "}
        />
        <MultiCard
          ImgLink={"/assets/C (6).webp"}
          onClick={() => handleImageClick("/assets/C (6).webp", "M4 Red Demon")}
          model={"B-M4 Red Demon"}
        />
        <MultiCard
          ImgLink={"/assets/C (7).webp"}
          onClick={() =>
            handleImageClick("/assets/C (7).webp", "Mustang GT Mantis")
          }
          model={"F-Mustang GT Mantis"}
        />
        <MultiCard
          ImgLink={"/assets/C (8).webp"}
          onClick={() => handleImageClick("/assets/C (8).webp", "Supera MK4")}
          model={"T-Supera MK4"}
        />
        <MultiCard
          ImgLink={"/assets/C (9).webp"}
          onClick={() => handleImageClick("/assets/C (9).webp", "Cooper Black")}
          model={"M-Cooper Black"}
        />
      </div>
    </>
  );
}

export default Customised;
