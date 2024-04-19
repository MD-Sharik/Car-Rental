import React from "react";
import BackBtn from "../components/BackBtn/BackBtn";
import { Link } from "react-router-dom";
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
        <div className="m-auto object-contain my-4 px-12">
          <img
            width={1200}
            src="https://lh3.googleusercontent.com/fife/ALs6j_Fh-WW9ET313brS33TTjwhGAt2OiPUUDJxV0nwo8j8vZhvQqp-ZmaSFKSK1FuExFaAo5OghQVZs4dSz0sjneYA_VczS5JH8wsPc1OMiJg_lC-z8TA8iIL7-Abos1NqKiUMlpP8RorZL1VDK3M3lRmOhPSmFbEdXu4hEFDnu41fCRxHBamA0UBnZOpAlIM_lm6UNxt4fdRiujY8ZJ4NhSEmFCmFIIRw-HCdo2dALvm4LjmwXf2wRcLNVqMdzxqyJ85M5S09NmWbFyPpnIOS8r_h_0rnEvFYq98741gLQNGkMIAQXFYXyGoBSwb9KNG-KS1toTK-hru4aoyI-O8EKokFwdsb_D7IIiPfFtSA3F1v1Kh8FZ-XrbHMtAdAQZMEYp-AFnpYylBcaN6ejc5_vJvVFYKxmhy__uOFwTb5b5dCkwafTtYMxmNTS3vBQZCmmCGl-XGma38lyXJTpEOfXv_SG1RM_zOeldFPLBDxhhuDB-ByDYZA-I68bZr0zx_x2xxHq4wRTGfRT6uovG3KSjK7A94aeTg2YG8wiVEWgPBMHmseUB6N17_f2nhZuEbtunOQujW_egIpnunuvx__0VSlTuytVCgp9aREr5wnk87hgmQqhx1PHmJZqNgY8Urs_N2fp02cUEsytEGgyR0GQRhp-lLvs_QzptkpKtqNbcoMNnkifBmGL_-IZogWavZk1itTqrYdIiOZYsrkqbLyQcvRMNpLPrc6nT65GWMhLe4V_pXtxtMWbaiwEv5idal4pCJHRFxAHzkgRySo4y5x5-2kBp5muGzipMvgH9-XI0skMxwGiXEHV85axbZmkG7pLV0Y2FZwxlFVkl1iu3ZBgGXwrIb2bjNnzwA1yMWcIdoN8rz75z8IXGrkBxVjfukzJFluIOd_s7TEols8IPHbPcj53P3H8DYkhuFD_a0nPWPEKeJsy57HSooVmlLzNL3w-JfPOiX13hkG5ikieVaXLh2cx1p6oCEJoCGTaxuR7rM3LzhfvnOV0t_avqHFIJW2rF2x8FTHmhNBEi9lKn8CEHcfW_Vw8DvoTMZiusGLOsDcSVZTCllZ3ks4OcS-J0wKwc_RbXbKmK5F6nfzZEkg7BIlOpVHSD4LCHB8Ia6j8yY2QpY5qcx6A3Uu5tqX-qjWDXcy2y57HY1QWKCODXXkcO8qtlSES1-WIqDhUHggbEoXRNH1IeneWrPWdP5rREocfqcjuG_LQSfUOp72fQwgN8vtoEmslbeHsI01yVgBx6I8RYqzBdgmpDxt5fxNwIRw3w4LhTcx3ZFkC_cpzt1I9YJ3OBhj7OoyLhSG3O_i7bv8e9OoguXov78O8JgEQiH95xvgfdh6pn92Ugo0woJYzS15HM6I--3J3pd_RwyucVE3r3S6PE4s05cgEqHmjAqDqmZtIHa75as-lC1K26oqBF41jVCfR7gI385FRgjm4TuBpdruqh3a_J_MNoYNZwJTnO4GxHlqJsCfKFb52Pk2YJi5Rys9FvK_TdIYvYdgARuYVWx8dixm27UDT-4x1dip-WJAhLbKi9HD-pEpQpqirS68ULLsknkCGuregmYoy4FhVeWQjxKMXQvMAtrSraYCZruFyvYBgffAMeYSiGXB59QnPj-69ueOyz5_sbJT6I5upk9O6x9kReZqczA=w1798-h1556"
            alt="car"
          />
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
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
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
                  src="https://lh3.googleusercontent.com/fife/ALs6j_E1Q8oNMXVuAOeLGbNjolUe0qtAXsHmPqAjhgP_4V69QvIrVoO72JpyjluM3Ly8xVvy8-oasmt_QNt5BOBfwjDLjrj_WYI2C9ScyLMBYlcvZX7wtLTZdHPMIQkHwxF3po98X9yism3jxVslvf9uraLRJsYqcBvBIeVc7GFYIUNW7EXb1rKliUDVhgrvmCijy-O_QmkW3s0ky7oNg25EnSaFM3gLeWPAbP590-pHslUOG8LwHI1saiiUBKhYetdXr8mS25MCdjtAa_zXUuuLxb7-X3KHlAMFmZg0aF7n7ykOGPg8HWe1GIJW_y3Gj4YBJ_4zTtQj8vi3GRYUF6XlmrYXKB6Asatn29UxuG2th7UUHzWCmdYmDJs164y5q9C-tw8CfTMKI27QYrFNpU5W3lZkNs6Vj9rUQwVihui9Hj4HMXjNl97fRrm-2QSE3fyqNyLTgKFh4N2dS3JJTTg9h7jecaK-OuVPsTmqvcAmUVKOL3atPKWAVg_Rb2KYjRpUVqDZpOKzLc4DWk99clE-sBIyhbmLQsHlpD4DLo330WdeIaNQBKNc4vDrQUNVxDCxdF7HiOvC1APPgZUoDdWCpKkGoB1CxN81EoEABGnULvMHE5X0w1zONHm47nprvtOrnCquXPElq20EzWxfFepto8VM6eLZpcaysGVJ0QIz6CPGv8R-CTCpNCHrSeJuUL46GY9rf8qP5xiNDcbZKktey2TlGAn6ANSU5hVQGj9uAFHzI-7sxxKeTMohGRzwCConqwjbtH4a0t2jyff2X27VLOufZKugFehj5rR7d0M9tsv7xKo82R6Se9W7k-s7KTH1D6d_4pMAWJL3EV7f2SEp8dxH4JZm59kKKaPQ-QY3kQdXNGOlP69SDYE5SVOIrA13vH6DGKTd_YPrt9PGpjjxB1f2QVwOkkiq1tdAJssJi5Tn_7ZIoBToD9MT_WcDvxPSuyikcDREopLo-vZL3GlFo16wEp07axbBc7AM1oAginiPcCG5jH0d0LhC7hKoHvycdc5vVYZHpeSxNLdWWgRLND1j5-GJLoCvbauL-nagoSGrdygJddB6j2hQFrnz-jpDd_EAt0eLbfPtmxze6AlpWrbhdvMBX2-Lf23MKxjI85AzUdF6lFw4QcunIyFfXs9ymuFbChHlHtlgeftH2ev1hpRoRiiCw8zbOyz5IgdkZYcWj1txSyiEAYuRad4TXFBcjyH-OkO2hzraUpcykdcPJdSTZcok0mP92KzYjj_p2nrrGkk1cQh_JmRqxykb11gUJXGjhC2iPd2iUUF8sZxfhhyTB_8eWNv5CCfjsjxLWLjyWpvDIy9f7hk8aQWUEMIoikY-8EulEOvsBAep5ZJ5vLF8P9Z5Em6Lg2MNdNYyIrQW4PKLrUJwj7QNpM-2sgDpRxL7Xw69JH3NS0HBgrRyZaDW2PxBUC_rebQovcVUKuTyQIXM3cSQLdIiUzO6NNr9lAzfzcepr_l3I2v1812laiNSZPCiwUtgX-YQajoHFqhNVqctNtDdoWVsMqcQ1pzXcyZbilVg1Bwbe-dMJWtOFoS4kO1b4cQLdhAEpWf0tDUvgDbJuoaAwMdvlW9S3gskEuhon2AYSzIFuVYTvgzxFeDy9B6MzqJJiKdIXKZXMzqwdfyODVN1_w=w1090-h1584"
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
                  src="https://lh3.googleusercontent.com/fife/ALs6j_FAeiebLxwKC52fBa3nWUmo5SuAKoPS9HCtAR-5omEP2o_OnTOq5sajH6pDSopRJALFZWKuY6_5j_h3YleNFF3CKnh5aLEaB-bj2wbhTs-tI_pTgUDeYAnWkdDoilaC-ib2Xlb_6kHdOQSYZOLXIVR-AIkpLeaiznbvbKVa52X50fYrhPwhkc_pRlDI_kCvTd6zX_IlGcLvoPOhmWuysmcaEmzwio8OEgoVrJmlXmPmwZMcHAfU2K4pK6E2gVqgAzwrSe8kggEcCDjbEepiFZ7jiaoSZQRU-EOZGn5HyPLNKllIpFak01axraYBIHVAMOa2xHUGCYZ71DXj2N_B8OPEbvbItIEdKUsYQtNXy0M0WZWL75vNkPo3N9OQB9ofSAji0j4uoR48SsrWNhpCzjoaawPRl98JXY7hGPnAjiODOx0S87_mNaOQy_kCeVuwWd5WBI6Iy5J7IVRJBCuDrcZevvWk8JRon1GLREfkXts-vqZVPhQKC7tMfsWqPQPEeyMdAe5pJtuM8VcTbUMsrAq-eEx0Nf7fU4Lk7nu4EHIQ7s37qUW5gTMstYfhYCmvYfa3wyO9QpvrW6E_jtHXtRdW3I0fiZwRnz6p5xkHhPHL1XKESwwiURwtkt5lhyBuZNTOHmfY0FStf-K0W8bEIgoP_6as1ItaOim1Awlq4EDBl-WolCuys_Sn41_mtKQ00fr-30hnseYGhEj8JMNx_Qd_cYrRc-64B01HpdjAHj8bYMezrB-HCkM8LViXJp72HFwiDNzRp9rH5H2siaJRY24aWccQYYxw2xgsIgEbGHV9yxhwHYItoIcXFizqwABDCuWBZgo8sjaWJvjI-BV5Xp-SeuuVaM5QUXtWtYaL4ZhnT9MeU_HeYz6sOC27UurSyjA5rB85EPrXnxI213AE9lNif6QVP2xddCIy1ai3Ep8uTY0pq-RYlSTxdRoCYGiJTMe6rOl5Cfm0EVJRS-3I9zEr7qVUkUl0ruWJGoGQwEnoXaUafmRvHMVaza3sId2kcU2lNHicvx73tYT2wTLB8LUVrrKygkHMls9XKDtdA3PkVXKD53Em6hpcKfYQJ-08RRofk-IR_LcdFHnVx_xBkQcidXSbiGolzKbzWCh5z8eGzP3B4ZJ0NRqrRTytDXta1adAD2TGJXJR556-f8QSG31KvOJ_geipZHBJ-WNwum7r3EaWx3wEgQKpHYB7-bqQWURbT0uohJPe7io5UjCOUk1HTSZHPmuMzAnBfxuqmUCbdgYqN_OTi6FtwYOJ06YdamlTUrT5FJTWeRv73Fy4p_gVxBdwAjfxp6dbIWbL-LlufCoXbkq-RX4Bri8n0M65fYNcghl8YRNHm1AreFQRLETzQWMgjvBdPY4pvT4vBwb7L6iQRZMGMMB_yx2_QSKGGnGCIAlbztsOfZPt93ZjgfsW6woGVL6Agnga4m1S6_kafjpnVtoFOUeVI3X6J_twgRMjF-UusUZsrQKJFDvhiwxLBdK3h_4w5IWKoOjGM1ocpfdpts8KtSA98Klpu9K1F8_TJbEU5qdCPXQIHz_lMowUZ4sxVWe2jkvMYvCNFDJi-JJV8El3uQTygDgwP_FdM29tuowxRKBTQ7-3UVnCc8GuFOla1v9Ra_5L2yBNBepGOQ4FZml2BA=w1090-h1584"
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
                <img
                  src="https://lh3.googleusercontent.com/fife/ALs6j_Fhxy_yYtRlQVZXh3eipVf9EpJQYm_2_hqeI-FbovFDkggp8XkyhJJ_sZfpDKTIILs01smpMRxpBIrKcx28KnDe_ctLcSzF__DpirCowNLEwHmUGcpk-emwEO50JX8X9yhdoug4LtXywh-HIOf9lAlNCTcujyU-uLpW1KNw81SXGYbh8w9ofLYGrr8ptHYU9ctjXjZCCcYVJ-nS7sTOD7w31Xlq4uvuCXs3ImGW1kx8ctzmmfqS0LS1IpUclzXMCLA-njC_1iLSePd7bzvbvHf_Y_Ph5PZYkqfCgu2XvIyxf43zwkhItBSRlJeZnI5Hxvq_8Xtxn9WG3jgAFT6s93y9ynlcp7bunbJtH2lGlFYcFkf6VTGIJSQOArILPULsiqOk1FxVw9M9dZ1ZzB7PZjIaBrczyBSh1rsDt3YtEQff1fVt4kR1nsfwejuqdfEE1cH07g4RMvwUJxawdqA87VB_OrCggiJFoR-J77HWzwHu6Gc43rQg1P5tvU8pJJs4AncHcPU2z0dw74HcaK8krsXWhW7B-1ZV_Xow4Vy90ZmxmojJUL0tQWWlEwG4Tzj4WpkXXL8tMnohJ0hMYCQLhQRPNSQULZWFK-gj2jfEzY69WZMWWcEXyw0ACYF5LexvLRr2ig8-IwaUBo039-yGDTgkeIOxwbKox4DRcoZeNb6JAfaKYqEQKAIrcOsZrIT_e1VQnVWeb_t65EhGYp59WJfMY28hOFR_HS8wPhwzcv3ITVHr4QOnpDP83t8xMV8aJWCo1mqr1Li6zZqXnXw-cKrRxDCFowpnPzBCDeYoGo9rqbxVZpG-n02njD6uzqTcbkj0acleL_Ez_K2TDSej8fxJGz9a8jc-AYMEiJPTtpSbYwW1EpvKW0Iom0rq0dbFr1PX86nrnSzzgBGG-n-uCS1BViEJj4yrDqLTT47Bdy_f8jPBs-NnSVHi-14oxOhRB8wdMxQB2IqoLcgHAjNcMyV7xijQd61HVHghHXw2emX8m0eLc0LHWYm4LkAG4fKdEAy9irBdnbjhRQg_54o76pqaDaky4Y3_8w_1S0K5Go1YhwUjv2oYs_83OQaqHghnWDYru9XbJ4HXcyazaZdNjdZVGQvZowkuyydxt8nCQrd0EWNrD8E2nuWux5vhwnEq7TtI_Zn2D5_7i6lqw65UApzPq8bE4dOVEFVbw6WxBVUezNhM6K0anf_J_KqyoquADnOtwRkydFMuH5BYnGtj-yMODE4-sQAPxHMP5wgHRzBf6TQQQmhPktaOCuSeyZzihkrzEIw87REdMzTL7o0nLnqKQDE6iru1Lyb7A6nuXJc8s2p7PP_DTQbHVEa16WKJSecmAP27DWY5U3k2sgU9mii5GgGn0Yi_ML54kCH3870RAzvk1Mjli0M9fm42JwDKNFmPUkSkL44XxmJCY5sgQeSKIs0sBMDOoqMlaKBItIwwCOMZWNCOqbxhLR9wPywwX8030yVMgO-TpsoateOGcR8pseaSPCjvDXK3bXnmD2SZB4z8vg0a1aZwS9IHTEX9GPVOL4gJzlkyPGJtuW61tN0e3S_4AefUNRl8PmwMu98jlJF2GRENbes31eGoeiFMp437LpOohLsQQAyTDd79BENf9Jf_uvvu6DQJslyoZ3o2fU7TXQzK=w1090-h1584"
                  height={100}
                  width={100}
                />
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

      <App />
    </>
  );
}

export default AboutPage;
