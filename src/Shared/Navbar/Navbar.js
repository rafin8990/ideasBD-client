import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* img  */}
      <div className="bg-[#2804F9] text-white text-left sm:text-center max-w-[1500px] mx-auto md:text-left  md:px-20 pt-10 lg:pt-32 pb-2 flex">
        <img
          className="h-16 ms-10 lg:h-32 "
          src="https://i.ibb.co/Fq9bGw3/355053833-273800408518610-3244941835535842613-n.jpg"
          alt=""
        />
        <div className="max-w-[1500px]  lg:text-center mx-auto">
          <Link className=" font-semibold  cursor-pointer">
            <p className="text-3xl lg:text-5xl">I D E A S</p>
            <p className="lg:text-3xl">
              International Journal of Arts Science And Culture
            </p>
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="lg:ms-10 mr-10 w-full text-center flex items-center">
        <div className="lg:flex items-center uppercase max-w-[1500px] mx-auto">
          <div className="w-full  grid  grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7  mt-6 gap-4">
            <Link className="hover:underline underline-offset-2 w-full nav_button ">
              Ideas
            </Link>

            <Link className="hover:underline underline-offset-2 nav_button">
              Institutions of advance studies
            </Link>
            <Link
              to={
                "https://deparment-of-english-city-university-bd.vercel.app/ideas"
              }
              className="hover:underline underline-offset-2  nav_button"
            >
              Rahman M. Mahbub
            </Link>
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="text-white cursor-pointer w-full nav_button"
              >
                Submission
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu mt-5 text-black shadow bg-white  rounded-box w-52 "
              >
                <li>
                  <Link
                    to="/login"
                    className="hover:underline underline-offset-2 w-full "
                  >
                    login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:underline underline-offset-2 w-full "
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-2">
                    {" "}
                    About The Journal{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* 
<a href="#_" class="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
Button Text
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</a>
 
 */
