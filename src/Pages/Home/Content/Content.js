import React from "react";
import CurrentIssue from "./CurrentIssue";
import AboutTheJournal from "./RightLinksContent/AboutTheJournal";
import CallforPapers from "./CallforPapers";

const Content = () => {
  return (
    <div className="max-w-[1500px] mx-auto  w-full md:text-left">
      <div className="lg:flex">
        <div className="border">
          <img src="https://i.ibb.co/W20NzQs/5D-48370.jpg" alt="" />
          <CallforPapers></CallforPapers>
          <CurrentIssue></CurrentIssue>
          <AboutTheJournal></AboutTheJournal>
        </div>
      </div>
    </div>
  );
};

export default Content;
