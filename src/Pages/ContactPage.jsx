import React from "react";
import BackBtn from "../components/BackBtn/BackBtn";
import App from "../components/App/App";

function ContactPage() {
  return (
    <>
      <div className="py-8 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-10">
        <div>
          <BackBtn Page={"About"} />
        </div>
      </div>
      <div className="flex justify-center object-contain my-4 px-12">
        <img
          width={1200}
          src="https://lh3.googleusercontent.com/fife/ALs6j_FqCdS38tcZzDBTqbgLZ8ym4V3EkyyJ2l-9BViug0ZsGaL---DGgj_agWIhiKS942WODpsit57yfauJn_BBNdIpo6J3pa2ws82tZ-i70X30X8ZfQ58pSzLKxaGCsdvuOEBejosO1CdLwC-O_AlupzBznVBBTnTUKyvZUInk1urM3CjbJP8IMzyW8tAgIH4Mwv_BZRIOFchHq_pmHnPYbpcEahOdL4yFhBuVjNv9AatVMpFqeKh1X2gE8olD9ZeFjm8BpuTQB_JLz7ELKbtKml-xdBnPN4awh1wQhRqVmej-0-ZPMsqQDkW67O9QpbsHfL8iKOjKFkKNz3QfVmMoI4dtpAYsfUpaF2CzkPogFsb8JuJFxG4CE-VxHpu5G-pczcS1eZZORKf61L888wRyeymoBdJEBZM41J67jqTvFTMtIOk_EP-xSDXoYSSXIlXTFMhNfPHCuj-E1GKikvwi6aV-2HftX0WTvdar984TSRtmPItBRv6mCcG-jt4ZmOlpulNLMVxksfjb4-yOq4NgSTuLNY0Bb7WU-sVJ6-QXIUdmhsFw7Q07uLK7QazEZL5tBKk1WcLXXkGoJ6Rr-cBOwEF3JcyhcbJEJIjXLQNwpXkFlium8wJGeCQt9iRQ93VecVW9jg_vf3AwL5Qn5fjx4ibOndDwrFGOx8TcG6RUBAipNL358IhMJpLHEuWSXw5SjZnVzZulVYfZfHfiLLoLGdXOR83V6QFvJ5NIbGRz01g6NIYkyaS-wHlUzLCKwmTi1ZOefGYqAmkB4g_w8a71DTWf6LtF4bk3kwapnjRuEAM1zJDOC-Py8aSHhdDAyOYkwu7mbopz6hSXB0ez3sVI8usBI5YD8jRrFz4WNNINPm2ehMF2Apv5yUfukW-2K3FUoXgAb_PFVCjVkLJw0PA9GzjAC6rMCEhfpma2QFaiytacDCK49pXRznXcLFTGRgxQlpTayWWy9N1d7rxrpNylqQnSlxz8CSm7rrRpiAahEBXYA7-PpA6jhwKT9st41YSPSEZhA2HX6DzNc8_tVbfpwLJmRUqmGxzCKrPc7oUf--KaSc5kk2OEdo9xYvF1uRnRmkC8uMxkmQTDl0g8oApPVvJw_cfDteHlPm4iPn2Y2JSwZYVpg93IWvH4KN9IjZcN7JvLANR7CkaD_PUwS13X8SXlhTJvQRdGHq_PZwUVueOa7To_dfjUH3x9kisoDEzNs3pZSLTy7-iGDKLGO_-r8thCYlW7md2roPol3I4uukTnR6K90P36CwvkhRTBAfJPSMx4jwrgEFw8dt5IXdD41mwvmeH34M6uYCdgI01WiyP6HBcH1AwsuXg-Dv3-gft_Fh43Bf3qq_-sLCyfQ7AHCd6m4rymLoyJGTeFLeWW3tBhUmDoF33anW6eaY3iIri1x5WXppR-_cyBXixlJzvLbLJ2uVnJaAR1XzXPvf66AjE5Q7iliOianJOL0YOxp1za8tJ9zyh70lftSDnK66wZJ2ajwzPb_eTE1VDleDVR2VgBKj1LHUxbGuf_LymmX7Op8GU3pzmAC02mt3lpQAZzg3Ejb5w_cbmu1s1fDrOXVbfWC3ThJZRxQeCSBKG9dWsc0Ebhj7KJt9_WzYV_pXh599_7xDfT0A3gU8rjIfEqzU0y4zQeLv_yLA=w1798-h1556"
          alt="car"
        />
      </div>
      <div>
        <section className="bg-white">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl  font-extrabold text-center text-red-500">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Email@Email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
      <App />
    </>
  );
}

export default ContactPage;
