import React from "react";
import RightLinks from "../RightLinks";
import { Link } from "react-router-dom";

const AimsAndScopes = () => {
  return (
    <div>
      <div>
        <div className="lg:flex justify-center max-w-[1500px] mx-auto  w-full md:text-left ">
          <div className="lg:w-[60%] border px-10 py-10">
            {/* content */}
            <div className="h-full mt-10">
              <h3 className="text-3xl">AIMS AND SCOPE</h3>
              <p className="font-bold">Journal Aims</p>
              <p>
                Bangladesh Journal of Multidisciplinary Scientific Research is a
                refereed international journal. The journal aims to publish
                papers that provide current issues within Multidisciplinary
                Scientific Research in Asia, including Central Asia, East Asia,
                South Asia, Southeast Asia, the Middle East/Africa, and other
                regions like the Americas, Europe, etc.
              </p>

              <p>
                Journal Scope <br />
                The journal publishes in the following areas of research: ​
              </p>

              <ol className="list-decimal">
                <li>
                  Business, Accounting & Finance, Economics, Management,
                  Marketing
                </li>

                <li>
                  Education and Linguistics, Humanities, Arts and Social Science
                </li>

                <li>
                  Materials Science, Physical Sciences, Sciences and Engineering
                </li>

                <li>Biology and Life Sciences</li>

                <li>Mathematics & Statistics</li>

                <li>Transportation & Logistics</li>

                <li>Engineering & Technology</li>

                <li>Electrical & Computer Science</li>

                <li>Earth, Energy & Environment</li>

                <li>Architecture & Civil Engineering</li>

                <li>Medicine, Health & Food Sciences</li>

                <li>Chemistry & Chemical Engineering.</li>
              </ol>
            </div>
          </div>
          {/* links */}
          <div className="lg:w-1/3">
            <RightLinks></RightLinks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AimsAndScopes;
