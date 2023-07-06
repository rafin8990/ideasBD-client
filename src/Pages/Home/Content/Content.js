import React from "react";
import RightLinks from "./RightLinks";
import CallforPapers from "./CallforPapers";
import Articles from "./Articles";
import CurrentIssue from "./CurrentIssue";
import MoreDetails from "./MoreDetails";
import AboutTheJournal from "./RightLinksContent/AboutTheJournal";

const Content = () => {
  return (
    <div className="max-w-[1500px] mx-auto  w-full md:text-left">
      <div className="lg:flex">
        <div className="border">
          <img src="https://i.ibb.co/W20NzQs/5D-48370.jpg" alt="" />

          <CallforPapers></CallforPapers>
          <CurrentIssue></CurrentIssue> 
          <AboutTheJournal></AboutTheJournal>
          <Articles></Articles>
          <MoreDetails></MoreDetails>
        </div>



        <div>
        </div>
      </div>
    </div>
  );
};

export default Content;
