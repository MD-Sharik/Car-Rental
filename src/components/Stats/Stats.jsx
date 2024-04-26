import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "../Stats/style.css";

function Stats({ speed, brand, fuel, model, year, owner }) {
  const [isopen, setisopen] = useState(false);

  return (
    <>
      {isopen && <Popup isopen={isopen} onClose={setisopen} />}
      <div className="min-h-[7rem] bg-red-500 text-white min-w-[100vw] sm:min-h-[15rem] sm:min-w-[12rem] p-6 opacity-95 sm:bg-zinc-100 sm:text-black rounded-lg shadow-md">
        <ul className="flex items-center flex-wrap gap-4 p-1 sm:block">
          <li>
            <label htmlFor="Brand" className="font-bold">
              Brand:
            </label>{" "}
            {brand}
          </li>
          <li>
            <label htmlFor="Model" className="font-bold">
              Model:
            </label>{" "}
            {model}
          </li>
          <li>
            <label htmlFor="year" className="font-bold">
              Year:
            </label>{" "}
            {year}
          </li>
          <li>
            <label htmlFor="owner" className="font-bold">
              Owner:
            </label>{" "}
            {owner}
          </li>
          <li>
            <label htmlFor="fuel" className="font-bold">
              Fuel:
            </label>{" "}
            {fuel}
          </li>
          <li>
            <label htmlFor="Speed" className="font-bold">
              Speed:
            </label>{" "}
            {speed && (
              <>
                {speed} Mph
                <input
                  type="range"
                  max={400}
                  value={speed}
                  readOnly
                  className="hidden sm:inline-block"
                />
              </>
            )}
          </li>
          <li>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent click event from propagating
                setisopen(!isopen);
              }}
              className="bg-white  text-red-600 font-medium shadow-zinc-300 sm:bg-red-600 shadow-md sm:shadow-red-400 hover:shadow-lg hover:shadow-red-400 transition-all hover:scale-105 px-5 py-2 rounded-md sm:text-white"
            >
              Rent Now
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Stats;
