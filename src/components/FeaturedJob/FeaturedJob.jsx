import PropTypes from "prop-types";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const FeaturedJob = ({ job }) => {
  const {
    logo,
    company_name,
    job_title,
    job_type,
    location,
    salary,
    remote_or_onsite,
    id,
  } = job;
  return (
    <div className="bg-violet-50 p-10 rounded-lg space-y-3">
      <img src={logo} alt={company_name} className="max-h-8 max-w-48" />
      <div>
        <h3 className="text-xl font-bold">{job_title}</h3>
        <h2 className="text-lg font-bold text-gray-500">{company_name}</h2>
      </div>
      <div className="flex gap-2">
        <p className="px-2 py-1 rounded-md border-2 font-bold border-violet-500 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
          {job_type}
        </p>
        <p className="px-2 py-1 rounded-md border-2 font-bold border-violet-500 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
          {remote_or_onsite}
        </p>
      </div>
      <div className="flex gap-4">
        <p className="text-gray-500 flex items-center gap-1">
          <CiLocationOn /> {location}
        </p>
        <p className="text-gray-500 flex items-center gap-1">
          <CiDollar /> {salary}
        </p>
      </div>
      <Link
        to={`/job/${id}`}
        className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
      >
        View Details
      </Link>
    </div>
  );
};

FeaturedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default FeaturedJob;
