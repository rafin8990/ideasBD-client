import React from "react";
import { Link } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
const CallforPapers = () => {
  return (
    <div className="border px-10 py-10">
      <Link className="font-bold text-lg btn-link hover:text-indigo-400">
        Call for papers
      </Link>
      <p className="flex items-center gap-3 mt-2">
        <CgCalendarDates className="text-2xl"></CgCalendarDates> 2023-2024
      </p>
      <p className="text-xl">ISSN 2413-1814</p>
      <p className="mt-8 text-lg  leading-8">
        Ideas: A Journal of Literature Arts and Culture is an international
        double blind peer-reviewed journal committed to publishing high quality
        papers on a wide range of topics. It is a platform for sharing ideas
        among teachers, researchers and scholars. It accepts contributions of
        scholars from home and abroad. <br />
      </p>
      <p>
        The Editorial team of IDEAS would like to invite papers from scholars
        for its ninth issue in 2023 -2024 (will be published in September 2023).
        The focus of the journal includes but not limited to
      </p>
      <li className="text-xl">Literature</li>
      <li className="text-xl">Language</li>
      <li className="text-xl">Arts</li>
      <li className="text-xl">Culture</li>
      <li className="text-xl">Music</li>
      <li className="text-xl">Paintings</li>
      <li className="text-xl">Social Issues</li>
      <li className="text-xl">Human Studies, etc.</li>
      <p className="mt-2">
        Human Studies, etc.  Deadline for manuscript submission: 10 March,
        2023.  Write-ups submitted elsewhere must not be submitted.  Authors
        must guard against PLAGIARISM (will be checked through Review Software:
        turnitin). Plagiarized writing would result in barring that particular
        author from submitting any article in subsequent issues.
      </p>
      <p className="text-xl font-bold">Review Process:</p>
      <p>
        All articles will go through a double blind peer review process. The
        editorial board will take final decision regarding acceptance or
        rejection
      </p>
      <p className="text-xl font-bold">Educational Board:</p>
      <p>
        The editorial board of Ideas consists of renowned foreign scholars along
        with distinguished intellectuals and academicians from ho
      </p>
      <p className="text-xl font-bold">Benefits for author:</p>
      <p>
        Authors of the published papers will receive one specimen.The journal
        will be published as hard copy and be available online on the :{" "}
      </p>
      <p>
        {" "}
        https://deparment-of-english-city-university-bd.vercel.app/ideas &
        https://juniv.academia.edu/IDEASAJournalofLiteratureArtsandCult
        ureAResearchJournaloftheInstituteofAdvancedStudies
      </p>
      <div className="md:flex justify-between mt-5">
        <div>
          <h1 className="text-4xl underline font">Editor in chief</h1>
          <h3 className="text-xl">Professor Mustafizur Rahman</h3>
          <p>
            Editor in chief, Ideas <br /> Institute of Advance studies <br />{" "}
            264, Elephant Road, Dhaka <br /> cell:+8801878677729
          </p>
        </div>
        <div>
          <h1 className="text-4xl underline font">Associate Editor</h1>
          <h3 className="text-xl">Dr. Rahman M. Mahbub</h3>
          <p>
            Associate Professor & Head <br /> Department of Englis <br /> City
            University <br /> Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallforPapers;
