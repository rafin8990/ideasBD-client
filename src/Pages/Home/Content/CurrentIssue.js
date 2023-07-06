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
          <img className="w-[75%] mx-auto" src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/307701104_104601192442484_5954819400782476445_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeF8z9fl_iNkweCVewHuxpauz1UcZPZFRMfPVRxk9kVEx-HEasoj__GYFSmR7RiXZM6u1A2HikStUpGi23SO7NF4&_nc_ohc=BEYkalwl8sIAX9D52fK&_nc_ht=scontent.fdac8-1.fna&oh=00_AfAGG5-hCwjtMm-NZh0ztzHlCi5s0QunIeV2vJ9BJFvEqg&oe=64A9C099" alt="" />
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
