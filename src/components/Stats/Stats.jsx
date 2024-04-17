import React from "react";
import "../Stats/style.css";
function Stats({ speed, brand, fuel, model, year, owner }) {
  return (
    <>
      <div className="min-h-[7rem] bg-red-500 text-white w-[100vw] sm:h-[15rem] sm:w-[12rem] p-6 opacity-95 sm:bg-zinc-100 sm:text-black rounded-lg shadow-md">
        <ul className=" flex items-center flex-wrap gap-4 p-1 sm:block ">
          <li>
            <label htmlFor="Brand" className="font-bold">
              Brand:{" "}
            </label>
            <label htmlFor="Brand">{brand}</label>
          </li>
          <li>
            <label htmlFor="Model" className="font-bold">
              Model:{" "}
            </label>
            <label htmlFor="Model">{model}</label>
          </li>
          <li>
            <label htmlFor="year" className="font-bold">
              Year:{" "}
            </label>
            <label htmlFor="year">{year}</label>
          </li>
          <li>
            <label htmlFor="owner" className="font-bold">
              Owner:{" "}
            </label>
            <label htmlFor="owner">{owner}</label>
          </li>
          <li>
            <label htmlFor="fuel" className="font-bold">
              Fuel:{" "}
            </label>
            <label htmlFor="fuel">{fuel}</label>
          </li>
          <li>
            <label htmlFor="Speed" className="font-bold">
              Speed:{" "}
            </label>
            <label htmlFor="Speed">{speed + " Mph"}</label>
            <input
              type="range"
              max={350}
              value={speed}
              readOnly
              className=" hidden sm:inline-block"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Stats;
