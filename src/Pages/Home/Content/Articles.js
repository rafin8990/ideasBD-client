import React from "react";
import { Link } from "react-router-dom";
import { BsFilePdf } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";


const Articles = () => {
  return (
    <div className="text-left mt-12 leading-8">
      <p className="text-center mt-12 italic font-light text-lg">
        ----Original Articles/Review Articles/Case Reports/Short
        Communications----
      </p>
      <div className="lg:w-[80%] mt-10 ms-2 sm:ms-5 md:ms-10 lg:ms-20">
        <Link className="btn-link font-semibold">
          THE MANAGEMENT FUNCTIONS ARE THE RIBS OF SUCCESSFUL ENTREPRENEURSHIP:
          A STUDY ON ENTREPRENEURS IN BANGLADESH
        </Link>
        <p className="font-light text-xl">person name</p>
        <button
          className="w-20 h-10 border border-blue-400 mt-2 rounded-md
        flex items-center gap-2 px-3 hover:bg-blue-500 hover:text-white "
        >
          <BsFilePdf></BsFilePdf> PDF
        </button>
      </div>
      <div className="lg:w-[80%] mt-10 ms-2 sm:ms-5 md:ms-10 lg:ms-20">
        <Link className="btn-link font-semibold">
          THE MANAGEMENT FUNCTIONS ARE THE RIBS OF SUCCESSFUL ENTREPRENEURSHIP:
          A STUDY ON ENTREPRENEURS IN BANGLADESH
        </Link>
        <p className="font-light text-xl">person name</p>
        <button
          className="w-20 h-10 border border-blue-400 mt-2 rounded-md
        flex items-center gap-2 px-3 hover:bg-blue-500 hover:text-white "
        >
          <BsFilePdf></BsFilePdf> PDF
        </button>
      </div>

      <div className="mt-10 mb-10">
        <Link className="btn-link lg:ms-20  flex items-center gap-2 text-xl font-semibold ">View All Issue <FaGreaterThan></FaGreaterThan> </Link>
      </div>
    </div>
  );
};

export default Articles;
