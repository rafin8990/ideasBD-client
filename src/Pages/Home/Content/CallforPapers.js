import React from "react";
import { Link } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { FaGreaterThan } from "react-icons/fa";
const CallforPapers = () => {
  return (
    <div className="lg:w-[60%] border px-10 py-10">
      <Link className="font-bold text-lg btn-link hover:text-indigo-400">
        Call for papers
      </Link>
      <p className="flex items-center gap-3 mt-2">
        <CgCalendarDates className="text-2xl"></CgCalendarDates> 2020-06-11
      </p>
      <p className="mt-8 text-lg  leading-8">
        We are calling for the submission of papers for the issue. Published
        Papers (2023): This Issue is now open for submissions. The journal
        accepts article submissions online or by e-mail (info.bjmsr@cribfb.com).
        It would be appreciated if you could share this information with your
        colleagues and associates. <br />
        <Link className="btn-link flex items-center gap-4">
          Read More <FaGreaterThan></FaGreaterThan>{" "}
        </Link>
      </p>
    </div>
  );
};

export default CallforPapers;
