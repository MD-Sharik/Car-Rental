import React from "react";
import { Link } from "react-router-dom";

function SingleCard({ Title, ImgLink, to }) {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-zinc-100 rounded-lg transition-[200ms] overflow-hidden hover:shadow-lg hover:-translate-y-2 hover:cursor-pointer">
        <div className="px-4 py-5">
          <Link to={to}>
            <h2 className="text-center text-red-500 font-medium">{Title}</h2>
            <div className="mt-4">
              <img
                className="w-full h-[8rem] object-scale-down"
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
