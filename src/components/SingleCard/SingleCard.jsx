import React from "react";
import { Link } from "react-router-dom";

function SingleCard({ Title, ImgLink, to }) {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 p-4">
      <div className=" rounded-lg transition-[200ms]  overflow-hidden hover:shadow-zinc-300  hover:shadow-lg hover:-translate-y-2 hover:cursor-pointer  drop-shadow-xl outline-1 outline-zinc-100 outline">
        <div className="px-4 py-5">
          <Link to={to}>
            <h2 className="text-center text-zinc-600 font-medium">{Title}</h2>
            <div className="mt-4">
              <img
                className="w-full h-[8rem] object-contain"
                src={ImgLink}
                alt="Car"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
