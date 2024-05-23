import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ setopen }) {
  return (
    <div
      className={
        "h-screen grid place-items-center w-screen fixed z-[1000] bg-white/80 backdrop-blur md:hidden"
      }
    >
      <div>
        <div className="absolute right-3 top-7">
          <div
            onClick={() => {
              setopen(false);
            }}
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
              alt="cross-mark-emoji"
            />
          </div>
        </div>

        <ul className="text-center text-xl">
          <Link to="/about">
            <li className="mb-10 hover:text-red-500">ABOUT</li>
          </Link>
          <Link to="/contact">
            <li className="mb-10 hover:text-red-500">CONTACT</li>
          </Link>
          <a href="https://github.com/md-Sharik/" target="_blank">
            <li className="mb-10 hover:text-red-500">GITHUB</li>
          </a>
          <a href="https://www.linkedin.com/in/md-sharik/" target="_blank">
            <li className="mb-10 hover:text-red-500">LINKED IN</li>
          </a>
          <Link to="/login">
            <li className="mb-10 hover:text-red-500">LOG IN</li>
          </Link>
          <Link to="/signup">
            <li className="hover:text-red-500">SIGN UP</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
