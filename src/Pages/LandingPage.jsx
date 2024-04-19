import React from "react";
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
          className="min-h-[54rem] relative bg-gradient-to-b from-red-50 to-white py-11 md:bg-transparent"
          id="block1"
        >
          <img
            width={600}
            height={"auto"}
            src="https://lh3.googleusercontent.com/fife/ALs6j_EFSkd8w_OG-nDZYMzVHTxdCG69ra4-503hZpCfGmIsrtKGb6nolUOWNoB2ONl7sWbf-TocEX2CH9MC65ZHZFrcQWwuqtTpq617DvYaq9GlfmUqFVFgzjmGrNDpR6GZUe0N0ZwSfbIpP_HzQjbS4wtSir4JM0CdQj96xQe4NBXXI9RiyPVEgfNxGRj7Fc48fUMzAL__ooz4QwpX5gUkX8ogq2PQQzQgyrEJOjv0Nj_3NwVkRENLhVA1sVOmN7q73c8rWNjoQbozXQE1c0U_sgMRvatuGVBjP7jkpilWkCjjGSRJXnOAxiRU2I-218P74X_pF-GhEuxaU3l2-tSrMkxiShz5RDui2rAHItoC-hbj8d3hk4Il8Lei_Ug0EDSG-SJELu6Ri5OTNdIjKcanDwlEM51Tcqa4DG9r-QAyzCRha5B_buF_eocHqPI2o4RyG01vjHMd-3MXhfHFdENpMTt8FPOtOHsMYdFumwUeYEiCvh_qyD1kuYEjoA_7zyDUccxjsJeoEXlbe1xRFx1H-qdWI7OMQVn6GSqrnuOQaA9FTsN2yRM4Lf8-TsIxq70v7520CxfK3Qo41-9mBACzkP2l8k55ZbPvUO57Rp4QRTlWLltAe3dSJV1ZONC4wlaM_r8ZBZaplNOuyKJdBe9bRohxdLsPLjfab4R9Hte_NYOnjNlx8DVccKQZWEL3AFxu1LY-rElAQ2R8zJPm-MLFXC2bC3fWvf_6f2cU0q2txZED52DW74_b_chEPxFZbEPlxc2g0ifCxuFy-gL9YvtzINWjn-julEG38zHY3SXmO4m4ALtUwoUrVcnduBqajmBYsmchYDpwjOQc5tXQQgxf0hpTeAeLfi1qnFJ9WEQxGsVIIbLDP11zpRcljCE3oV-QL5YOpZXuJtwb0-C12J5qas2rCO3AbeWUK8iyzatVwofWa_W0XFAEzpaLf7EiYrj1SOjxGuBUgCEVaERy90V0VtbRfHaMqLo0TfE8LnRenaNsgSgrl_vM1kZ6L330TEHAKYMYOcJ7Z2b3dn7iG1RvrKHJkW3EZQkmKZiAitac4_EGj4HsoF1DjUZ3zF3jNlt-mVxPkoFfLGiykibKtP8Eay40LkCTxLatdz8SDF1wRkujPkWVdlcwDOtfmVi41vYya5uwDCKAG8Icn-JyLfnmNQUXR7kee_2XzrETp8sLzYBMJgtaqzAfiLgbBf2fkFMKk44woCsY9iZYv32PCOxkRtXF3VfmV2B-aXjquJzSOG_OsREQl5UH7NcC5CXbK7DjEPz71xiLg1Pgc7nVw6ONywuYfyLJ5yqTSvcJZRJdD7PXxKrH7JLKXkJ6emH5ae6T-Eo9hGulW4WIeNSx1Nepssf3OrWWtMXtXyllRv4KfQU4FP9frx6IDEE2t4PrHcrd-cDi6K4ZohQwPK6Po4yQUzUNkEyWUe9SSr4qPibDVurVHuNS_fCryUxTtgXSwaIKGopKLTICCBUGOpdm4UeakvuwkrvHYQInJ_me0Lv4D0-2giR8iG3uy-UR8AbOVFIgIz1aYL0Fnx8cVe8768iRcCVYKTJs8oJ8N5OgCHejZMMF6P28DmO0iQm2eWMjHL3dRLtKjrayhrIPQcjGCamRnHwu--eWQeEKzhv_mIIvMpK2CZuG5jpSPg=w835-h792"
            className="absolute w-[24rem] mt-[28rem] flex justify-center sm:w-[24rem] md:mt-[28rem]  md:w-[600px] inset-0 mx-auto"
            style={{ filter: "drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.3))" }}
            alt="hero"
          />
          <div className="mx-14 mt-11 flex justify-center basis-[16rem] sm:mx-24">
            <Form />
          </div>
          <img
            src="assets/Clippathgroup.png"
            className="hidden md:block absolute  inset-0 mx-auto z-[-2]"
            alt="img"
          />
        </div>

        {/* Block 2 */}
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
            <img
              src="https://lh3.googleusercontent.com/fife/ALs6j_Eyo4rNiI4ZFwFDusqATTr-zimu4LcSzHMNabwqRiB-cUNNXmOCnplwetK8IOBApbp-1T7tDoLiNNHQ1HsBIZi92g25DHyXqNMvCXp2F6YQ-CLk-s2QEGA8NzxpLSbbSvzJn4YH-Tl07-trflB1onQpbONi3ltpfyTdn0QaXtvf_-8rPqDyHEYT85aX9SF5QHO2mChLUrQNYXoPf4y750DSwBO0iotg9HK7Kth96Ga0G8HsDMtvAXlElNc3CNwJzbFN0c2gUzL-uO34OrHNgnpqE0dNDt0k5MnumaiM1y8YAdD02F2Y47iYCbSxuOU2h_f-IxbEkBviGfeGBVWrDwxpsmB2Of-yk2pYxSJxXorVd_7iL8iz7NI4yXu7UvoK8J8HUoMOuGWbLZOqImVOgv6JFzre3EXBosaN35GwNkoZohUaCx77TVSXJMq1UmN6HVpTauhWlsBIDwGO7egJC5rtr2ntu2xvNI3WidVnDQixd_rb0N8bSsHtF5XFRmGCM9PiAJZl9DU6sia5dEHdzoUCZqMyFgFYHtB15jisKjRe36xWw9e7clXI38xtNfwaEF9yloSRZ06iqVIPQJk4DJ2oddEeBa3QqEeE9KBfc5IKQboT2uaHqFcnPa4lZmId5qdF2UPEsUTsBGMUvAlwLcoXj2Ls7DrzQT_eO4pxfSW8ODOCH7c7SD6Nk5uGeQ1CK0m9qafc5zU-Mfd0KgqvbVVPC4bTOyUtSlMLn5EAO9F7RnpHMH7uuv1mXI3URSFWig4ufChFSBLQRjfV6GHYo--xgz0HwpXO4adxxzKar4i5cllYv48wlNj7duinIz160s70TjsV7QBc0j-q3XOool4qUFRHbAxoHX3BlDiEPvLrUKQuaFWGWfkYrrVfuvK_wq3bka9f39cSIEzMHkQRVG47o7b3S2g2dO7-h8o6YdnhRWaEu7_BIoleeoUck3xxiHDfU0KF3vSsl7Mk39y-i9RI-lO73-EziTFHON9uez4FyE0fOtat9G0veUrDcmdXx_XccM7pa4Hpg4Hs0PPOhxCmDEk9B_wYf0PCvbCVbggEKKY2OUMe7VjMWdMpXiokFULh4pWh9jR-8FBgqjCojL3cg9pWw-7OJO5s3Xo6CEY_GD65mpy68aAPKA3LOqA4aRETY81NA9K27HhcC_Wr0QAFtHkwlcvnDy_XQMmHD0XkTuZLrx2EIgoxMFliPeH7_58KKlWKRRFb22s0bAHtwYSUeeO7jGnhYoOEXui6QrXZM02Tp91ZwjPRUHGo06CNzsE1T4sZzORWc6V20CERX5AISx_BIDhH2afrjAICuAjkGPgAY0neL0ZLH7JiWbueuKvBcah1c5C_L9g7vnV6m1YbU7OxOjx0QNRGtcZDavcCmNgXDltwgK6OhuMu0ZVk_pYgp9F74KGRYvFLddvsaX5FRdETcb3tuvroAQiGnQefDdThpUTqna33FL00HLKTF-He2GfoFtCSHXopG3Th97T1CnvEMRmNXGyV03J-rrhvJtobx55xXu56YSlDX8czI16LzQiB-hdwa3lB7TZZKgOCV3FMKLOWZ-26ryRMf5ht5JrwgLR0DBH-_C4U1Rzk4nIL8CM6o0xA1GZ37-tt8fwasY4PbOv3o4GwLczK8K1-PT8jOdEVcg=w1090-h1584"
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
