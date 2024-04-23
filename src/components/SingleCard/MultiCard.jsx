import React from "react";

function MultiCard({ model, ImgLink, onClick }) {
  const handleClick = () => {
    onClick(ImgLink);
  };

  return (
    <div
      className="w-full basis-64 md:w-1/3 lg:w-1/4 p-4"
      onClick={handleClick}
    >
      <div className="bg-zinc-100 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-2 hover:cursor-pointer active:outline active:outline-1 active:outline-red-400 ">
        <div className="px-4 py-5">
          <h2 className="text-center text-red-500 font-medium">{model}</h2>
          <div className="mt-4">
            <img
              src={ImgLink}
              alt="Car"
              className="w-full h-[8rem] object-scale-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiCard;
