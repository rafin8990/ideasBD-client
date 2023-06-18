import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#2804F9] text-white text-left sm:text-center w-full md:text-left px-10 md:px-20 pt-32 pb-2">
      <div className="max-w-[1500px] mx-auto">
      <Link className="text-3xl cursor-pointer">
          Bangladesh Journal of Multidisciplinary Scientific Research
        </Link>
        <div className=" lg:flex items-center uppercase w-full">
          <div className="w-full  grid  grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7  mt-6 gap-4">
            <Link 
            className="hover:underline underline-offset-2 w-full">Home</Link>
            
            <Link 
            to='/login'  
            className="hover:underline underline-offset-2 w-full">login</Link>
            
            <Link 
            to='/register' 
            className="hover:underline underline-offset-2 w-full">Register</Link>
            
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="text-white cursor-pointer w-full">Browse Journal</label>
                <ul
                tabIndex={0}
                className="dropdown-content menu mt-5 text-black shadow bg-white  rounded-box w-52">
                <li> <Link> s </Link> </li>
                <li> <Link> s </Link> </li>
              </ul>
            </div>
            <Link className="hover:underline underline-offset-2 w-full">Submission</Link>
            <Link className="hover:underline underline-offset-2 w-full">editorial teams</Link>
            <Link to={'https://deparment-of-english-city-university-bd.vercel.app/ideas'} className="hover:underline underline-offset-2 w-full">Ideas</Link>
          </div>
        {/*   <div className="input-group-sm  mx-5 mt-5 text-center">
            <input
              type="search"
              id="search"
              className=" w-full"/>
            <button className=" lg:absolute lg:ms-4 w-full lg:w-0 mx-auto hover:underline">
              search
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
