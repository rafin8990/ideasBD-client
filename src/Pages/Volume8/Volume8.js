import React from "react";
import AdvisoryBoard from "../../Extra/AdvisoryBoard";
import volume8 from "../../Assets/IDEAS Vol. 8 Full version.pdf";

const Volume8 = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="w-1/2"
          src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/354243089_10230262754382778_4037206634992601272_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFguHx6T80FZRiwtl3VjndNkChgosuvxWqQKGCiy6_FakICnXIt8VgvURM1BhgzDi23Bs073D3L-86oLmwt6V5w&_nc_ohc=GTC5Y6ygN7YAX-wUMkc&_nc_ht=scontent.fdac8-1.fna&oh=00_AfBt6V2GdNTI_JEN5NYBsXaqrAogGiw-XdUqUif8rpbz6A&oe=64AE462D"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl font text-center mt-5 font-bold">
          IDEAS
        </h1>
        <h3 className="text-2xl text-center font">
          A Journal of Literature Arts and Culture <br />
          Volume 8 <br />
          2022-2023 <br />
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
      <div>
        <h1 className="text-4xl font-bold font text-center underline">
          Assistant Editor
        </h1>
        <h3 className="text-2xl font-bold text-center">Dr. K. Sankar</h3>
        <p className="text-center">Assistant Professor</p>
        <p className="text-center">N.G.P. Arts and Science College</p>
        <p className="text-center">Coimbatore, TN, India</p>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-bold text-center">Md. Mehidi Hassan</h3>
        <p className="text-center">Assistant Professor</p>
        <p className="text-center">GED</p>
        <p className="text-center">City University , Bangladesh</p>
      </div>
      <div className="flex justify-center my-10">
        <a href={volume8} download="IDEAS Vol. 8 Full version.pdf">
          {" "}
          <button className="mt-5 btn bg-[#800000] text-white hover:bg-[#800000]">
            Download full Volume in PDF
          </button>
        </a>
      </div>
    </div>
  );
};

export default Volume8;
