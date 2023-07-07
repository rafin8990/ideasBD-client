import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* img  */}
      <div className="bg-[#800000] text-white text-left sm:text-center max-w- mx-auto md:text-left  md:px-20 pt-10 lg:py-20 pb-2 flex">
        <img
          className="h-16 ms-10 lg:h-32 mr-10 lg:mr-0"
          src="https://i.ibb.co/Fq9bGw3/355053833-273800408518610-3244941835535842613-n.jpg"
          alt=""
        />
        <div className="max-w-[1500px]  lg:text-center mx-auto">
          <Link className=" font-semibold  cursor-pointer">
            <p className="text-3xl lg:text-7xl font">I D E A S</p>
            <p className="lg:text-3xl font">
              International Journal of Literature Arts Science And Culture
            </p>
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="lg:ms-10 mr-10 w-full text-center flex items-center mb-10">
        <div className="lg:flex items-center uppercase max-w-[1500px] mx-auto">
          <div className="w-full  grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7  mt-6 gap-4">
            <Link className="hover:underline underline-offset-2 w-full nav_button ">
              Ideas
            </Link>

            <Link className="hover:underline underline-offset-2 nav_button">
              Institute of advance studies
            </Link>
            {/* Rahman M Mahbub start  */}
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="text-white cursor-pointer w-full h-full nav_button"
              >
                Rahman M. Mahbub
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu mt-5 text-black shadow bg-white  rounded-box w-52 "
              >
                <li>
                  <Link
                    to="/profile"
                    className="hover:underline underline-offset-2 nav_button mt-2 ml-2"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research"
                    className="hover:underline underline-offset-2 nav_button mt-2 ml-2 "
                  >
                    Research & Publication
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline underline-offset-2 nav_button mt-2 ml-2 "
                    to="/books"
                  >
                    Books
                  </Link>
                </li>
              </ul>
            </div>
            {/* End of the Section  */}

            {/* start new  */}
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="text-white cursor-pointer w-full h-full nav_button"
              >
                Volume
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu mt-5 text-black shadow bg-white  rounded-box w-52 "
              >
                <li>
                  <Link
                    to="/volume5"
                    className="hover:underline underline-offset-2 nav_button mt-2"
                  >
                    Vol.5
                  </Link>
                </li>
                <li>
                  <Link
                    to="/volume6"
                    className="hover:underline underline-offset-2 nav_button mt-2 "
                  >
                    Vol.6
                  </Link>
                </li>
                <li>
                  <Link
                    to="/volume7"
                    className="hover:underline underline-offset-2 nav_button mt-2"
                  >
                    Vol.7
                  </Link>
                </li>
                <li>
                  <Link
                    to="/volume8"
                    className="hover:underline underline-offset-2 nav_button mt-2"
                  >
                    Vol.8
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="text-white cursor-pointer w-full h-full nav_button"
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
                    className="hover:underline underline-offset-2 nav_button mt-2 "
                  >
                    login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:underline underline-offset-2 nav_button mt-2 "
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://deparment-of-english-city-university-bd.vercel.app/"
                    className="hover:underline underline-offset-2 nav_button mt-2 "
                  >
                    About The Journal
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
