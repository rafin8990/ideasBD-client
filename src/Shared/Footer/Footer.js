import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto">
      <footer className="footer pt-40  p-10 bg-base-200  text-base-content flex flex-col justify-center items-center text-left">
        <div>
          <div className="flex ">
            <img
              className="h-12 "
              src="https://i.ibb.co/2PZYvD4/image.png"
              alt=""
            />
            <p className="font-bold text-lg  ">
              CRIBFB is licensed under a Creative Commons Attribution 4.0
              International License.
            </p>
          </div>
          <p className="w-[80%] italic ">
            To make sure that you can receive messages from us, please add the
            <a className="text-blue-500" href="'https://www.cribfb.com'">
              {" "}
              'https://www.cribfb.com'
            </a>{" "}
            domain to your e-mail 'safe list'. If you do not receive e-mail in
            your 'inbox', check your 'bulk mail' or 'junk mail' folders.
          </p>
        </div>

        <div className="lg:w-[1000px] flex justify-end lg:pr-20">
            <img
              className="h-60"
              src="https://i.ibb.co/zNfXcSZ/Platform-workflow-by-OJSPKP.png"
              alt=""/>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
