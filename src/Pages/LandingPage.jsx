import React from "react";
import Form from "../components/Form/Form";
import CatPrev from "../components/CatPrev.jsx/CatPrev";

function LandingPage() {
  return (
    <div className="relative">
      {/* Block 1 */}
      <div className="h-screen relative" id="block1">
        <img
          width={600}
          height={"auto"}
          src="assets/HeroCar.png"
          className="absolute inset-0 mx-auto"
          alt="hero"
        />
        <Form />
        <img
          src="assets/Clippathgroup.png"
          className="hidden md:block absolute inset-0 mx-auto z-[-2]"
          alt="img"
        />
      </div>

      {/* Block 2 */}
      <div className="px-8 lg:px-16 mt-28 mb-28" id="block2">
        <div className="text-center">
          <h3 className="text-3xl font-medium">Plan your trip now</h3>
          <h2 className="text-5xl font-bold">Quick & easy car rental</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly mt-14 lg:mt-28">
          {/* Select Car */}
          <div className="flex flex-col items-center">
            <img
              src="/assets/Select.png"
              width={130}
              height={130}
              className="block"
              alt=""
            />
            <div className="text-center mt-8">
              <h2 className="text-2xl font-bold">Select Car</h2>
              <p className="max-w-[36ch] mt-3 text-gray-500 font-medium">
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
          </div>
          {/* Contact Support */}
          <div className="flex flex-col items-center mt-14 lg:mt-0">
            <img
              src="/assets/Support.png"
              width={130}
              height={130}
              className="block"
              alt=""
            />
            <div className="text-center mt-8">
              <h2 className="text-2xl font-bold">Contact Support</h2>
              <p className="max-w-[40ch] mt-3 text-gray-500 font-medium">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
          </div>
          {/* Let's Ride */}
          <div className="flex flex-col items-center mt-14 lg:mt-0">
            <img
              src="/assets/Drive.png"
              width={130}
              height={130}
              className="block"
              alt=""
            />
            <div className="text-center mt-8">
              <h2 className="text-2xl font-bold">Let's Ride</h2>
              <p className="max-w-[40ch] mt-3 text-gray-500 font-medium">
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Block 3 */}
      <div className="mt-52 max-w-screen-xl mx-auto" id="block3">
        <div className="text-center">
          <h3 className="text-3xl font-medium">Category</h3>
          <h2 className="text-5xl mb-20 font-bold">Choose your ride now</h2>
        </div>
        <CatPrev />
      </div>

      {/* Block 4 */}
      <div className="bg-red-600 w-full mt-16 shadow-md text-white text-center p-14 shadow-red-200">
        <h2 className="text-3xl">Best Price In The Market!</h2>
        <h3 className="">Top Airports. Local Suppliers. 24/7 Support.</h3>
      </div>
    </div>
  );
}

export default LandingPage;
