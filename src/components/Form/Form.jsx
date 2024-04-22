import React from "react";

function Form() {
  return (
    <>
      <div className="bg-white rounded-xl w-[70rem] p-6 drop-shadow-xl outline-1 outline-red-300 outline">
        <form class="w-full  m-auto">
          <div className="mb-6 px-3 font-bold text-2xl">
            <h2>Book a car</h2>
          </div>
          <div class="flex flex-1 flex-wrap  mb-6">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Car
              </label>
              <select
                class="appearance-none  block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              >
                <option>F-458</option>
                <option>L-Aventador</option>
                <option>L-Gallardo</option>
                <option>C-Auivo</option>
                <option>B-Veyron</option>
                <option>F-488</option>
                <option>F-F12TDF</option>
                <option>F-812</option>
                <option>P-Huayra</option>
                <option>L-Huracan</option>
                {/* Sports */}
                <option>AM-Vanquish</option>
                <option>A-R8</option>
                <option>B-M4</option>
                <option>L-LC</option>
                <option>B-M5</option>
                <option>F-Mustang</option>
                <option>F-F15</option>
                <option>N-370Z</option>
                <option>P-Caymen</option>
                <option>S-WRX</option>
                {/* Standard */}
                <option>M-Axela</option>
                <option>M-Benz CLA</option>
                <option>M-Benz S Class</option>
                <option>S-Octavia</option>
                <option>T-Corolla</option>
                <option>V-Passat</option>
                <option>A-RS7</option>
                <option>C-Camero</option>
                <option>H-Civic</option>
                <option>H-Verna</option>
                {/* offroad */}
                <option>J-Cherokee</option>
                <option>J-Wrangler</option>
                <option>T-Hilux</option>
                <option>T-Prado 150</option>
                <option>T-Hilux Vigo</option>
                <option>J-Grand Cheroke</option>
                <option>F-F150</option>
                <option>J-Willys</option>
                <option>L-Niva</option>
                <option>T-Prado</option>
                {/* EV */}
                <option>L-Eletre</option>
                <option>J-Avenger</option>
                <option>K-EV9</option>
                <option>H-Kona</option>
                <option>P-2</option>
                <option>R-Scenic</option>
                <option>V-X30</option>
                <option>H-Loniq 6</option>
                <option>B-I4</option>
                <option>T-Model 3</option>
                {/* custom */}
                <option>S-WRX STI</option>
                <option>F-Mustang Panther</option>
                <option>M-Miata Pink</option>
                <option>T-GT86 R</option>
                <option>M-Evolution VIII</option>
                <option>M-Evolution IX</option>
                <option>B-M4 Red Demon</option>
                <option>F-Mustang GT Mantis</option>
                <option>T-Supera MK4</option>
                <option>M-Cooper Black</option>
              </select>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Pick-up
              </label>
              <select
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              >
                <option value="Nd">New Delhi</option>
                <option value="Hd">Hydrabad</option>
                <option value="Pj">Punjab</option>
                <option value="Mb">Mumbai</option>
                <option value="Kr">Karnataka</option>
                <option value="Gj">Gujrat</option>
              </select>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Drop-off
              </label>
              <select
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              >
                <option value="Nd">New Delhi</option>
                <option value="Hd">Hydrabad</option>
                <option value="Pj">Punjab</option>
                <option value="Mb">Mumbai</option>
                <option value="Kr">Karnataka</option>
                <option value="Gj">Gujrat</option>
              </select>
            </div>
          </div>
          <div class="flex  flex-1 flex-wrap  mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Pick-up Date
              </label>
              <input
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                type="date"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Drop-off Date
              </label>
              <div class="relative">
                <input
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  type="date"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3  md:mb-0  text-white text-xl font-semibold">
              <button className="bg-red-500 transition-all mb-6 w-full h-12 rounded-sm shadow-md hover:shadow-lg hover:shadow-red-400 shadow-red-300 md:mt-6">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
