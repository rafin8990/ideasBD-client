import { Link } from "react-router-dom";

const RightLinks = () => {
  return (
    <div className="uppercase text-center mb-20  gap-6 flex px-10 mt-20  flex-col items-center w-full text-white">
      <Link
        to="/aboutthejournal"
        className="w-full lg:w-60  bg-[#800000] px-6 py-3"
      >
        About the journal
      </Link>
      <Link
        to="/aimsandscopes"
        className="w-full lg:w-60  bg-[#800000] px-6 py-3"
      >
        Aims And Scopes
      </Link>
      <Link
        to="/reviewprocess"
        className="w-full lg:w-60  bg-[#800000] px-6 py-3"
      >
        Peer-Review Process
      </Link>
    </div>
  );
};

export default RightLinks;
