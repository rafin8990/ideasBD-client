import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white text-center md:text-left px-20 pt-32 pb-2">
      <Container>
        <Link className="text-3xl cursor-pointer ">
          Bangladesh Journal of Multidisciplinary Scientific Research
        </Link>
        <div className=" md:flex  items-center">
          <div className="w-full flex flex-wrap justify-between  text-black mt-6">
            
            <Link className="hover:underline underline-offset-2   bg-green-100">
              Home
            </Link>
            <Link className="hover:underline underline-offset-2   bg-green-100">
              Home
            </Link>
            <Link className="hover:underline underline-offset-2   bg-green-100">
              Home
            </Link>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="text-white">
                Hover
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu mt-5  shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link>s</Link>
                </li>
                <li>
                  <Link>s</Link>
                </li>
                <li>
                  <Link>s</Link>
                </li>
              </ul>
            </div>
            <Link className="hover:underline underline-offset-2   bg-green-100">
              Home
            </Link>
            <Link className="hover:underline underline-offset-2   bg-green-100">
              Home
            </Link>
            <Link className="hover:underline underline-offset-2   bg-green-100">
              Home
            </Link>
            <Link className="hover:underline underline-offset-2   bg-green-100">
              Home
            </Link>
          </div>
          <div className="input-group-sm block mx-5">
            <input
              type="search"
              id="search"
              className=""
              name="Password"
              placeholder=""
            />
            <span className="btn btn-ghost absolute  rounded-3xl">
              kichu ekta
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
