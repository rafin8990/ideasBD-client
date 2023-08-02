import React from "react";
import CurrentIssue from "./CurrentIssue";
import AboutTheJournal from "./RightLinksContent/AboutTheJournal";
import CallforPapers from "./CallforPapers";
import Volume8 from "../../Volume8/Volume8";
import EditorInChief from "../../../Extra/EditorInChief";
import ImageSlider from "./ImageSlider";

const Content = () => {
  return (
    <div className="max-w-[1500px] mx-auto  w-full md:text-left">
      <div className="lg:flex">
        <div className="border">
          <div className="">
            <img
              className="w-full"
              src="https://i.ibb.co/bB7hnw9/2214748543-086756b2a7-o.jpg"
              alt=""
            />
            <img src="https://i.ibb.co/W20NzQs/5D-48370.jpg" alt="" />
          </div>
          <CallforPapers></CallforPapers>
          <EditorInChief></EditorInChief>
          <div className="my-5">
            <h1 className="text-4xl font text-center  my-10">Current Issue</h1>
            <p className="text-center">--------------</p>
            <Volume8></Volume8>
            <div>
              <h1 className="text-4xl font  font-bold text-center my-20">
                IDEAS VOLUMES
              </h1>
              <ImageSlider></ImageSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
