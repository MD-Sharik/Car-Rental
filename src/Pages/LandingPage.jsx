import React from "react";
import Form from "../components/Form/Form";
import CatPrev from "../components/CatPrev.jsx/CatPrev";

function LandingPage() {
  return (
    <div className="relative ">
      {/* Block 1 */}
      <div
        className="h-screen relative bg-red-50 py-11 md:bg-transparent"
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
