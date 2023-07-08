import React from "react";
import RightLinks from "../RightLinks";
import { Link } from "react-router-dom";

const Reviewprocess = () => {
  return (
    <div>
      <div>
        <div className="lg:flex justify-center max-w-[1500px] mx-auto  w-full md:text-left ">
          <div className="lg:w-[60%] border px-10 py-10">
            {/* content */}
            <div className="h-full mt-10">
              <h3 className="text-3xl">PEER-REVIEW PROCESS</h3>

              <p>
                This journal uses double-blind external peer-review, which means
                that the reviewers of the paper won’t get to know the identity
                of the author(s), and the author(s) won’t get to know the
                identity of the reviewer. The idea is that everyone should get a
                similar and unbiased review.
              </p>

              <p className="font-bold">
                Reviewers’ Responsibilities <br />
              </p>
              <Link
                className="w-[60%] bg-green-100 wrap"
                to="http://publicationethics.org/files/u7140/Peer%20review%20guidelines.pdf"
              >
                {" "}
                (http://publicationethics.org/files/u7140/Peer%20review%20guidelines.pdf)
              </Link>

              <p>
                If BJMSR’s Editor has invited you to review a manuscript, please
                consider the following items:
              </p>
              <ol className="list-disc">
                <li>
                  Reviewing manuscript critically but constructively and
                  preparing detailed comments about the manuscript to help
                  authors improve their research;
                </li>

                <li>
                  Reviewing multiple versions of a manuscript as necessary;
                </li>

                <li>
                  Providing all required information within established
                  deadlines;
                </li>

                <li>
                  Making recommendations to the editor regarding the suitability
                  of the manuscript for publication in the journal;
                </li>

                <li>
                  Declaring to the editor any potential conflicts of interest
                  with respect to the authors or the content of a manuscript
                  they are asked to review;
                </li>

                <li>Reporting possible research misconducts;</li>

                <li>
                  Suggesting alternative reviewers in case they cannot review
                  the manuscript for any reasons;
                </li>

                <li>Treating the manuscript as a confidential document;</li>

                <li>
                  Not making any use of the work described in the manuscript;
                </li>

                <li>
                  Not communicating directly with authors, if somehow they
                  identify the authors; Not identifying themselves to authors;
                </li>

                <li>
                  Not passing on the assigned manuscript to another reviewer;
                </li>

                <li>
                  Ensuring that the manuscript is of high quality and original
                  research;
                </li>
              </ol>

              <p className="mt-20">
                What should be checked while reviewing a manuscript?
              </p>
              <ol className="list-disc">
                <li>Novelty;</li>

                <li>oroginality</li>

                <li>scientific reliabilty</li>

                <li>A valuable contribution to science;</li>

                <li>Adding new aspects to the existed field of study;</li>

                <li>Reporting possible research misconducts;</li>

                <li>Ethical aspects;</li>

                <li>
                  Structure of the article submitted and its relevance to
                  authors’ guidelines;
                </li>

                <li>References provided to substantiate the content;</li>

                <li>Grammar, punctuation, and spelling;</li>

                <li>Scientific misconduct.</li>
              </ol>

              {/* <img src="https://i.ibb.co/QH8LqRX/edprocesslarge.png" alt="" /> */}
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

export default Reviewprocess;
