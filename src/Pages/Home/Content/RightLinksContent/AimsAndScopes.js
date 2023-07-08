import React from "react";
import RightLinks from "../RightLinks";
import { Link } from "react-router-dom";

const AimsAndScopes = () => {
  return (
    <div>
      <div>
        <div className="lg:flex justify-center max-w-[1500px] mx-auto  w-full md:text-left ">
          <div className="lg:w-[60%] border px-10 py-10">
            {/* content */}
            <div className="h-full mt-10">
              <h3 className="text-3xl">AIMS AND SCOPE</h3>
            </div>
          </div>
          {/* links */}
          <div className="lg:w-1/3">
            <RightLinks></RightLinks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AimsAndScopes;
