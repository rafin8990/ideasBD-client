import React from "react";
import RightLinks from "../Home/Content/RightLinks";
import { Link } from "react-router-dom";
import SubmissionTabs from "./SubmissionTabs";
import SideDrawer from "./SideDrawer";

const Submission = () => {
  return (
    <div className="lg:flex justify-center max-w-[1500px] mx-auto  w-full md:text-left ">
      <div>
      
      <SideDrawer></SideDrawer>
      </div>
      {/* content here */}
      <div className="w-full border bg-gray-200">
      <p className="text-xl px-10 py-10 bg-gray-200 font-bold ">Submissions</p>
        <SubmissionTabs></SubmissionTabs>
      </div>
    </div>
  );
};

export default Submission;
