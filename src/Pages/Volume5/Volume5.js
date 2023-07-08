import React from "react";
import AdvisoryBoard from "../../Extra/AdvisoryBoard";
import volume5 from "../../Assets/Ideas Journal Vol-5, 2019-2020 Final.pdf";

const Volume5 = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="w-1/2"
          src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/354447173_10230262760062920_8852127068966787165_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFf1tIV8K8z5vWTiJvPclKHnLzzG9S0LUycvPMb1LQtTMTSstAykgNfidyc9Wx5r_nQkOUlJhZUdsfUFerb5ujn&_nc_ohc=NKBWzEkwDtgAX8Q6sQF&_nc_ht=scontent.fdac8-1.fna&oh=00_AfCgaOyE71R9_G0qp0WTN3pvBqbPrisNuZoO6GF4CuTiDw&oe=64AD67B9"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl font text-center mt-5 font-bold">
          IDEAS
        </h1>
        <h3 className="text-2xl text-center font">
          A Journal of Literature Arts and Culture <br />
          Volume 5 <br />
          2019-2020 <br />
          ISSN 2413-1814
        </h3>
      </div>
      <div className="text-center mt-5">
        <div>
          <h1 className="text-4xl underline font">Editor in chief</h1>
          <h3 className="text-xl">Professor Mustafizur Rahman</h3>
          <p>
            Editor in chief, Ideas <br /> Institute of Advance studies <br />{" "}
            264, Elephant Road, Dhaka <br /> cell:+8801878677729
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
        <a href={volume5} download="Ideas Journal Vol-5, 2019-2020 Final.pdf">
          {" "}
          <button className="mt-5 btn bg-[#800000] text-white hover:bg-[#800000]">
            Download full Volume in PDF
          </button>
        </a>
      </div>
    </div>
  );
};

export default Volume5;
