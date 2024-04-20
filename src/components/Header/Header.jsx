import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between sticky top-0 z-[999] bg-white items-center py-[1.5rem] px-4 md:px-10 shadow-sm">
        <div>
          <Link to="/">
            <img width={50} src="\assets\icon.png" alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-8 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-red-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } hover:text-red-500`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-red-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } transition-all hover:text-red-500`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-red-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } transition-all hover:text-red-500`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <img
            id="hamburger"
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/dc2626/menu--v1.png"
            alt="menu--v1"
          />
        </div>
        <div className="hidden md:flex gap-6">
          <button className="text-red-600 text-md font-medium">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-red-600 text-white px-[1.8rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-red-200">
            <Link to="signup">Signup</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
