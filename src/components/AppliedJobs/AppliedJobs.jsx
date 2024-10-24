import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { getFromLocalStorage } from "../../utility/LocalStorage";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AppliedJobs = () => {
  const [totalJobs, setTotalJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayFilter, setDisplayFilter] = useState("All");
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setTotalJobs(data));
  }, []);
  useEffect(() => {
    const storedAppliedJobs = getFromLocalStorage();
    if (totalJobs.length > 0) {
      const totalAppliedJobs = totalJobs.filter((job) =>
        storedAppliedJobs.includes(job.id)
      );
      setAppliedJobs(totalAppliedJobs);
    }
  }, [totalJobs]);

  const handleFilter = (e) => {
    setDisplayFilter(e.target.innerText.toLowerCase());
    setIsFiltered(true);
  };

  const filteredJobs = useMemo(() => {
    if (displayFilter === "all") {
      return appliedJobs;
    }
    return appliedJobs.filter(
      (job) => job.remote_or_onsite.toLowerCase() === displayFilter
    );
  }, [appliedJobs, displayFilter]);

  const jobsToDisplay = isFiltered ? filteredJobs : appliedJobs;

  return (
    <div className="space-y-8">
      <div className="bg-violet-50 p-10 rounded-lg space-y-3 text-center">
        <h2 className="text-3xl font-bold">Applied Jobs</h2>
      </div>
      <div className="container mx-auto space-y-5 pb-10 px-4 ">
        <div className="flex justify-end items-center gap-5">
          <div>
            <h2 className=" font-bold text-right">
              {appliedJobs.length} Jobs Applied
            </h2>
          </div>
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn border-2 border-violet-500 m-1 hover:border-violet-500 hover:bg-violet-200"
              >
                Filter By <MdOutlineKeyboardArrowDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a onClick={handleFilter}>All</a>
                </li>
                <li>
                  <a onClick={handleFilter}>Onsite</a>
                </li>
                <li>
                  <a onClick={handleFilter}>Remote</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {jobsToDisplay.length > 0 ? (
          jobsToDisplay.map((job) => (
            <div
              key={job.id}
              className="border border-violet-100 p-5 rounded-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="w-60 h-48 flex items-center justify-center bg-violet-50 p-5 rounded-lg">
                  <img
                    src={job.logo}
                    alt={job.company_name}
                    className="object-fit"
                  />
                </div>
                <div className="w-full self-start">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.job_title}</h3>
                      <h2 className="text-lg font-bold text-gray-500">
                        {job.company_name}
                      </h2>
                    </div>
                    <div className="flex gap-2">
                      <p className="px-2 py-1 rounded-md border-2 font-bold border-violet-500 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
                        {job.job_type}
                      </p>
                      <p className="px-2 py-1 rounded-md border-2 font-bold border-violet-500 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
                        {job.remote_or_onsite}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <p className="text-gray-500 flex items-center gap-1">
                        <CiLocationOn /> {job.location}
                      </p>
                      <p className="text-gray-500 flex items-center gap-1">
                        <CiDollar /> {job.salary}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/job/${job.id}`}
                  className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-2xl font-bold">No Jobs Found</div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
