import React from "react";

function Popup({ isopen, onClose }) {
  return (
    <>
      <div className="text-center py-10 px-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-[15rem] h-[16rem] shadow-lg bg-white rounded-lg">
        <div className="absolute right-2 top-2 scale-50">
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
        <div className="text-green-500">Success ✔</div>
        <div>Your Order Has Been Placed</div>
      </div>
      <div className="h-screen w-screen fixed top-0 z-40 overflow-y-hidden left-0 bg-black/35"></div>
    </>
  );
}

export default Popup;
