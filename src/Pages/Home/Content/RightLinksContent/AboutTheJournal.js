import React from "react";
import RightLinks from "../RightLinks";
import { Link } from "react-router-dom";

const AboutTheJournal = () => {
  return (
    <div>
      <div>
        <div className="lg:flex justify-center max-w-[1500px] mx-auto  w-full md:text-left ">
          <div className="lg:w-[60%] border px-10 py-10">
            {/* routes */}
            <div className="flex">
              <Link className="btn-link" to="/">
                Home
              </Link>
              <p> / About the journal</p>
            </div>

            {/* content */}
            <div className="h-full mt-10">
              <p>Journal Name: A Journal of Literature Arts andCulture</p>
              <p>Volume 8</p>
              <p>ISSN: 2413-1814 </p>
              {/* section 1 */}
              <div>
                <p className="text-center">Correspondence</p>
                <p className="font-bold">
                  Editor <br /> Ideas <br /> Institute of Advanced Studies
                </p>
                <p>
                  264, Elephant Road, Dhaka-1205, <br />
                  Bangladesh <br /> Phone: +880 2 9664070, +880 2 9613916
                  <br /> Cell: +880 1878677729
                </p>

                <p>
                  Email :
                  <div className="ms-12">
                    <Link to="">ideas.bangladesh@gmail.com</Link> <br />
                    <Link to="">rahmanmmahbub27@gmail.com</Link>
                  </div>
                </p>
                <p>
                  Fb Group :{" "}
                  <Link to="https://www.facebook.com/groups/848765159615218">
                    {" "}
                    https://www.facebook.com/groups/848765159615218
                  </Link>
                </p>
                <p>
                  Fb Page :{" "}
                  <Link to="https://www.facebook.com/ideas.researchjournal">
                    https://www.facebook.com/ideas.researchjournal
                  </Link>
                </p>
                <p>
                  web :{" "}
                  <Link to="https://deparment-of-english-city-university-bd.vercel.app/ideas">
                    https://deparment-of-english-city-university-bd.vercel.app/ideas
                  </Link>
                </p>

                <p>
                  Frequency: Annually Current <br /> Volume: 8/2022-2023
                </p>

                <p>
                  Printed by: <br />
                  SLM Printing KY Plaza (1 st Floor), 191, Fakirapool, <br />
                  Motijheel, Dhaka-1000
                </p>
                <p>
                  Published by : <br /> Editor-in-Chief
                </p>
                <p>
                  ©: Ideas - Institute of Advanced Studies, Dhaka, Bangladesh
                </p>

                <p>Price: BDT 500, Rs. 500, US$ 10 & CAD 8</p>
              </div>
              {/* section 2 */}
              <div>
                <h3 className="text-3xl mt-20 text-center">Editor-in-Chief</h3>
                <p>
                  Professor Mustafizur Rahman <br /> Professor of English, and{" "}
                  <br /> Former Pro-Vice-Chancellor
                  <br /> City University, Bangladesh
                </p>

                <h3 className="text-3xl mt-20 text-center">Associate Editor</h3>
                <p>
                  Rahman M. Mahbub, PhD <br /> Associate Professor & Head <br />{" "}
                  Department of English <br /> City University, Bangladesh
                </p>
              </div>
              {/* section 3 */}
              <div>
                <h3 className="text-3xl mt-20 text-center">Advisory Board</h3>
                <p className="mb-6">
                  Mr. Hasnat Abdul Hye
                  <br /> Scholar and Fiction Writer
                </p>
                <p className="mb-6">
                  Professor Dr. Asok Kumar Hui
                  <br /> Department of English <br /> Burdwan University, W.B.,
                  India
                </p>
                <p className="mb-6">
                  Professor Ahmed Reza <br /> Department of English <br />{" "}
                  Jahangirnagar University, Bangladesh
                </p>
                <p className="mb-6">
                  Professor Dr. Mamunur Rahman <br /> Department of English{" "}
                  <br /> Islamic University, Bangladesh
                </p>
                <p className="mb-6">
                  Dr. Baisali Hui Professor <br /> Head Department of English{" "}
                  <br />
                  University of Kalyni, India
                </p>
                <p className="mb-6">
                  Dr. J. Karthikeyan <br /> Associate Professor, <br />{" "}
                  Department of English <br />
                  School of Social Sciences and Languages Vellore Institute of
                  Technology(VIT), India
                </p>
                <p className="mb-6">
                  Professor Dr. Aniruddha Kahali <br />
                  Jahangirnagar University, Bangladesh
                </p>
              </div>
              {/* section 4 */}
              <div>
                <h3 className="text-3xl mt-20 text-center">Board of Editors</h3>
                <p className="mb-6">
                  Professor Mizanur Rahman PhD Department of Law, University of
                  Dhaka & Ex-Chairman, National Human Rights Commission of
                </p>
                <p className="mb-6">
                  Professor Mohit Ul Alam PhD Former Vice-Chancellor Jatiya Kabi
                  Kazi Nazrul Islam University Mymensing, Bangladesh
                </p>
                <p className="mb-6">
                  Professor M. Maniruzzaman PhD Jahangirnagar University
                </p>
                <p className="mb-6">Nancy Bjorndalen Ph.D Edmonton, Canada</p>
                <p className="mb-6">
                  Professor Karpaga Kumaravel PhD Fulbright& Commonwealth
                  Scholar, Former Vice-Chancellor, Madurai Kamraj, University,
                  India
                </p>
                <p className="mb-6">
                  S. Subbiah PhD Former Vice-Chancellor, Alagappa University,
                  India
                </p>
                <p className="mb-6">
                  Solayan Manickam PhD Former Professor Alagappa University,
                  India
                </p>
                <p className="mb-6">
                  S. M. Sabbih Hossain Assistant Professor, Department of
                  English City University, Dhaka, Bangladesh & Executive Editor
                  Ideas
                </p>
              </div>
              {/* section 5 */}
              <div>
                <h3 className="text-3xl mt-20 text-center">
                  Note from the Editor-in-Chief
                </h3>
                <p className="m-5 mx-auto">
                  It is with great pride, enthusiasm, and anticipation that we
                  invite youto read the eighth issue of Ideas. We are very happy
                  to see thejournal’s gradual recognition in the national as
                  well as intheinternational realm. The 8th Volume (2022-2023)
                  of Ideas containsarticles by a wide range of scholars from
                  different corners of theworld writing on topics related to
                  language, literature and cultural studies highlighting the
                  inter- and cross-disciplinary nature of thejournal.
                </p>
                <p className="m-5 mx-auto">
                  Ideas strives to attract and engage an international
                  readership that isprimarily academic. University libraries and
                  individual academics arethe primary target group for the
                  journal. However, the journal seeksto attract professional
                  audiences as well. The journal includes up-todate,
                  high-quality, and original contributions - research papers,
                  reviews, and syntheses as well as book and conference reviews
                  -for disseminating new knowledge. Ideas remains dedicated to
                  providingspace for fresh researchers and
                </p>
                <p className="m-5 mx-auto">
                  With Institute of Advanced Studies’ continued support
                  inimproving its editorial platforms we aim for even higher
                  standards inall aspects of the journal’s management and
                  operations. Any papersthat you wish to submit, either
                  individually or jointly, are muchappreciated and will make a
                  substantial contribution tothedevelopment and success of
                  Ideas. If you are uncertain about thesuitability of your work
                  for Ideas or have any other questionsconcerning the journal,
                  please do not hesitate to make contact (usingthe email address
                  below).
                </p>
                <p className="m-5 mx-auto">
                  We look forward to working with all of you as we continue to
                  makethis Journal of Literature, Arts and Culture a success
                  andwewelcome your submissions, as well as feedback as authors,
                  readers, and reviewers of the journal.
                </p>
              </div>
            </div>
          </div>
          {/* links */}

        </div>
      </div>
    </div>
  );
};

export default AboutTheJournal;
