import React, { useState } from "react";
import Form from "../components/Form/Form";
import CatPrev from "../components/CatPrev/CatPrev";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial/Testimonial";
import App from "../components/App/App";

function LandingPage() {
  return (
    <>
      <div className="relative">
        {/* Block 1 */}
        <div
          className="h-[45rem] py-28 text-center  lxg:text-left lxg:w-[70rem] m-auto justify-center gap-8 relative bg-gradient-to-b flex "
          id="block1"
        >
          <div className="py-10 px-7">
            <h4 className="font-semibold sm:text-2xl text-2xl mb-3">
              Plan your trip now
            </h4>
            <h2 className="max-w-[16ch] m-auto  sm:text-6xl lxg:ml-0 font-bold text-5xl mb-5">
              <span className="text-red-500">Save big</span> with our car rental
            </h2>
            <p className="max-w-[55ch] m-auto lxg:ml-0 mb-6">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="mt-12 sm:mt-9 flex items-center flex-col sm:flex-row sm:justify-center  lxg:justify-start sm:gap-4">
              <a href="#block3">
                <button className="bg-red-600 w-48 mb-4 sm:mb-0 sm:min-w-[10rem] transition-all shadow-lg shadow-red-300 hover:shadow-lg hover:scale-105 hover:shadow-red-400 text-white px-12 py-3 rounded-sm">
                  Book Ride
                </button>
              </a>
              <Link to="/about">
                <button className="bg-black w-48 mb-4 sm:mb-0 sm:min-w-[10rem] transition-all shadow-lg shadow-zinc-300 hover:shadow-lg hover:shadow-zinc-400 hover:scale-105 text-white px-12 py-3 rounded-sm">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="py-10  items-end hidden lxg:flex px-7">
            <img
              width={1200}
              height={"auto"}
              src="/assets/HeroCar.webp"
              style={{ filter: "drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.3))" }}
              alt="hero"
            />
          </div>
        </div>
        <div className="mx-14 mt-11 flex justify-center basis-[16rem] sm:mx-24">
          <Form />
        </div>

        {/* Block 2 */}
        <div className="px-8 lg:px-16  sm:mt-28 md:mt-28 mb-28" id="block2">
          <div className="text-center mb-14 ">
            <h3 className="text-3xl font-medium">Plan your trip now</h3>
            <h2 className="text-5xl font-bold">Quick & easy car rental</h2>
          </div>
          <div className="flex flex-col  m-auto max-w-[75rem] lg:flex-row justify-evenly mt-14 lg:mt-28">
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
                  We offer a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
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
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
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
        <div className="bg-red-600 w-[80vw]  m-auto rounded-xl mt-32 shadow-xl text-white text-center p-14 shadow-red-300">
          <h2 className="text-4xl font-bold">Best Price In The Market!</h2>
          <h3 className="font-medium">24/7 Support</h3>
        </div>
        {/* Block 5 */}
        <div className="m-auto flex flex-col items-center">
          <div className="m-auto object-contain my-8 p-6">
            <img src="\assets\Group 45 (1).png" alt="car" width={1000} />
          </div>
          <div className="block text-center smd:text-left smd:flex justify-between m-auto px-11 py-6 gap-11 mt-8 mb-8 ">
            <div>
              <div>
                <h4 className="font-bold text-2xl">Why Choose Us</h4>
                <h2 className="font-bold text-center ml-auto mr-auto smd:ml-0 text-5xl my-4 smd:text-left max-w-[20ch]">
                  Best valued deals you will ever find
                </h2>
                <p className="w-full text-center smd:text-left max-w-[72ch] my-2 text-zinc-600">
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
              </div>
              <button className="bg-red-600 my-10 text-white px-[1.8rem] font-medium py-[1rem] rounded-md shadow-lg shadow-red-200">
                <Link to="/about">Learn more</Link>
              </button>
            </div>
            <div className="my-16 text-center m-auto smd:text-left">
              <div className="flex flex-col gap-3  items-center smd:gap-5 smd:flex smd:flex-row max-w-[70ch] mb-4">
                <div>
                  <img
                    src="\assets\Currency.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="max-w-[70ch] mb-3">
                  <h2 className="text-zinc-700 font-bold text-xl">
                    All Inclusive Pricing
                  </h2>
                  <p className="max-w-[38ch] text-zinc-500 font-medium text-xm">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  gap-3 items-center  smd:gap-5 smd:flex smd:flex-row max-w-[70ch] mb-4">
                <div>
                  <img
                    src="\assets\hidden.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="max-w-[70ch] mb-3">
                  <h2 className="text-zinc-700 font-bold text-xl">
                    No Hidden Charges
                  </h2>
                  <p className="max-w-[38ch] text-zinc-500 font-medium text-xm">
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-3  items-center smd:gap-5  smd:flex  smd:flex-row max-w-[70ch] mb-4">
                <div>
                  <img src="\assets\Cross.png" height={100} width={100} />
                </div>
                <div className="max-w-[70ch] mb-3">
                  <h2 className="text-zinc-700 font-bold text-xl">
                    Cross Country Drive
                  </h2>
                  <p className="max-w-[38ch] text-zinc-500 font-medium text-xm">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block 6 */}
        <div className=" bg-zinc-50 py-28">
          <div className="text-center mb-24">
            <h3 className=" text-2xl font-semibold mb-2">Reviewed by People</h3>
            <h2 className=" text-5xl font-bold mb-4">Client's Testimonials</h2>
            <p className=" text-lg text-zinc-500 font-medium mr-auto ml-auto max-w-[74ch]">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <div className="flex flex-col gap-10 px-10 items-center md:flex-row md:items-start md:gap-[2vw] md:justify-center">
            <Testimonial
              def={
                "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."
              }
              name={"Seth"}
              imglink={
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <Testimonial
              def={
                "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
              }
              name={"Sarah"}
              imglink={
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
        </div>
        <div>
          <App />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
