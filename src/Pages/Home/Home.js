import React from "react";
import Content from "./Content/Content";
import RightLinks from "./Content/RightLinks";

const Home = () => {
  return (
    <div>
      <div className="md:flex justify-center max-w-[1500px] mx-auto  w-full md:text-left ">
        <div className="md:w-2/3">
          <Content></Content>
        </div>
        
        <div className="md:w-1/3">
          <RightLinks></RightLinks>
        </div>
      </div>
    </div>
  );
};

export default Home;
