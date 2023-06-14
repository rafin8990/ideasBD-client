import React from "react";

const CurrentIssue = () => {
  return (
    <div className="border text-center">
      <h3 className="text-3xl font-semibold mt-20">Current Issue</h3>
      <p className="font-bold text-lg mt-4">
        ----Vol 7 No 1 (2023): January-June----
      </p>

      <div className="flex justify-center mt-5">
        <div className="card card-side  md:w-[600px] lg:w-[700px]">
          <img src="https://i.ibb.co/T2pw6kx/Untitled-design-1.png" alt="" />
          <div className="text-left mx-5 mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentIssue;
