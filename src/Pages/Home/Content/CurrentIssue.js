import React from "react";
import { Link } from "react-router-dom";

const CurrentIssue = () => {
  return (
    <div className="border  text-center">
      <h3 className="text-3xl font-semibold mt-20">Current Issue</h3>
      <p className="font-bold text-lg mt-4">
        ----Vol 7 No 1 (2023): January-June----
      </p>

      <div className="sm:flex justify-center  mt-5">
        <div className="card lg:card-side  md:w-[600px] lg:w-[700px] ">
          <img className="w-[75%] mx-auto" src="https://i.ibb.co/T2pw6kx/Untitled-design-1.png" alt="" />
          <div className="text-left mx-5 mt-5 leading-10">
            <p className="font-bold">General information of BHMSR</p>
            <p className="font-bold">Editor-in-Cheif : <Link className="font-light text-lg btn-link hover:text-indigo-300">ekta bedar nam</Link> </p>
            <p className="font-bold">ISSN : <span className="font-light text-lg">2687-850X (Print) ; ISSN: 2687-8518 (Online)</span></p>
            <p className="font-bold">Frequency : <span className="font-light text-lg">Continuous Publication</span></p>
            <p className="font-bold">Copy Right & Licensing :</p> 
            <p className="font-bold">DOI Prefix: <span className="font-light text-lg"> 10.46281/bjmsr</span></p> 
            <p className="font-bold">Model : <span className="font-light text-lg">Open Access (OA); </span></p>
            <p className="font-bold">Review Process : <span className="font-light text-lg">Double-Blind</span></p>
          </div>
        </div>
      </div>
      <p className="font-bold mt-20"> Published: <span className="font-light text-lg"> 2023-04-11</span></p>
    </div>
  );
};

export default CurrentIssue;
