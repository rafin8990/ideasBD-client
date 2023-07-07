import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <div className="">
            <img
              className="h-60"
              src="https://i.ibb.co/ZzLBBrL/Studio-prev-ui.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <p>Email: ideas.bangladesh@gmail.com</p>
          <p>Cell No of Ideas: +8801878677729</p>
        </div>
        <div>
          <span className="footer-title">Correspondence</span>
          <p className="">
            <span className="text-xl link link-hover">
              <Link to="https://rb.gy/c51nr">IDEAS FACEBOOK GROUP</Link>
            </span>
          </p>
          <Link>
            <p className="link link-hover">Academia ID: Academia.edu</p>
          </Link>
        </div>
        <div>
          <span className="footer-title">Rahman M Mahbub</span>
          <p className="text-4xl">
            <Link to="https://rb.gy/7duec">
              <FaFacebook></FaFacebook>
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
