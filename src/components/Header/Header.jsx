import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between sticky top-0 z-[999] bg-white items-center py-[1.5rem] px-4 md:px-10 shadow-sm">
        <div>
          <Link to="/">
            <img
              width={50}
              src="https://lh3.googleusercontent.com/fife/ALs6j_HgzdG4rA4_g_xugm2QdE1QNiJmyw5Q_TyZSmPTpsvJxBH2uG6qoUfUXaqrP6gMCRGcYhdy60ru8GgDtLs1bWbVJEcXgG0tdtzYgVQBC99Hnma6D4P2RB6m5j1UuUVqybgvJ09B1k7pPm3QduHv2a8r72tsJC9jrhDedcLB9DRoEhhx8dOUDlQ8RbEPiC7qvi53hLzvEXuqPxkE4BMLhuhxe4EVZkphMOWyAJ-c_vSklE4lGA2OuI9eKrU3KUEk4PoLeJ3sTzjvnYJoKFhYepgDfs1bI3EwTaQ-t-5KvzvQdySG-wRkKGYjq67hCu_LiCiR_7peTxD703GAzkgO1xjUhwSwZPyJcSBtJd78t4JvAQc-ZbqOGBQKF7HsrqTqer5nGVzA9AJhbltF0h6h64KfHK3-b4q4b4VSANQn3rw9atvYi8vJmaXK17jodZSD_sh0uNkA_gh-UlqHLHy0k5YhUGUKYieoBcWpzlSX95TeU8exus59mzvJaQaoqN8gpFNbRm-1lbeCpg4nOsy1qTdgxRxGqqFOIMzYahne8fisIk7OclbOnkxmdBw6fraPy8NYyuZVlM_NyGAYzk-NU5sq8rmKEk6uCp0bOn_fhjLc6G-fsn8FpqMgvXkPFXx4QZO3R-entUdqXZxyNtD7Tk11W_CfDKeQFq4Y2JNJmL-i7pKWsHhoa65zpMLspOVwjj-G0zPvkoXsjfqK3KOsC20bknc1HSWBH4ifQe9YRc0vPkh3aWhrKMEZtESEvGoHXH6woZOHclKR0WSKunfRbYY5zTv1t9ieWW_bl0GaZSpPXp7gLlKcUWdYvgSaU9OmrfW77TnDc1lTXRBpq5qKTEU9HafIgpe7gH3o5Wusec_N1V312mOvdBqFevoUuvKqUiPmkeczVro3AgyHqqLDEqLVqJaNnjcsvLsn-SQH8apQFV-Y0EGB_84otaKC3yTWKTdPFXZ5aEadd4vmHz_bAOEiq8Eu_W0XL-LzOCzcoJTdeEVDBd8Vq_Ns2Fg9r78j_2_xIp3gypi0vp00_FjDc24QPLzbXBAAjweqCGv8x-RpcHs42b7zwy-jMdwL3EV-VdHMvesrZU74eg2NVAKUv0sqMuFSSupgXMut-Sg2GPPSQDMZW6guBIVstUCzJlturo9gkvMJxvzHGfUH845vi1tDkt8o8pbDWjknOsSgH4TxPvtaTVeX8DSSmbMLS69d1pvfQnLS3sFu8I9zimBPyseEWq_PKcCqqsYsQJ6Q7Q94wniJJcvWaA4a_v361K3_UvcrD9KjfYXU4fxJ7HJdwj0VtUm_mbT1rL9WMZqVvbJf0Z-NjRcassaIn59nYcOBBwFKVBlxAUoXd_b0Bzsw93a9_jTh04sfCf-h4_TH9j_vMkw1oatrclH_FnJ-vRVZSnbHkAKzUjnkjUo3_LeXGw2CZByOyXhUBwr61pXHVcqo9hx_UtAWofYqTZg2pSTxL0L4gKv_re_sBAJJJQPisvaB2LrVP6D1zKR8J_9tmRFkuqn28xXWYibuLJFrIZ5D6wSNI2qQtgIG00sS7rjN8UtkHM3R-MqJgSLkhbI1A0q63DLTNurzz1YyNuITL74FhGI3Qzov1cisa2UBNfcoDvKyr0UCEhALfiDf-9Qdz4WKZz_emMqEIg=w732-h548-p-k-nu"
              alt="Logo"
            />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-8 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-red-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } hover:text-red-500`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-red-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } transition-all hover:text-red-500`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-red-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } transition-all hover:text-red-500`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <img
            id="hamburger"
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/dc2626/menu--v1.png"
            alt="menu--v1"
          />
        </div>
        <div className="hidden md:flex gap-6">
          <button className="text-red-600 text-md font-medium">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-red-600 text-white px-[1.8rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-red-200">
            <Link to="signup">Signup</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
