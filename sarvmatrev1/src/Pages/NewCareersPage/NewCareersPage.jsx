import { Link } from "react-router-dom";
import "./NewCareers.css";
import arrow from "./images/rightup.png";
import time from "./images/clock.png";
import NoJobs from "./images/NoJobs.png";
import location from "./images/gps.png";

const Schema = {
  jobTitle: "Product Designer",
  jobDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi, cumque vero dignissimos corrupti voluptatum!",
  jobType: "100% remote",
  jobEnrollmentStatus: "Full-time",
  applyLink: "careers",
};

const NewCareersPage = () => {
  const careersData = [
    
  ];

  return (
    <>
      <p className="flex flex-col gap-6 text-center max-w-[650px] mx-auto mt-32">
        <span className="text-4xl font-bold flex flex-col">
          Join out world-class team of Creators <span>&</span> Dreamers
        </span>
        <p className="max-w-[85%] mx-auto">
          Our philosophy is simple -- hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work
        </p>
      </p>

      <ul className="grid gap-5 my-10">
        {careersData.length === 0 ? (
          <img src={NoJobs} className="mx-auto h-[300px]"/>
        ) : (
          careersData.map((data, index) => (
            <li
              className="flex flex-col gap-5 justify-between sm:flex-row w-[80%] mx-auto border-2 border-black p-5 sm:pr-10 hover:shadow-[4px_4px_rgba(0,0,0)] duration-[300ms] job-container cursor-pointer"
              key={index}
            >
              <div className="flex flex-col max-w-[450px]">
                <h3 className="font-bold text-xl">{data.jobTitle}</h3>
                <p>{data.jobDescription}</p>
                <div className="flex gap-2 mt-1">
                  <div className="flex items-center gap-2 job-perks">
                    <img src={location} alt="" className="max-w-[15px]" />
                    <h4 className="">{data.jobEnrollmentStatus}</h4>
                  </div>
                  <div className="flex gap-2 items-center job-perks">
                    <img src={time} alt="" className="max-w-[15px]" />
                    <h4 className="">{data.jobType}</h4>
                  </div>
                </div>
              </div>
              {/* Job Link */}
              <Link className="flex justify-between items-start  link-hover h-fit w-fit relative">
                <p className="font-bold">Apply</p>
                <img
                  src={arrow}
                  alt=""
                  className="max-w-[15px] absolute right-[-20px] top-[-5px]"
                />
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default NewCareersPage;
