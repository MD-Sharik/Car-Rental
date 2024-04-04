import React from "react";
import { useLoaderData } from "react-router-dom";

function MultiCard({ Title, ImgLink }) {
  const data = useLoaderData();
  return (
    <div className="w-full basis-64 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-zinc-100 rounded-lg  overflow-hidden hover:shadow-lg hover:-translate-y-2 hover:cursor-pointer">
        <div className="px-4 py-5">
          <h2 className="text-center text-red-500 font-medium">{Title}</h2>
          <div className="mt-4">
            <img
              className="w-full h-[8rem] object-scale-down"
              src={ImgLink}
              alt="Car"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiCard;
const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "19acb71371mshab2a6900569a4ccp1c83d7jsn8250a7ed6f5a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export const LoaderInfo = async () => {
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
