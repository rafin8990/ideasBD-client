import React from "react";
import RightLinks from "./RightLinks";
import CallforPapers from "./CallforPapers";
import CurrentIssue from "../CurrentIssue";

const Content = () => {
  return (
    <div className="max-w-[1500px] mx-auto  w-full md:text-left   ">
      <div className="lg:flex">
        <div className="border">
          <img src="https://i.ibb.co/Vq9qLfQ/Untitled-design.png" alt="" />
          <CallforPapers></CallforPapers>
          <CurrentIssue></CurrentIssue>
        </div>



        <div>
          <RightLinks></RightLinks>
        </div>
      </div>
    </div>
  );
};

export default Content;
