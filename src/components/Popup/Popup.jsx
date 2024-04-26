import React from "react";

function Popup({ onClose }) {
  return (
    <>
      <div className="text-center py-10 px-4 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-[18rem] h-[12rem] shadow-lg bg-white rounded-lg">
        <div className="absolute right-2 top-2 scale-50 hover:cursor-pointer">
          <div
            onClick={() => {
              onClose(false);
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
        <div className="grid place-items-center">
          <img
            width="56"
            height="56"
            src="/assets/icons8-success.gif"
            alt="Success"
            className="mb-3"
          />
        </div>
        <div className="text-green-500 ">Your Order Has Been Placed!!!</div>
      </div>
      <div className="h-screen w-screen fixed top-0 z-40 overflow-y-hidden left-0 bg-black/35"></div>
    </>
  );
}

export default Popup;
