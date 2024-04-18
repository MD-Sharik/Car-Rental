import React from "react";
import { Link } from "react-router-dom";

function BackBtn({ Page }) {
  return (
    <>
      <div>
        <span>
          <Link to="/" className="font-bold">
            Home /{" "}
          </Link>
        </span>
        <span className="text-red-500 font-semibold">{Page}</span>
      </div>
      <div className="font-bold text-4xl">{Page}</div>
    </>
  );
}

export default BackBtn;
