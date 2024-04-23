import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";
import Served from "../../components/Served/Served.jsx";
import App from "../../components/App/App.jsx";

function Sports() {
  const [heroImage, setHeroImage] = useState("/assets/Sp-Aston Martin.webp");

  const [carData, setCarData] = useState({
    brand: "Aston Martin",
    model: "Vanquish",
    year: "2022",
    owner: "James Wilson",
    fuel: "Gasoline",
    speed: "230",
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
          <BackBtn Page={"Sports"} />
        </div>
      </div>
      <Served num={"1k"} rate={4.8} rent={"$4k~$6k"} />
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
          ImgLink={"/assets/Sp-Aston Martin.webp"}
          onClick={() =>
            handleImageClick("/assets/Sp-Aston Martin.webp", "Vanquish")
          }
          model={"AM-Vanquish"}
        />
        <MultiCard
          ImgLink={"/assets/Sp-Audi R8.webp"}
          onClick={() => handleImageClick("/assets/Sp-Audi R8.webp", "R8")}
          model={"A-R8"}
        />
        <MultiCard
          ImgLink={"/assets/Sp-BMW M3.webp"}
          onClick={() => handleImageClick("/assets/Sp-BMW M3.webp", "M4")}
          model={"B-M4"}
        />
        <MultiCard
          ImgLink={"/assets/Sp-Lexus Lc.webp"}
          onClick={() => handleImageClick("/assets/Sp-Lexus Lc.webp", "LC")}
          model={"L-LC"}
        />
        <MultiCard
          ImgLink={"/assets/Sp-Bmw M5.webp"}
          onClick={() => handleImageClick("/assets/Sp-Bmw M5.webp", "M5")}
          model={"B-M5"}
        />
        <MultiCard
          ImgLink={"/assets/Sp-Ford Mustang.webp"}
          onClick={() =>
            handleImageClick("/assets/Sp-Ford Mustang.webp", "Mustang")
          }
          model={"F-Mustang"}
        />
        <MultiCard
          ImgLink={"/assets/Sp-Jaguar F15.webp"}
          onClick={() => handleImageClick("/assets/Sp-Jaguar F15.webp", "F15")}
          model={"F-F15"}
        />
        <MultiCard
          ImgLink={"/assets/Sp-Nissan Z.webp"}
          onClick={() => handleImageClick("/assets/Sp-Nissan Z.webp", "370Z")}
          model={"N-370Z"}
        />
        <MultiCard
          ImgLink={"/assets/Sp-Porsche Caymen.webp"}
          onClick={() =>
            handleImageClick("/assets/Sp-Porsche Caymen.webp", "Caymen")
          }
          model={"P-Caymen"}
        />
        <MultiCard
          ImgLink={"/assets/Sp-Subaru.webp"}
          onClick={() => handleImageClick("/assets/Sp-Subaru.webp", "WRX")}
          model={"S-WRX"}
        />
      </div>
      <App />
    </>
  );
}

export default Sports;
