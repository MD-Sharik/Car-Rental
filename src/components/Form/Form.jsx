import React from "react";

function Form() {
  return (
    <>
      <div className="bg-white rounded-xl w-[18rem] h-[24rem] p-6 shadow-xl sm:w-[25rem] sm:h-[28rem] sm:p-6">
        <form className="max-w-sm mx-auto">
          <div className="mb-5 mt-8">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-5 mt-8">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              placeholder="*********"
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="flex items-start mt-6 mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 "
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
