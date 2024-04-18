import React from "react";

function Served({ page, num, rate, rent }) {
  return (
    <>
      <div className="bg-zinc-100 m-auto min-h-24 py-5 w-[18rem] sm:w-[30rem] px-6 md:w-[46rem] lg:w-[64rem] rounded-2xl hidden sm:block">
        <h2>{page}</h2>
        <div>
          <div className="flex justify-evenly">
            <div className="text-center">
              <div className="font-semibold text-md">Served</div>
              <div className="font-bold text-2xl sm:text-4xl  text-red-600">
                {"~" + num}
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-md">Rating</div>
              <div className="font-bold text-2xl sm:text-4xl flex items-center text-red-600">
                <span>{rate}</span>
                <span className="">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-filled/50/FF0202/star--v1.png"
                    alt="star--v1"
                  />
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-md">Rent</div>
              <div className="font-bold text-2xl sm:text-4xl  text-red-600">
                {rent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Served;
