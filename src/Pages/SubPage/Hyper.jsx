import React, { useState } from "react";
import MultiCard from "../../components/SingleCard/MultiCard";
import Stats from "../../components/Stats/Stats.jsx";

function Hyper() {
  const [heroImage, setHeroImage] = useState(
    "https://lh3.googleusercontent.com/fife/ALs6j_HzmBSulnaqR7Q0uuReO4fgX7c0AeKdvPmqNTf3wnn45I2LitUYVA75HZeex7ZdvVuPibp_r2D27qOsiGZBk8n3DIobOB_yMZb96C5PlRa5Pd-_G6MRWZJ2gqBnOhmL6g85C-3MRg5BSVTOO7wL4188737_JwKTDBt6xOG5RG3Xnhow6hPfK_luwIv9psAhKCATeLQrpf4wAgN_EIqtUWmoIE8YPhnfAl6ldAAS3TKN0oG0QxJs8dgOgpM4ICkpM1Kfga70oo2Rs4pHyK6JrpPrhHUsT1WTYaMBZQUQgsqez0YRHny4Y7BvoLEHYw32fui4U42yHagNIvO7Ucsf5RWktl0iySWKI3EGblQkuyeHPcoJRJKdgpufnFARDZwXAZn-ZVRCH7L21bdkmp8oapGUVHq4xIZ-a62zNMTERV8OE8rxofmQd3rIVC8MeAwONsCOTvqjO5Xtqr8ruqi4KtM5NPZgqVRZXydkjrTmjI-Z1T-yOg_UNNEYxDSDIbOYoeQq90VvoUFaJDd2UynHzJbKXIiddDa6l4UP6S5HRq3laNygmJsnoTeQ3VKZr_FH57y0uZ5VhHXP35NXKtBOg2y25W9kPzi3PjdBhXwBU2PZzhpcT4RpECo13xKQIQtGEnAuqnb21Ve4leZpITSqOVyzt9FE8W8o3tGthUI12wPd4SkY-GnlaEijiSiYDqBrY0DV_OwoOoKOK3k0tXl0BAYND6-klJQGWDVyLq23F49edxw3Nw6yawyMzgU9fEomfAz_yyQ6_0gNlGVMQjzz8L7sdAlUbi8xqGjZeF36s11W-qlpefRoLZbIH8pp-bz1f1dnCTrlrRNkCxu4WWhUAjThsYNf8h6UZNOO6Z2xUFUbn4QYyy7POrNWR0wdn0yjjgev2onvnev191NC2dTkz3WLGAbMInQUTAhxMT4Rj3fdSdwD4MJhN2zS9bsBNzjpB-KgeJOh6UmKKJK6bb8LYyLNz3V_GYIBXm6qtJ65tJP2IjkMzSXkYden5y-d-ERfuxCVO-ylR_FhkcBkvVTz7UfZg__9CVRRJKLheLQhGd8ngrwEKpyXvKjfNr2XEdWo7PBreiKvegMDf42ROY7MDUAE510wUYs96dM0pfMGId1ixgb-bBDksDsOcr-NolKc0Pit_FJ8nzFW0f12AV9SrmjjmuAkZVFVhYjOh22e_oEBfi1hC7iCebPgkWU6BP_JUN7X8iQ3C21piSExjC7bUlt9kuX9cyyuqCHjCEX40IzWbQitubIwW8i_u0psAz4uUAt489_Hu0o46E8zFaGH7A_fGJrZtFlc-z8KkV-fiaUOIjgUNH14yNIuhNB6qhHfSdsIfQJ59uKHYrAb-M7nJUO2WgZLZC3ROUD2ZYoANCenfgRMKM3EAyfwqfylrDU-6LT311EEPPKyLz46KRNtf0b-GnoXrSzBt1uMSFnCuZz3c7fC24gg7XyIon-DO5vfRtyOowwqrovyz869V0ifqFSU1WEKoKA9Jt0ROSVEUfwHwxmvztKdpUaiUNM0fuKDRhdRRAL_LyciG6V1pQCmNuWMkLyn0A6pCMacoZnzk7uGsZNYoCi5tGWNq6IdCJhW8ex64xo6AFqGhTBAm5nUL6ahsODd_DQ95-Pwps3JNVebboSSO95GQA=w2576-h1584"
  );

  const handleImageClick = (newImage) => {
    setHeroImage(newImage);
  };

  return (
    <>
      {/* Hero Image */}
      <div className="h-96 relative w-[18rem] sm:w-[30rem] px-6 md:w-[46rem] lg:w-[64rem] rounded-lg m-auto bg-zinc-300 my-[4rem] flex justify-center ">
        <div className="fixed z-999 top-[6.9rem] sm:left-[-5rem] sm:absolute sm:top-[-1rem] lg:left-[-1rem] lxg:left-[-5rem] smd:left-[-2rem] md:left-[-2rem]">
          <Stats
            brand={"BMW"}
            model={"x5"}
            year={2016}
            owner={"dave"}
            fuel={"Petrol"}
            speed={220}
          />
        </div>
        <img
          src={heroImage}
          width={650}
          alt="HeroCar"
          className="object-contain"
        />
      </div>
      {/* Hero Image */}

      {/* Image Gallery */}
      <div className="flex flex-wrap mx-[4rem] my-9 justify-center sm:flex-1 sm:basis-64 md:mx-[2rem] md:basis-64 lg:basis-96 lg:mx-[14rem]">
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_GksLpVquyh5D3mNYpkAriXPy7ue65RZFtyIdpTK8pYSyJTzAWbzXgpV_PXHfRyatSVut2yEfYUJ8bQJJEQ2CoZwvFRThdNRcRJo0puC2N86prz5E5AdkLvi0cRO1QIJzxS4bP8IKL2LNeqwwAqSbAokQky-0ag1oRF6zOxNto73wlJBz2oIWAo_6Nv5lU_qNoaH-l4txo99jAGqDAmIfFJUwGe3JBTXZXAupYFEt-VdO6YCxPY_8mzJ7xuCr3fx6ifVsZ0CbSF218bu2VTT9X6iowRp0256_37Pu5_TVADzkb23mP6_iTMAOGpR-9xQ7K0xIHZ4APRjuwh7HDuvxCWm9wrT1eUqy71BOPu4dydYiviTIsCHmOgG7g4y_dqb7bv108aaQFhyQKg2C7na-ysplMnIGikt1gZZ4yZyGfdxmmVX3vuqBRJugdNBCaHcNkN9rQxsfmYqadzy5wCR2fVw5-bmn2p_Nk0hZHTLHUwMqE9qRhzOv7XYh5CodiBmv-17J1dq5H_mjbI2kcMQchr4c22om0l5noTwmwfmmc_CXV8qRSho664NqtOIMTy_wVbpJD2k0iXi7pL3F0dNAkNT2hWpKTimiVE0ygGG_kvKfdgrW3vr7hP72Rr1C57G9RcuFk9mlqgg7GPZWKSrux4Lfh-fZ5BQ_BGQuj49SCy3xiaHuDsFz-I-LTrbQ4kUdNIFbJlvx5fUfO74sp_QF8ws37Cw7xRzI_iMEEkYugi56sJ6N9CZeEBcFY_xr6-oGO4wVpKX7Jax0jypypeNPAcpJLo-wJyk_7YzQYGXFzl97QO8geYUhhLa8DhroYXm869TjLTXXJFNaaEvUNrxNIiVoBn1dVvgMTi200tyFgoXbJIX9AZGvEiIpUocl0T0gC3P7_D7A3JDCxO36IKD2Mbgob45m5PN9_fxS8espBwkugFAy-feMa6NfGh7AkpFPX8rxQ3AviEEzusiCrIVDdJ3jAmaaWhnsxzhRmIvYH_3EWOwETPCtvkDkpJ-U-Q_aKFrul9tEUX-vVD4KGrPk9ECW_uFH5GLkEWaAOr-GRCcF8gHeSa7Dh6QeUpkuDTn7ZboGPXAit9SuRTtZyZIvTe153kg_l87eUVMb85dxzvfFg59vgSiwq0cCJxLh72OLipHGLC7mUdrcyqi1xTHr11G3j5SDnZt74ckN4tAFufrJ7fKaVWAbCllLh-LSFXskdpivNOLdNAsMOunVAd6v4EbUPLqgvu9fku43Yfx3xoA5irMAyp-xGAtTCyJEDLZCKyNyS0_JJk1buAQKgnQLEqmwrUCD5J2i2Q5ZQR8IRdC7PjZdK2FtEAFS3DVaNWHJyqWIZQZekOudFICuDxEXhtyTEpBwtFCyPxtt4xnPyCetmcG6ggjaZix-btVYfakqOQZ34asUehUQK-F2e3Heao2yej2Ik2y8r0Q7HtE-0pKvUyI2aWUoxsoDk3dnYkQa0Cpn5Ahp6k2Ta5B__f3ntZT0MI-SfnGH_g9evYvjiuDaYD5ix37sC2FDJvsTcvjILAz3MimYHL_AckS6gVxrKQrT7R9ozlgR-26hRAFUYLJzImYb8wpOEuRGpaDrihB5yjbprfqdmI8ZWMVabXXrWoGoTibcttRHxqvd4YxPNAyazwhKsoMA=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"F-458"}
        />
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_HWbsOiclAZKo3oo-W8TkjBxOgO7PbAsfw4lB3KE11cTvKaougoEUMe9Vr7glX4UwhSxVSwc93qJumgt6ttB6biBdJn0qdxY3bgeNdLhPbKyoz03IN2NZpPAjTthCCmFymcIFxJoJ6_pc2XGiuLLigJxZSaY_hHuIi5z8_FmGIuG0HxMTOB_ZgioIW1YPHnOM5gF02Fx1-JIBOaxTt-SXDaFdJ7tUIfHcB0cONJm-p1f5zwLzYUJDWmyPSBSoBwjrBnf8CVMvvm0i-QtLQm2Ylq5_Szm-NSVUheXrThJ-oNu9ccesPex1tq2OgQHQirTTlBxvZDfO6Sq07_nD4YScj9wKhwYmyG3JxUT16qmY5DBqSbge1RE1IiuoEnkP5-T9mOo5z6TLbWxDG3j8RwZanlLuJ5KuCcO5qh5oGJLzLEDa5sEv-MDL9EM3zbMZm6UztVeCbc5dKzO_QSuAVnH2_XFAV52hPxWKtlRZeKwOSaCW7QP-RoaaT3IpbyDsvhIz1OvZWnNjre_25odOLqiKz2q5HawH7zqgZ6PJBvYxeCm1LkD15R9fVnmX4ATFQP9fsjkuFLniQ9NhpNKCNzHAX2MLfYFvHZVBcDGoQEaGuQu0uIDVr9ueakoaB-yg5X3T_PVJ7kxNyAIq1hST3y1ZPH2huOOTjjAH31W5486JyLUJuSTq-x9b4CKpE58KyMaxkCXfNfAdvsp_MldoqcGAJYtLRlVgXETkvPQDRL5oBA7eUgNrtSZTfr9qh5DM3_0dwgsYYgOwZZyf3EDEazO5BB3IdTfOIQa2NcMlKIWBkspIzUa1jctnDJyBpBauxedDoBSv-rUNQGWp6imzM0pRLOch3qzHdABNqmX6Sc8qQEcQQicRm0hwZ5CnS--fU2rNfNRz2HR5FmyBpXs3J2BS9VWy9YqozBr-Ac8gEYCZttC0lr5ruY4A73D1ljilIYFTeS17-785stQlzH81Ue1Ds46BfYvpO-F2kQb9PV1d6eEVVx7C4jmWg6m07-Ltg6gC1SdlGZPGj3reZ_9o-y64ApXSu0PybcdBmZzAQ5wK1xg8EwUffHYdit9Q48VfdGrJVv_UkQv37471uh9qw3W8Ymoej5reSWNqY4lV-Wm0h326udO9ndrh6zpap7rOWywdPRyEo-NexwBsMVcvZj_MdgA91NLgU3eOy0_6_KF8dtxApypIH0GhNfDvOzHRbI4RRXfq1oasjlwOWHJLtBl1svbofu8fiWvR6U67g23GOWMwNsN1attOYZL7FmrNU0WX4a1RBS_YKCOUnXV8LHyVt4Hl6rOZ1n_1dxu7nye7PvNlKBa2l-1pNKq1wF77qkp1zMG-39XhANH6msQn1GgwG9wmtjPfq2vlX_r78h7MwfFCbVyvgyi5Y5UczaaLaxi0AZd22VqQtoz4beYFOxz4sDaEt41RAC-irLVV9q1-i4bthbRgtetzNNLUkrJYAZsm2BcFSM2r3u3Q5wEju5XgLyTsZbKjUmA4pnXPALBTAIflwJC348SnKdDQrGaWsQIP3Hpis4dBHp4tUsCz_reuyJkz1gSWb7YzaISp7pm7-erjMtqTi-kXe2tz1H0b8ilJq9F0vAI-I1sh9Jj1qWwdN0I9BLSRm-jF4v3Laf0JAUx6CkBcZX4Q=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"L-Aventador"}
        />
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_ESyiltXCh5dZcYWtr6dulNyJtOLJvRpIfDT41_oEfZ6n2eMTX6W6t14LCXgWVsPSfajdCtf2NrjbsCIoUIaQGTFLuGlw_gyRDHW6xYVPdAZvHpjPK_XO71IY_Xwd_4lFSlNzpH3UwfGtewp-m1M_pP3zHqOf49XZP--vwxpDHfe9J3-8717LalgkPjhJC1al1SCpK2m3sHjYW8ym4Irw3OCmBgPhV9A529xck8bek8fAh9AylCeCop2PdUQqeVeiJ66io29g0o4jtZvHBt20zlZq2AWfZJuNB2fVD7Nwmtdso3jdO91_m8YSq9q985iEvi4ypWBVoQaY9lmLiDsU36J36b0B951Y09JWqrfkm21bY29_746zMh0eg2BecAUZ-2_15WWXGUDxcuwPgOHBuSeiT0cDpEWFy7ueenfihqQAgO6_8td4tOPp_AtZbJC3NC39C03cuI8N_fmll9f5rCR02sJQ2pkXcV2Oa_Cm8O_uCcEvG1AkYzMg8EYe5nzAIHe_xRmaJCrJSkkvoW09a4xuEFeITxuPywxbp-DyjEoW3JtTBvL0iowSz-oF_UpiGJiQXtIYmhNstLlgWo7IMo0g8Fh4kid3uBl4o-2an4u7KOA4bdaKhd8RBJ3xPOTn5FO4TVqSQIBZBh5YdgjHBNkUtHKO750WfuhDZtJC3RCusKlorXognj8Qfx5wU9cWmlfaZ36Mpv8HFD0tfaJx0RNsSRfej4gMpV5ALZT0XOwPUlWsYCPkrs0Rmeuwv70Urq-iNwyQpt-DxlrkdcJIjFKI3CM3N-Q4HCrQkFdNC5EI2eATKApMPhsV2LwTmqDk3tg0d4OscAH7rncxf8uNzHqwYG4RqkEA19oQGmLYOZlFY6JNxs3kflMJZTq5M_p40F08ujmnLUPIcGM-h3-dxDUc19qzQBbMnEYyswSbFiBh0ytPpQvC6Tm9ndHq_EqbkikAemlGPmBvigftMrOcbZlgi8i_TxHTobITH-FwLoGTXNweaKqUsDySDKKF4YckArHkWbVtqVl9GH2R3mSLMRFEnZgPyzo-5IxXZdhHk-3KhBMjR-FS3rh_eluVJeJ5hlSU4lVlppKvilhu6HzOVjFLB1qenc84rddqvNgWGGJmfWPSThF-OyGcyJBynjtON9gTVQ4StAC2Y3Y9m5xsc6TRaR8neBZJBHdhcHRTS68OD9Le5ucMBhJiQN1s7fVh1B9kjZ_hNdan-bWgrkZD5P_0JKjsKsP3cRsmWbBOUlE9VAjuxLno__2Wu01rVPzoyOvdBayXbPSlnJtbaFyZVn79YHQbgFMnXy2MAzNotvwFHn74Y134150sCAEYd2F6yidHmcZ_XQksQ1mVwBg_cer6BAYq2H6IO8LPIW4Zc-juUlagYmylp0AI4libcdW7t-vrmLxudt0_kUTEStdMYThKRvH7y3GjEe-VfkLmtY2m9Npmp6E6ndn82CN78xmM1RctTLpPgz1QFrk_vAfRmMQnWHDBEd7KYOBTcs1k-cLBHZhiT8To7-9Z9kYhPDG7FDkEOVnjAwI93BqQRYpTwOaorRIIIBsONdMD03Dm1E7A1kJYMmIIYSoOGi5PrFmRXjK9PrM_9YL-aoJiDKKrRxyfrgeeTi8bJkdHiS4AUg80WSMi9LGw=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"L-Gallardo"}
        />
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_GVR92Rwl5-AfYjcF8jSTkLM0nB816yIpu6NedxpKtpg5RI-dqGSqfiFRebGLBf82u_-DKE84u6w6SV_DKpnLjWKmfZDGGH4sV0HG_PGhJ8ADze0YUmLEM7ZgyKtj9nTNX9ZatWouKh9V9D_1vySYfdNoHih330ho9daKKUh6r4mVFrapiOT6ly_SQla3Z2gnoXEkHe9_icREIBpuC1Mo3HbJq1iELu0hV7owq8Fd8jsVlea3TNMA84wSS99YFFLFsa3XkbYlwbKWU9VmR-pyXbjYHiWJv9qMFsQMCRDjedbXGo4CwCEm6377rqpD2pPOs03lBzwYRY_bVO3sqxq3G3UFFqz13FcTkks4-F0POGet-zhUuEMDFO2e_da0N7gYefiyDK9D6dMlY9yegCh6nH2bWXBjxYe0u5t_i_DfEhMh60Ji6I2xarSaJqEFyp14QJLwN9EWdULbtrB5d48qe54xa26P595D6vBlZhtWyH6iFN8bCiimtVpjkhggnuXkVZ5jvM-PEuLEwatTDv5nNXArLsF8WAK3eOc4dwMQaKwSp-auXvsWLw9GATcVIYHb9k1vgH6lBRszlgFYkG0aHkqqMQOujeMz6vZOvYlhp6gmvvVOHLMUIedk6JV7whE4EzIMi8hkejlIrOsEUsEr0tA9MbgQb8EDnLMUtPzy4BM4gC68hF69j__CAaBZwLOPRCRpNX1sXtN9FtKzxbvsWjdTIrajXzDji34iLmFfCUR2G9BNUCwKiuxKfXNNaLDpZ8g5MVQkgfANA0VHqqarpEPTkneauWYp4TEGXs293mcgwA24Rc3JgOCxAxIykiv59KYY-KnaOwXeEjYP1P-gd8-fFhRvN0m3RexSCG2kXNCv5SteOadPkhRheqLzbkJTKVh7WBkf_HA5pIHzaEsb9eEFobrNakH7x2x1Rxb9BWm5-6hbmd2XkI_dnJsHAAhQBDIqcepQy1LO2bBnA6lBgiAwcO9l-VwVlzdRzra3A1K0mnrjxLkYkdsRjJPTv9GLGPKwmtBmvfjfc9UmoRpG57QHgh3r_KW6y7p5Ia2Gu7vviRxIuDMEvYG2ZER9EJc9hPlOPtyMyfSfXUpn6N0Ncaffb63MnEWffFWC5Vo7kJpMlxoEDwatwXbVlFFPntTJAXNMj8DVij0EReQU_snicDpPsB-rqINeItLydFbCQvo0t57Ga4_IhxaxNxtwLBBZNzdC9Ybj5XxGkcRyfD3f3FNMO6m19L1ZzjIWOgeWTyTEOLPU0oVYDYjADFNR59H1M2Qd-LVknoP41muXfiispKEcNSyVRf4Y9rsSa3VcjZlRWiDsK1kuv9JklgP6YfV8jBNR8Pub_V4u3v9Aa-RHiMecTbmSgmKIZElD4oYWIoRFwnqGxrZzQmC_MYDugtL-J-BJnCjPJpPf5GThwnnBiTxRO8tOfqwjVaatv7yACBYdcphp0AOCNK5dQYX1PDK5yW_Cie5dysa-hOorO1oS6myHhahcnUYD_Hd-h9BeT2m_i5N7AKDZ3m1y9eV-PaBqoOEcGdQgW6wmMSdJ_Lhw4kG0guSLpQx-q6dhMhNczea3JB8aaz8XX8Mzw1iJDfDmgYzHQ2JTEBLqpQMB1de3mkdNYTFzsZZMdOMP4Gmxo_D1XHEuAd=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"C-Auivo"}
        />
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_Hwod1iax5vL90nIjYQ_V_e16D5KRoPFjizCbqk8mivW6PbTsGy1gIoimOqQzHtU7X3GRfqu2xg78JGrw-3OLMMY_oVfX3YGUr9PYa0lsmgv6eGw3koodE669dsOOU9OdxZz3YElkYQ3CAyM3CAuJkfsdXpu0X7HwcffvON9stw4KLRQcWhhUXEaMfqXSiSiIVG83opeNA7F18EC9jJ-zr6nLIcOMdiYVF4Jgw2LN7pEhZkU5a6_ne7kudgKtF-0bOk6X3xN8eaoiYex5QdTh7HZEFSuBsljjXn_zEw1FSUin6p6CQu0NhMVAdbDGnAqaBOcQ14omhdcX03i0lWBl-GpOyVwH331FpUVEFMYWjYD4clndK5nLSDU_WDA66H7OFZMCYO3dh9KJRD8quZfZdTBdwMV51UWxY5u3T2mabqcQojpB7dFhFjAtiSUBxJSeLZkIiA4BfdcrcK_cPsUhvwMNciY4DyqpWrWA-5V39b_AhXDmCMBEkACwtC9VJrZ3rDyn9oUOIb_g98c9jAPIjcs8biopBMCDFtn68o5JLuLM_Rvjw9k_93sEpMyIMJFQTBYAkxfE6hmKc8wNxQdJwupRPuUOTFt7CoJh-vbREkbPQkAH8IxXZbH_mYBhRHoUHn9Lk_GzhjCqgclnX1nOByrJDS5QNgmKYqgqhgoocYgFWvmVWG8_j_x2wcV97jykW6rjzjPttHjX6shIQ2C0zLVpuT5XIRctRps5L_Jo5nodxSqxLS4iHf8-6Z1bwPzlHXeqR4h8HT_BuprtTbEc_jyZssS1zffaz3FBoNYq6dQZlgdfa-fZ26AC_S9GzFy1lJEPLkSnGfwCDoXFN19gufEaQxjsPeXaRh5RWi6BpB-jVotkCU4kXqVvOQx-fVlXMHmjYgpY9zP5iDPaW7CGVo6ZgpxRXMkgPj4jOMavk0etDeTBnC2uj_Rz4ThT_jJNg47uY5d0euJO29_ZyFTSPfj_slQILkOWR8CtHMe6kE2hYAwsqaIYydNRQRJObIpAYEMa9jCwNy-6eiC58fmbX0x20zsetHyCjuP4ksvaa0t4L1MRbIwNK9hUmUgk9PmgIDipZnnqwUKMihY9BAjQfFF-rUrHbPixSoPcCG96kvf7wH9nrh4JX2RctRJ5AiD_-wmKdx4ek2lVPEQNfAwtU3aH2DcFoMzi-HOmu9FKeJxXL3Nlhor-k8BKSmEtefXT21z8lAzyQV0Yh1Po113Lzd0IccbSZ1hZGpAFc9w6uwC92KXlRF-jDf6p1hwNvNTymWZTzuHG3Fqg1NAuTw-jo2hPeNpBNHlRz9OcmbN0dYfJ_UrLL41IuXe3E7DCP1ylnbBBwOu23rku9xGQhyNSvEy9X3RJ3iW4IxdsHxp8L0FGbqk9FH_XroK8G2j4FB5a-lLewnddBTMQL5hVQ3PKnTTzmcU1t_ocy0mlHEAgSi7UGe3DSCCYEOBy38bKBtpvERVO1w--bwXT1xs3nJGcRgLYvZN_30-cqOzZSMA6gAnaq1op_7BLHSNsK9UtcR7un4MW2NQWlK9ajq_2UCc3K9d-vyg8SWTfbXXzSP-SuBVfvQdkxZimGb8Kq6Ajsp0nuA-f0F65Nk0l7Ir6yInOFsWcZo1aZhFVa4MHq9fnpz7YYSvgSyvw=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"B-Veyron"}
        />
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_GsJj8d3JiSwuHt73UAJAQozMuW3-TwmjN-M7eI-_4DxWFwFHWfmaQOYuw8_VgrKems3Bkr7UNlMbIeROO1hMTELHvzQ6-umah0BYcEaafZ82d5sdinknpdwqPaaVk4RX6vROl0NL-dlZ7iXLF7-lNro3pAvfmFyxuTyxEWeskbTEqj9F19i9oKZ4Vn0Zjmfr3jkKsmE7Lnesq99KtH0Jo0cCsuTLRJ2tQXOSawnoLWauin2nwyJ8SEvW9GIdRmibsMJIX-Q4QCrzNKmekjeKLHVOXmkrRd_MOdkWyeAQMTJpLqyPZkuzRmTcvZ82QXBge8m2u_I6P2AFJchlOoyaHCEdool7EvbYkZfasTXbJVuINade8upHFTOsrU36uNgS9hAuIbCI55Rv5FIVyy9y72EtwDY9JQvu1YPQsYH_AWHtUhg10y1OkFYDDdXzzdfG6Uarg5bVgiSCL4iw07DxcAQv0K4n94Vo-A_yMxz47iaYicxWwn-9MSkL8ZxXXPEZlJrzAaj5zpN8wRPGMsklavH4XiEL20NzHLOIFngP_2XVThsY0XyURBe38xgFzREDHv2fXWs_-8UmlAf3_JFi-2kCjprOuppEMsjEKb7-ANpUPO6KxrvZnGvAu4Sz0jCToQhOGQIsAnq3FrRMgNZukLnluQYq5Xn-8jyr26AklctT7yXab2y6hsb0IMzwHEu-hVy4HKj6g2PbZa_pVUS1VrfNf8oOAEEmpe9bRpPDSwXW_HG02VT_jh2q8VJS7r85mDmq4mu0_GmUUvCQn2mSECtGgZuSo3cmyYAksbBlLSogSQFfJg2p2JlpClPxrj9113XS5F2AnYVxILFF5kNHolYa5dbOG3KV7Y_06OjPXskJAVC3J_qA3SzQ7K2mFVPJS8vpYmfZB-Ka7LilTNvcmtM3SOsYTAfy3DDyO3nwGnroPiKFi_R51HaaTBjow3t7beAdMFGfuJcyoZPkmZikZz7fx8KbOBDDoksfIdC_u4FDluksKAlr5tktLP2vDbZISmZDPYzqYpeNt5yTDf4NFUpynfUEZyKDgaEpQNlH62xYr9d7VhoAt68cEpqylv6iWktBU1QvA4RNWDXBxtqKHSbe-niQiXDl-4O-joEiUaqbpIXexXSHmk7waAZDbhASrAxCWdkhwpD8qqmblw1faR2P2mrqXiBk_01qEiSYiN6-yOtdWC9sAcmr48vVwmDiICtikHE-OpMDzzTszXOdQ7HJzSuhdKWJosBx8yZjoR6k5hRTYT-Lv5DuGoZDIYTlgOG-D8uM_Osoe4_rrIr7GUUtXJKua97dHmH-dvYxocSWO-5POh7NapA1j4Z98un7bkZ1dIVNRBDhi5CKQb3UC5fBF-YNi2DVg9H8Z2JnPX1I-zHXfUC54lC02P-ItEtSd25hZUFPl5fWTj4VdRnAB6Xx-tn7IQiJilZM753mFMHN9PUi_Yu51yUdho_66vePE13Q_1mXuVVUFrp3XL2u4KqgLENPcRE9HP0UnjqQ3nAdkeYm1D1v77cARDRWkzqSRpkzH2uR8y_sQ7KILhRXS_5FE1NacwVI6kohIHHe2G5NZry-udU3oczOKg0MCLeSICZ_4uVEfiZBp1Dz6_aM41StS7SdYwBXrlMZpqHyNJOGMnGG4hIA=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"F-488"}
        />
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_EHoXuGWwFlV2mz_eFG5wG2H_d1UXskCriMrkA2V_UBrqpi64hB5l1_m6B11-gXIl7MXiHS4ToMw_VuEzdsFtQ2TxUrtcobDnGS8uar8qbYOgnFNNFimNuKpZM0VAAikLNRXEvSLpsdK7nmWG14uxHelxG2-b9C_UqLakHvHwm_BudKGQV_Kt1QehhDMnB9T_WAYLtWRZHbxAWbl0r6ReriagdZQ_c_7N9qL3mSwS6C1M21Cl85efbuG9i_DXRj9VKCkehbKW3lBMTGBP463xna4RLUOzswagOMMcUwnFKBBgZURgyuoDxN9ftt6L0H16TLhgosScTGlBmLWmeriCuJuFziVEvihZ2EJq3pq_gUEHryn71KXN76v-ctLhac32bjUKGUsjPM0AwqiGCWFDJPEEl9fYPN-Y4ymhDwhRxsxVNyBJG9_zxmuFnl820tOvw5BKY8lTMVWbNcWzOQQG8Ozb7tenT94AX8LLvuq92yKsXMu9eiRYkQ0QtcdwseRlJBaxTaD6UoESK9b2ZQcnJUJEASDDWZpEpqomqXF_0HkBZM5eoPsDr_LKuSDVIrnQei7YLuWsmn94Y-XdXZlZm9ymrQHW1VeUFiacUw45oYnyBXkiQlf5lZ0ZTzsgjkao9nOAkmFsmg3EsdE7gTxtekuaJSsj0JPGLNxXmR5ZISCa0Z11-CB0x1IAeTjZtHh86rP8EYHU7q16lxL4RSXL_-B9xm_j5NzpUp7FfX_mbLYIcKE5OJ-RXRYE-SdDXUf_aqu39oJKoB6hU3uegdeytS6g4twNL4kDYmHwY_-ABNJ2Hb1Gj8UTooecLf2-3YUMntV06Kjn9mmg2Cl8J2mas631aeQYvJayBtTdwP-BrxiRfjUQYbVXS4FTQpnkgzwsqwsVcMkYJj2XR9ScM9LG7gAs40opvz8LBMiz3f0R6WZp2vGmwiOkRomkd4ZtIOi4jzmuosqSmC-0_fuGB15dM5Qk8e-NPJPANKKJG416Xfj_lHalQ8qmSb43L3wSiNbKhDcd3vGjKeTcp0FIjYv3bmb_xZJpXji_hIrp4rqPEB4ScJueVcjQ6CELv4V9ZyEMj3x56KjhVDTWA9agw-vFYrtb1HPMN7RxAtQZDqsuoFbBXemj84f_6bc9KWXeBpuXBdNayj-3k43yt5n_R7SIhY8r-xPX9_w0rRnoURgAVZJ43nmyUeD6IS6_izGQd6_UVhEo-2EG4dLjtlFpuW8Q5dzAmfcZcO1amKzjMD9EGEaFOVdoGYMCMf_K0OhLO3Gq0RtFJHGYryOailR_Fx9DcmHRt1vIqhKy6nuHQnXXsDyVal8kxZJgU_6qccWgxxPu7o8EqSiI6ejSQ-ITHr8g23G4P8Ih-p-FZYVDMexSIxNvqvR8IAFeaIAe1fogknqD4t5NfCpcWrEV_Zr1CFw9T-p-DhdDbjUy1UC1g-FDP2UrgNKWHKHidldPRTnIhIgIvmwNNN_lwrYxZgAXzpqgirL8zziqesEhIHR3DwsMj20klXZQNVwmrzTlBhDxjS2hGlEc_2V4oldQTDlJ0iVfznM62mEpav2AA7DwIA0IPVsqqibj0Y_sa6i-RuEjCdLzKK_lTS75FqDPn2_VuvrDOLsCr6ziG-upo2Qwf6DbvzpF_51JmGYQ=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"F-F12TDF"}
        />
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_FlhtZ_XMsR49-fmxkh1XTcI4muvyGcLaApGVx-z_CXylrw0v7LLTI9UZOu0vdYBuH335Ic6vz0L22iVSKfJJAXFsQbNV-UgfKgsxDiIKfjziX2WgYZcg0IavgKpW8qPVTY7607NeW0eGd7z1mklJ5yn6DjGCuKEXXy0uKtKz7wbyNi9eKbLZ2DpumN4qlMxeuGdv4o4G6nRzRGVBjR43YldF3DLIQ9iMYyJJQGFA_r807ySdEthZug4zXQqOcIr-6BKRYu0hxzjalU32Wi7k6xtYL2z0hw7lPuGLiTPy6aVb58gbstFrPvHiK5JmkS5KVq9ZFyy1p6y3NjIDdsI2r3W-YZsmk2sGWK-k7YIVAvLvF7nyc1SLZEXhot-0ZQwLWXYm22B1BabCfDpo71n33Z-DfpWBJMt0oebSdn__UbKdepZalcZOJpp2K2ASkKTJxdlKSt40hUt8SzwFe_4lKuskiuWSIDqZiGL_agI3syKmj5rx_Cad_Iz5N4VKSROfA4YCVeOFLGhKrPBTSXgqrzz8yU8iFYzCyR0Pimur0QfBXVP2QG_lLt-pzJB8CcQgWnW2C3yVnH9KFluF-osKxz8HQrwAlxxeKbOxgKzDHVQ9JyeUvx9DODougnIME6gOzKDYY07NB-hqLqpGBmRiDXbpsXKpVTD63WWbJ4uMqZ7-g8lPKKjx54HXmtQ0mZJ2NsJivNS7tg-v07_nQNCMXrtNWH5g6nd41u9hbNvAd_rrkFFDeOR1-N6Y7Bek3IB_UG4adap8sdJ07tqoY3LY4wd-uvymA7mL_lWR9wkfVm43hu5kE-Y7xKTOW1hooXKi-O5OxI3KsGsBzG7Pyseo-UwNaAFbs8YafDr6mCUFpl2HA8BjJcDsLSowqZ77uuF1yfxZO2dYWxRqnQ6v4d5AP9Z25Wa_B7WzlICrO3uTIJKaRzxzFMWcUAU1xM-qzk4YvVk_AKjbzzVr4rrh9XuMfQn0mO-yku76_TMrHGJ5RnhsJJOjYBOp6nXWcWiXZnGVnmInrxaH6Z7-KmVWm2FwD8juLgkIb2b6T3XHbMvHxW8MAQaADJfZZU96Gvli7_F8O5f_ZnmJhiIkry-T4wrroBD2VsDxOr3rktqLtseW-znykkjWFUxpkx5jgPOtcMpqZxyO8wCpo0QUZlENkkZar_LxhdNLi1PY70NnrZhbPt9PR5lfSd13yOdtH9R7gTLhvvR2AjkQYu0kIiN1tV8yCCfdfrQsdgnkxohdMCHclpXeNw3vr9NAwvK8Z4JCXfO_-J9uln1sysBNeGnnSE6fe37STF7_wXpE7vm5XW_4x9GfvoyvTGIf7yi0ouM7A3mZSEzYvzfx2aJbBZ8uLMCxtjlKw7DI_-oVf3kDZXv0rrpkwNSojNkqYnpM59tRoUMFaGFWHqE8ONgpwp9x2q3F33lFlCughWzGumgw64oIjTW3zEIvAuU4nEa8RfGMXiOvJjuQWm-Cr8CWtnJ_V9ou81toMCqz5dst6weD7b13Nkr_4K2s9LmcavKj2TZC-lbOIx5PpXo7vGsuTMCNRLoVuz-Nnz_RubJ1nqAqUj6gVayXkcVDSnmxKQ7fGMi8BEHCE0ZzHrWgIU6alV57x77JMM-6AjTmvB2mohmsCEoe4fldB6QM8Y9A=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"F-812"}
        />
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_HDC7ql62nhg8qKwLOzqiHIBe_scGChDrW5f5Hrsfap7rm3LkuT7N6OnkLpmhrRk5GZfTJaO5QQ-Ygz3cL582uT-TF4k1a87urSw1E0Li-Kc-NODVNfIT0LJOAGOVn9Ora-q5sUj7u1G9HnzxUBdicAU5k5FH7DSRxfGZlCPzhVHKmzyl2lCQ5IC1KBjT_A-vwPvUUosfoTXtRsGkObLFfqPyxSrQCfmoW8Nw8hy5dOZG2ariZw5y2buAF5t_Vh52PaAFEk6UgfUxe0QDbY1jfiTGP2b-o_jITGMv_qD6ONx2-wPA8B4DdkiVIV20Mi7fJZYCF62n8ZeviKyyndVANXWjoKOOFmtvBHBejQ8suQ-6R8GeIKY64-OlUPtGBU6xKCjlVHLMl3skZ0x-hBJ9uDThlbjQJEJl-KIK33lAf8YCwYEU34mc1n5JVFQWLmHFhvvHaQO77nZ9K9N4laH6iCiv9GHJ1Xv0BQiX1teplEB-7xIBApcq0Nd380pn7j71AD6XqwvlE8OFH8K0n46geQXY0ujRMbhONti1aakPDhGWRS8wpvDXrVbJ6u-Ng30WOiIQv01sqbBEvZtMMQ6-9GerSfpXkaD_vPZyF3p4r8F5O8byE8mqKeaNiDEdSvZb3qeITpY2c4XejCc3A9qOesegCvEYaVwUaa9tMleopl9sjvZnXRnQQB5o3pv4CzyL6fN9Om_FscHdDXz049XxTcd8aTacUUX2g3nPF3CL5GSP0ZRHxItR9Mq5hOlLFurHdVqyvWGvzT1YvvhhklNRKAcgfkXnFhWTbKMdUDwBWxrROlhVIDx5E1obBolRUfyS6T18j3RgYcspq79VUzwppp4154U8joZsd1LiSL3Thgw4Lgehx5LrkTXddJyV6fNE7j-x_kXRymphKiVT44SH3myQyja4USATjlXwNqyAeRsjSFBcsXT3nETfHOtW-rO_VxqcvZ79v6lIGcW6pn0V6zsXJXgoEpMkeG_wF9icxuga9WnyPf8Dx9kengLcuZY6fbOWcr5xJbhuDMzhesF4wXCezJqs-UHfMjTbblDpWVDf-sGw8bVPJudF1a2jEkCkl4zz5lDYv4loNsRZwSnc1KVoOJ9KdT-gOQfzOQppC80HnQWVYMVM5cp3nTFehQLY4thMbNyOP0AOlgkI5qzgcsH4gsn5RqKQDQqn0ISi6pF5SmhklXeBwuQm2iM7Bv6Glh3BPGlb8w03qY3DOlkquEW8TF1pdTC06Ct0a8LLnKI0hhoTvjgS1GqOmGzP5VhbMBfide1INJL127CVEhsuta2C64rd9pvf8U_X7ZK4d_3D6-mlD162ef_kTCmDk45URxGVqWma1nmBilBLBP2gNk2FLw4IC9XLtsOzFyudjX7MLyaBThThq7_1dddeywc1nZpxMUgbav_d1Uvv95Gdb3QwlrAnb7hKFQ2_Gr9b-5zjJl_IQQNNnqLE51n2QpijKHRmkJ05_kP2NwHwHhGIETkNN7T1jibtUo-nCv-bD0cUHqXgeswL_3LM3DiIZeSC0m4zvljFuib7fDfpTjyFhD5UUG7A--oj5yOxBGLkhjoNMxkOlQ2zHo4NIOnwTLIKgsM3ESU1Wc6MGUSXBnD30vrxfxkAjkYxyMrKpueWv3l7Sx2UACbw=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"P-Huayra"}
        />
        <MultiCard
          ImgLink={
            "https://lh3.googleusercontent.com/fife/ALs6j_E8N7-imFQ9wIBdYEFSU3Av9_7E99IFito0LJ9mW3YcvCF4clX7nmcGYJ98xaS1SU_3qr50UdoMpyLXrkbe2IHzwz_vRSqZB6KxARCPFPL5jx-utueZJLJDjeP6FmZpBd19HRqhz4hvxiJIdOQPAyLFc0XSW0Q47uvVD0fehkAvAT5K0xT673NbWEtT0hz2fZbsZWySuvrvj0coeQ5hHSTbO4m1o4MJhZwkbZQYbEvR8Pk78snCpICYsQ6cv_f17a8tIiNRiAnB_78GAv_xt_aR7_jrS1dBiaS6vag8-xRzlDe-REnHHc_3JGoPVapbobn7p61YoitTY9C-fJFoGslTWtELbxzaqoj3vY5mEW5h0DEIguVdLnmh7wP1Xile3vDICDe0FudB6A26w4dFKcwZdqydbFuEkhbK9nXHORXPjEEBi5fJ6mqF5EN0216q02IK-xv91fbFu_75jLvZraWmUIONJ_J7_yCUH0k_kIl8CA_fe6aWqZB59HQX-QtXolKK_X1dbz7U3TbCSDMWcJpVaY43Pfe_XLH_x5nCTQEQ-dBEOFkkXtkRoH8QN9WmF6AYRrYn-F5ZjmZT1Usj3WHJCd3L53iwtDtFloBstftOy2rZLXIJlrRgrG_7178xVtz-lZ0tg3svGXcjmF-jlsZkwlqRG-TpHI7mq16Dldj6gSW8ji82Do1cEQrqxtv7GMZcmkmxoqbL73hKeDr5qId9W9GcrgG7y4HjcbLQeGMtIqxJl2oGi7QuaCUgRzxb2I33ybJCLUN2Nm_b-C6MLOf8HFNHyihugqME01P1Rd653gSd1ENaKA-8-lQoPGu9u3Rrc6mBoBYN5ElNq3m_swrH-WQTD0mBPASbjRYGo7jb_9DKz-sQupvijfElQgrytSeEuBqCh929-Ujp9CFmnNaN2k-o3s5HNFCMGL_qhgCdMvQGBT4ukX339BIgtD5cy-oy-69YwCDHTLBd2aEQoNWrI9pe3Bkkdx3zJfMkVhQwRG1rZGyFeRtLVxxZBXOiYxE66H5PkK2edowDm7LGEE_VWE_NP6jEb49M_tTanvzC-s7hGTwaMTRU-Hlrb2Nr6d-3VnFIcJPRTllkOTEIAg9s4-MTl3TaUOZNky6Ru8i3dD_qzG6LNEH0u88Y94hJXNH3ranETqlxSrvTAjZg1GL_7LoUmvYh1mMHbqbV10mvwVVnkMb42xJjzn-nDA-cZDyoBp_OgCGdboqdNT_5psYsXri8jE6SNimwnhTylqSZa5uGJkjsuqc-3Ci-Qrbeukgt0Sc-Y7j3UxNDiny72C4XosITBrzcQakwUHlLli0guNJIuObLaHd-kR6LOmp8SKBdzA28-_nwGpLH5_KLf5UHp5FLlPHB_ZLDx1n3fXQBAbS3xzFQBLhGlCqhVlZEuGByqLxFXBL4G-HNNZ38OnFnKaCBR3AQ3ckZy4w9RsQTA23NHprJmACqxip1Mrw5TMoqmV6eeLX8HSZt-oA_CVUZYxGpLFSkS-vfHy3RWoYtdfkRt-5pFa9GzRv3Xjz5BC8x3cxcHy3RQdVgQxOwjDIfj31CB9twD7eGtn25Yx4elE8Psi5DaaubPrw20xoRXZf6X244sR7tEbCF88DqqzjDKYWiU9hozY8jtwZ02ADxIUhmUobaMw=w1344-h1584"
          }
          onClick={handleImageClick}
          model={"L-Huracan"}
        />
      </div>
      <div className="bg-red-50 h-24">
        <h2>Hyper</h2>
        <p>We have Served Over 1.5K+ Hyper Cars</p>
      </div>
    </>
  );
}

export default Hyper;
