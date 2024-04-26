import React from "react";

function Sidebar({ setopen }) {
  return (
    <div
      className={
        "h-screen grid place-items-center w-screen fixed z-[1000] bg-white md:hidden"
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
          <li className="mb-10 hover:text-red-500">ABOUT</li>
          <li className="mb-10 hover:text-red-500">CONTACT</li>
          <li className="mb-10 hover:text-red-500">GITHUB</li>
          <li className="mb-10 hover:text-red-500">LINKED IN</li>
          <li className="mb-10 hover:text-red-500">LOG IN</li>
          <li className="hover:text-red-500">SIGN UP</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
