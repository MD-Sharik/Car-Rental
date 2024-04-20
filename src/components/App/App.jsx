import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-200 min-h-[30rem] px-20 flex justify-between">
      <div className="py-20 text-center lg:text-left">
        <h2 className="text-5xl font-bold mb-6 max-w-[24ch] lg:w-full">
          Download our app to get most out of it
        </h2>
        <p className="max-w-[65ch] mr-auto ml-auto lg:ml-0 text-zinc-600">
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className="mt-9  relative sm:left-[-1rem]">
          <button>
            <Link to="/about">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="GooglePlay"
                width={220}
              />
            </Link>
          </button>
          <button>
            <Link to="/about">
              <img
                src="public\assets\Appstore.png"
                alt="Appstore"
                width={210}
              />
            </Link>
          </button>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-end lg:items-end ">
        <img
          src="\assets\App.webp"
          alt="App"
          width={600}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default App;
