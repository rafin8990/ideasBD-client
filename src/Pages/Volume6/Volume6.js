import React from "react";
import AdvisoryBoard from "../../Extra/AdvisoryBoard";
import volume6 from "../../Assets/Ideas Journal Vol-6.pdf";

const Volume6 = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="w-1/2"
          src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/354251927_10230262755542807_3009341835520417302_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEstWXrs7K18KKiv4OO_a8VzvzlhlyGcoTO_OWGXIZyhA3QLPT7TDEadV6fF2HT64mCrrktmDS1Z78H-38BmcTh&_nc_ohc=4XDhuTRCoFEAX8jAtw7&_nc_ht=scontent.fdac8-1.fna&oh=00_AfC0d2kfo6BBWkODdInIx1GYrgqswY7lsh6AqU-8I2JnyQ&oe=64AD4A79"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl font text-center mt-5 font-bold">
          IDEAS
        </h1>
        <h3 className="text-2xl text-center font">
          A Journal of Literature Arts and Culture <br />
          Volume 6 <br />
          2020-2021 <br />
          ISSN 2413-1814
        </h3>
      </div>
      <div className="text-center mt-5">
        <div>
          <h1 className="text-4xl underline font">Editor in chief</h1>
          <h3 className="text-xl">Professor Mustafizur Rahman</h3>
          <p>
            Professor of English, and <br /> Pro-Vice-Chancellor <br /> City
            University, Bangladesh <br /> cell:+8801878677729
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-4xl underline font">Associate Editor</h1>
          <h3 className="text-xl">Dr. Rahman M. Mahbub</h3>
          <p>
            Associate Professor & Head <br /> Department of Englis <br /> City
            University <br /> Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div>
        <AdvisoryBoard></AdvisoryBoard>
      </div>
      <div className="flex justify-center my-10">
        <a href={volume6} download="Ideas Journal Vol-6.pdf">
          {" "}
          <button className="mt-5 btn bg-[#800000] text-white hover:bg-[#800000]">
            Download full Volume in PDF
          </button>
        </a>
      </div>
    </div>
  );
};

export default Volume6;
