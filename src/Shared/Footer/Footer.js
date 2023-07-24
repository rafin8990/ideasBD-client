import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <div className="">
          <img
            className="h-60"
            src="https://i.ibb.co/6Hc6Q03/20230708-132718-0000.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <p>Email: ideas.bangladesh@gmail.com</p>
        <p>Cell No of Ideas: +8801878677729</p>
        <p>Editor-in-chief</p>
        <p>Associate Editor</p>
        <p>Executive Editor</p>
        <p>Assistant Editor </p>
      </div>
      <div>
        <span className="footer-title">Correspondence</span>
        <p className="">
          <span className=" link link-hover">
            <Link to="https://rb.gy/c51nr">
              IDEAS FACEBOOK GROUP
              <FaFacebook></FaFacebook>
            </Link>
          </span>
        </p>
        <p className="">
          <span className=" link link-hover">
            <Link to="https://www.facebook.com/ideas.researchjournal">
              IDEAS FACEBOOK PAGE
              <FaFacebook></FaFacebook>
            </Link>
          </span>
          <p className="link link-hover mt-2">
          </p>
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
  );
};

export default Footer;
