import React from "react";
import volume7 from "../../Assets/Ideas Journal Vol-7 Final.pdf";
import AdvisoryBoard from "../../Extra/AdvisoryBoard";

const Volume7 = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="w-1/2"
          src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/355150214_10230262756942842_6242528912708560722_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEv4xGDlu5zAoU8qcC29nwKsdjSB4NWxa6x2NIHg1bFrpEtKEOrpaoXzzv9-7Vdgq6F55u4BQLxbTzYGbb1-UjJ&_nc_ohc=D4JpQ7FuSuwAX-rtH_8&_nc_oc=AQnibkvC7jC25K5fALAHtfrsH35sW8EsSZEYsgT9wIIp-XVavEB4lKLuGrqRme7iDx4&_nc_ht=scontent.fdac8-1.fna&oh=00_AfCfzVq5APvgDhyN22D3BpU1znb_WysU5lDiaiNR5ZBTvw&oe=64AD29DB"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl font text-center mt-5 font-bold">
          IDEAS
        </h1>
        <h3 className="text-2xl text-center font">
          A Journal of Literature Arts and Culture <br />
          Volume 7 <br />
          2021-2022 <br />
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
        <a href={volume7} download="Ideas Journal Vol-7 Final.pdf">
          {" "}
          <button className="mt-5 btn bg-[#800000] text-white hover:bg-[#800000]">
            Download full Volume in PDF
          </button>
        </a>
      </div>
    </div>
  );
};

export default Volume7;
