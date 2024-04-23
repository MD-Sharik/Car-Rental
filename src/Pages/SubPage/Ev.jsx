import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";
import Served from "../../components/Served/Served.jsx";

function Ev() {
  const [heroImage, setHeroImage] = useState("/assets/E (1).webp");

  const [carData, setCarData] = useState({
    brand: "Lotus",
    model: "Eletre",
    year: "2023",
    owner: "Alex Johnson",
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
          <BackBtn Page={"EVs"} />
        </div>
      </div>
      <Served num={"1.4k"} rate={4.6} rent={"$2k~$3k"} />
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
          ImgLink={"/assets/E (1).webp"}
          onClick={() => handleImageClick("/assets/E (1).webp", "Eletre")}
          model={"L-Eletre"}
        />
        <MultiCard
          ImgLink={"/assets/E (2).webp"}
          onClick={() => handleImageClick("/assets/E (2).webp", "Avenger")}
          model={"J-Avenger"}
        />
        <MultiCard
          ImgLink={"/assets/E (3).png"}
          onClick={() => handleImageClick("/assets/E (3).png", "EV9")}
          model={"K-EV9"}
        />
        <MultiCard
          ImgLink={"/assets/E (4).webp"}
          onClick={() => handleImageClick("/assets/E (4).webp", "Kona")}
          model={"H-Kona"}
        />
        <MultiCard
          ImgLink={"/assets/E (5).webp"}
          onClick={() => handleImageClick("/assets/E (5).webp", "2")}
          model={"P-2"}
        />
        <MultiCard
          ImgLink={"/assets/E (6).webp"}
          onClick={() => handleImageClick("/assets/E (6).webp", "Scenic")}
          model={"R-Scenic"}
        />
        <MultiCard
          ImgLink={"/assets/E (7).webp"}
          onClick={() => handleImageClick("/assets/E (7).webp", "X30")}
          model={"V-X30"}
        />
        <MultiCard
          ImgLink={"/assets/E (8).webp"}
          onClick={() => handleImageClick("/assets/E (8).webp", "Loniq 6")}
          model={"H-Loniq 6"}
        />
        <MultiCard
          ImgLink={"/assets/E (9).webp"}
          onClick={() => handleImageClick("/assets/E (9).webp", "I4")}
          model={"B-I4"}
        />
        <MultiCard
          ImgLink={"/assets/E (10).webp"}
          onClick={() => handleImageClick("/assets/E (10).webp", "Model 3")}
          model={"T-Model 3"}
        />
      </div>
    </>
  );
}

export default Ev;
