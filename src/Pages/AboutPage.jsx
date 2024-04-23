import React from "react";
import BackBtn from "../components/BackBtn/BackBtn";
import App from "../components/App/App";

function AboutPage() {
  return (
    <>
      <div className="py-8 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-10">
        <div>
          <BackBtn Page={"About"} />
        </div>
      </div>
      <div className="m-auto flex flex-col items-center">
        <div className="m-auto object-contain my-16 px-12">
          <img width={1200} src="\assets\Group 51.webp" alt="car" />
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
                offers. At our core, we're committed to ensuring you get the
                most bang for your buck, delivering unparalleled value that
                exceeds your expectations. Whether you're seeking top-notch
                services or premium products, we've meticulously crafted our
                deals to cater to your needs, all while keeping your budget
                intact. We understand the importance of a seamless renting
                experience, which is why our deals are designed to elevate your
                journey from start to finish. From exclusive discounts to
                irresistible packages, we've curated a selection that promises
                to enhance every aspect of your rental adventure. So seize the
                opportunity to save big and embark on a journey filled with
                incredible savings and unparalleled satisfaction. Don't let this
                chance slip away – join us and experience the epitome of value
                today!
              </p>
            </div>
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
                <img src="\assets\hidden.png" height={100} width={100} alt="" />
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
      <div className="bg-red-600 w-[80vw] mb-12  m-auto rounded-xl mt-32 shadow-xl text-white text-center p-14 shadow-red-400">
        <h2 className="text-4xl font-bold">
          Book a car by getting in touch with us
        </h2>
        <h3 className="font-medium">(123) 456-7869</h3>
      </div>
      <div className="px-8 lg:px-16  sm:mt-28 md:mt-28 mb-28" id="block2">
        <div className="text-center">
          <h3 className="text-3xl font-medium">Plan your trip now</h3>
          <h2 className="text-5xl font-bold">Quick & easy car rental</h2>
        </div>
        <div className="flex flex-col m-auto max-w-[75rem] lg:flex-row justify-evenly mt-14 lg:mt-28">
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

      <App />
    </>
  );
}

export default AboutPage;
